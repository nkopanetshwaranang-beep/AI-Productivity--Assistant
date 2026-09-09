import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { generateContent } from "@/lib/ai.functions";

export type Field = {
  name: string;
  label: string;
  type: "text" | "textarea" | "select";
  placeholder?: string;
  options?: string[];
  rows?: number;
  initial?: string;
};

type Tool = "email" | "notes" | "planner" | "research";

const DOT: Record<Tool, string> = {
  email: "bg-gold shadow-[0_0_10px_2px_rgba(255,191,92,0.5)]",
  notes: "bg-mint shadow-[0_0_10px_2px_rgba(87,226,198,0.5)]",
  planner: "bg-lilac shadow-[0_0_10px_2px_rgba(183,156,255,0.5)]",
  research: "bg-azure shadow-[0_0_10px_2px_rgba(110,168,255,0.5)]",
};

export function ToolWorkspace({
  tool,
  title,
  blurb,
  fields,
  submitLabel,
}: {
  tool: Tool;
  title: string;
  blurb: string;
  fields: Field[];
  submitLabel: string;
}) {
  const run = useServerFn(generateContent);
  const [values, setValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(fields.map((f) => [f.name, f.initial ?? (f.options?.[0] ?? "")])),
  );
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const set = (name: string, v: string) => setValues((s) => ({ ...s, [name]: v }));

  const generate = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await run({ data: { tool, fields: values } });
      setOutput(res.text);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const copy = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const input =
    "w-full rounded-xl border border-line bg-ink/50 px-3 py-2.5 text-sm text-white/85 placeholder:text-white/25 focus:border-white/25 focus:outline-none";

  return (
    <div className="grid gap-5 md:grid-cols-12">
      <article className="rounded-3xl border border-line bg-panel p-5 md:col-span-5">
        <div className="flex items-center gap-2">
          <span className={`size-2 rounded-full ${DOT[tool]}`} />
          <h1 className="font-display text-base font-medium">{title}</h1>
        </div>
        <p className="mt-2 text-sm text-white/45">{blurb}</p>

        <div className="mt-5 space-y-4">
          {fields.map((f) => (
            <div key={f.name}>
              <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
                {f.label}
              </label>
              {f.type === "textarea" ? (
                <textarea
                  rows={f.rows ?? 4}
                  className={`${input} resize-none`}
                  placeholder={f.placeholder}
                  value={values[f.name] ?? ""}
                  onChange={(e) => set(f.name, e.target.value)}
                />
              ) : f.type === "select" ? (
                <select
                  className={input}
                  value={values[f.name] ?? ""}
                  onChange={(e) => set(f.name, e.target.value)}
                >
                  {f.options?.map((o) => (
                    <option key={o} value={o} className="bg-panel">
                      {o}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  className={input}
                  placeholder={f.placeholder}
                  value={values[f.name] ?? ""}
                  onChange={(e) => set(f.name, e.target.value)}
                />
              )}
            </div>
          ))}
        </div>

        <button
          onClick={generate}
          disabled={loading}
          className="mt-5 w-full rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-ink shadow-[0_0_24px_-6px_rgba(255,255,255,0.5)] disabled:opacity-50"
        >
          {loading ? "Working…" : submitLabel}
        </button>
        {error && <p className="mt-3 text-xs leading-relaxed text-gold">{error}</p>}
      </article>

      <article className="flex flex-col rounded-3xl border border-line bg-panel p-5 md:col-span-7">
        <div className="flex items-center justify-between">
          <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">
            Editable output
          </p>
          <span className="font-mono text-[10px] text-white/30">{output.length} chars</span>
        </div>

        <div className="mt-3 flex-1 rounded-xl border border-line bg-white/[0.03] p-4">
          <textarea
            rows={16}
            value={output}
            onChange={(e) => setOutput(e.target.value)}
            placeholder={
              loading ? "Generating…" : "Your draft will appear here — edit it freely before use."
            }
            className="h-full min-h-[320px] w-full resize-none bg-transparent text-sm leading-relaxed text-white/85 placeholder:text-white/25 focus:outline-none"
          />
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <button
            onClick={copy}
            disabled={!output}
            className="rounded-lg border border-line px-3 py-2 text-xs text-white/70 hover:bg-white/[0.05] disabled:opacity-40"
          >
            {copied ? "Copied" : "Copy"}
          </button>
          <button
            onClick={generate}
            disabled={loading}
            className="rounded-lg border border-line px-3 py-2 text-xs text-white/70 hover:bg-white/[0.05] disabled:opacity-40"
          >
            Regenerate
          </button>
          <button
            onClick={() => setOutput("")}
            disabled={!output}
            className="rounded-lg border border-line px-3 py-2 text-xs text-white/70 hover:bg-white/[0.05] disabled:opacity-40"
          >
            Clear
          </button>
        </div>
      </article>
    </div>
  );
}
