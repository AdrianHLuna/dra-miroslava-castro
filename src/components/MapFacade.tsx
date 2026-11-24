interface MapFacadeProps {
  address: string;
  className?: string;
}

/**
 * Mapa real e interactivo desde la primera carga, sin `loading="lazy"`
 * (AGENTS.md §7 — reglas funcionales intactas). **Rompe el patrón de "mapa
 * CONTENIDO en tarjeta junto a un riel de info", repetido 3 veces seguidas
 * en el registro (Jaime, Ana Laura, Erwin):** aquí el mapa vive SOLO, a todo
 * el ancho de su contenedor, con esquinas redondeadas y sombra flotante
 * (`.map-card`), y la información de contacto va en una fila horizontal de
 * chips DEBAJO (no en un riel lateral) — ver `/contacto/page.tsx`.
 */
export default function MapFacade({ address, className = "" }: MapFacadeProps) {
  const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <div className={`map-card h-[320px] w-full overflow-hidden bg-muted sm:h-[420px] lg:h-[460px] ${className}`}>
      <iframe
        src={mapsEmbedUrl}
        className="h-full w-full border-0"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación del consultorio"
      />
    </div>
  );
}
