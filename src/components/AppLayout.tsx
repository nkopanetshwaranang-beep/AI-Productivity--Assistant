import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";

const NAV = [
  { to: "/assistant", label: "Overview", dot: "bg-azure" },
  { to: "/email", label: "Smart Email", dot: "bg-gold/70" },
  { to: "/notes", label: "Meeting Notes", dot: "bg-mint/70" },
  { to: "/planner", label: "Task Planner", dot: "bg-lilac/70" },
  { to: "/research", label: "Researcher", dot: "bg-white/30" },
] as const;

function SidebarBody({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <>
      <div className="flex h-16 items-center gap-3 border-b border-line/70 px-5">
        <div className="grid size-8 place-items-center rounded-lg border border-white/10 bg-gradient-to-br from-azure/80 via-mint/40 to-transparent">
          <span className="font-mono text-[11px] font-semibold text-ink">H</span>
        </div>
        <div>
          <p className="font-display text-sm font-semibold leading-none">Hale</p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/40">Work OS</p>
        </div>
      </div>
      <nav className="space-y-1 p-3">
        <p className="px-3 pb-1 pt-2 text-[10px] uppercase tracking-[0.2em] text-white/30">
          Workspace
        </p>
        {NAV.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            onClick={onNavigate}
            activeOptions={{ exact: item.to === "/assistant" }}
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-white/55 transition-colors hover:bg-white/[0.03] hover:text-white/80"
            activeProps={{
              className: "border border-line bg-white/[0.04] text-white font-medium",
            }}
          >
            <span className={`size-1.5 rounded-full ${item.dot}`} />
            <span className="text-sm">{item.label}</span>
          </Link>
        ))}
      </nav>
      <div className="px-3 pt-2">
        <Link
          to="/"
          onClick={onNavigate}
          className="block rounded-xl border border-line px-3 py-2 text-xs text-white/50 hover:bg-white/[0.04] hover:text-white/80"
        >
          ← Back to portfolio
        </Link>
      </div>
      <div className="m-3 mt-auto rounded-xl border border-line bg-panel2 p-3">
        <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-white/35">Responsible AI</p>
        <p className="text-[11px] leading-relaxed text-white/45">
          AI output is a draft. Verify facts and figures before you send or act on it.
        </p>
      </div>
    </>
  );
}

export function AppLayout({
  breadcrumb,
  context,
  children,
}: {
  breadcrumb: string;
  context: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-ink font-sans text-white antialiased selection:bg-azure/30">
      <aside className="hidden min-h-screen w-64 shrink-0 flex-col border-r border-line/70 bg-panel/60 md:flex">
        <SidebarBody />
      </aside>

      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            aria-label="Close navigation"
            className="absolute inset-0 bg-black/70"
            onClick={() => setOpen(false)}
          />
          <aside className="relative flex h-full w-64 flex-col border-r border-line/70 bg-panel">
            <SidebarBody onNavigate={() => setOpen(false)} />
          </aside>
        </div>
      )}

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-16 items-center gap-4 border-b border-line/70 bg-panel/40 px-5 md:px-7">
          <button
            aria-label="Open navigation"
            onClick={() => setOpen(true)}
            className="grid size-8 place-items-center rounded-lg bg-white/[0.06] text-white/60 md:hidden"
          >
            ☰
          </button>
          <div className="flex items-center gap-2 font-mono text-xs text-white/50">
            <span>{breadcrumb}</span>
            <span className="text-white/25">/</span>
            <span className="text-white/80">{context}</span>
          </div>
          <div className="ml-auto hidden h-9 items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3 text-xs text-white/40 sm:flex">
            <span>Search tools, drafts, notes…</span>
            <span className="rounded bg-white/[0.06] px-1.5 font-mono text-[10px] text-white/50">
              ⌘K
            </span>
          </div>
          <div className="grid size-9 place-items-center rounded-full border border-white/15 bg-gradient-to-br from-lilac/60 to-azure/40 text-xs font-semibold">
            RM
          </div>
        </header>

        <main className="space-y-5 p-5 md:p-7">
          {children}
          <p className="border-t border-line/60 pt-4 text-[11px] leading-relaxed text-white/35">
            Hale is a drafting assistant, not a source of truth. AI-generated content may contain
            errors or outdated information. Always review, verify, and take responsibility for what
            you send or decide.
          </p>
        </main>
      </div>
    </div>
  );
}
