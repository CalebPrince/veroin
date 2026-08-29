import { formatMoney } from "@/lib/money";
import { cn } from "@/lib/utils";

export function Price({ pesewas, className }: { pesewas: number; className?: string }) {
  return <span className={cn("font-heading font-semibold", className)}>{formatMoney(pesewas)}</span>;
}
