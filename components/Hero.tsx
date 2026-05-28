import Button from "./Button";

const metrics = [
  { value: "78%",   label: "PPC promedio · Sistema NEXT" },
  { value: "4w",    label: "A visibilidad operativa completa" },
  { value: "~100K", label: "USD ahorro · Quellaveco" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-next-bg px-12 pt-[100px] pb-[96px] border-b border-next-border"
    >
      <div className="hero-grid absolute inset-0 pointer-events-none" />

      <p className="relative font-mono text-[10px] text-next-text-4 uppercase tracking-[0.2em] mb-5">
        Operational Intelligence for Construction
      </p>

      <h1 className="relative font-display font-extrabold text-[52px] leading-[1.0] tracking-[-0.03em] text-next-black max-w-[640px] mb-[18px]">
        Operational Intelligence
        <br />
        for{" "}
        <span className="border-b-[3px] border-next-black">development</span> &
        <br />
        construction.
      </h1>

      <p className="relative font-mono text-[13px] text-next-text-2 leading-[1.8] max-w-[480px] mb-3">
        NEXT diseña e instala sistemas operativos para constructoras e
        inmobiliarias que necesitan mejorar confiabilidad, visibilidad y
        capacidad de ejecución.
      </p>

      <p className="relative font-mono text-[11px] text-next-text-4 tracking-[0.1em] mb-12">
        Planeamiento · Sistemas de producción · Métricas · Tecnología
      </p>

      <div className="relative">
        <Button variant="dark" href="#contact">
          Agenda un diagnóstico operativo
        </Button>
      </div>

      <div className="relative flex items-center gap-14 mt-20 pt-10 border-t border-next-border">
        {metrics.map((m, i) => (
          <div key={m.label} className="flex items-center gap-14">
            <div>
              <div className="font-display font-extrabold text-[32px] text-next-black leading-none">
                {m.value}
              </div>
              <div className="font-mono text-[10px] text-next-text-4 uppercase tracking-[0.1em] mt-1">
                {m.label}
              </div>
            </div>
            {i < metrics.length - 1 && (
              <div className="w-px h-10 bg-next-border" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}