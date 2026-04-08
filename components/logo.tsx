export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={`font-[var(--font-display)] text-xl font-bold tracking-tight text-[var(--color-navy)] ${className ?? ""}`}
    >
      clyro
      <span className="text-[var(--color-blue)]">.</span>
    </span>
  );
}
