import Link from "next/link";
import { doctor, diseases, services, symptoms } from "@/data";
import { generateHomeSchemas } from "@/lib/schemas";
import { formatCredentials } from "@/lib/credentials";
import StructuredData from "@/components/StructuredData";
import CardImageHeader from "@/components/CardImageHeader";
import HeroFlowMotif from "@/components/HeroFlowMotif";
import DoctorPhoto from "@/components/DoctorPhoto";
import AnimatedStat from "@/components/AnimatedStat";
import CertificationMedal from "@/components/CertificationMedal";
import SymptomWaveStrip from "@/components/SymptomWaveStrip";
import { Banknote, CreditCard, Landmark, MessageCircle, Phone, Wallet } from "lucide-react";

const paymentIcons: Record<string, typeof Banknote> = {
  Efectivo: Banknote,
  Transferencia: Landmark,
  "Tarjeta de débito": CreditCard,
  "Tarjeta de crédito": Wallet,
};

export default function Home() {
  const whatsappLink = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hola, Dra. ${doctor.name}. Me gustaría agendar una consulta.`
  )}`;

  return (
    <>
      <StructuredData data={generateHomeSchemas()} />

      {/* Hero: foto en marco "gota" (`.drop-frame`, DoctorPhoto.tsx) con el
          motivo propio "flujo" (3 trazos orgánicos con guiones animados de
          forma continua) detrás, asomando alrededor del marco — la
          animación se conserva íntegra, solo se le agregó el espacio real
          para la foto en vez de perderla al añadir la foto (instrucción
          explícita del usuario, 2026-11-24). */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-surface to-background px-4 py-24">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
              {doctor.specialistTitle} · {doctor.subspecialty} en {doctor.city}
            </span>
            <h1 className="font-heading mt-5 text-4xl font-bold leading-tight text-foreground md:text-5xl">
              Salud urológica y ginecológica, sin pena y con respuestas claras
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">{doctor.philosophy}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Agendar por WhatsApp
              </a>
              <Link
                href="/contacto"
                className="flex items-center gap-2 rounded-full border border-primary/30 px-7 py-4 font-semibold text-primary"
              >
                Ver ubicación y horario
              </Link>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">{formatCredentials(doctor)}</p>
          </div>

          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
            <div className="absolute inset-[-18%] opacity-80" aria-hidden="true">
              <HeroFlowMotif />
            </div>
            <div className="absolute inset-[6%]">
              <DoctorPhoto
                src={doctor.photo}
                alt={`${doctor.title} ${doctor.name}`}
                showTag={false}
                priority
                objectPositionClassName="object-[center_35%]"
              />
            </div>
          </div>
        </div>
      </section>

      {doctor.stats && doctor.stats.length > 0 && (
        <section aria-labelledby="stats-heading" className="border-y border-border bg-surface px-4 py-12">
          <h2 id="stats-heading" className="sr-only">
            Cifras del consultorio
          </h2>
          <div className="mx-auto grid max-w-4xl grid-cols-3 gap-6 text-center">
            {doctor.stats.map((stat, i) => (
              <AnimatedStat key={i} value={stat.value} label={stat.label} />
            ))}
          </div>
        </section>
      )}

      <section aria-labelledby="about-heading" className="px-4 py-20">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1fr_1.6fr] md:items-start">
          <DoctorPhoto src="/images/aboutme.jpg" alt={`${doctor.title} ${doctor.name} en su consultorio`} />
          <div>
            <h2 id="about-heading" className="font-heading text-2xl font-bold text-foreground md:text-3xl">
              Sobre {doctor.title} {doctor.name}
            </h2>
            <p className="mt-4 text-muted-foreground">{doctor.bio}</p>
            <p className="mt-4 text-xs text-muted-foreground">{formatCredentials(doctor)}</p>
          </div>
        </div>
      </section>

      {/* Certificaciones: medallas circulares con listón — reemplaza la
          tarjeta redonda+texto compartida por el resto del proyecto
          (AGENTS.md §1, hallazgo 2026-11-24), y usa una forma distinta del
          panal hexagonal de `dr-miguel-angel-esquinca` (construido el mismo día). */}
      {doctor.certifications.length > 0 && (
        <section aria-labelledby="certifications-heading" className="bg-surface px-4 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h2 id="certifications-heading" className="font-heading text-2xl font-bold text-foreground md:text-3xl">
              Certificaciones
            </h2>
            <div className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-10">
              {doctor.certifications.map((cert, i) => (
                <CertificationMedal key={`c-${i}`} name={cert.name} institution={cert.institution} year={cert.year} logoSrc={cert.logo} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section aria-labelledby="diseases-heading" className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between gap-4">
            <h2 id="diseases-heading" className="font-heading text-2xl font-bold text-foreground md:text-3xl">
              Enfermedades que Atendemos
            </h2>
            <Link href="/enfermedades" className="shrink-0 text-sm font-semibold text-primary hover:underline">
              Ver todas
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {diseases.slice(0, 6).map((disease, i) => (
              <article key={disease.id} className="group overflow-hidden rounded-[1.75rem] border border-border bg-background">
                <CardImageHeader src={disease.image} alt={disease.name} badge={i + 1} />
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-foreground">{disease.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{disease.description.slice(0, 110)}…</p>
                  <Link
                    href={`/enfermedades/${disease.slug}`}
                    className="mt-4 flex items-center justify-between rounded-2xl bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground"
                  >
                    Ver guía médica
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="services-heading" className="bg-surface px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between gap-4">
            <h2 id="services-heading" className="font-heading text-2xl font-bold text-foreground md:text-3xl">
              Servicios
            </h2>
            <Link href="/servicios" className="shrink-0 text-sm font-semibold text-primary hover:underline">
              Ver todos
            </Link>
          </div>
          <div className="mt-8 flex gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {services.map((service, i) => (
              <article
                key={service.id}
                className="group w-72 shrink-0 overflow-hidden rounded-[1.75rem] border border-border bg-background"
              >
                <CardImageHeader src={service.image} alt={service.name} badge={i + 1} />
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-foreground">{service.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{service.description.slice(0, 90)}…</p>
                  <Link
                    href={`/servicios/${service.slug}`}
                    className="mt-4 flex items-center justify-between rounded-2xl bg-secondary px-6 py-3.5 text-sm font-medium text-secondary-foreground"
                  >
                    Ver ficha
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Síntomas del Home: solo un subconjunto (no los 14), en fila "ola"
          de tokens circulares con imagen real — reemplaza la lista de
          píldoras de solo texto por una presentación nueva, ligada al
          motivo "flujo" del sitio (AGENTS.md §1, hallazgo 2026-11-24). */}
      <section aria-labelledby="symptoms-heading" className="bg-surface px-4 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 id="symptoms-heading" className="font-heading text-2xl font-bold text-foreground md:text-3xl">
            Síntomas que Atendemos
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
            Algunos de los síntomas más frecuentes en consulta.
          </p>
          <div className="mt-12">
            <SymptomWaveStrip
              items={symptoms.slice(0, 6).map((s) => ({ name: s.name, slug: s.slug, image: s.image }))}
            />
          </div>
          <Link href="/sintomas" className="mt-10 inline-block text-sm font-semibold text-primary hover:underline">
            Ver todos los síntomas →
          </Link>
        </div>
      </section>

      {/* Precio/Promoción: tarjeta partida en 2 (precio normal | promoción)
          con divisor curvo, en vez de la tarjeta centrada apilada
          compartida con otros sitios del proyecto, y sin reusar
          `.petal-card` (ya es la forma de las tarjetas de catálogo de este
          mismo sitio) — AGENTS.md §1, hallazgo 2026-11-24. */}
      <section aria-labelledby="price-heading" className="bg-surface px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 id="price-heading" className="font-heading text-center text-2xl font-bold text-foreground md:text-3xl">
            Precio de Consulta
          </h2>
          <div className="mt-10 grid overflow-hidden rounded-[2rem] border border-border bg-background md:grid-cols-2">
            <div className="p-8 text-center md:text-left">
              <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Consulta general</p>
              <p className="font-heading mt-2 text-4xl font-bold text-primary">${doctor.consultationPrice} MXN</p>
              <div className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start">
                {doctor.paymentMethods.map((method) => {
                  const Icon = paymentIcons[method] ?? Banknote;
                  return (
                    <span
                      key={method}
                      className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground"
                    >
                      <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                      {method}
                    </span>
                  );
                })}
              </div>
            </div>

            {doctor.promotion && (
              <div
                className="relative bg-accent/10 p-8 text-center md:text-left"
                style={{ clipPath: "polygon(6% 0, 100% 0, 100% 100%, 0 100%)" }}
              >
                <p className="text-xs font-bold uppercase tracking-wide text-accent">Promoción vigente</p>
                <p className="font-heading mt-2 text-xl font-bold text-foreground">{doctor.promotion.title}</p>
                <div className="mt-4 flex items-center justify-center gap-4 md:justify-start">
                  <span className="text-lg text-muted-foreground line-through">
                    ${doctor.promotion.originalPrice.toLocaleString("es-MX")} MXN
                  </span>
                  <span className="font-heading text-3xl font-bold text-accent">
                    ${doctor.promotion.promoPrice.toLocaleString("es-MX")} MXN
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA final: banda con degradado cálido propio de la paleta y el
          motivo de "flujo" del Hero repitiéndose aquí a baja opacidad, en
          vez de los 2 círculos difuminados en esquinas opuestas
          compartidos con otros sitios del proyecto. */}
      <section aria-labelledby="cta-heading" className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10 px-4 py-24 text-center">
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-1/2 -scale-x-100 opacity-[0.18]">
          <HeroFlowMotif />
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-1/2 opacity-[0.1]">
          <HeroFlowMotif />
        </div>
        <div className="relative mx-auto max-w-2xl rounded-[2.5rem] border border-primary/15 bg-background/70 px-6 py-12 shadow-sm backdrop-blur-sm sm:px-12">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
            Agenda tu consulta
          </span>
          <h2 id="cta-heading" className="font-heading mt-4 text-2xl font-bold text-foreground md:text-3xl">
            Da el siguiente paso en tu salud
          </h2>
          <p className="mt-3 text-muted-foreground">
            {doctor.title} {doctor.name} te acompaña en urología ginecológica, ginecología y obstetricia, con
            diagnósticos claros y un plan de tratamiento real.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Agendar Cita Ahora
            </a>
            <a
              href={`tel:${doctor.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-8 py-4 font-semibold text-primary"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Llamar al consultorio
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
