import { WhatsAppIcon } from "@/components/shared/social-icons";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/data/site-config";

export function FloatingWhatsAppButton() {
  return (
    <a
      href={buildWhatsAppLink(`Hi ${siteConfig.shortName}!`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-30 flex size-14 items-center justify-center rounded-full bg-whatsapp-green text-white shadow-lg shadow-ink/20 transition-transform duration-200 ease-out hover:scale-105 hover:bg-whatsapp-green-dark"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
