# Veroin Snacks LTD — DESIGN.md

Visual source of truth for the Veroin Snacks website. Veroin Snacks LTD is a Ghanaian snack brand launching with fried plantain chips, with more local snack categories planned. The brand should feel **warm, proudly local, hand-crafted, and appetizing** — never corporate-cold or generic-AI-SaaS.

## 1. Brand Personality

- Proudly Ghanaian, small-batch, made-fresh — not a faceless factory brand.
- Playful but credible: confident typography and real product photography carry the "snack-time joy" without resorting to cartoonish illustration.
- Tactile over glossy: torn edges, kraft-paper warmth, and toasted color tones over glassy corporate sheen.

## 2. Color System

**Sourced directly from Veroin Snacks' real product packaging** (photographed bag, see `public/info.jpeg`) — not an invented palette. The real logo/bag is a bold golden-yellow with black outlined lettering and a red ribbon accent; the site's palette is sampled and cleaned up from that photo, not a generic "food site red/green" or purple/blue SaaS gradient.

| Token | Hex | Usage |
|---|---|---|
| `--plantain-gold` | `#F0C808` | Primary brand color (the packaging's bag yellow) — CTAs, highlights, price tags, "Snacks" wordmark fill |
| `--plantain-gold-dark` | `#C9A400` | Primary hover/active state |
| `--ink` | `#18140F` | Near-black brand color from the logo's outline/text — footer background, headings, wordmark outline |
| `--espresso` | `#2A2419` | Body text (very slightly softer than `--ink`, still effectively near-black) |
| `--pepper-red` | `#DC3A2E` | Accent from the packaging's red ribbon — "Ripe/Spicy" tags, sale badges, small brand accents |
| `--palm-green` | `#4B6B3A` | Muted utility green for small in-page accents (e.g. quantity-increase hover) — not brand-facing |
| `--whatsapp-green` | `#25D366` | WhatsApp's real brand green — used only on WhatsApp buttons/links (floating button, order-on-WhatsApp CTAs) |
| `--whatsapp-green-dark` | `#128C7E` | WhatsApp green hover/active state |
| `--cream-base` | `#FFFBF0` | Primary light background (warm off-white, echoes the packaging's white label patch) |
| `--cream-card` | `#FFFFFF` | Card surfaces on cream background |
| `--kraft` | `#EFE6C6` | Borders, dividers, subtle section separation |

Dark mode is not a priority for v1 (marketing/e-commerce site, not a tool); the palette above is the default and only theme. `--ink` provides enough dark-surface usage (footer, badges) without a full dark mode.

## 3. Typography

- **Display / Headings — Baloo 2** (bold, rounded, chunky). Matches the energetic, rounded-bold lettering of the real "SNACKS" wordmark on the packaging — playful and punchy rather than corporate.
- **Body / UI — Manrope**. Clean geometric-humanist grotesque, excellent legibility at small sizes for nav, buttons, forms, cart, and body copy.
- **Script accent — Permanent Marker**, used ONLY inside the logo component for the small "Veroin" script line (mirrors the hand-lettered "Veroin" on the real packaging) — never for body or heading copy.
- Avoid Inter as the sole typeface — the Baloo 2/Manrope pairing (plus the Permanent Marker logo accent) is the brand's typographic signature, directly echoing the real packaging design.

## 3b. Logo

The real Veroin Snacks logo (see the cropped source at `public/images/brand/logo-source-crop.png`) is a script "Veroin" over a bold black-outlined yellow "Snacks", underlined, with a small red accent. The source photo is too low-resolution for crisp UI use, so `components/shared/logo.tsx` is a faithful digital recreation using the fonts above (Permanent Marker + Baloo 2 with a black text-stroke) rather than a fabricated new identity — same words, same layout, same three brand colors.

Scale (rem, 16px base):
| Role | Size | Weight | Line-height |
|---|---|---|---|
| Display (hero) | 3.5–4.5rem (clamp) | Fraunces 600 | 1.05 |
| H1 (page/section) | 2.5rem | Fraunces 600 | 1.1 |
| H2 | 1.875rem | Fraunces 600 | 1.15 |
| H3 | 1.25rem | Fraunces 600 | 1.25 |
| Body large | 1.125rem | Manrope 400 | 1.6 |
| Body | 1rem | Manrope 400 | 1.6 |
| Small / label | 0.875rem | Manrope 500 | 1.4 |
| Eyebrow / overline | 0.75rem | Manrope 700, uppercase, tracked | 1.2 |

## 4. Spacing & Grid

- Tailwind default spacing scale (4px increments).
- Container max-width: `1280px` (`max-w-7xl`), with `1.5rem` gutters on mobile, `2rem` on desktop.
- Section vertical padding: `py-16` mobile, `py-24` desktop.
- Product grid: 2 columns mobile, 3 columns tablet, 4 columns desktop.

## 5. Component Styling Rules

- **Radius**: base `--radius: 0.75rem`. Cards and buttons use `rounded-xl`/`rounded-2xl`. No fully-square corners.
- **Borders over shadows**: default surfaces use a 1px `--kraft` border rather than heavy drop-shadow. Reserve soft, low-opacity shadows (`shadow-sm`/`shadow-md` at low opacity) for elevated elements (drawers, popovers, hovered cards).
- **Buttons**:
  - Primary: solid `--plantain-gold` background, `--espresso` text, hover → `--plantain-gold-dark`.
  - Secondary (WhatsApp order): solid `--palm-green` background, cream text.
  - Outline: `--toasted-brown` border + text, transparent fill, hover fills `--cream-card`.
  - Ghost: text-only, used in nav/footer links.
- **Badges**: pill-shaped, small caps, used for "Spicy" (`--pepper-red`), "New" (`--plantain-gold`), "Bestseller" (`--toasted-brown`).

## 6. Motifs

1. **Scalloped chip edge** — a repeating torn/wavy edge silhouette (CSS clip-path or SVG mask) applied to section dividers, category tile bottoms, and price badges. Echoes the irregular fried edge of a plantain chip; the brand's core tactile signature, used in place of plain rounded rectangles.
2. **Kente-inspired geometric strip** — a slim abstracted geometric pattern (not a literal textile reproduction) used sparingly as a divider between major sections or as a footer top-border accent — a nod to Ghanaian textile heritage.

## 7. Imagery & Mockups

- No professional product photography exists yet beyond one phone photo of the real packaging — placeholder lifestyle/hero imagery is AI-generated in a warm, natural-light food-photography style matching the real palette (golden tones, kraft/cream backgrounds, shallow depth of field). **These are placeholders and must be swapped for real product photography before launch** — flagged inline wherever used.
- The brand logo is real (see §3b) — it is digitized from the client's own packaging, not fabricated.
- Product shots: single product/bag on a warm neutral or kraft-paper background, natural side lighting, shallow DOF.
- Hero shot: a hand holding/pouring plantain chips into a bowl, or a styled flat-lay of the product bag with scattered chips, warm golden-hour lighting.

## 8. Motion

- Section reveals: fade + slight upward slide (`opacity 0→1`, `translateY(16px→0)`), `duration-500 ease-out`, triggered on scroll into view, once.
- Buttons/links/cards: `transition-all duration-200 ease-out`, subtle lift (`hover:-translate-y-0.5`) + shadow increase on interactive cards.
- Respect `prefers-reduced-motion`: disable translate/slide, keep only opacity fade.

## 9. Accessibility & Responsive Rules

- Body text minimum contrast: `--espresso` (#2A2118) on `--cream-base` (#FBF3E3) exceeds WCAG AA for normal text.
- All interactive elements: visible focus ring (`--plantain-gold-dark` outline, 2px offset).
- Icon-only buttons (cart, mobile menu, WhatsApp) require `aria-label`.
- Mobile nav collapses into a full-height Sheet drawer below `md`; desktop nav is a horizontal bar with sticky/blur backdrop on scroll.
- Product grids restack from 4→3→2→1 columns responsively; never shrink text below 14px.

## 10. Icons

- **Lucide** icon set throughout (already the shadcn/ui default) — consistent stroke width (1.75–2px), sized 20–24px in UI chrome, 16px inline with small text.
