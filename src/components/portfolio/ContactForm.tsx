import { useState, type FormEvent } from "react";

const FIELD =
  "w-full rounded-2xl border border-sand bg-cream/60 px-4 py-3 text-sm text-bark outline-none transition-colors placeholder:text-stone/60 focus:border-forest focus:bg-shell";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-3xl border border-sand bg-shell p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-stone">Name</span>
          <input required name="name" className={FIELD} placeholder="Your full name" />
        </label>
        <label className="grid gap-2">
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-stone">Email</span>
          <input required type="email" name="email" className={FIELD} placeholder="you@company.com" />
        </label>
      </div>
      <label className="grid gap-2">
        <span className="text-xs font-medium uppercase tracking-[0.14em] text-stone">Subject</span>
        <input required name="subject" className={FIELD} placeholder="What is this about?" />
      </label>
      <label className="grid gap-2">
        <span className="text-xs font-medium uppercase tracking-[0.14em] text-stone">Message</span>
        <textarea required name="message" rows={5} className={FIELD} placeholder="Write your message…" />
      </label>
      <button
        type="submit"
        className="justify-self-start rounded-full bg-forest px-6 py-3 text-sm font-medium text-cream transition-transform hover:-translate-y-0.5"
      >
        Send Message
      </button>
      {sent && (
        <p className="rounded-2xl bg-forest/10 px-4 py-3 text-sm text-forest">
          Thank you — your message was captured. Note: this form is not connected to an inbox yet,
          so replace it with a live email service before sharing the site.
        </p>
      )}
    </form>
  );
}
