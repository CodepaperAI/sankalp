"use client";

import { ScrollReveal, TextReveal, MagneticButton } from "@/components/animations";

export function BookContent() {
  return (
    <div className="pt-32 pb-[var(--section-gap)]">
      <section className="px-6 lg:px-16 xl:px-24">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-[0.7rem] tracking-[0.25em] uppercase text-[var(--color-accent)] font-medium mb-6">
              Book a Consultation
            </p>
          </ScrollReveal>
          <TextReveal
            text="Let's talk about what home means to you."
            as="h1"
            className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1.1] mb-8"
          />
          <ScrollReveal delay={0.3}>
            <p className="text-[var(--color-text-muted)] leading-[1.8] mb-12 max-w-[560px]">
              A free, no-obligation conversation about your real estate goals.
              30 minutes. In person, over the phone, or on video — your choice.
              No pressure, just clarity.
            </p>
          </ScrollReveal>

          {/* Booking form */}
          <ScrollReveal delay={0.4} className="bg-[var(--color-surface)] border border-[var(--color-border)] p-8 lg:p-12">
            <form
              className="flex flex-col gap-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField label="Full Name" type="text" id="book-name" />
                <FormField label="Phone Number" type="tel" id="book-phone" />
              </div>
              <FormField label="Email Address" type="email" id="book-email" />

              {/* Interest selection */}
              <div>
                <p className="text-[0.7rem] tracking-[0.15em] uppercase text-[var(--color-text-muted)] mb-3">
                  I&apos;m interested in
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Buying",
                    "Selling",
                    "Investing",
                    "Pre-Construction",
                    "Home Valuation",
                    "Just Exploring",
                  ].map((option) => (
                    <label
                      key={option}
                      className="cursor-pointer text-[0.75rem] tracking-[0.1em] px-4 py-2 border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent-light)] transition-all duration-300 has-[:checked]:bg-[var(--color-accent)] has-[:checked]:text-[var(--color-text-inverse)] has-[:checked]:border-[var(--color-accent)]"
                    >
                      <input
                        type="checkbox"
                        name="interest"
                        value={option.toLowerCase()}
                        className="sr-only"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              {/* Preferred time */}
              <div>
                <p className="text-[0.7rem] tracking-[0.15em] uppercase text-[var(--color-text-muted)] mb-3">
                  Preferred meeting type
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Phone Call", "Video Call", "In Person"].map((option) => (
                    <label
                      key={option}
                      className="cursor-pointer text-[0.75rem] tracking-[0.1em] px-4 py-2 border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent-light)] transition-all duration-300 has-[:checked]:bg-[var(--color-accent)] has-[:checked]:text-[var(--color-text-inverse)] has-[:checked]:border-[var(--color-accent)]"
                    >
                      <input
                        type="radio"
                        name="meeting-type"
                        value={option.toLowerCase()}
                        className="sr-only"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              <div className="relative group">
                <textarea
                  id="book-notes"
                  name="book-notes"
                  rows={3}
                  placeholder=" "
                  className="peer w-full pt-5 pb-2 bg-transparent border-b border-[var(--color-border)] text-[var(--color-text)] text-[0.9rem] outline-none focus:border-[var(--color-accent)] transition-colors duration-300 resize-none"
                />
                <label
                  htmlFor="book-notes"
                  className="absolute left-0 top-5 text-[0.8rem] text-[var(--color-text-muted)] tracking-[0.05em] pointer-events-none transition-all duration-300 peer-focus:top-0 peer-focus:text-[0.65rem] peer-focus:tracking-[0.15em] peer-focus:uppercase peer-focus:text-[var(--color-accent)] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[0.65rem] peer-[:not(:placeholder-shown)]:tracking-[0.15em] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-[var(--color-accent)]"
                >
                  Anything else I should know?
                </label>
              </div>

              <MagneticButton className="mt-2 self-start text-[0.75rem] tracking-[0.15em] uppercase font-semibold px-7 py-4 bg-[var(--color-accent)] text-[var(--color-text-inverse)] hover:shadow-[0_8px_32px_rgba(184,150,12,0.2)] transition-shadow duration-300 border-none cursor-pointer">
                Book My Consultation
              </MagneticButton>
            </form>
          </ScrollReveal>

          {/* Trust signals */}
          <ScrollReveal delay={0.5} className="mt-8 flex flex-wrap gap-6">
            {[
              "Response within 24 hours",
              "No obligation",
              "100% confidential",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[var(--color-accent-dim)]" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M13 4L6 11l-3-3" />
                </svg>
                <span className="text-[0.75rem] text-[var(--color-text-muted)]">{item}</span>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

function FormField({ label, type, id }: { label: string; type: string; id: string }) {
  return (
    <div className="relative group">
      <input
        type={type}
        id={id}
        name={id}
        placeholder=" "
        className="peer w-full pt-5 pb-2 bg-transparent border-b border-[var(--color-border)] text-[var(--color-text)] text-[0.9rem] outline-none focus:border-[var(--color-accent)] transition-colors duration-300"
      />
      <label
        htmlFor={id}
        className="absolute left-0 top-5 text-[0.8rem] text-[var(--color-text-muted)] tracking-[0.05em] pointer-events-none transition-all duration-300 peer-focus:top-0 peer-focus:text-[0.65rem] peer-focus:tracking-[0.15em] peer-focus:uppercase peer-focus:text-[var(--color-accent)] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[0.65rem] peer-[:not(:placeholder-shown)]:tracking-[0.15em] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-[var(--color-accent)]"
      >
        {label}
      </label>
    </div>
  );
}
