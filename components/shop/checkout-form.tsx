"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { usePaystackPayment } from "react-paystack";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CartLineItem } from "@/components/shop/cart-line-item";
import { CartSummary } from "@/components/shop/cart-summary";
import { WhatsAppOrderButton } from "@/components/shop/whatsapp-order-button";
import { useCart } from "@/lib/cart/use-cart";
import { isPaystackConfigured, getPaystackPublicKey } from "@/lib/paystack-client";
import { checkoutFormSchema, type CheckoutFormValues } from "@/lib/validators";
import { toast } from "sonner";

const emptyForm: CheckoutFormValues = { name: "", phone: "", email: "", address: "", notes: "" };

export function CheckoutForm() {
  const router = useRouter();
  const { items, subtotalPesewas, clearCart } = useCart();
  const [form, setForm] = useState<CheckoutFormValues>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof CheckoutFormValues, string>>>({});
  const [reference, setReference] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const paystackConfigured = isPaystackConfigured();

  const initializePayment = usePaystackPayment({
    reference,
    email: form.email || "orders@veroinsnacks.com",
    amount: subtotalPesewas,
    currency: "GHS",
    publicKey: getPaystackPublicKey(),
  });

  useEffect(() => {
    if (!reference) return;
    initializePayment({
      onSuccess: () => {
        clearCart();
        router.push(`/checkout/success?reference=${reference}`);
      },
      onClose: () => setSubmitting(false),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reference]);

  function handleChange(field: keyof CheckoutFormValues, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handlePayOnline(e: React.FormEvent) {
    e.preventDefault();
    const result = checkoutFormSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: typeof errors = {};
      for (const issue of result.error.issues) {
        fieldErrors[issue.path[0] as keyof CheckoutFormValues] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);

    try {
      const res = await fetch("/api/paystack/init", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ customer: result.data, items }),
      });
      const data = await res.json();
      if (!res.ok || !data.reference) {
        toast.error(data.error ?? "Could not start payment");
        setSubmitting(false);
        return;
      }
      setReference(data.reference);
    } catch {
      toast.error("Network error — please try again or order via WhatsApp.");
      setSubmitting(false);
    }
  }

  if (items.length === 0) {
    return (
      <div className="py-24 text-center px-4">
        <h1 className="font-heading font-bold text-2xl text-ink">Your cart is empty</h1>
        <Button asChild className="mt-6">
          <Link href="/shop">Shop Now</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="py-14 md:py-20">
      <div className="mx-auto max-w-5xl px-4 md:px-8 grid lg:grid-cols-2 gap-12">
        <div>
          <h1 className="font-heading font-extrabold text-3xl text-ink mb-6">Checkout</h1>
          <form onSubmit={handlePayOnline} className="space-y-4">
            <div>
              <Label htmlFor="name">Full name</Label>
              <Input id="name" value={form.name} onChange={(e) => handleChange("name", e.target.value)} className="mt-1.5" />
              {errors.name ? <p className="text-xs text-pepper-red mt-1">{errors.name}</p> : null}
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} className="mt-1.5" />
                {errors.phone ? <p className="text-xs text-pepper-red mt-1">{errors.phone}</p> : null}
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={form.email} onChange={(e) => handleChange("email", e.target.value)} className="mt-1.5" />
                {errors.email ? <p className="text-xs text-pepper-red mt-1">{errors.email}</p> : null}
              </div>
            </div>
            <div>
              <Label htmlFor="address">Delivery address</Label>
              <Input id="address" value={form.address} onChange={(e) => handleChange("address", e.target.value)} className="mt-1.5" />
              {errors.address ? <p className="text-xs text-pepper-red mt-1">{errors.address}</p> : null}
            </div>
            <div>
              <Label htmlFor="notes">Delivery notes (optional)</Label>
              <Textarea id="notes" value={form.notes} onChange={(e) => handleChange("notes", e.target.value)} className="mt-1.5" />
            </div>

            <div className="pt-2 space-y-3">
              {paystackConfigured ? (
                <Button type="submit" size="lg" className="w-full" disabled={submitting}>
                  {submitting ? "Processing…" : "Pay with Paystack"}
                </Button>
              ) : (
                <div className="rounded-xl border border-dashed border-kraft bg-cream-card p-4 text-sm text-espresso/70">
                  Online payment isn&apos;t set up yet — use WhatsApp below to place this order, we&apos;ll confirm
                  payment on delivery.
                </div>
              )}
              <WhatsAppOrderButton source="cart" items={items} size="lg" className="w-full" />
            </div>
          </form>
        </div>

        <div>
          <h2 className="font-heading font-bold text-xl text-ink mb-4">Order Summary</h2>
          <div className="divide-y divide-kraft border-t border-b border-kraft">
            {items.map((item) => (
              <CartLineItem key={`${item.productId}-${item.variantId}`} item={item} />
            ))}
          </div>
          <CartSummary subtotalPesewas={subtotalPesewas} />
        </div>
      </div>
    </div>
  );
}
