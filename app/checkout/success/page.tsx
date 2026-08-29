import Link from "next/link";
import { CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Price } from "@/components/shared/price";
import { isPaystackSecretConfigured, paystackVerifyTransaction } from "@/lib/paystack";
import type { OrderMetadata } from "@/types/order";

export default async function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ reference?: string }>;
}) {
  const { reference } = await searchParams;

  let verified = false;
  let metadata: OrderMetadata | null = null;

  if (reference && isPaystackSecretConfigured()) {
    try {
      const result = await paystackVerifyTransaction(reference);
      verified = result.data?.status === "success";
      metadata = verified ? (result.data?.metadata as OrderMetadata) : null;
    } catch {
      verified = false;
    }
  }

  if (!verified) {
    return (
      <div className="py-24 text-center px-4">
        <XCircle className="mx-auto size-12 text-pepper-red" />
        <h1 className="mt-4 font-heading font-bold text-2xl text-ink">We couldn&apos;t confirm this payment</h1>
        <p className="mt-2 text-espresso/60 max-w-md mx-auto">
          If you completed payment, please contact us with your reference so we can confirm your order.
        </p>
        <Button asChild className="mt-6">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="py-24 text-center px-4">
      <CheckCircle2 className="mx-auto size-12 text-palm-green" />
      <h1 className="mt-4 font-heading font-bold text-2xl text-ink">Order confirmed!</h1>
      <p className="mt-2 text-espresso/60">
        Thank you{metadata?.customer.name ? `, ${metadata.customer.name}` : ""} — we&apos;re frying your order now.
      </p>
      {metadata ? (
        <div className="mt-8 max-w-sm mx-auto text-left rounded-2xl border border-kraft bg-cream-card p-5">
          <p className="text-xs uppercase tracking-wide text-espresso/50 mb-2">Reference</p>
          <p className="font-mono text-sm text-ink mb-4">{reference}</p>
          <div className="space-y-1 text-sm">
            {metadata.items.map((item) => (
              <div key={`${item.productId}-${item.variantId}`} className="flex justify-between">
                <span>
                  {item.name} x{item.quantity}
                </span>
                <Price pesewas={item.unitPricePesewas * item.quantity} />
              </div>
            ))}
          </div>
          <div className="flex justify-between font-semibold pt-3 mt-3 border-t border-kraft">
            <span>Total</span>
            <Price pesewas={metadata.subtotalPesewas} />
          </div>
        </div>
      ) : null}
      <Button asChild className="mt-8">
        <Link href="/shop">Continue Shopping</Link>
      </Button>
    </div>
  );
}
