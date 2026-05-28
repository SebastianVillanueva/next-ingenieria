const steps = [
  {
    num: "01",
    title: "Diagnóstico",
    time: "1 – 2 semanas",
    desc: "Identificamos la capa de entrada y el problema prioritario. Las problemáticas identificadas no son el problema. El problema se diagnostica.",
  },
  {
    num: "02",
    title: "Diseño del sistema",
    time: "2 – 4 semanas",
    desc: "Diseñamos el sistema operativo a la medida del proyecto u organización. Sistema documentado, equipo habilitado.",
  },
  {
    num: "03",
    title: "Instalación y medición",
    time: "Desde semana 1",
    desc: "Instalamos rutinas, métricas y sistemas de seguimiento directamente en la operación. La medición empieza desde la semana 1.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="bg-next-bg-alt px-12 py-20 border-b border-next-border"
    >
      <div className="blk-label">04 — Cómo opera NEXT</div>

      <h2 className="font-display font-extrabold text-[32px] tracking-[-0.02em] leading-[1.05] text-next-black mb-9">
        Sistemas operativos instalados en campo.
      </h2>

      <div
        className="grid grid-cols-3"
        style={{ gap: "1px", background: "#C8C6C0", border: "0.5px solid #C8C6C0" }}
      >
        {steps.map((step, i) => (
          <div
            key={step.num}
            className="pstep"
            style={
              i === 1
                ? { borderLeft: "0.5px solid #C8C6C0", borderRight: "0.5px solid #C8C6C0" }
                : {}
            }
          >
            <div className="step-num">{step.num}</div>
            <h3 className="font-display font-bold text-[16px] text-next-black mb-[6px]">
              {step.title}
            </h3>
            <p className="font-mono text-[10px] text-next-text-4 uppercase tracking-[0.15em] mb-[14px]">
              {step.time}
            </p>
            <p className="font-mono text-[11px] text-next-text-3 leading-[1.8]">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}