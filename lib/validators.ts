import { z } from "zod";

export const checkoutFormSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name"),
  phone: z.string().trim().min(9, "Enter a valid phone number"),
  email: z.string().trim().email("Enter a valid email"),
  address: z.string().trim().min(6, "Enter a delivery address"),
  notes: z.string().trim().optional(),
});

export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name"),
  phone: z.string().trim().min(9, "Enter a valid phone number"),
  email: z.string().trim().email("Enter a valid email").optional().or(z.literal("")),
  inquiryType: z.enum(["general", "bulk", "delivery"]),
  message: z.string().trim().min(10, "Tell us a bit more (10+ characters)"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
