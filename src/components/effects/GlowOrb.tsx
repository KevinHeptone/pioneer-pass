import { cn } from "@/lib/utils";

export function GlowOrb({
  className,
  color = "cyan",
}: {
  className?: string;
  color?: "cyan" | "teal";
}) {
  const colorMap = {
    cyan: "bg-cyan-500/20",
    teal: "bg-teal-500/20",
  };

  return (
    <div
      className={cn(
        "absolute rounded-full blur-[100px] pointer-events-none",
        colorMap[color],
        className
      )}
    />
  );
}
