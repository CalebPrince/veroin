import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validators";
import { buildWhatsAppLink, buildWhatsAppOrderMessage } from "@/lib/whatsapp";

/**
 * Placeholder delivery mechanism: validates the submission server-side and
 * hands back a prefilled WhatsApp link for the client to open — no email
 * service is wired up yet. Swap this body for a real transactional-email
 * send (e.g. Resend) later without touching the form component.
 */
export async function POST(req: Request) {
  const body = await req.json();
  const result = contactFormSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json({ error: "Invalid submission", issues: result.error.issues }, { status: 400 });
  }

  const { name, inquiryType, message } = result.data;
  const details = `Type: ${inquiryType}\nMessage: ${message}`;
  const waMessage = buildWhatsAppOrderMessage({ type: "bulk", name, details });

  return NextResponse.json({ whatsappUrl: buildWhatsAppLink(waMessage) });
}
