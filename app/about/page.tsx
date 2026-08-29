import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Users, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = { title: "About" };

const values = [
  { icon: Flame, title: "Fried fresh, always", description: "We never pre-fry in bulk and store — every batch is made close to when it ships." },
  { icon: Leaf, title: "Local first", description: "Our plantain comes from growers around Accra, and every bag supports that supply chain." },
  { icon: Users, title: "Built for sharing", description: "From single pouches to family jars and bulk orders, sized for however you snack." },
];

export default function AboutPage() {
  return (
    <div className="py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading eyebrow="Our story" title={`How ${siteConfig.shortName} started`} />
            <p className="mt-5 text-espresso/75 leading-relaxed">
              {siteConfig.shortName} started with a simple idea: plantain chips in Ghana could be better —
              fresher, better seasoned, and made in small batches instead of mass-produced and left sitting
              on a shelf. What began as a home kitchen experiment turned into bags of chips shared with
              neighbors, then friends of friends, then an actual order book.
            </p>
            <p className="mt-4 text-espresso/75 leading-relaxed">
              Today we still fry the same way we started — thin-sliced, small-batch, seasoned by hand —
              just with a few more hands in the kitchen and a delivery bike or two.
            </p>
            <Button asChild className="mt-7 gap-2">
              <Link href="/shop">
                Shop the Range <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-kraft">
            <Image
              src="/images/site/about-process.png"
              alt="Frying plantain chips by hand"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-20 md:mt-28 grid md:grid-cols-3 gap-8">
          {values.map((v) => (
            <div key={v.title} className="text-center">
              <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-plantain-gold/20 text-plantain-gold-dark">
                <v.icon className="size-6" />
              </div>
              <h3 className="mt-4 font-heading font-bold text-lg text-ink">{v.title}</h3>
              <p className="mt-2 text-sm text-espresso/70 max-w-xs mx-auto">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
