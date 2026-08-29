/** Client-safe: only reads the NEXT_PUBLIC_ key. Never import lib/paystack.ts (secret key) from client components. */
const PLACEHOLDER_PUBLIC_KEY = "pk_test_placeholder";

export function isPaystackConfigured(): boolean {
  const key = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY;
  return Boolean(key && key !== PLACEHOLDER_PUBLIC_KEY);
}

export function getPaystackPublicKey(): string {
  return process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || PLACEHOLDER_PUBLIC_KEY;
}
