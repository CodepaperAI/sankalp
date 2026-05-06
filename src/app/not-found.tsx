import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="font-[family-name:var(--font-display)] text-[8rem] font-light leading-none text-[var(--color-accent-dim)] mb-4">
          404
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-light mb-4">
          Page Not Found
        </h1>
        <p className="text-[var(--color-text-muted)] mb-8 max-w-sm mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block text-[0.75rem] tracking-[0.15em] uppercase font-semibold px-6 py-3 bg-[var(--color-accent)] text-[var(--color-text-inverse)] hover:scale-[1.03] hover:shadow-[0_8px_32px_rgba(45,90,61,0.15)] transition-all duration-300"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
