/**
 * Motivo decorativo del Hero: "flujo" — 3 trazos orgánicos en forma de S,
 * inspirados en las líneas de silueta del logotipo real (no una copia
 * literal del isotipo completo, a diferencia de otros sitios del registro),
 * con un patrón de guiones que viaja de forma CONTINUA e infinita a lo
 * largo del trazo (`.flow-path`, ver globals.css) — nunca una sola vez al
 * cargar como el trazo EKG de Tania. Decorativo, `aria-hidden`.
 */
export default function HeroFlowMotif() {
  return (
    <svg
      viewBox="0 0 520 620"
      aria-hidden="true"
      className="pointer-events-none h-full w-full"
      fill="none"
    >
      <path
        d="M120 10 C40 90, 200 150, 90 260 C-10 360, 180 420, 110 540 C70 600, 120 610, 150 615"
        stroke="var(--color-primary)"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.35"
        className="flow-path"
      />
      <path
        d="M400 0 C480 100, 320 180, 420 280 C510 370, 350 440, 410 560 C440 610, 400 618, 370 620"
        stroke="var(--color-accent)"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.3"
        className="flow-path"
        style={{ animationDelay: "-3s" }}
      />
      <path
        d="M260 30 C220 140, 300 220, 250 320 C200 420, 300 480, 260 590"
        stroke="var(--color-secondary)"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.3"
        className="flow-path"
        style={{ animationDelay: "-6s" }}
      />
    </svg>
  );
}
