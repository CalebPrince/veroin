import { cn } from "@/lib/utils";

/** The recurring "torn chip edge" motif from DESIGN.md, used between sections. */
export function ScallopDivider({ className, flip }: { className?: string; flip?: boolean }) {
  return (
    <div
      aria-hidden
      className={cn("h-4 w-full bg-cream-base scallop-edge", flip && "rotate-180", className)}
    />
  );
}
