const metrics = [
  {
    value: "78%",
    desc: "PPC promedio en proyectos con sistema NEXT instalado en Capa 1",
    ref: "Benchmark Perú: 45–55%",
  },
  {
    value: "22%",
    desc: "Reducción de plazo con estrategia VDC + métricas auditables (Capa 2)",
    ref: "Ref: P2SL Berkeley · LCI 2024",
  },
  {
    value: "~100K",
    desc: "USD en ahorro operacional. Reducción de pérdidas y mejora de flujo.",
    ref: "Torre de Captación 04 · Quellaveco",
  },
];

export default function Evidence() {
  return (
    <section
      id="evidence"
      className="bg-next-bg px-12 py-20 border-b border-next-border"
    >
      <div className="blk-label">05 — Evidencia</div>

      <div className="grid grid-cols-2 gap-12 items-end mb-8">
        <h2 className="font-display font-extrabold text-[32px] tracking-[-0.02em] leading-[1.05] text-next-black">
          Measured operational results.
        </h2>
        <p className="font-mono text-[12px] text-next-text-3 leading-[1.8]">
          NEXT trabaja con métricas reales de producción, flujo y desempeño operacional.
        </p>
      </div>

      <div
        className="grid grid-cols-3 mb-4"
        style={{ gap: "1px", background: "#D0CEC8", border: "0.5px solid #D0CEC8" }}
      >
        {metrics.map((m, i) => (
          <div
            key={i}
            className="bg-next-bg p-8"
            style={
              i === 1
                ? { borderLeft: "0.5px solid #D0CEC8", borderRight: "0.5px solid #D0CEC8" }
                : {}
            }
          >
            <div className="font-display font-extrabold text-[48px] text-next-black leading-none mb-2">
              {m.value}
            </div>
            <p className="font-mono text-[11px] text-next-text-3 leading-[1.8]">
              {m.desc}
            </p>
            <p className="font-mono text-[10px] text-next-text-5 mt-[14px]">
              {m.ref}
            </p>
          </div>
        ))}
      </div>

      <div
        className="bg-next-bg-alt grid items-center gap-9 p-8"
        style={{
          border: "0.5px solid #C8C6C0",
          gridTemplateColumns: "auto 1fr",
        }}
      >
        <div className="pr-9" style={{ borderRight: "0.5px solid #C8C6C0" }}>
          <p className="font-mono text-[9px] text-next-text-4 uppercase tracking-[0.2em] mb-2">
            Case
          </p>
          <h3 className="font-display font-extrabold text-[22px] text-next-black leading-[1.2]">
            Quellaveco
          </h3>
          <p className="font-mono text-[12px] text-next-text-3 mt-1">
            Torre de Captación 04
          </p>
        </div>

        <div>
          <p className="font-mono text-[12px] text-next-text-3 leading-[1.9]">
            Reducción de pérdidas operativas y mejora de flujo de producción.
            Sistema NEXT instalado en capas 1 y 2.
          </p>
          <div className="flex items-center gap-8 mt-4">
            <div>
              <div className="font-display font-extrabold text-[22px] text-next-black">
                ~USD 100K
              </div>
              <p className="font-mono text-[10px] text-next-text-4 mt-[2px]">
                Ahorro operacional medido
              </p>
            </div>
            <div className="w-px h-10 bg-next-border-md" />
            <div>
              <div className="font-display font-extrabold text-[22px] text-next-black">
                Capas 1+2
              </div>
              <p className="font-mono text-[10px] text-next-text-4 mt-[2px]">
                LPS + VDC instalados
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}