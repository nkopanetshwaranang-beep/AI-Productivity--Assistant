import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const InputSchema = z.object({
  tool: z.enum(["email", "notes", "planner", "research"]),
  fields: z.record(z.string()),
});

const SYSTEM: Record<string, string> = {
  email:
    "You are a professional workplace email writer. Produce a ready-to-send email in plain text: a Subject line, then the body. No commentary, no markdown fences.",
  notes:
    "You are a meeting notes summarizer. Return plain text with three labelled sections: SUMMARY (2-3 sentences), DECISIONS (bullets with '- '), ACTION ITEMS (bullets with '- ', each with an owner and due date if stated). No markdown fences.",
  planner:
    "You are a pragmatic task planner. Return a prioritized plan in plain text. One task per line in the form 'P1 | Task name | 45m | why it matters'. Order by priority. No markdown fences.",
  research:
    "You are a research assistant for professionals. Return plain text: a KEY FINDINGS section with 4-6 bullets ('- '), then an OPEN QUESTIONS section. State clearly when something is uncertain and never invent citations, statistics, or sources.",
};

function buildPrompt(tool: string, fields: Record<string, string>) {
  const lines = Object.entries(fields)
    .filter(([, v]) => v && v.trim().length > 0)
    .map(([k, v]) => `${k}: ${v}`);
  return `Task: ${tool}\n\n${lines.join("\n")}`;
}

export const generateContent = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => InputSchema.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env["LOVABLE_API_KEY"];
    if (!apiKey) throw new Error("AI is not configured yet.");

    const res = await fetch("https://ai.gateway.lovable.dev/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Lovable-API-Key": apiKey,
        "X-Lovable-AIG-SDK": "fetch",
      },
      body: JSON.stringify({
        model: "openai/gpt-6-astra",
        instructions: SYSTEM[data.tool],
        input: buildPrompt(data.tool, data.fields),
        stream: true,
        reasoning: { effort: "low", summary: "auto" },
      }),
    });

    if (!res.ok || !res.body) {
      const detail = await res.text().catch(() => "");
      if (res.status === 429)
        throw new Error("Too many requests right now — please try again in a moment.");
      if (res.status === 402)
        throw new Error("AI credits are exhausted. Add credits to keep generating.");
      throw new Error(detail?.slice(0, 300) || `AI request failed (${res.status})`);
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    let text = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const parts = buffer.split("\n\n");
      buffer = parts.pop() ?? "";
      for (const part of parts) {
        for (const line of part.split("\n")) {
          if (!line.startsWith("data:")) continue;
          const payload = line.slice(5).trim();
          if (!payload || payload === "[DONE]") continue;
          try {
            const evt = JSON.parse(payload);
            if (evt.type === "response.output_text.delta" && typeof evt.delta === "string") {
              text += evt.delta;
            } else if (evt.type === "response.completed" && !text) {
              text = evt.response?.output_text ?? "";
            }
          } catch {
            /* ignore keep-alive fragments */
          }
        }
      }
    }

    return { text: text.trim() };
  });
