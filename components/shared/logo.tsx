import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Digital recreation of Veroin Snacks' real packaging wordmark (script
 * "Veroin" + bold outlined "Snacks", underline, red accent) — the source
 * photo (public/info.jpeg) is too low-res to use directly at UI sizes.
 */
export function Logo({ className, dark }: { className?: string; dark?: boolean }) {
  return (
    <Link
      href="/"
      className={cn("inline-flex flex-col items-start leading-none group", className)}
      aria-label="Veroin Snacks home"
    >
      <span
        className={cn(
          "font-script text-base -mb-1 ml-1",
          dark ? "text-cream-base/90" : "text-ink"
        )}
      >
        Veroin
      </span>
      <span className="relative inline-flex items-center">
        <span
          className="font-heading font-extrabold text-3xl tracking-tight text-plantain-gold"
          style={{
            WebkitTextStroke: dark ? "1.5px #18140f" : "1.5px #18140f",
            paintOrder: "stroke fill",
          }}
        >
          Snacks
        </span>
      </span>
      <span className="flex items-center gap-1 -mt-0.5 ml-1">
        <span className={cn("h-[2px] w-8 rounded-full", dark ? "bg-cream-base/70" : "bg-ink")} />
        <span className="size-1.5 rounded-full bg-pepper-red" />
      </span>
    </Link>
  );
}
