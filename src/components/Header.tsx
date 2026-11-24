import Link from "next/link";
import type { Route } from "next";
import { Phone, MessageCircle } from "lucide-react";
import { doctor } from "@/data";
import { formatCredentials } from "@/lib/credentials";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

const navItems: { label: string; href: Route }[] = [
  { label: "Inicio", href: "/" },
  { label: "Enfermedades", href: "/enfermedades" },
  { label: "Servicios", href: "/servicios" },
  { label: "Síntomas", href: "/sintomas" },
  { label: "Contacto", href: "/contacto" },
];

/**
 * Header universal de una sola barra, visible en todos los breakpoints.
 * Composición propia del registro: CTAs (Llamar + WhatsApp) SIEMPRE en la
 * IZQUIERDA en cualquier tamaño de pantalla, logo SIEMPRE al CENTRO, y la
 * zona DERECHA alterna entre nav completo (desktop) y hamburguesa (mobile)
 * — a diferencia de Ana Laura, donde el lado izquierdo cambia de contenido
 * entre mobile/desktop; aquí los 2 extremos quedan fijos y solo la zona
 * derecha cambia de forma. Franja de credenciales/COFEPRIS arriba de todo.
 */
export default function Header() {
  const cleanWhatsapp = doctor.whatsapp.replace(/\D/g, "");

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="bg-primary/5 px-4 py-1 text-center text-xs text-muted-foreground">
        {formatCredentials(doctor)}
      </div>
      <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 py-3">
        <div className="col-start-1 flex items-center gap-2">
          <a
            href={`tel:${doctor.phone}`}
            aria-label="Llamar al consultorio"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-primary/30 text-primary transition-colors hover:bg-primary/10 sm:inline-flex"
          >
            <Phone size={16} aria-hidden="true" />
          </a>
          <a
            href={`https://wa.me/${cleanWhatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-[#25D366] px-3.5 py-2 text-xs font-semibold text-white sm:px-4"
          >
            <MessageCircle size={14} aria-hidden="true" className="sm:hidden" />
            WhatsApp
          </a>
        </div>

        <Link
          href="/"
          aria-label={`${doctor.title} ${doctor.name}`}
          className="col-start-2 flex flex-col items-center justify-self-center"
        >
          <Logo height={56} withName nameClassName="text-base hidden sm:inline" />
          <span className="mt-0.5 hidden text-[10px] font-semibold uppercase tracking-wide text-muted-foreground sm:block">
            {doctor.specialistTitle}
          </span>
        </Link>

        <div className="col-start-3 flex items-center justify-end">
          <nav aria-label="Principal" className="hidden items-center gap-5 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/70 transition-colors duration-150 hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="md:hidden">
            <MobileMenu items={navItems} />
          </div>
        </div>
      </div>
    </header>
  );
}
