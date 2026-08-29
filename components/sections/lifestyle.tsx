import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { siteConfig } from "@/data/site-config";

export function Lifestyle() {
  return (
    <section className="py-16 md:py-24 bg-cream-card border-y border-kraft">
      <div className="mx-auto max-w-7xl px-4 md:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <Reveal>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-kraft">
            <Image
              src="/images/site/lifestyle-woman.png"
              alt="Woman holding a bag of Veroin Snacks plantain chips"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <SectionHeading eyebrow="About Us" title={`How ${siteConfig.shortName} started`} />
          <p className="mt-5 text-espresso/75 leading-relaxed">
            {siteConfig.shortName} started with a simple idea: plantain chips in Ghana could be better —
            fresher, better seasoned, and made in small batches instead of mass-produced and left sitting
            on a shelf. What began as a home kitchen experiment turned into bags of chips shared with
            neighbors, then friends of friends, then an actual order book.
          </p>
          <p className="mt-4 text-espresso/75 leading-relaxed">
            Today we still fry the same way we started — thin-sliced, small-batch, seasoned by hand — just
            with a few more hands in the kitchen and a delivery bike or two.
          </p>
          <Button asChild className="mt-7 gap-2">
            <Link href="/about">
              Learn More <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
