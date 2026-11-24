"use client";

import { Phone, MessageCircle } from "lucide-react";
import { doctor } from "@/data";
import { trackEvent } from "@/lib/analytics";

/**
 * Chrome persistente — variado a propósito (AGENTS.md §1). A diferencia del
 * dock flotante y redondeado de Ana Laura, la cápsula-FAB de Jaime, o la
 * barra asimétrica de vidrio de Erwin, aquí es una barra PLANA a ras de
 * borde inferior (sin inset, sin flotar, sin esquinas redondeadas), dividida
 * en 2 mitades EXACTAS (50/50, no 70/30 como el patrón original de 4+
 * sitios): Llamar a la izquierda, Agendar por WhatsApp a la derecha,
 * separadas por una línea delgada.
 */
export default function StickyBottomNav() {
  const cleanWhatsapp = doctor.whatsapp.replace(/\D/g, "");
  const message = encodeURIComponent(
    `Hola, Dra. ${doctor.name}. Vi su página web y me gustaría agendar una consulta.`
  );

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-border bg-background/95 backdrop-blur md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={`tel:${doctor.phone}`}
        aria-label="Llamar al consultorio"
        onClick={() => trackEvent("clic_llamar", { source: "sticky_nav" })}
        className="flex h-14 items-center justify-center gap-2 border-r border-border text-sm font-semibold text-primary"
      >
        <Phone size={18} aria-hidden="true" />
        Llamar
      </a>
      <a
        href={`https://wa.me/${cleanWhatsapp}?text=${message}`}
        target="_blank"
        rel="noreferrer"
        onClick={() => trackEvent("clic_agendar_cita", { source: "sticky_nav" })}
        aria-label="Agendar por WhatsApp"
        className="flex h-14 items-center justify-center gap-2 bg-[#25D366] text-sm font-semibold text-white"
      >
        <MessageCircle size={18} aria-hidden="true" />
        Agendar
      </a>
    </div>
  );
}
