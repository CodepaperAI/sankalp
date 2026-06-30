"use client";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  as?: "button" | "a";
  href?: string;
  onClick?: () => void;
}

export function MagneticButton({
  children,
  className = "",
  as = "button",
  href,
  onClick,
}: MagneticButtonProps) {
  if (as === "a") {
    return (
      <a href={href} onClick={onClick} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}
