"use client";

import dynamic from "next/dynamic";

// react-paystack touches `window` as soon as its hook is invoked, so this
// must never run during SSR/prerendering — client-only render. `ssr: false`
// is only permitted from within a Client Component, hence this thin wrapper.
const CheckoutForm = dynamic(
  () => import("@/components/shop/checkout-form").then((m) => m.CheckoutForm),
  {
    ssr: false,
    loading: () => <div className="py-24 text-center text-espresso/50">Loading checkout…</div>,
  }
);

export function CheckoutFormLoader() {
  return <CheckoutForm />;
}
