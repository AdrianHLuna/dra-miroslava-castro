import type { Metadata } from "next";
import type { Route } from "next";
import { notFound } from "next/navigation";
import { diseases, symptoms } from "@/data";
import { generateSymptomSchemas } from "@/lib/schemas";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import AlarmSignsSection from "@/components/AlarmSignsSection";
import FloatingButtons from "@/components/FloatingButtons";
import CardImageHeader from "@/components/CardImageHeader";
import DetailSidebar from "@/components/DetailSidebar";
import FaqAccordion from "@/components/FaqAccordion";
import IconCardList from "@/components/IconCardList";

export const dynamicParams = false;

export function generateStaticParams() {
  return symptoms.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/sintomas/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const symptom = symptoms.find((s) => s.slug === slug);
  if (!symptom) return {};

  return {
    title: symptom.seo.title,
    description: symptom.seo.description,
    keywords: symptom.seo.keywords,
    alternates: { canonical: `/sintomas/${symptom.slug}` },
    openGraph: {
      title: symptom.seo.title,
      description: symptom.seo.description,
      url: `/sintomas/${symptom.slug}`,
      type: "article",
      locale: "es_MX",
    },
  };
}

export default async function SymptomPage(props: PageProps<"/sintomas/[slug]">) {
  const { slug } = await props.params;
  const symptom = symptoms.find((s) => s.slug === slug);
  if (!symptom) notFound();

  const relatedConditions = diseases.filter((d) => symptom.relatedConditions.includes(d.id));
  const related = relatedConditions.map((d) => ({ name: d.name, href: `/enfermedades/${d.slug}` as Route }));

  return (
    <>
      <StructuredData data={generateSymptomSchemas(symptom)} />
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Síntomas", href: "/sintomas" },
          { label: symptom.name },
        ]}
      />

      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-20 lg:grid-cols-[300px_1fr]">
        <DetailSidebar related={related} />

        <article>
          <header className="mb-6">
            <CardImageHeader src={symptom.image} alt={symptom.name} aspect="16/10" />
            <h1 className="font-heading mt-6 text-3xl font-bold text-foreground">{symptom.name}</h1>
          </header>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">
              ¿Qué significa {symptom.name.toLowerCase()}?
            </h2>
            <p className="mt-3 text-muted-foreground">{symptom.description}</p>
          </section>

          <AlarmSignsSection signs={symptom.alarmSigns} />

          <section className="mt-10">
            <h2 className="font-heading text-xl font-semibold text-foreground">Causas Posibles</h2>
            <div className="mt-4">
              <IconCardList items={symptom.causes} />
            </div>
          </section>

          <section className="petal-card mt-10 border border-secondary/30 bg-surface p-6">
            <h2 className="font-heading text-lg font-semibold text-foreground">¿Por qué consultar?</h2>
            <p className="mt-2 text-muted-foreground">{symptom.whyConsult}</p>
          </section>

          {symptom.faqs && symptom.faqs.length > 0 && (
            <section className="mt-10">
              <h2 className="font-heading text-xl font-semibold text-foreground">Preguntas Frecuentes</h2>
              <div className="mt-4">
                <FaqAccordion faqs={symptom.faqs} />
              </div>
            </section>
          )}
        </article>
      </div>

      <FloatingButtons context={symptom.name.toLowerCase()} />
    </>
  );
}
