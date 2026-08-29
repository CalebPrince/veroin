import { Flame, Leaf, Truck } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

const highlights = [
  {
    icon: Flame,
    title: "Fried Fresh Daily",
    description: "Every batch is fried the same day it ships — never stockpiled, never stale.",
  },
  {
    icon: Leaf,
    title: "Locally Sourced Plantain",
    description: "We buy directly from growers around Accra, supporting local farms with every bag.",
  },
  {
    icon: Truck,
    title: "Fast Accra Delivery",
    description: "Order online, on WhatsApp, or through Bolt/Hubtel — most orders arrive same day.",
  },
];

export function ServiceHighlights() {
  return (
    <section className="py-16 md:py-24 bg-cream-base">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading eyebrow="Why Veroin" title="Made small-batch, delivered fast" align="center" className="mx-auto" />
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 100} className="text-center">
              <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-plantain-gold/20 text-plantain-gold-dark">
                <h.icon className="size-6" />
              </div>
              <h3 className="mt-4 font-heading font-bold text-lg text-ink">{h.title}</h3>
              <p className="mt-2 text-sm text-espresso/70 max-w-xs mx-auto">{h.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
