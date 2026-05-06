"use client";

import { ScrollReveal, TextReveal, MagneticButton } from "@/components/animations";
import { PageHero } from "@/components/sections/page-hero";
import { images } from "@/lib/images";

const contactMethods = [
  {
    label: "Phone",
    value: "(416) 555-0199",
    href: "tel:+14165550199",
    icon: "&#9742;",
  },
  {
    label: "WhatsApp",
    value: "+1 (416) 555-0199",
    href: "https://wa.me/14165550199",
    icon: "&#9993;",
  },
  {
    label: "Email",
    value: "hello@sankalprealestate.ca",
    href: "mailto:hello@sankalprealestate.ca",
    icon: "&#9993;",
  },
  {
    label: "Office",
    value: "Greater Toronto Area",
    href: "#",
    icon: "&#9675;",
  },
];

export function ContactContent() {
  return (
    <div>
      <PageHero eyebrow="Contact" title="Let's start a conversation." imageSrc={images.heroContact} imageAlt="Modern home interior" />
      <section className="px-6 lg:px-16 xl:px-24 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24">
          {/* Left — Info */}
          <div>
            <ScrollReveal>
              <p className="text-[var(--color-text-muted)] leading-[1.8] max-w-[440px] mb-12">
                Whether you have a specific question, want a market update for
                your neighbourhood, or are ready to start your journey — I&apos;m here.
                No pressure, no obligation.
              </p>
            </ScrollReveal>

            {/* Contact methods */}
            <div className="space-y-6">
              {contactMethods.map((method, i) => (
                <ScrollReveal key={method.label} delay={0.3 + i * 0.1}>
                  <a
                    href={method.href}
                    className="flex items-center gap-4 group"
                  >
                    <span className="w-10 h-10 border border-[var(--color-border)] flex items-center justify-center text-[var(--color-accent)] group-hover:border-[var(--color-accent)] transition-colors duration-300">
                      <span dangerouslySetInnerHTML={{ __html: method.icon }} />
                    </span>
                    <div>
                      <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-0.5">
                        {method.label}
                      </p>
                      <p className="text-[var(--color-text)] group-hover:text-[var(--color-accent-light)] transition-colors duration-300">
                        {method.value}
                      </p>
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <ScrollReveal delay={0.2} className="bg-[var(--color-surface)] border border-[var(--color-border)] p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-light mb-8">
              Send a Message
            </h2>
            <form
              className="flex flex-col gap-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField label="First Name" type="text" id="contact-first" />
                <FormField label="Last Name" type="text" id="contact-last" />
              </div>
              <FormField label="Email Address" type="email" id="contact-email" />
              <FormField label="Phone Number" type="tel" id="contact-phone" />
              <div className="relative group">
                <textarea
                  id="contact-message"
                  name="contact-message"
                  rows={4}
                  placeholder=" "
                  className="peer w-full pt-5 pb-2 bg-transparent border-b border-[var(--color-border)] text-[var(--color-text)] text-[0.9rem] outline-none focus:border-[var(--color-accent)] transition-colors duration-300 resize-none"
                />
                <label
                  htmlFor="contact-message"
                  className="absolute left-0 top-5 text-[0.8rem] text-[var(--color-text-muted)] tracking-[0.05em] pointer-events-none transition-all duration-300 peer-focus:top-0 peer-focus:text-[0.65rem] peer-focus:tracking-[0.15em] peer-focus:uppercase peer-focus:text-[var(--color-accent)] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[0.65rem] peer-[:not(:placeholder-shown)]:tracking-[0.15em] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-[var(--color-accent)]"
                >
                  How can I help?
                </label>
              </div>
              <MagneticButton className="mt-2 self-start text-[0.75rem] tracking-[0.15em] uppercase font-semibold px-7 py-4 bg-[var(--color-accent)] text-[var(--color-text-inverse)] hover:shadow-[0_8px_32px_rgba(45,90,61,0.15)] transition-shadow duration-300 border-none cursor-pointer">
                Send Message
              </MagneticButton>
            </form>
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
}: {
  label: string;
  type: string;
  id: string;
}) {
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
