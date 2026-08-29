import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { ProductGallery } from "@/components/shop/product-gallery";
import { ProductDetailPurchase } from "@/components/shop/product-detail-purchase";
import { ProductGrid } from "@/components/shop/product-grid";
import { getProductBySlug, products } from "@/data/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  return { title: product?.name ?? "Product" };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = products.filter((p) => p.slug !== product.slug && p.categorySlug === product.categorySlug).slice(0, 4);

  return (
    <div className="py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <ProductGallery images={product.images} alt={product.name} />
          <div>
            <div className="flex flex-wrap gap-2 mb-3">
              {product.tags?.map((t) => (
                <Badge key={t} className="bg-pepper-red text-cream-base capitalize">
                  {t}
                </Badge>
              ))}
            </div>
            <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-ink">{product.name}</h1>
            <p className="mt-3 text-espresso/70 text-lg">{product.description}</p>
            <div className="mt-8">
              <ProductDetailPurchase product={product} />
            </div>
          </div>
        </div>

        {related.length > 0 ? (
          <div className="mt-20 pt-12 border-t border-kraft">
            <h2 className="font-heading font-bold text-2xl text-ink mb-6">You might also like</h2>
            <ProductGrid products={related} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
