import { NextResponse } from "next/server";
import { isPaystackSecretConfigured, paystackVerifyTransaction } from "@/lib/paystack";

export async function GET(req: Request) {
  if (!isPaystackSecretConfigured()) {
    return NextResponse.json({ error: "Payments aren't configured yet." }, { status: 503 });
  }

  const { searchParams } = new URL(req.url);
  const reference = searchParams.get("reference");
  if (!reference) {
    return NextResponse.json({ error: "Missing reference" }, { status: 400 });
  }

  try {
    const result = await paystackVerifyTransaction(reference);
    const data = result.data;
    const verified = data?.status === "success";
    return NextResponse.json({ verified, data: verified ? data : null });
  } catch {
    return NextResponse.json({ error: "Could not verify payment" }, { status: 502 });
  }
}
