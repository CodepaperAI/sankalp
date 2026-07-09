"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <form
      className="lg:col-span-5 flex flex-col sm:flex-row gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        if (!email) return;
        setSubmitted(true);
      }}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        aria-label="Email address"
        disabled={submitted}
        className="flex-1 border border-[var(--color-border)] bg-[var(--color-bg)] px-5 py-4 text-[0.95rem] text-[var(--color-text)] outline-none placeholder:text-[var(--color-text-soft)] transition-colors duration-300 focus:border-[var(--color-accent)] focus:bg-[var(--color-surface-raised)] disabled:opacity-60"
      />
      <button
        type="submit"
        disabled={submitted}
        className="group inline-flex flex-shrink-0 items-center justify-center gap-3 bg-[var(--color-accent)] px-6 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-text-inverse)] transition-colors duration-300 hover:bg-[var(--color-accent-light)] disabled:cursor-default disabled:opacity-80"
      >
        {submitted ? (
          <>
            Thank you
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                d="M3 8.5L6.5 12L13 4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </>
        ) : (
          <>
            Subscribe
            <svg
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
