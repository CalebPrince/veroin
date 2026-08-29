import { Reveal } from "@/components/shared/reveal";
import { siteConfig } from "@/data/site-config";

const stats = [
  { label: "Family-run since", value: String(siteConfig.foundedYear) },
  { label: "Ingredients", value: "100% Natural" },
  { label: "Batches", value: "Fried Fresh Daily" },
  { label: "Delivery", value: "Same-day, Accra" },
];

export function ProofStrip() {
  return (
    <section className="border-y border-kraft bg-cream-card">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 75} className="text-center md:text-left">
            <p className="font-heading font-bold text-xl text-ink">{s.value}</p>
            <p className="text-xs uppercase tracking-wide text-espresso/50 mt-0.5">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
