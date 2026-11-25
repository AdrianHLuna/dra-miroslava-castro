"use client";

import Image from "next/image";
import { useState } from "react";
import { Stethoscope } from "lucide-react";
import { doctor } from "@/data";

interface DoctorPhotoProps {
  src?: string;
  alt: string;
  /** La etiqueta de subespecialidad solo tiene sentido en "Sobre la doctora" — en el Hero ese dato ya aparece en el texto junto a la foto. */
  showTag?: boolean;
  priority?: boolean;
  objectPositionClassName?: string;
}

/**
 * Foto de la doctora en marco "gota" (`.drop-frame`) — SIN insignias
 * flotantes alrededor: ese mecanismo (bob + 4 círculos) se repetía con
 * otros sitios del registro cambiando solo los íconos (AGENTS.md §1,
 * hallazgo 2026-11-24). En su lugar, una etiqueta real de subespecialidad
 * fija en la esquina, sin animación de bob.
 */
export default function DoctorPhoto({
  src,
  alt,
  showTag = true,
  priority = false,
  objectPositionClassName = "object-center",
}: DoctorPhotoProps) {
  const [failed, setFailed] = useState(!src);

  return (
    <div className="relative">
      {failed ? (
        <div
          className="drop-frame flex aspect-[4/5] items-center justify-center bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/15"
          role="img"
          aria-label={alt}
        >
          <Stethoscope className="h-12 w-12 text-primary/50" aria-hidden="true" />
        </div>
      ) : (
        <div className="drop-frame relative aspect-[4/5] overflow-hidden bg-muted">
          <Image
            src={src as string}
            alt={alt}
            fill
            priority={priority}
            className={`object-cover ${objectPositionClassName}`}
            sizes="(max-width: 1024px) 100vw, 33vw"
            onError={() => setFailed(true)}
          />
        </div>
      )}
      {showTag && doctor.subspecialty && (
        <div className="absolute -bottom-4 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl border border-border bg-background px-4 py-2.5 text-center shadow-lg">
          <p className="text-xs font-semibold text-primary">{doctor.subspecialty}</p>
        </div>
      )}
    </div>
  );
}
