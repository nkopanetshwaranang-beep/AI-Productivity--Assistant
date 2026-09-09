import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/AppLayout";
import { ToolWorkspace } from "@/components/ToolWorkspace";

export const Route = createFileRoute("/email")({
  head: () => ({
    meta: [
      { title: "Smart Email Generator — Hale Work OS" },
      {
        name: "description",
        content:
          "Turn a short brief into a send-ready professional email you can edit before sending.",
      },
      { property: "og:title", content: "Smart Email Generator — Hale Work OS" },
      {
        property: "og:description",
        content: "Draft clear, professional workplace emails from a few structured inputs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EmailPage,
});

function EmailPage() {
  return (
    <AppLayout breadcrumb="Smart Email" context="New draft">
      <ToolWorkspace
        tool="email"
        title="Smart Email Generator"
        blurb="Give the context; get a send-ready draft you stay in control of."
        submitLabel="Generate draft"
        fields={[
          { name: "Recipient", label: "Recipient", type: "text", placeholder: "Dana, procurement lead" },
          { name: "Purpose", label: "Purpose", type: "text", placeholder: "Follow up on the Q3 pricing call" },
          {
            name: "Key points",
            label: "Key points",
            type: "textarea",
            rows: 4,
            placeholder: "Confirm pilot scope by Friday. Rate card attached.",
          },
          {
            name: "Tone",
            label: "Tone",
            type: "select",
            options: ["Confident and warm", "Formal", "Friendly", "Direct"],
          },
          { name: "Length", label: "Length", type: "select", options: ["Short", "Medium", "Detailed"] },
        ]}
      />
    </AppLayout>
  );
}
