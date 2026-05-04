"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="font-[family-name:var(--font-display)] text-6xl font-light text-[var(--color-error)] mb-4">
          Error
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-2xl font-light mb-4">
          Something went wrong
        </h1>
        <p className="text-[var(--color-text-muted)] mb-8 max-w-sm mx-auto">
          We encountered an unexpected error. Please try again.
        </p>
        <button
          onClick={reset}
          className="inline-block text-[0.75rem] tracking-[0.15em] uppercase font-semibold px-6 py-3 bg-[var(--color-accent)] text-[var(--color-text-inverse)] hover:scale-[1.03] transition-all duration-300 cursor-pointer"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
