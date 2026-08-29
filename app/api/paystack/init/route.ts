import { NextResponse } from "next/server";
import { isPaystackSecretConfigured, paystackInitializeTransaction } from "@/lib/paystack";
import { checkoutFormSchema } from "@/lib/validators";
import { getSubtotalPesewas } from "@/lib/cart/cart-reducer";
import type { CartItem } from "@/types/cart";

export async function POST(req: Request) {
  if (!isPaystackSecretConfigured()) {
    return NextResponse.json(
      { error: "Online payment isn't configured yet. Please use WhatsApp or Contact to place this order." },
      { status: 503 }
    );
  }

  const body = await req.json();
  const customer = checkoutFormSchema.safeParse(body.customer);
  const items = body.items as CartItem[] | undefined;

  if (!customer.success || !items?.length) {
    return NextResponse.json({ error: "Invalid checkout data" }, { status: 400 });
  }

  const amountPesewas = getSubtotalPesewas(items);

  try {
    const result = await paystackInitializeTransaction({
      amountPesewas,
      email: customer.data.email,
      metadata: { items, customer: customer.data, subtotalPesewas: amountPesewas },
    });
    return NextResponse.json(result.data);
  } catch {
    return NextResponse.json({ error: "Could not start payment. Please try again." }, { status: 502 });
  }
}
