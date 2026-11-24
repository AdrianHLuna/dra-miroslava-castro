"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { Stethoscope } from "lucide-react";

interface SymptomWaveItem {
  name: string;
  slug: string;
  image: string;
}

function WaveThumb({ item, offset }: { item: SymptomWaveItem; offset: number }) {
  const [failed, setFailed] = useState(false);

  return (
    <Link
      href={`/sintomas/${item.slug}` as Route}
      className="group flex w-24 shrink-0 flex-col items-center text-center sm:w-28"
      style={{ transform: `translateY(${offset}px)` }}
    >
      <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-primary/25 bg-muted shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:border-primary sm:h-24 sm:w-24">
        {failed ? (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/15">
            <Stethoscope className="h-7 w-7 text-primary/50" aria-hidden="true" />
          </div>
        ) : (
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
            sizes="96px"
            onError={() => setFailed(true)}
          />
        )}
      </div>
      <p className="mt-3 text-xs font-medium leading-tight text-foreground">{item.name}</p>
    </Link>
  );
}

/**
 * Síntomas del Home en fila "ola": tokens circulares con imagen, cada uno
 * desplazado verticalmente siguiendo un patrón de onda (±offset alterno) —
 * referencia directa al motivo "flujo" del Hero/CTA de este sitio, nunca la
 * lista de píldoras de solo texto ni la tarjeta `.petal-card` ya usada para
 * enfermedades/servicios (AGENTS.md §1, hallazgo 2026-11-24: experimentar
 * con una presentación nueva, no lista normal ni las cards de siempre).
 * Solo muestra un subconjunto (no los 14), con link a ver el resto.
 */
export default function SymptomWaveStrip({ items }: { items: SymptomWaveItem[] }) {
  const offsets = [0, -18, 10, -10, 18, 0];

  return (
    <div className="flex flex-wrap items-start justify-center gap-x-6 gap-y-10 px-2 sm:gap-x-8">
      {items.map((item, i) => (
        <WaveThumb key={item.slug} item={item} offset={offsets[i % offsets.length]} />
      ))}
    </div>
  );
}
