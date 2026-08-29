# Veroin Snacks LTD

Marketing + e-commerce site for Veroin Snacks LTD, a Ghanaian plantain chip brand. Built with Next.js (App Router), TypeScript, Tailwind CSS, and shadcn/ui — see [DESIGN.md](./DESIGN.md) for the brand/visual system.

## Stack

- Next.js 16 (App Router, Turbopack) + TypeScript
- Tailwind CSS v4 + shadcn/ui (radix-nova) + Lucide/react-icons
- Cart via React Context + `useReducer`, persisted to `localStorage`
- Checkout via [Paystack](https://paystack.com) (card + Mobile Money), with WhatsApp and a Contact form as fallback ordering paths

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The app runs fine out of the box without real Paystack keys — the checkout page falls back to WhatsApp/Contact ordering until they're set.

## Environment Variables

Copy `.env.example` to `.env.local` and fill in real values before going live:

- `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY` / `PAYSTACK_SECRET_KEY` — from the [Paystack dashboard](https://dashboard.paystack.com/#/settings/developer)
- `NEXT_PUBLIC_WHATSAPP_NUMBER` — international format, digits only (no `+`)
- `NEXT_PUBLIC_BUSINESS_*` — shown in the footer, contact page, and page metadata

## Content

- Product catalog: `data/products.ts` — add flavors/sizes here, or new categories in `data/categories.ts`
- Business info (hours, socials, delivery links): `data/site-config.ts`
- Placeholder imagery lives under `public/images/` — swap for real product photography before launch (flagged in [DESIGN.md](./DESIGN.md))

## Deployment

Deployed on [Vercel](https://vercel.com). Set the environment variables above in the Vercel project settings before the first production deploy.
