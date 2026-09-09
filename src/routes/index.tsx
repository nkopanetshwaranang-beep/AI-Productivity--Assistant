import { createFileRoute, Link } from "@tanstack/react-router";
import { AppLayout } from "@/components/AppLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hale Work OS — AI Workplace Productivity Assistant" },
      {
        name: "description",
        content:
          "Draft emails, summarize meetings, plan tasks and research topics with AI — every output stays editable and under your control.",
      },
      { property: "og:title", content: "Hale Work OS — AI Workplace Productivity Assistant" },
      {
        property: "og:description",
        content: "Four AI tools for professionals: email drafting, meeting notes, planning, research.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <AppLayout breadcrumb="Overview" context="This week">
      <section className="gloss relative rounded-3xl border border-line bg-panel p-6 md:p-8">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-azure/80">
            Good afternoon, Rosa
          </p>
          <h1 className="mt-2 font-display text-3xl leading-[1.05] md:text-[2.6rem]">
            Your week, drafted in minutes.
          </h1>
          <p className="mt-3 max-w-lg text-sm text-white/50">
            Hale turns raw context into send-ready emails, crisp notes and a prioritized plan — you
            keep final edit on everything.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              to="/email"
              className="rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-ink shadow-[0_0_24px_-6px_rgba(255,255,255,0.5)]"
            >
              New smart email
            </Link>
            <Link
              to="/planner"
              className="rounded-xl border border-line bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-white/80 hover:bg-white/[0.06]"
            >
              Open task planner
            </Link>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-3">
          <div className="rounded-2xl border border-line bg-white/[0.02] p-4">
            <p className="font-display text-2xl text-mint">24</p>
            <p className="mt-1 text-xs text-white/45">Emails drafted</p>
          </div>
          <div className="rounded-2xl border border-line bg-white/[0.02] p-4">
            <p className="font-display text-2xl text-gold">11</p>
            <p className="mt-1 text-xs text-white/45">Meetings summarized</p>
          </div>
          <div className="rounded-2xl border border-line bg-white/[0.02] p-4">
            <p className="font-display text-2xl text-azure">8h 40m</p>
            <p className="mt-1 text-xs text-white/45">Time reclaimed</p>
          </div>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-12">
        <article className="rounded-3xl border border-line bg-panel p-5 md:col-span-7">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-gold shadow-[0_0_10px_2px_rgba(255,191,92,0.5)]" />
              <h2 className="font-display text-base font-medium">Smart Email Generator</h2>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">
              Live AI
            </span>
          </div>
          <div className="mt-4 rounded-xl border border-line bg-ink/50 p-3 font-mono text-[11px] leading-relaxed text-white/45">
            <span className="text-gold">prompt</span> · Recipient, purpose, key points, tone and
            length — structured, not guesswork.
          </div>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Describe the situation and get a send-ready draft you can edit, copy or regenerate in
            place.
          </p>
          <Link
            to="/email"
            className="mt-4 inline-block rounded-lg bg-white px-3 py-2 text-xs font-semibold text-ink"
          >
            Open generator
          </Link>
        </article>

        <article className="rounded-3xl border border-line bg-panel p-5 md:col-span-5">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-mint shadow-[0_0_10px_2px_rgba(87,226,198,0.5)]" />
            <h2 className="font-display text-base font-medium">Meeting Notes</h2>
          </div>
          <div className="mt-4 rounded-xl border border-line bg-ink/50 p-3">
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/35">
              Paste notes · get decisions
            </p>
          </div>
          <ul className="mt-3 space-y-2.5 text-sm text-white/75">
            <li className="flex gap-2">
              <span className="mt-0.5 text-mint">•</span> A short summary anyone can skim.
            </li>
            <li className="flex gap-2">
              <span className="mt-0.5 text-mint">•</span> Decisions separated from discussion.
            </li>
            <li className="flex gap-2">
              <span className="mt-0.5 text-mint">•</span> Action items with owners and dates.
            </li>
          </ul>
          <Link
            to="/notes"
            className="mt-4 block w-full rounded-lg border border-line px-3 py-2 text-center text-xs text-white/70 hover:bg-white/[0.05]"
          >
            Summarize a meeting
          </Link>
        </article>

        <article className="rounded-3xl border border-line bg-panel p-5 md:col-span-7">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-lilac shadow-[0_0_10px_2px_rgba(183,156,255,0.5)]" />
              <h2 className="font-display text-base font-medium">AI Task Planner</h2>
            </div>
            <span className="font-mono text-[10px] text-white/40">Prioritized · today</span>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-3 rounded-xl border border-line bg-white/[0.02] px-3 py-2.5">
              <span className="w-6 font-mono text-[10px] text-lilac">P1</span>
              <span className="text-sm text-white/85">Finalize client SOW clauses</span>
              <span className="ml-auto font-mono text-[10px] text-white/35">45m</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-line bg-white/[0.02] px-3 py-2.5">
              <span className="w-6 font-mono text-[10px] text-lilac">P2</span>
              <span className="text-sm text-white/85">Review analytics dashboard mock</span>
              <span className="ml-auto font-mono text-[10px] text-white/35">30m</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-line bg-white/[0.02] px-3 py-2.5 opacity-60">
              <span className="w-6 font-mono text-[10px] text-lilac">P3</span>
              <span className="text-sm text-white/85">Draft weekly team digest</span>
              <span className="ml-auto font-mono text-[10px] text-white/35">20m</span>
            </div>
          </div>
          <Link
            to="/planner"
            className="mt-4 inline-block rounded-lg border border-line px-3 py-2 text-xs text-white/70 hover:bg-white/[0.05]"
          >
            Plan my day
          </Link>
        </article>

        <article className="flex flex-col rounded-3xl border border-line bg-panel p-5 md:col-span-5">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-azure shadow-[0_0_10px_2px_rgba(110,168,255,0.5)]" />
            <h2 className="font-display text-base font-medium">AI Researcher</h2>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Ask a work question and get a structured briefing: key findings first, open questions
            stated plainly instead of guessed at.
          </p>
          <Link
            to="/research"
            className="mt-auto pt-4 text-left font-mono text-xs text-azure/80 hover:text-azure"
          >
            Start a briefing →
          </Link>
        </article>
      </section>
    </AppLayout>
  );
}
