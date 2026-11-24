"use client";

import { MessageCircle } from "lucide-react";
import { doctor } from "@/data";
import { trackEvent } from "@/lib/analytics";

interface FloatingButtonsProps {
  /** Contexto de la página para el mensaje de WhatsApp. Ej: "endometriosis" */
  context?: string;
}

/**
 * Chrome persistente — variado a propósito (AGENTS.md §1). A diferencia de
 * los sitios anteriores (corner-anchored: derecha, izquierda, cápsula
 * fusionada, botones cuadrados), aquí es una sola píldora de WhatsApp
 * anclada al CENTRO INFERIOR de la pantalla — posición nunca usada en el
 * registro — sin un segundo botón de Llamar flotante (ese ya vive siempre
 * visible en el Header de este sitio).
 */
const FloatingButtons = ({ context }: FloatingButtonsProps) => {
  const cleanWhatsapp = doctor.whatsapp.replace(/\D/g, "");

  const message = context
    ? `Hola, Dra. ${doctor.name}. Vi su página sobre ${context} y me gustaría agendar una consulta.`
    : `Hola, Dra. ${doctor.name}. Vi su página web y me gustaría agendar una consulta.`;

  const whatsappLink = `https://wa.me/${cleanWhatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 left-1/2 z-40 hidden -translate-x-1/2 md:block">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Agendar por WhatsApp"
        onClick={() => trackEvent("clic_whatsapp", { source: "floating" })}
        className="flex items-center gap-2 rounded-full bg-[#25D366] py-3 pl-4 pr-5 text-sm font-semibold text-white shadow-xl transition-transform hover:scale-105"
      >
        <MessageCircle size={20} aria-hidden="true" />
        Agendar por WhatsApp
      </a>
    </div>
  );
};

export default FloatingButtons;
