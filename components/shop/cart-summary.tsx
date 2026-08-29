import { Price } from "@/components/shared/price";

export function CartSummary({ subtotalPesewas }: { subtotalPesewas: number }) {
  return (
    <div className="space-y-2 py-4 border-t border-kraft">
      <div className="flex items-center justify-between text-sm text-espresso/70">
        <span>Subtotal</span>
        <Price pesewas={subtotalPesewas} className="text-espresso" />
      </div>
      <p className="text-xs text-espresso/50">Delivery fees calculated at checkout.</p>
      <div className="flex items-center justify-between pt-2 text-base font-semibold">
        <span>Total</span>
        <Price pesewas={subtotalPesewas} className="text-lg text-ink" />
      </div>
    </div>
  );
}
