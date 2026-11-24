import Link from "next/link";
import type { Route } from "next";
import { doctor, diseases, services, symptoms } from "@/data";
import Logo from "./Logo";

const MAX_LINKS = 6;

export default function Footer() {
  const columns = [
    { title: "Enfermedades", href: "/enfermedades", items: diseases.map((d) => ({ label: d.name, href: `/enfermedades/${d.slug}` })) },
    { title: "Servicios", href: "/servicios", items: services.map((s) => ({ label: s.name, href: `/servicios/${s.slug}` })) },
    { title: "Síntomas", href: "/sintomas", items: symptoms.map((s) => ({ label: s.name, href: `/sintomas/${s.slug}` })) },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Ícono solo, centrado — nombre y especialidad como texto HTML
            real debajo, también centrados (corrección 2026-11-24: el
            lockup completo quedaba a la izquierda y su texto incrustado en
            la imagen era ilegible a este tamaño). */}
        <div className="flex flex-col items-center text-center">
          <Logo height={92} />
          <p className="mt-3 font-serif text-lg font-bold uppercase tracking-wide text-background">
            {doctor.title} {doctor.name}
          </p>
          <p className="mt-1 text-sm opacity-80">{doctor.specialistTitle}</p>
        </div>
        <p className="mx-auto mt-4 max-w-md text-center text-sm opacity-80">{doctor.philosophy}</p>
        <address className="mx-auto mt-4 max-w-sm text-center not-italic text-sm opacity-80">
          {doctor.address}
          <br />
          {doctor.schedule}
          <br />
          Tel: {doctor.phone}
        </address>

        <nav aria-label="Mapa del sitio" className="mt-12 grid gap-8 border-t border-background/20 pt-8 sm:grid-cols-3">
          {columns.map((col) => (
            <div key={col.title}>
              <Link href={col.href as Route} className="text-sm font-semibold uppercase tracking-wide opacity-90 hover:opacity-100">
                {col.title}
              </Link>
              <ul className="mt-3 space-y-2 text-sm opacity-70">
                {col.items.slice(0, MAX_LINKS).map((item) => (
                  <li key={item.href}>
                    <Link href={item.href as Route} className="hover:opacity-100 hover:underline">
                      {item.label}
                    </Link>
                  </li>
                ))}
                {col.items.length > MAX_LINKS && (
                  <li>
                    <Link href={col.href as Route} className="underline hover:opacity-100">
                      Ver todos
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </nav>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-background/20 pt-6 text-xs opacity-70">
          <Link href="/aviso-de-privacidad" className="hover:underline">
            Aviso de Privacidad
          </Link>
        </div>

        <p className="mt-6 max-w-2xl text-xs opacity-60">
          El contenido de este sitio es informativo y educativo; no sustituye una consulta médica profesional.
        </p>
      </div>
    </footer>
  );
}
