"use client";

import Image from "next/image";
import { useState } from "react";
import { HeartPulse } from "lucide-react";

interface CardImageHeaderProps {
  src?: string;
  alt: string;
  aspect?: "video" | "16/10" | "4/3";
  /** Número de folio mostrado en la píldora de la esquina. */
  badge?: number;
}

const aspectClass: Record<NonNullable<CardImageHeaderProps["aspect"]>, string> = {
  video: "aspect-video",
  "16/10": "aspect-[16/10]",
  "4/3": "aspect-[4/3]",
};

/**
 * "Tarjeta pétalo": una sola esquina grande y redondeada (no dos esquinas
 * opuestas simétricas) + un relleno de color que sube desde abajo al
 * hover/focus (`.petal-card`/`.petal-fill`, ver globals.css) — mecanismo de
 * hover nuevo en el registro de diseños (ni zoom, ni grayscale, ni
 * brackets, ni invertir fondo).
 */
export default function CardImageHeader({ src, alt, aspect = "video", badge }: CardImageHeaderProps) {
  const [failed, setFailed] = useState(!src);

  return (
    <div className="group relative">
      {typeof badge === "number" && (
        <span
          className="absolute left-3 top-3 z-10 flex h-8 min-w-8 items-center justify-center rounded-full bg-background/90 px-2 text-xs font-bold text-primary shadow-sm backdrop-blur"
          aria-hidden="true"
        >
          {String(badge).padStart(2, "0")}
        </span>
      )}
      {failed ? (
        <div
          className={`${aspectClass[aspect]} petal-card flex items-center justify-center bg-gradient-to-br from-primary/15 to-secondary/15`}
          role="img"
          aria-label={alt}
        >
          <HeartPulse className="h-10 w-10 text-primary/50" aria-hidden="true" />
        </div>
      ) : (
        <div className={`${aspectClass[aspect]} petal-card relative overflow-hidden bg-muted`}>
          <Image
            src={src as string}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            onError={() => setFailed(true)}
          />
          <span className="petal-fill" aria-hidden="true" />
        </div>
      )}
    </div>
  );
}
