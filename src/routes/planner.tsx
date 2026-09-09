import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/AppLayout";
import { ToolWorkspace } from "@/components/ToolWorkspace";

export const Route = createFileRoute("/planner")({
  head: () => ({
    meta: [
      { title: "AI Task Planner — Hale Work OS" },
      {
        name: "description",
        content: "Turn a messy list of work into a prioritized, time-boxed plan for your day.",
      },
      { property: "og:title", content: "AI Task Planner — Hale Work OS" },
      {
        property: "og:description",
        content: "Prioritized, time-boxed planning for busy professionals.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PlannerPage,
});

function PlannerPage() {
  return (
    <AppLayout breadcrumb="Task Planner" context="Today">
      <ToolWorkspace
        tool="planner"
        title="AI Task Planner"
        blurb="Drop in everything on your plate; get it sequenced and time-boxed."
        submitLabel="Build my plan"
        fields={[
          {
            name: "Tasks",
            label: "Tasks and commitments",
            type: "textarea",
            rows: 7,
            placeholder: "Finalize SOW clauses, review dashboard mock, weekly digest…",
          },
          { name: "Deadlines", label: "Deadlines", type: "text", placeholder: "SOW due Thursday" },
          { name: "Time available", label: "Time available", type: "text", placeholder: "5 hours today" },
          {
            name: "Planning style",
            label: "Planning style",
            type: "select",
            options: ["Impact first", "Quick wins first", "Deadline driven"],
          },
        ]}
      />
    </AppLayout>
  );
}
