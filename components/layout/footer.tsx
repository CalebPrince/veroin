import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { InstagramIcon, FacebookIcon, TikTokIcon, WhatsAppIcon } from "@/components/shared/social-icons";
import { Logo } from "@/components/shared/logo";
import { siteConfig } from "@/data/site-config";
import { footerLinks } from "@/data/nav-links";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-ink text-cream-base">
      <div className="h-3 w-full scallop-edge bg-ink rotate-180" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1 space-y-3">
          <Logo dark />
          <p className="text-sm text-cream-base/70 max-w-xs">{siteConfig.tagline}</p>
          <div className="flex items-center gap-3 pt-1">
            <a href={siteConfig.socials.instagram} aria-label="Instagram" className="text-cream-base/70 hover:text-plantain-gold">
              <InstagramIcon className="size-5" />
            </a>
            <a href={siteConfig.socials.facebook} aria-label="Facebook" className="text-cream-base/70 hover:text-plantain-gold">
              <FacebookIcon className="size-5" />
            </a>
            <a href={siteConfig.socials.tiktok} aria-label="TikTok" className="text-cream-base/70 hover:text-plantain-gold">
              <TikTokIcon className="size-5" />
            </a>
            <a
              href={buildWhatsAppLink(`Hi ${siteConfig.shortName}!`)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="text-cream-base/70 hover:text-plantain-gold"
            >
              <WhatsAppIcon className="size-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-plantain-gold mb-3">Shop</h4>
          <ul className="space-y-2 text-sm text-cream-base/80">
            {footerLinks.shop.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-cream-base">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-plantain-gold mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-cream-base/80">
            {footerLinks.company.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-cream-base">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-plantain-gold mb-3">Get in touch</h4>
          <ul className="space-y-2 text-sm text-cream-base/80">
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0" /> {siteConfig.phone}
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0" /> {siteConfig.email}
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4 shrink-0" /> {siteConfig.address}
            </li>
          </ul>
          <div className="pt-1 text-xs text-cream-base/60 space-y-0.5">
            {siteConfig.hours.map((h) => (
              <p key={h.days}>
                {h.days}: {h.time}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-cream-base/15">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-cream-base/60">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {siteConfig.delivery.map((d) => (
              <a key={d.name} href={d.url} className="hover:text-cream-base">
                Order on {d.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
