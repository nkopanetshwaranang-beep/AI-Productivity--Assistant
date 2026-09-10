import { useEffect, useState } from "react";

type Certificate = {
  title: string;
  issuer: string;
  year: string;
  note: string;
  tone: string;
};

const CERTIFICATES: Certificate[] = [
  {
    title: "First Aid Level 1",
    issuer: "Accredited training provider (add provider name)",
    year: "Add year",
    note: "Certificate image placeholder — upload the scanned certificate to replace this preview.",
    tone: "from-clay/25 to-sand",
  },
  {
    title: "Job Journey — Work Readiness",
    issuer: "Job Journey programme",
    year: "Add year",
    note: "Certificate image placeholder — upload the scanned certificate to replace this preview.",
    tone: "from-forest/25 to-sand",
  },
  {
    title: "AI & Digital Skills (Coursera)",
    issuer: "Coursera · multiple modules",
    year: "Add year",
    note: "Placeholder for the Coursera certificates and module completion records.",
    tone: "from-forest/20 to-clay/15",
  },
  {
    title: "Future qualification",
    issuer: "Reserved space",
    year: "Coming soon",
    note: "Space kept for the next certificate Tshwaranang earns.",
    tone: "from-sand to-cream",
  },
];

export function Certificates() {
  const [active, setActive] = useState<Certificate | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {CERTIFICATES.map((c) => (
          <button
            key={c.title}
            onClick={() => setActive(c)}
            className="group overflow-hidden rounded-3xl border border-sand bg-shell text-left transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_-30px_rgba(35,32,29,0.5)]"
          >
            <div
              className={`grid aspect-[4/3] place-items-center bg-gradient-to-br ${c.tone} transition-transform duration-500 group-hover:scale-[1.03]`}
            >
              <span className="rounded-full bg-shell/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-stone">
                Preview
              </span>
            </div>
            <div className="p-4">
              <p className="font-display text-sm font-semibold text-bark">{c.title}</p>
              <p className="mt-1 text-xs text-stone">{c.issuer}</p>
              <p className="mt-3 text-[11px] font-medium text-clay">Click to enlarge</p>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          className="fixed inset-0 z-[60] grid place-items-center bg-bark/60 p-5 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <div
            className="w-full max-w-2xl overflow-hidden rounded-3xl border border-sand bg-shell"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`grid aspect-[16/10] place-items-center bg-gradient-to-br ${active.tone}`}>
              <span className="rounded-full bg-shell/85 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-stone">
                Certificate placeholder
              </span>
            </div>
            <div className="flex flex-wrap items-start gap-4 p-6">
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-lg font-semibold text-bark">{active.title}</h3>
                <p className="mt-1 text-sm text-stone">
                  {active.issuer} · {active.year}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-stone">{active.note}</p>
              </div>
              <button
                onClick={() => setActive(null)}
                className="rounded-full bg-bark px-4 py-2 text-sm font-medium text-cream"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
