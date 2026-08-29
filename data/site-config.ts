export const siteConfig = {
  name: "Veroin Snacks LTD",
  shortName: "Veroin Snacks",
  tagline: "Ghana's freshest fried plantain chips, made daily and delivered fast.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL ?? "hello@veroinsnacks.com",
  phone: process.env.NEXT_PUBLIC_BUSINESS_PHONE ?? "+233 24 000 0000",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "233244093227",
  address: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS ?? "Accra, Ghana",
  foundedYear: 2024,
  hours: [
    { days: "Monday – Friday", time: "8:00 AM – 8:00 PM" },
    { days: "Saturday – Sunday", time: "10:00 AM – 8:00 PM" },
  ],
  socials: {
    instagram: "https://www.instagram.com/veroinsnacks/",
    facebook: "https://web.facebook.com/veroinsnacks/",
    tiktok: "https://tiktok.com/@veroinsnacks",
  },
  delivery: [
    { name: "Bolt Food", url: "https://bolt.eu/en-gh/food/" },
    { name: "Hubtel", url: "https://hubtel.com/" },
  ],
} as const;
