import Link from "next/link";
import { PackagePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";

export function BulkCta() {
  return (
    <section className="py-14 bg-cream-base">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-10 md:px-12 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="hidden sm:flex size-12 shrink-0 items-center justify-center rounded-2xl bg-plantain-gold text-ink">
                <PackagePlus className="size-6" />
              </span>
              <div>
                <h3 className="font-heading font-bold text-xl md:text-2xl text-cream-base">
                  Planning an event or stocking a shop?
                </h3>
                <p className="text-cream-base/70 text-sm md:text-base mt-1">
                  Get wholesale pricing on bulk plantain chip orders for offices, events, and retail.
                </p>
              </div>
            </div>
            <Button asChild size="lg" variant="secondary" className="shrink-0 bg-plantain-gold text-ink hover:bg-plantain-gold-dark">
              <Link href="/contact?type=bulk">Get Bulk Pricing</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
