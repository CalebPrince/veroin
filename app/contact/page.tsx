import type { Metadata } from "next";
import { Suspense } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { ContactForm } from "@/components/shared/contact-form";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="py-14 md:py-20">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Get in touch"
          title="Questions, bulk orders, or just say hi"
          description="We usually reply within a few hours — for anything urgent, message us directly on WhatsApp."
        />
        <div className="mt-12 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <Suspense>
              <ContactForm />
            </Suspense>
          </div>
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-kraft bg-cream-card p-6 space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="size-5 text-plantain-gold-dark shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-ink">Phone / WhatsApp</p>
                  <p className="text-sm text-espresso/70">{siteConfig.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="size-5 text-plantain-gold-dark shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-ink">Email</p>
                  <p className="text-sm text-espresso/70">{siteConfig.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="size-5 text-plantain-gold-dark shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-ink">Location</p>
                  <p className="text-sm text-espresso/70">{siteConfig.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="size-5 text-plantain-gold-dark shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-ink">Hours</p>
                  {siteConfig.hours.map((h) => (
                    <p key={h.days} className="text-sm text-espresso/70">
                      {h.days}: {h.time}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
