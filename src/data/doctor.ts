import type { DoctorProfile } from "@/types/schema";

export const doctor: DoctorProfile = {
  name: "Miroslava Castro",
  title: "Dra.",
  specialty: "Urología Ginecológica y Obstetricia",
  specialistTitle: "Médico Ginecoobstetra",
  subspecialty: "Urología Ginecológica",
  cedula: "7933154",
  cedulaEspecialidad: "10775334",
  phone: "+525555687851",
  whatsapp: "+525555687851",
  // Email no confirmado por la doctora — placeholder solo para satisfacer el
  // schema (requerido por JSON-LD); nunca se muestra en la UI (AGENTS.md §9).
  email: "contacto@dra-miroslava-castro.com",
  address:
    "Camino Sta. Teresa 1055-S, Int. #880, Col. Héroes de Padierna, La Magdalena Contreras, CP 10700, Ciudad de México",
  city: "Ciudad de México",
  state: "Ciudad de México",
  country: "México",
  googleMapsUrl:
    "https://www.google.com/maps?q=" +
    encodeURIComponent(
      "Camino Santa Teresa 1055, Héroes de Padierna, La Magdalena Contreras, Ciudad de México"
    ),
  consultationPrice: 1800,
  promotion: {
    title: "Check-up Ginecológico",
    originalPrice: 3000,
    promoPrice: 2500,
  },
  paymentMethods: ["Efectivo", "Transferencia", "Tarjeta de débito", "Tarjeta de crédito"],
  schedule: "Lunes a viernes de 10:00 a 19:00. Sábados de 9:00 a 14:00.",
  openingHours: ["Mo-Fr 10:00-19:00", "Sa 09:00-14:00"],
  acceptingNewPatients: true,
  photo: "/images/hero.jpg",
  bio:
    "La Dra. Miroslava Castro es médico ginecoobstetra con subespecialidad en Urología Ginecológica, enfocada en el diagnóstico y tratamiento de los trastornos del piso pélvico y las vías urinarias en la mujer, además de la atención integral de la salud ginecológica y obstétrica. A lo largo de su práctica clínica en la Ciudad de México ha atendido a más de 10,000 pacientes y realizado más de 5,000 procedimientos y cirugías, con más de 10 años de experiencia. Su consulta combina el seguimiento ginecológico y obstétrico habitual —desde el control del embarazo hasta la prevención oncológica— con el manejo especializado de condiciones que suelen pasar desapercibidas o se viven con pena, como la incontinencia urinaria, el prolapso de órganos pélvicos o la vejiga hiperactiva.",
  philosophy:
    "La salud urológica y ginecológica de una mujer no debería ser un tema incómodo ni postergado: cada consulta busca dar un diagnóstico claro y un plan de tratamiento real, con la confianza y el tiempo que cada etapa de la vida de la paciente requiere.",
  experience: [],
  stats: [
    { label: "Pacientes atendidas", value: "+10,000" },
    { label: "Procedimientos realizados", value: "+5,000" },
    { label: "Años de experiencia", value: "+10" },
  ],
  certifications: [
    {
      name: "Consejo Mexicano de Ginecología y Obstetricia",
      institution: "Consejo Mexicano de Ginecología y Obstetricia",
      // Logo oficial real descargado de cmgo.org.mx (AGENTS.md §6).
      logo: "/institution-logos/cmgo.png",
    },
    {
      name: "Consejo de Urología Ginecológica",
      institution: "Colegio Mexicano de Urología Ginecológica",
      // Logo oficial real descargado de cmug.mx (AGENTS.md §6).
      logo: "/institution-logos/cmug.png",
    },
  ],
  // El intake no especifica la institución de ninguna de las 2 cédulas —
  // se deja vacío en vez de inventar una universidad (AGENTS.md, "nunca
  // inventar cédulas, precios ni estadísticas"); el grado y la cédula
  // reales ya se muestran en la franja de credenciales y en "Sobre la
  // doctora" vía `cedula`/`cedulaEspecialidad`.
  education: [],
  testimonials: [],
  sameAs: [],
  ga4Id: undefined,
};
