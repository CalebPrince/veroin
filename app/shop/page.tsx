import type { Metadata } from "next";
import { ProductGrid } from "@/components/shop/product-grid";
import { SectionHeading } from "@/components/shared/section-heading";
import { products } from "@/data/products";
import { categories } from "@/data/categories";

export const metadata: Metadata = { title: "Shop" };

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const filtered = category ? products.filter((p) => p.categorySlug === category) : products;
  const activeCategory = categories.find((c) => c.slug === category);

  return (
    <div className="py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Shop"
          title={activeCategory ? activeCategory.name : "All Products"}
          description={activeCategory?.description ?? "Fried fresh, seasoned in small batches, delivered fast across Accra."}
        />
        <div className="mt-10">
          <ProductGrid products={filtered} />
        </div>
      </div>
    </div>
  );
}
