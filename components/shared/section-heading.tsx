import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-pepper-red mb-3">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl md:text-[2.25rem] font-heading font-semibold text-ink text-balance">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base md:text-lg text-espresso/70 text-pretty">{description}</p>
      ) : null}
    </div>
  );
}
