export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border border-[var(--color-accent)] border-t-transparent rounded-full animate-spin" />
        <p className="text-[0.7rem] tracking-[0.2em] uppercase text-[var(--color-text-muted)]">
          Loading
        </p>
      </div>
    </div>
  );
}
