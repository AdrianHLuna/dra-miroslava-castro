import Image from "next/image";

interface CertificationMedalProps {
  name: string;
  institution: string;
  year?: string;
  logoSrc?: string;
}

function initials(text: string): string {
  return text
    .split(/\s+/)
    .filter((w) => w.length > 2 || /^[A-ZÁÉÍÓÚÑ]/.test(w))
    .slice(0, 3)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

/**
 * Insignia circular tipo "medalla" con listón de 2 puntas — reemplaza por
 * completo la tarjeta redonda+texto (`InstitutionBadge.tsx`) compartida sin
 * cambios entre todos los sitios del proyecto (AGENTS.md §1, hallazgo
 * 2026-11-24: "componentes congelados"). Forma deliberadamente distinta del
 * panal hexagonal usado en `dr-miguel-angel-esquinca` el mismo día.
 */
export default function CertificationMedal({ name, institution, year, logoSrc }: CertificationMedalProps) {
  return (
    <div className="flex w-44 flex-col items-center text-center">
      <div className="relative">
        <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-dashed border-primary/35 bg-background p-1">
          {/* Fondo oscuro sólido cuando hay logo real: los 2 logos oficiales
              de este sitio (CMGO/CMUG) son blancos por diseño (pensados
              para navbars de color) — en un fondo claro se pierden por
              completo. No existe una versión a color en ninguno de los 2
              sitios oficiales (confirmado), así que se soluciona con el
              fondo del badge, nunca inventando/coloreando el logo real. */}
          <div
            className={`flex h-full w-full items-center justify-center rounded-full p-3 ${
              logoSrc ? "bg-primary" : "border border-border bg-surface"
            }`}
          >
            {logoSrc ? (
              <Image src={logoSrc} alt={institution} width={56} height={56} className="h-full w-full object-contain" />
            ) : (
              <span className="text-sm font-black text-primary">{initials(institution)}</span>
            )}
          </div>
        </div>
        <svg aria-hidden="true" viewBox="0 0 96 40" className="absolute left-1/2 top-[88%] h-10 w-24 -translate-x-1/2">
          <path d="M28 0 L18 38 L36 28 Z" fill="var(--color-primary)" opacity="0.85" />
          <path d="M68 0 L78 38 L60 28 Z" fill="var(--color-accent)" opacity="0.85" />
        </svg>
      </div>
      <p className="mt-6 text-sm font-semibold text-foreground">{name}</p>
      <p className="mt-1 text-xs text-muted-foreground">
        {institution}
        {year ? ` · ${year}` : ""}
      </p>
    </div>
  );
}
