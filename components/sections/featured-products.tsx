import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProductGrid } from "@/components/shop/product-grid";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { getFeaturedProducts } from "@/data/products";

export function FeaturedProducts() {
  const products = getFeaturedProducts();

  return (
    <section className="py-16 md:py-24 bg-cream-card border-y border-kraft">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Bestsellers" title="Fan-favorite flavors" />
          <Button asChild variant="ghost" className="gap-1.5 text-ink">
            <Link href="/shop">
              View all <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <Reveal className="mt-10">
          <ProductGrid products={products} />
        </Reveal>
      </div>
    </section>
  );
}
