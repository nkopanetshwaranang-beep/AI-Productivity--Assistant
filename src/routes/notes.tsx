import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/AppLayout";
import { ToolWorkspace } from "@/components/ToolWorkspace";

export const Route = createFileRoute("/notes")({
  head: () => ({
    meta: [
      { title: "Meeting Notes Summaries — Hale Work OS" },
      {
        name: "description",
        content: "Turn raw meeting notes or a transcript into decisions, owners and action items.",
      },
      { property: "og:title", content: "Meeting Notes Summaries — Hale Work OS" },
      {
        property: "og:description",
        content: "Condense any meeting into a crisp summary with decisions and next steps.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NotesPage,
});

function NotesPage() {
  return (
    <AppLayout breadcrumb="Meeting Notes" context="New summary">
      <ToolWorkspace
        tool="notes"
        title="Meeting Notes Summaries"
        blurb="Paste raw notes or a transcript; get decisions, owners and action items."
        submitLabel="Summarize meeting"
        fields={[
          { name: "Meeting", label: "Meeting", type: "text", placeholder: "Design sync" },
          { name: "Attendees", label: "Attendees", type: "text", placeholder: "Rosa, Priya, Daniel" },
          {
            name: "Raw notes or transcript",
            label: "Raw notes or transcript",
            type: "textarea",
            rows: 8,
            placeholder: "Paste everything that was said or jotted down…",
          },
          {
            name: "Focus",
            label: "Focus",
            type: "select",
            options: ["Decisions and actions", "Executive summary", "Detailed minutes"],
          },
        ]}
      />
    </AppLayout>
  );
}
