"use client";

import { ScrollReveal, MagneticButton } from "@/components/animations";
import { PageHero } from "@/components/sections/page-hero";
import { siteContact } from "@/lib/contact";
import { images } from "@/lib/images";

type ContactIconName =
  | "phone"
  | "whatsapp"
  | "mail"
  | "map"
  | "instagram"
  | "facebook";

const contactMethods = [
  {
    label: "Phone",
    value: siteContact.phoneDisplay,
    href: siteContact.phoneHref,
    icon: "phone",
  },
  {
    label: "WhatsApp",
    value: siteContact.phoneDisplay,
    href: siteContact.whatsappHref,
    icon: "whatsapp",
    external: true,
  },
  {
    label: "Instagram",
    value: siteContact.instagramLabel,
    href: siteContact.instagramHref,
    icon: "instagram",
    external: true,
  },
  {
    label: "Facebook",
    value: "Follow market updates",
    href: siteContact.facebookHref,
    icon: "facebook",
    external: true,
  },
  {
    label: "Email",
    value: siteContact.email,
    href: siteContact.emailHref,
    icon: "mail",
  },
  {
    label: "Office",
    value: siteContact.areaServed,
    href: "/communities",
    icon: "map",
  },
] satisfies Array<{
  label: string;
  value: string;
  href: string;
  icon: ContactIconName;
  external?: boolean;
}>;

export function ContactContent() {
  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Let's start a conversation."
        imageSrc={images.heroContact}
        imageAlt="Bright condo living room with city views"
      />
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
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {contactMethods.map((method, i) => (
                <ScrollReveal key={method.label} delay={0.3 + i * 0.1}>
                  <a
                    href={method.href}
                    className="group flex min-h-14 items-center gap-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
                    {...(method.external
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                  >
                    <span className="w-10 h-10 border border-[var(--color-border)] flex items-center justify-center text-[var(--color-accent)] group-hover:border-[var(--color-accent)] transition-colors duration-300">
                      <ContactIcon name={method.icon} />
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
                <FormField
                  label="First Name"
                  type="text"
                  id="contact-first"
                  autoComplete="given-name"
                  required
                />
                <FormField
                  label="Last Name"
                  type="text"
                  id="contact-last"
                  autoComplete="family-name"
                  required
                />
              </div>
              <FormField
                label="Email Address"
                type="email"
                id="contact-email"
                autoComplete="email"
                required
              />
              <FormField
                label="Phone Number"
                type="tel"
                id="contact-phone"
                autoComplete="tel"
              />
              <div className="relative group">
                <textarea
                  id="contact-message"
                  name="contact-message"
                  rows={4}
                  placeholder=" "
                  required
                  className="peer w-full pt-7 pb-3 bg-transparent border-b border-[var(--color-border)] text-[var(--color-text)] text-[1rem] outline-none focus:border-[var(--color-accent)] transition-colors duration-400 resize-none"
                />
                <label
                  htmlFor="contact-message"
                  className="absolute left-0 top-7 text-[0.92rem] text-[var(--color-text-muted)] tracking-[0.02em] pointer-events-none transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] peer-focus:top-0 peer-focus:text-[0.65rem] peer-focus:tracking-[0.18em] peer-focus:uppercase peer-focus:text-[var(--color-accent)] peer-focus:font-medium peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[0.65rem] peer-[:not(:placeholder-shown)]:tracking-[0.18em] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-[var(--color-accent)] peer-[:not(:placeholder-shown)]:font-medium"
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

function ContactIcon({ name }: { name: ContactIconName }) {
  const common = {
    "aria-hidden": true,
    className: "h-4 w-4",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
    viewBox: "0 0 24 24",
  };

  switch (name) {
    case "phone":
      return (
        <svg {...common}>
          <path d="M22 16.92v2.2a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.12 3.4 2 2 0 0 1 4.11 1.2h2.2a2 2 0 0 1 2 1.72c.13.95.35 1.88.66 2.76a2 2 0 0 1-.45 2.11L7.6 8.7a16 16 0 0 0 7.7 7.7l.91-.91a2 2 0 0 1 2.11-.45c.88.31 1.81.53 2.76.66A2 2 0 0 1 22 16.92Z" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...common}>
          <path d="M5.2 19.1 6 15.9a7.2 7.2 0 1 1 2.8 2.7l-3.6.5Z" />
          <path d="M9.4 8.6c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.4.5c-.1.1-.2.3-.1.5.3.7 1.5 2.1 2.5 2.5.2.1.4 0 .5-.1l.6-.5c.2-.2.4-.2.6-.1l1.6.8c.3.1.4.3.4.6 0 .7-.5 1.4-1.1 1.6-.9.3-2.8-.1-4.8-2.1-2-2-2.4-3.9-2.1-4.8Z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <path d="M4 5h16v14H4z" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      );
    case "map":
      return (
        <svg {...common}>
          <path d="M12 21s7-4.7 7-11a7 7 0 1 0-14 0c0 6.3 7 11 7 11Z" />
          <path d="M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="4" />
          <path d="M9.5 12a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Z" />
          <path d="M16.8 7.2h.01" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...common}>
          <path d="M14 8h2V4h-2.4C11 4 9.5 5.6 9.5 8.1V10H7v4h2.5v6h4v-6H16l.5-4h-3V8.8c0-.5.2-.8.5-.8Z" />
        </svg>
      );
  }
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
