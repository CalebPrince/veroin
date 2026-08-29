import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

const steps = [
  { step: "01", title: "Pick your chips", description: "Choose a flavor and size from the shop, or message us on WhatsApp." },
  { step: "02", title: "Checkout your way", description: "Pay securely online, or confirm your order over WhatsApp / a quick message." },
  { step: "03", title: "Delivered fresh", description: "We fry, pack, and get it to your door — most Accra orders arrive same day." },
];

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-cream-card border-y border-kraft">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading eyebrow="How it works" title="From fryer to your door in 3 steps" align="center" className="mx-auto" />
        <div className="mt-12 grid md:grid-cols-3 gap-8 relative">
          {steps.map((s, i) => (
            <Reveal key={s.step} delay={i * 100} className="relative">
              <span className="font-heading font-extrabold text-5xl text-plantain-gold/50">{s.step}</span>
              <h3 className="mt-2 font-heading font-bold text-lg text-ink">{s.title}</h3>
              <p className="mt-2 text-sm text-espresso/70">{s.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
