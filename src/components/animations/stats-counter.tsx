interface StatsCounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
  labelClassName?: string;
  label: string;
}

export function StatsCounter({
  target,
  prefix = "",
  suffix = "",
  className = "",
  labelClassName = "",
  label,
}: StatsCounterProps) {
  return (
    <div className="relative text-center">
      <div className={className}>
        {prefix}
        {target}
        {suffix}
      </div>
      <div className={labelClassName}>{label}</div>
    </div>
  );
}
