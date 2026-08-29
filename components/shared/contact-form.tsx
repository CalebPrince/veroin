"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { contactFormSchema, type ContactFormValues } from "@/lib/validators";
import { toast } from "sonner";

const emptyForm: ContactFormValues = { name: "", phone: "", email: "", inquiryType: "general", message: "" };

export function ContactForm() {
  const searchParams = useSearchParams();
  const defaultType = searchParams.get("type") === "bulk" ? "bulk" : "general";
  const [form, setForm] = useState<ContactFormValues>({ ...emptyForm, inquiryType: defaultType });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  function handleChange<K extends keyof ContactFormValues>(field: K, value: ContactFormValues[K]) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = contactFormSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: typeof errors = {};
      for (const issue of result.error.issues) {
        fieldErrors[issue.path[0] as keyof ContactFormValues] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.error ?? "Something went wrong");
        return;
      }
      toast.success("Message ready — opening WhatsApp to send it to us.");
      window.open(data.whatsappUrl, "_blank", "noopener,noreferrer");
      setForm(emptyForm);
    } catch {
      toast.error("Network error — please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="c-name">Full name</Label>
        <Input id="c-name" value={form.name} onChange={(e) => handleChange("name", e.target.value)} className="mt-1.5" />
        {errors.name ? <p className="text-xs text-pepper-red mt-1">{errors.name}</p> : null}
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="c-phone">Phone</Label>
          <Input id="c-phone" value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} className="mt-1.5" />
          {errors.phone ? <p className="text-xs text-pepper-red mt-1">{errors.phone}</p> : null}
        </div>
        <div>
          <Label htmlFor="c-email">Email (optional)</Label>
          <Input id="c-email" type="email" value={form.email} onChange={(e) => handleChange("email", e.target.value)} className="mt-1.5" />
        </div>
      </div>
      <div>
        <Label htmlFor="c-type">Inquiry type</Label>
        <Select value={form.inquiryType} onValueChange={(v) => handleChange("inquiryType", v as ContactFormValues["inquiryType"])}>
          <SelectTrigger id="c-type" className="mt-1.5 w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="general">General question</SelectItem>
            <SelectItem value="bulk">Bulk & Wholesale</SelectItem>
            <SelectItem value="delivery">Delivery issue</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="c-message">Message</Label>
        <Textarea id="c-message" rows={5} value={form.message} onChange={(e) => handleChange("message", e.target.value)} className="mt-1.5" />
        {errors.message ? <p className="text-xs text-pepper-red mt-1">{errors.message}</p> : null}
      </div>
      <Button type="submit" size="lg" disabled={submitting} className="w-full">
        {submitting ? "Sending…" : "Send via WhatsApp"}
      </Button>
    </form>
  );
}
