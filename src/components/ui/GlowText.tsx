import { cn } from "@/lib/utils";

export function GlowText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
}
