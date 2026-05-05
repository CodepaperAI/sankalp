"use client";

import { ScrollReveal, TextReveal, MagneticButton } from "@/components/animations";

export function ReferContent() {
  return (
    <div className="pt-32 pb-[var(--section-gap)]">
      <section className="px-6 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-start">
          {/* Left — Why refer */}
          <div>
            <ScrollReveal>
              <p className="text-[0.7rem] tracking-[0.25em] uppercase text-[var(--color-accent)] font-medium mb-6">
                Referral Program
              </p>
            </ScrollReveal>
            <TextReveal
              text="Great homes deserve great neighbours."
              as="h1"
              className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1.1] mb-8"
            />
            <ScrollReveal delay={0.3}>
              <div className="space-y-4 text-[var(--color-text-muted)] leading-[1.8] max-w-[480px] mb-10">
                <p>
                  Word of mouth is how I&apos;ve built my practice. When you refer
                  someone to me, you&apos;re trusting me with someone important to you.
                  I take that seriously.
                </p>
                <p>
                  When the transaction closes, you&apos;ll receive a personal
                  thank-you gift — not a generic card, but something thoughtful.
                  It&apos;s the least I can do for the most powerful endorsement
                  in real estate.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="space-y-4">
                <h3 className="text-[0.7rem] tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium">
                  How It Works
                </h3>
                {[
                  "Fill in your friend's details — I'll reach out personally",
                  "Your friend receives the same care you experienced",
                  "When the deal closes, your thank-you gift arrives",
                ].map((step, i) => (
                  <div key={step} className="flex items-start gap-4">
                    <span className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-accent-dim)] leading-none mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-[0.9rem] text-[var(--color-text-muted)]">{step}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Referral form */}
          <ScrollReveal delay={0.2} className="bg-[var(--color-surface)] border border-[var(--color-border)] p-8 lg:p-12 sticky top-32">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-light mb-2">
              Make a Referral
            </h2>
            <p className="text-[0.8rem] text-[var(--color-text-muted)] mb-8">
              I&apos;ll reach out within 24 hours and mention your name.
            </p>
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[var(--color-accent-dim)] font-medium">
                Your Details
              </p>
              <FormField label="Your Name" type="text" id="ref-your-name" />
              <FormField label="Your Email" type="email" id="ref-your-email" />

              <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[var(--color-accent-dim)] font-medium mt-4">
                Friend&apos;s Details
              </p>
              <FormField label="Friend's Name" type="text" id="ref-friend-name" />
              <FormField label="Friend's Phone or Email" type="text" id="ref-friend-contact" />

              <div className="relative group">
                <textarea
                  id="ref-context"
                  name="ref-context"
                  rows={2}
                  placeholder=" "
                  className="peer w-full pt-5 pb-2 bg-transparent border-b border-[var(--color-border)] text-[var(--color-text)] text-[0.9rem] outline-none focus:border-[var(--color-accent)] transition-colors duration-300 resize-none"
                />
                <label
                  htmlFor="ref-context"
                  className="absolute left-0 top-5 text-[0.8rem] text-[var(--color-text-muted)] tracking-[0.05em] pointer-events-none transition-all duration-300 peer-focus:top-0 peer-focus:text-[0.65rem] peer-focus:tracking-[0.15em] peer-focus:uppercase peer-focus:text-[var(--color-accent)] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[0.65rem] peer-[:not(:placeholder-shown)]:tracking-[0.15em] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-[var(--color-accent)]"
                >
                  What are they looking for? (Optional)
                </label>
              </div>

              <MagneticButton className="mt-2 self-start text-[0.75rem] tracking-[0.15em] uppercase font-semibold px-7 py-4 bg-[var(--color-accent)] text-[var(--color-text-inverse)] hover:shadow-[0_8px_32px_rgba(184,150,12,0.2)] transition-shadow duration-300 border-none cursor-pointer">
                Submit Referral
              </MagneticButton>
            </form>
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
