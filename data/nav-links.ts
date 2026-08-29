export const navLinks = [
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLinks = {
  shop: [
    { label: "All Products", href: "/shop" },
    { label: "Plantain Chips", href: "/shop?category=plantain-chips" },
    { label: "Bulk & Wholesale", href: "/contact?type=bulk" },
  ],
  company: [
    { label: "About Veroin", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Cart", href: "/cart" },
  ],
} as const;
