// Server-only module (uses PAYSTACK_SECRET_KEY) — never import from a "use client" component.
// Client code that only needs the public key / configured-check should use lib/paystack-client.ts.
import "server-only";

const PLACEHOLDER_SECRET_KEY = "sk_test_placeholder";

export function isPaystackSecretConfigured(): boolean {
  const key = process.env.PAYSTACK_SECRET_KEY;
  return Boolean(key && key !== PLACEHOLDER_SECRET_KEY);
}

export function getPaystackSecretKey(): string | undefined {
  return isPaystackSecretConfigured() ? process.env.PAYSTACK_SECRET_KEY : undefined;
}

const PAYSTACK_API = "https://api.paystack.co";

export async function paystackInitializeTransaction(params: {
  amountPesewas: number;
  email: string;
  metadata: Record<string, unknown>;
}) {
  const secretKey = getPaystackSecretKey();
  if (!secretKey) throw new Error("PAYSTACK_NOT_CONFIGURED");

  const res = await fetch(`${PAYSTACK_API}/transaction/initialize`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${secretKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount: params.amountPesewas,
      email: params.email,
      currency: "GHS",
      metadata: params.metadata,
    }),
  });

  if (!res.ok) throw new Error(`Paystack init failed: ${res.status}`);
  return res.json();
}

export async function paystackVerifyTransaction(reference: string) {
  const secretKey = getPaystackSecretKey();
  if (!secretKey) throw new Error("PAYSTACK_NOT_CONFIGURED");

  const res = await fetch(`${PAYSTACK_API}/transaction/verify/${encodeURIComponent(reference)}`, {
    headers: { Authorization: `Bearer ${secretKey}` },
  });

  if (!res.ok) throw new Error(`Paystack verify failed: ${res.status}`);
  return res.json();
}
