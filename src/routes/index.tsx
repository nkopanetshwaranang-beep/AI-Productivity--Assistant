import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { Certificates } from "@/components/portfolio/Certificates";
import { ContactForm } from "@/components/portfolio/ContactForm";
import profileAsset from "@/assets/tshwaranang-profile.jpg.asset.json";
import projectAi from "@/assets/project-ai.jpg";
import projectChildcare from "@/assets/project-childcare.jpg";
import projectGrowth from "@/assets/project-growth.jpg";

const TITLE = "Tshwaranang (Tee) — ECD Professional & AI Skills Portfolio";
const DESCRIPTION =
  "Portfolio of Tshwaranang, a Cape Town based early childhood development professional with childcare, classroom support, administration and AI digital skills experience.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://tshwaranang-nkopane-ai-assistant.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://tshwaranang-nkopane-ai-assistant.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Tshwaranang",
          alternateName: "Tee",
          jobTitle: "Early Childhood Development Professional",
          address: { "@type": "PostalAddress", addressLocality: "Cape Town", addressCountry: "ZA" },
        }),
      },
    ],
  }),
  component: Portfolio,
});

const QUALITIES = [
  "Compassionate",
  "Reliable",
  "Patient",
  "Adaptable",
  "Hardworking",
  "Willing to learn",
  "Team-oriented",
  "Responsible",
];

const STATS = [
  { value: "6+", label: "AI / Coursera modules completed" },
  { value: "ECD", label: "Early childhood development experience" },
  { value: "Level 1", label: "First Aid certified" },
  { value: "Ready", label: "Work readiness training completed" },
];

const EXPERIENCE = [
  {
    role: "Care Worker & Teacher",
    org: "Masigcine Children's Home",
    period: "Add dates",
    points: [
      "Worked with children from approximately 2 months to 6 years old.",
      "Supported daily childcare routines including meals, snacks, diaper changes, naps, hygiene and general care.",
      "Assisted with educational activities for children aged 4–6.",
      "Participated in themed learning activities.",
      "Worked collaboratively with other teachers and caregivers.",
      "Created a safe, supportive and engaging environment for children.",
    ],
  },
  {
    role: "EIK / Workplace Internship",
    org: "Workplace & professional development programme",
    period: "Add dates",
    points: [
      "Participated in workplace and professional development activities.",
      "Assisted with administrative tasks.",
      "Gained experience with laminating, copying, spreadsheets and general office support.",
      "Developed workplace communication, teamwork and professional skills.",
    ],
  },
  {
    role: "Childcare Experience",
    org: "Family environment",
    period: "Add dates",
    points: [
      "Experience caring for a young child in a family environment.",
      "Developed patience, responsibility, communication and childcare skills.",
    ],
  },
];

const SKILLS = [
  {
    group: "Childcare & Education",
    accent: "bg-clay",
    items: [
      "Early Childhood Development",
      "Childcare",
      "Classroom Support",
      "Activity Planning",
      "Child Safety",
      "Child Supervision",
    ],
  },
  {
    group: "Professional Skills",
    accent: "bg-forest",
    items: [
      "Communication",
      "Teamwork",
      "Time Management",
      "Problem Solving",
      "Adaptability",
      "Organization",
    ],
  },
  {
    group: "Digital & AI Skills",
    accent: "bg-bark",
    items: [
      "Artificial Intelligence",
      "AI Prompting",
      "AI Productivity Tools",
      "Research",
      "Digital Communication",
      "Microsoft Office / Spreadsheets",
      "Generative AI",
    ],
  },
];

const EDUCATION = [
  {
    title: "AI & Digital Skills Training",
    meta: "Coursera · multiple modules",
    body: "Successfully completed several AI and digital skills learning modules with strong performance, covering AI fundamentals, prompting and productivity tools.",
  },
  {
    title: "First Aid Level 1",
    meta: "Certificate placeholder",
    body: "Trained in basic emergency response and child-safe first aid practice. Upload the certificate to replace the placeholder.",
  },
  {
    title: "Job Journey — Work Readiness",
    meta: "Certificate placeholder",
    body: "Workplace readiness training that built professional communication, interview skills, workplace conduct and job-search confidence.",
  },
  {
    title: "Early Childhood Development Experience",
    meta: "Practical experience",
    body: "Hands-on experience caring for infants and toddlers and supporting structured educational activities for children aged 4–6.",
  },
];

type Project = {
  title: string;
  image: string;
  description: string;
  features: string[];
  skills: string[];
  to?: "/assistant";
  href?: string;
  cta: string;
};

const PROJECTS: Project[] = [
  {
    title: "AI Workplace Productivity Assistant",
    image: projectAi,
    description:
      "A modern AI productivity application that helps professionals automate everyday workplace tasks — email drafting, meeting summaries, planning and research.",
    features: [
      "Smart Email Generator",
      "Meeting Notes Summarizer",
      "AI Task Planner",
      "AI Research Assistant",
      "AI Chatbot Interface",
    ],
    skills: ["AI Prompting", "Generative AI", "Product Thinking", "Digital Communication"],
    to: "/assistant" as const,
    cta: "View Project",
  },
  {
    title: "Professional Development",
    image: projectGrowth,
    description:
      "An ongoing learning journey across AI tools, digital literacy, workplace readiness and professional growth — with new modules added continuously.",
    features: [
      "AI & Coursera modules",
      "Work readiness training",
      "Office and spreadsheet skills",
    ],
    skills: ["Research", "Self-Study", "Time Management", "Adaptability"],
    href: "#education",
    cta: "View Project",
  },
  {
    title: "Childcare & Learning Activities",
    image: projectChildcare,
    description:
      "Supporting children through structured activities, themed learning, daily routines and classroom assistance in a warm, safe environment.",
    features: ["Themed learning activities", "Daily routine support", "Classroom assistance"],
    skills: ["ECD", "Activity Planning", "Child Safety", "Teamwork"],
    href: "#experience",
    cta: "View Project",
  },
];

const STRENGTHS = [
  { icon: "❤️", title: "Compassionate", body: "Care that puts children and people first." },
  { icon: "🧠", title: "Fast Learner", body: "Picks up new tools and routines quickly." },
  { icon: "🤝", title: "Team Player", body: "Works easily alongside teachers and colleagues." },
  { icon: "🌱", title: "Growth Mindset", body: "Always looking for the next skill to build." },
  { icon: "💻", title: "Digital & AI Curious", body: "Uses AI tools to work smarter every day." },
  { icon: "⭐", title: "Reliable & Hardworking", body: "Shows up, follows through, takes ownership." },
];

const CONTACT_DETAILS = [
  { label: "Email", value: "nkopanetshwaranang@gmail.com", href: "mailto:nkopanetshwaranang@gmail.com" },
  { label: "Phone", value: "078 149 1191", href: "tel:+27781491191" },
  { label: "LinkedIn", value: "Tshwaranang Nkopane", href: "https://www.linkedin.com/in/tshwaranang-nkopane/" },
  { label: "GitHub", value: "github.com/nkopanetshwaranang-beep", href: "https://github.com/nkopanetshwaranang-beep/AI-Productivity--Assistant" },
  { label: "Location", value: "Cape Town, South Africa" },
];

function SectionHead({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-clay">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl leading-tight text-bark md:text-4xl">{title}</h2>
      {lead && <p className="mt-3 text-[15px] leading-relaxed text-stone">{lead}</p>}
    </div>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen bg-cream font-sans text-bark antialiased">
      <SiteNav />

      <main>
        {/* Hero */}
        <section id="home" className="scroll-mt-24 px-5 pb-20 pt-14 lg:px-8">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rise">
              <span className="inline-flex items-center gap-2 rounded-full border border-sand bg-shell px-3 py-1.5 text-xs text-stone">
                <span className="size-1.5 rounded-full bg-forest" />
                Cape Town, South Africa · Open to opportunities
              </span>
              <h1 className="mt-5 font-display text-5xl leading-[1.02] text-bark md:text-7xl">Tshwaranang Nkopane</h1>
              <p className="mt-4 text-lg text-forest md:text-xl">
                Early Childhood Development Professional | AI &amp; Digital Skills Enthusiast
              </p>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-stone">
                I am a passionate and hardworking professional with experience in childcare, early
                childhood development, classroom support, administration and workplace readiness. I
                am continuously developing my digital and AI skills while building a career focused
                on education, personal growth and meaningful work.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-full bg-bark px-6 py-3.5 text-sm font-medium text-cream transition-transform hover:-translate-y-0.5"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-bark/15 bg-shell px-6 py-3.5 text-sm font-medium text-bark transition-colors hover:bg-sand/70"
                >
                  Contact Me
                </a>
              </div>
            </div>

            <div className="rise relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-sand via-clay/15 to-forest/15 blur-xl" />
              <img
                src={profileAsset.url}
                width={912}
                height={1104}
                alt="Professional portrait of Tshwaranang Nkopane"
                className="aspect-[4/5] w-full rounded-[2rem] border border-sand object-cover shadow-[0_30px_70px_-40px_rgba(35,32,29,0.6)]"
              />
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-24 border-t border-sand bg-shell px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHead
              eyebrow="About Me"
              title="Caring for children, curious about technology."
              lead="I love working with children and watching them learn. I am just as passionate about learning myself — new skills, new tools and especially technology and AI that help me work better and support the people around me."
            />
            <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-[15px] leading-relaxed text-stone">
                  My experience spans daily childcare routines, classroom support and educational
                  activities for young children, along with administration and workplace tasks from
                  my internship. Alongside that, I have been completing AI and digital skills
                  modules so that I can bring modern, practical tools into education and office
                  environments.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {QUALITIES.map((q) => (
                    <span
                      key={q}
                      className="rounded-full border border-sand bg-cream px-3.5 py-1.5 text-[13px] text-bark/80"
                    >
                      {q}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {STATS.map((s) => (
                  <div key={s.label} className="rounded-3xl border border-sand bg-cream p-5">
                    <p className="font-display text-2xl text-forest">{s.value}</p>
                    <p className="mt-2 text-xs leading-relaxed text-stone">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-24 px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHead
              eyebrow="Skills"
              title="What I bring to a team."
              lead="Childcare and education at the core, professional habits that make me easy to work with, and growing digital and AI capability."
            />
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {SKILLS.map((cat) => (
                <div
                  key={cat.group}
                  className="rounded-3xl border border-sand bg-shell p-6 transition-all hover:-translate-y-1 hover:shadow-[0_24px_60px_-40px_rgba(35,32,29,0.55)]"
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`size-2.5 rounded-full ${cat.accent}`} />
                    <h3 className="font-display text-lg font-semibold text-bark">{cat.group}</h3>
                  </div>
                  <ul className="mt-5 grid gap-2.5">
                    {cat.items.map((i) => (
                      <li
                        key={i}
                        className="rounded-2xl bg-cream px-4 py-2.5 text-sm text-bark/85 transition-colors hover:bg-sand/70"
                      >
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="scroll-mt-24 border-y border-sand bg-shell px-5 py-20 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <SectionHead
              eyebrow="Professional Experience"
              title="Where I have worked and grown."
              lead="Dates are placeholders — replace them with the actual periods worked."
            />
            <ol className="mt-10 space-y-8 border-l border-sand pl-6 md:pl-10">
              {EXPERIENCE.map((job) => (
                <li key={job.role} className="relative">
                  <span className="absolute -left-[31px] top-2 size-3 rounded-full border-2 border-shell bg-clay md:-left-[47px]" />
                  <div className="rounded-3xl border border-sand bg-cream p-6">
                    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                      <div className="min-w-0">
                        <h3 className="font-display text-lg font-semibold text-bark">{job.role}</h3>
                        <p className="mt-1 text-sm text-forest">{job.org}</p>
                      </div>
                      <span className="shrink-0 rounded-full bg-sand px-3 py-1 text-[11px] text-stone">
                        {job.period}
                      </span>
                    </div>
                    <ul className="mt-4 grid gap-2.5">
                      {job.points.map((p) => (
                        <li key={p} className="flex gap-3 text-sm leading-relaxed text-stone">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-clay/70" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="scroll-mt-24 px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHead
              eyebrow="Education & Training"
              title="Learning that keeps building."
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {EDUCATION.map((e) => (
                <article
                  key={e.title}
                  className="rounded-3xl border border-sand bg-shell p-6 transition-all hover:-translate-y-1 hover:shadow-[0_24px_60px_-40px_rgba(35,32,29,0.55)]"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-clay">
                    {e.meta}
                  </p>
                  <h3 className="mt-3 font-display text-lg font-semibold text-bark">{e.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone">{e.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="scroll-mt-24 border-y border-sand bg-shell px-5 py-20 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <SectionHead
              eyebrow="Projects"
              title="Work I am proud of."
              lead="A mix of technology, learning and practical childcare experience."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {PROJECTS.map((p) => (
                <article
                  key={p.title}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-sand bg-cream transition-all hover:-translate-y-1.5 hover:shadow-[0_30px_70px_-45px_rgba(35,32,29,0.65)]"
                >
                  <img
                    src={p.image}
                    alt={`${p.title} preview placeholder`}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-semibold text-bark">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone">{p.description}</p>
                    <ul className="mt-4 grid gap-1.5">
                      {p.features.map((f) => (
                        <li key={f} className="flex gap-2 text-[13px] text-bark/75">
                          <span className="text-clay">›</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.skills.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-sand bg-shell px-2.5 py-1 text-[11px] text-stone"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    {p.to ? (
                      <Link
                        to={p.to}
                        className="mt-6 rounded-full bg-forest px-4 py-2.5 text-center text-sm font-medium text-cream"
                      >
                        {p.cta}
                      </Link>
                    ) : (
                      <a
                        href={p.href}
                        className="mt-6 rounded-full border border-bark/15 bg-shell px-4 py-2.5 text-center text-sm font-medium text-bark hover:bg-sand/70"
                      >
                        {p.cta}
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Certificates */}
        <section id="certificates" className="scroll-mt-24 px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHead
              eyebrow="Certificates"
              title="Proof of the work."
              lead="Click any certificate to open a larger preview. All images are placeholders until the real scans are uploaded."
            />
            <div className="mt-10">
              <Certificates />
            </div>
          </div>
        </section>

        {/* Career goals */}
        <section className="border-y border-sand bg-shell px-5 py-20 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHead eyebrow="Career Goals" title="Where I'm Going" />
            <div className="rounded-3xl border border-sand bg-cream p-7">
              <p className="text-[15px] leading-relaxed text-stone">
                My goal is to build a meaningful career at the meeting point of education, early
                childhood development, childcare and technology. I want to keep supporting children
                in their earliest years while using AI and digital tools to make learning
                environments better organised, more creative and more effective.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-stone">
                I am committed to continuous learning. I plan to gain further qualifications in
                early childhood development and digital skills, and to keep building professional
                experience through internships, apprenticeships and roles where I can contribute
                and grow.
              </p>
            </div>
          </div>
        </section>

        {/* Strengths */}
        <section className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHead eyebrow="Personal Strengths" title="How I show up." />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {STRENGTHS.map((s) => (
                <div
                  key={s.title}
                  className="rounded-3xl border border-sand bg-shell p-6 transition-all hover:-translate-y-1 hover:shadow-[0_24px_60px_-40px_rgba(35,32,29,0.55)]"
                >
                  <span className="text-2xl">{s.icon}</span>
                  <h3 className="mt-3 font-display text-base font-semibold text-bark">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-stone">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="scroll-mt-24 border-t border-sand bg-shell px-5 py-20 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <SectionHead
              eyebrow="Contact"
              title="Let's talk."
              lead="Open to roles and opportunities in childcare, ECD, education support, administration and entry-level technology or AI work."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="rounded-3xl border border-sand bg-cream p-6">
                <ul className="grid gap-4">
                  {CONTACT_DETAILS.map((c) => (
                    <li key={c.label}>
                      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-stone">
                        {c.label}
                      </p>
                      <p className="mt-1 break-words text-sm text-bark">
                        {c.href ? (
                          <a
                            href={c.href}
                            className="hover:underline"
                            target={c.href.startsWith("http") ? "_blank" : undefined}
                            rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          >
                            {c.value}
                          </a>
                        ) : (
                          c.value
                        )}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-bark px-5 py-12 text-cream lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
          <div className="min-w-0">
            <p className="font-display text-lg">
              Tshwaranang — Building skills. Creating opportunities. Becoming.
            </p>
            <p className="mt-2 text-sm text-cream/60">Cape Town, South Africa</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "LinkedIn", href: "https://www.linkedin.com/in/tshwaranang-nkopane/" },
              { label: "GitHub", href: "https://github.com/nkopanetshwaranang-beep/AI-Productivity--Assistant" },
              { label: "Email", href: "mailto:nkopanetshwaranang@gmail.com" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="rounded-full border border-cream/20 px-4 py-2 text-xs text-cream/80 transition-colors hover:bg-cream/10"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-6xl border-t border-cream/10 pt-6 text-xs text-cream/45">
          © {new Date().getFullYear()} Tshwaranang. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
