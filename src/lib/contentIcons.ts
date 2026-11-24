import {
  Baby,
  Droplets,
  Flame,
  HeartPulse,
  Moon,
  ShieldAlert,
  Stethoscope,
  Thermometer,
  type LucideIcon,
} from "lucide-react";

/**
 * Heurística de palabras clave → ícono contextual de lucide-react, propia de
 * este sitio (vocabulario de uro-ginecología y obstetricia), para convertir
 * listas con viñetas en grids de tarjetas con ícono (AGENTS.md §1.2 — nunca
 * el mismo ícono repetido en toda la lista).
 */
export function iconForText(text: string): LucideIcon {
  const t = text.toLowerCase();
  if (t.includes("embarazo") || t.includes("parto") || t.includes("cesárea") || t.includes("cesarea") || t.includes("obstétric") || t.includes("obstetric") || t.includes("gestac")) return Baby;
  if (t.includes("mama") || t.includes("seno")) return HeartPulse;
  if (t.includes("bochorno") || t.includes("sofoco") || t.includes("calor") || t.includes("ardor")) return Flame;
  if (t.includes("fiebre") || t.includes("temperatura") || t.includes("calentura")) return Thermometer;
  if (t.includes("fatiga") || t.includes("cansancio") || t.includes("sueño") || t.includes("ánimo") || t.includes("animo")) return Moon;
  if (t.includes("orina") || t.includes("vejiga") || t.includes("urinari") || t.includes("flujo") || t.includes("sangrad") || t.includes("menstru") || t.includes("period") || t.includes("ciclo")) return Droplets;
  if (t.includes("urgenc") || t.includes("alarma") || t.includes("grave") || t.includes("intenso")) return ShieldAlert;
  return Stethoscope;
}
