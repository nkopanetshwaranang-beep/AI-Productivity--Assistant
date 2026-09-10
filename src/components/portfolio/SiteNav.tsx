import { useEffect, useState } from "react";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Me" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education & Training" },
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "border-sand bg-cream/90 backdrop-blur-md" : "border-transparent bg-cream/60"
      }`}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 lg:px-8">
        <a href="#home" className="flex min-w-0 items-center gap-2.5">
          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-forest font-display text-sm font-semibold text-cream">
            T
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-[15px] font-semibold text-bark">
              Tshwaranang
            </span>
            <span className="block truncate text-[11px] text-stone">ECD · AI & Digital Skills</span>
          </span>
        </a>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-1 xl:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3 py-2 text-[13px] text-stone transition-colors hover:bg-sand/70 hover:text-bark"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="/tshwaranang-cv.txt"
            download
            className="hidden rounded-full bg-bark px-4 py-2.5 text-[13px] font-medium text-cream transition-transform hover:-translate-y-0.5 sm:inline-block"
          >
            Download CV
          </a>
          <button
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-xl border border-sand bg-shell text-bark xl:hidden"
          >
            <span className="text-lg leading-none">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-sand bg-cream px-5 pb-5 pt-2 xl:hidden">
          <div className="grid gap-1">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm text-bark/80 hover:bg-sand/60"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/tshwaranang-cv.txt"
              download
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-bark px-3 py-2.5 text-center text-sm font-medium text-cream"
            >
              Download CV
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
