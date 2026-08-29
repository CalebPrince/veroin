import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppOrderButton } from "@/components/shop/whatsapp-order-button";
import { Reveal } from "@/components/shared/reveal";
import { getFeaturedProducts } from "@/data/products";

export function Hero() {
  const heroProduct = getFeaturedProducts()[0];

  return (
    <section className="relative overflow-hidden bg-cream-base">
      <div className="mx-auto max-w-7xl px-4 md:px-8 pt-14 pb-20 md:pt-20 md:pb-28 grid lg:grid-cols-2 gap-10 items-center">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-kraft bg-cream-card px-3 py-1 text-xs font-bold uppercase tracking-wide text-pepper-red mb-5">
            Made fresh in Accra
          </p>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.05] text-ink text-balance">
            Ghana&apos;s freshest fried <span className="text-plantain-gold-dark">plantain chips</span>
          </h1>
          <p className="mt-5 text-lg text-espresso/75 max-w-lg text-pretty">
            Sliced thin, fried golden in small batches, and delivered fast across Accra. No shortcuts,
            no artificial flavoring — just plantain the way it should taste.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="gap-2">
              <Link href="/shop">
                Shop Plantain Chips <ArrowRight className="size-4" />
              </Link>
            </Button>
            {heroProduct ? (
              <WhatsAppOrderButton
                source="single"
                product={heroProduct}
                variantOption={heroProduct.variants?.[0]}
                quantity={1}
                size="lg"
                label="Order on WhatsApp"
              />
            ) : null}
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-espresso/60">
            <span>🌱 100% Natural</span>
            <span>🔥 Fried Fresh Daily</span>
            <span>🚚 Same-day Accra delivery</span>
          </div>
        </Reveal>

        <Reveal delay={150} className="relative">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-kraft shadow-xl shadow-ink/10">
            <Image
              src="/images/site/hero.png"
              alt="Fresh plantain chips being poured into a bowl"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 rounded-2xl bg-cream-card border border-kraft shadow-lg px-4 py-3">
            <span className="flex size-10 items-center justify-center rounded-full bg-plantain-gold text-ink font-heading font-bold">
              ★
            </span>
            <div className="text-sm">
              <p className="font-semibold text-ink leading-tight">Loved locally</p>
              <p className="text-espresso/60 leading-tight">by Accra snackers</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
