import { Hero } from "@/components/sections/hero";
import { ProofStrip } from "@/components/sections/proof-strip";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { Lifestyle } from "@/components/sections/lifestyle";
import { ServiceHighlights } from "@/components/sections/service-highlights";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Testimonials } from "@/components/sections/testimonials";
import { BulkCta } from "@/components/sections/bulk-cta";
import { NewsletterSignup } from "@/components/sections/newsletter-signup";
import { FinalCta } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Lifestyle />
      <ProofStrip />
      <FeaturedProducts />
      <ServiceHighlights />
      <HowItWorks />
      <Testimonials />
      <BulkCta />
      <NewsletterSignup />
      <FinalCta />
    </>
  );
}
