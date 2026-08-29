"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { toast } from "sonner";

/** UI-only for now — no email service is wired up yet. */
export function NewsletterSignup() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    toast.success("Thanks for joining! We'll be in touch.");
    setEmail("");
  }

  return (
    <section className="py-16 bg-cream-card border-y border-kraft">
      <Reveal className="mx-auto max-w-2xl px-4 md:px-8 text-center">
        <Mail className="mx-auto size-8 text-plantain-gold-dark" />
        <h3 className="mt-3 font-heading font-bold text-2xl text-ink">Get first dibs on new flavors</h3>
        <p className="mt-2 text-espresso/70 text-sm">
          Join our list for new flavor drops and the occasional discount. No spam.
        </p>
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <Input
            type="email"
            required
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="sm:w-72 bg-cream-base"
          />
          <Button type="submit">Join!</Button>
        </form>
      </Reveal>
    </section>
  );
}
