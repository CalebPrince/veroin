import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";

export function FinalCta() {
  return (
    <section className="py-20 md:py-28 bg-cream-base text-center">
      <Reveal className="mx-auto max-w-2xl px-4">
        <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-ink text-balance">
          Ready to taste the crunch?
        </h2>
        <p className="mt-3 text-espresso/70">
          Shop the full range of Veroin Snacks plantain chips — fried fresh, delivered fast.
        </p>
        <Button asChild size="lg" className="mt-7 gap-2">
          <Link href="/shop">
            Shop Now <ArrowRight className="size-4" />
          </Link>
        </Button>
      </Reveal>
    </section>
  );
}
