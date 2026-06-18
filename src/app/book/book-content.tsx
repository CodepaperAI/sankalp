"use client";

import { ScrollReveal, MagneticButton } from "@/components/animations";
import { PageHero } from "@/components/sections/page-hero";
import { images } from "@/lib/images";

export function BookContent() {
  return (
    <div>
      <PageHero
        eyebrow="Book a Consultation"
        title="Let's talk about what home means to you."
        imageSrc={images.heroBook}
        imageAlt="Real estate consultation at a bright office desk"
      />
      <section className="px-6 lg:px-16 xl:px-24 py-16">
        <div className="max-w-3xl mx-auto">
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
                <FormField
                  label="Full Name"
                  type="text"
                  id="book-name"
                  autoComplete="name"
                  required
                />
                <FormField
                  label="Phone Number"
                  type="tel"
                  id="book-phone"
                  autoComplete="tel"
                  required
                />
              </div>
              <FormField
                label="Email Address"
                type="email"
                id="book-email"
                autoComplete="email"
                required
              />

              {/* Interest selection */}
              <fieldset>
                <legend className="text-[0.7rem] tracking-[0.15em] uppercase text-[var(--color-text-muted)] mb-3">
                  I&apos;m interested in
                </legend>
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
                      className="min-h-11 inline-flex cursor-pointer items-center text-[0.75rem] tracking-[0.1em] px-4 py-2 border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent-light)] focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[var(--color-accent)] transition-all duration-300 has-[:checked]:bg-[var(--color-accent)] has-[:checked]:text-[var(--color-text-inverse)] has-[:checked]:border-[var(--color-accent)]"
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
              </fieldset>

              {/* Preferred time */}
              <fieldset>
                <legend className="text-[0.7rem] tracking-[0.15em] uppercase text-[var(--color-text-muted)] mb-3">
                  Preferred meeting type
                </legend>
                <div className="flex flex-wrap gap-2">
                  {["Phone Call", "Video Call", "In Person"].map((option) => (
                    <label
                      key={option}
                      className="min-h-11 inline-flex cursor-pointer items-center text-[0.75rem] tracking-[0.1em] px-4 py-2 border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent-light)] focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[var(--color-accent)] transition-all duration-300 has-[:checked]:bg-[var(--color-accent)] has-[:checked]:text-[var(--color-text-inverse)] has-[:checked]:border-[var(--color-accent)]"
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
              </fieldset>

              <div className="relative group">
                <textarea
                  id="book-notes"
                  name="book-notes"
                  rows={3}
                  placeholder=" "
                  autoComplete="off"
                  className="peer w-full pt-7 pb-3 bg-transparent border-b border-[var(--color-border)] text-[var(--color-text)] text-[1rem] outline-none focus:border-[var(--color-accent)] transition-colors duration-400 resize-none"
                />
                <label
                  htmlFor="book-notes"
                  className="absolute left-0 top-7 text-[0.92rem] text-[var(--color-text-muted)] tracking-[0.02em] pointer-events-none transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] peer-focus:top-0 peer-focus:text-[0.65rem] peer-focus:tracking-[0.18em] peer-focus:uppercase peer-focus:text-[var(--color-accent)] peer-focus:font-medium peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[0.65rem] peer-[:not(:placeholder-shown)]:tracking-[0.18em] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-[var(--color-accent)] peer-[:not(:placeholder-shown)]:font-medium"
                >
                  Anything else I should know?
                </label>
              </div>

              <MagneticButton className="mt-2 self-start text-[0.75rem] tracking-[0.15em] uppercase font-semibold px-7 py-4 bg-[var(--color-accent)] text-[var(--color-text-inverse)] hover:shadow-[0_8px_32px_rgba(45,90,61,0.15)] transition-shadow duration-300 border-none cursor-pointer">
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

function FormField({
  label,
  type,
  id,
  autoComplete,
  required,
}: {
  label: string;
  type: string;
  id: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div className="relative group">
      <input
        type={type}
        id={id}
        name={id}
        placeholder=" "
        autoComplete={autoComplete}
        required={required}
        className="peer w-full pt-7 pb-3 bg-transparent border-b border-[var(--color-border)] text-[var(--color-text)] text-[1rem] outline-none focus:border-[var(--color-accent)] transition-colors duration-400"
      />
      <label
        htmlFor={id}
        className="absolute left-0 top-7 text-[0.92rem] text-[var(--color-text-muted)] tracking-[0.02em] pointer-events-none transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] peer-focus:top-0 peer-focus:text-[0.65rem] peer-focus:tracking-[0.18em] peer-focus:uppercase peer-focus:text-[var(--color-accent)] peer-focus:font-medium peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[0.65rem] peer-[:not(:placeholder-shown)]:tracking-[0.18em] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-[var(--color-accent)] peer-[:not(:placeholder-shown)]:font-medium"
      >
        {label}
      </label>
    </div>
  );
}
