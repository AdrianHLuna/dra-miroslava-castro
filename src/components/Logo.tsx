import Image from "next/image";
import { doctor } from "@/data";

interface LogoProps {
  /** Alto del isotipo en px. El ancho se ajusta solo (proporción real 465×829). */
  height?: number;
  className?: string;
  /** Variante de texto junto al isotipo: nombre real en HTML, o ninguna. */
  withName?: boolean;
  nameClassName?: string;
}

/**
 * Logo real de marca: el archivo entregado es un lockup horizontal (isotipo
 * de silueta femenina + sistema urinario/uterino + wordmark "DRA. MIROSLAVA
 * CASTRO" + subtítulo de especialidad), demasiado ancho para leerse completo
 * a la altura de un header sin volverse minúsculo (AGENTS.md §6). Solución
 * aplicada: se recortó SOLO el isotipo (silueta + aparato urogenital) a un
 * archivo aparte (`public/brand/isotype.png`) y el nombre de la doctora se
 * muestra como texto HTML real junto a él — así el nombre siempre es legible
 * sin depender del tamaño de render del isotipo. El lockup completo
 * (`public/brand/logo-full.png`) se reserva para el Footer, donde sí hay
 * espacio suficiente para mostrarlo entero.
 */
export default function Logo({ height = 40, className = "", withName = false, nameClassName = "" }: LogoProps) {
  const width = Math.round((height * 465) / 829);
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src="/brand/isotype.png"
        alt={`${doctor.title} ${doctor.name}`}
        width={width}
        height={height}
        style={{ height, width: "auto" }}
        priority
      />
      {withName && (
        <span className={`font-serif font-bold uppercase tracking-wide leading-none text-foreground ${nameClassName}`}>
          Dra. Miroslava Castro
        </span>
      )}
    </span>
  );
}
