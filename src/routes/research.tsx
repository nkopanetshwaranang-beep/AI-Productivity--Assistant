import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/AppLayout";
import { ToolWorkspace } from "@/components/ToolWorkspace";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "AI Researcher Assistant — Hale Work OS" },
      {
        name: "description",
        content: "Get a structured briefing on any work topic, with open questions flagged.",
      },
      { property: "og:title", content: "AI Researcher Assistant — Hale Work OS" },
      {
        property: "og:description",
        content: "Structured research briefings for professionals, with uncertainty made explicit.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ResearchPage,
});

function ResearchPage() {
  return (
    <AppLayout breadcrumb="Researcher" context="New briefing">
      <ToolWorkspace
        tool="research"
        title="AI Researcher Assistant"
        blurb="A structured briefing on any work topic — with what's uncertain stated plainly."
        submitLabel="Research topic"
        fields={[
          { name: "Topic", label: "Topic", type: "text", placeholder: "Enterprise adoption of AI copilots" },
          {
            name: "Questions to answer",
            label: "Questions to answer",
            type: "textarea",
            rows: 4,
            placeholder: "Who are the main vendors? What drives adoption?",
          },
          { name: "Audience", label: "Audience", type: "text", placeholder: "Exec leadership team" },
          {
            name: "Depth",
            label: "Depth",
            type: "select",
            options: ["Quick briefing", "Standard", "Deep dive"],
          },
        ]}
      />
    </AppLayout>
  );
}
