interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export function TextReveal({
  text,
  className = "",
  as: Tag = "h2",
}: TextRevealProps) {
  return <Tag className={className}>{text}</Tag>;
}
