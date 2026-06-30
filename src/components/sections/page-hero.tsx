import Image from "next/image";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  compact?: boolean;
  imagePosition?: string;
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  imageSrc,
  imageAlt,
  compact = false,
  imagePosition = "center",
}: PageHeroProps) {
  const heightClass = compact
    ? "h-[52vh] min-h-[380px] max-h-[560px]"
    : "h-[64vh] min-h-[500px] max-h-[720px]";
  const contentPadding = compact ? "pb-9 lg:pb-12" : "pb-12 lg:pb-16";
  const titleSize = compact
    ? "text-[2.6rem] md:text-[4rem] lg:text-[4.75rem]"
    : "text-[3rem] md:text-[4.5rem] lg:text-[5.75rem]";

  return (
    <section
      className={`relative flex items-end overflow-hidden border-b border-[var(--color-divider)] bg-[var(--color-bg)] ${heightClass}`}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          style={{ objectPosition: imagePosition }}
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0 hidden pointer-events-none lg:block"
          style={{
            background:
              "linear-gradient(90deg, rgba(251,251,247,0.98) 0%, rgba(251,251,247,0.88) 44%, rgba(251,251,247,0.48) 72%, rgba(251,251,247,0.14) 100%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none lg:hidden"
          style={{
            background:
              "linear-gradient(to bottom, rgba(251,251,247,0.98) 0%, rgba(251,251,247,0.90) 48%, rgba(251,251,247,0.62) 78%, rgba(251,251,247,0.96) 100%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />
      </div>

      <div
        className={`relative z-10 w-full px-6 lg:px-16 xl:px-24 ${contentPadding}`}
      >
        <p className="mb-5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
          <span className="inline-flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--color-accent)]/45" />
            {eyebrow}
          </span>
        </p>
        <h1
          className={`max-w-[920px] min-w-0 break-words font-[family-name:var(--font-display)] font-light leading-[0.98] text-[var(--color-text)] ${titleSize}`}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-[620px] text-[0.98rem] leading-[1.65] text-[var(--color-text-muted)] lg:text-[1.08rem]">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
