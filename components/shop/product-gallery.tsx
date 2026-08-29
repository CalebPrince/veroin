"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function ProductGallery({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-kraft/40 border border-kraft">
        {images[active] ? (
          <Image src={images[active]} alt={alt} fill sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover" priority />
        ) : null}
      </div>
      {images.length > 1 ? (
        <div className="flex gap-2">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setActive(i)}
              className={cn(
                "relative size-16 rounded-lg overflow-hidden border-2 shrink-0",
                i === active ? "border-plantain-gold-dark" : "border-transparent"
              )}
              aria-label={`View image ${i + 1}`}
            >
              <Image src={src} alt="" fill className="object-cover" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
