const layers = [
  {
    num: "01",
    tag: "Planeamiento",
    title: "Production Planning & Management",
    desc: "Implementación de rutinas operativas y planificación colaborativa para aumentar confiabilidad y control de producción.",
    result: "→ Visibilidad operativa en semanas",
    includes: [{ label: "Capa 01", highlight: false }],
    includeText: "LPS · Rutinas semanales · PPC · Causas de no cumplimiento",
  },
  {
    num: "02",
    tag: "Estrategia",
    title: "Operational Strategy & Metrics",
    desc: "Diseño de métricas y sistemas de seguimiento para conectar producción, plazo y resultados del negocio.",
    result: "→ Decisiones basadas en datos, no percepción",
    includes: [{ label: "Capa 01", highlight: false }, { label: "Capa 02", highlight: false }],
    includeText: "Todo lo anterior · Estrategia VDC · Métricas de producción · Sistema de información",
  },
  {
    num: "03",
    tag: "Sistemas",
    subTag: "Mayor complejidad",
    title: "Production System Design",
    desc: "Análisis de flujo, variabilidad y cuellos de botella para mejorar el desempeño operativo y atender proyectos más complejos.",
    result: "→ Menor variabilidad · Mayor capacidad de ejecución",
    includes: [{ label: "Capa 01", highlight: false }, { label: "Capa 02", highlight: false }, { label: "Capa 03", highlight: true }],
    includeText: "Sistema completo · PPM · Optimización de flujos · Simulación de escenarios",
  },
];

export default function Solution() {
  return (
    <section id="solution" className="bg-next-black px-12 py-20 border-b border-next-border-dk">
      <div className="blk-label-dark">03 — La solución</div>
      <div className="grid grid-cols-2 gap-12 items-end mb-3">
        <h2 className="font-display font-extrabold text-[32px] leading-[1.05] text-next-text-on-dk" style={{ letterSpacing: "-0.02em" }}>
          Tres capas acumulativas.<br />El diagnóstico define la entrada.
        </h2>
        <p className="font-mono text-[12px] text-next-text-2 leading-[1.8]">
          En NEXT entendemos el problema y te ofrecemos una solución a la medida.
        </p>
      </div>
      <p className="font-mono text-[10px] mb-6 pb-[18px] border-b border-next-border-xdk" style={{ color: "#333333", letterSpacing: "0.1em" }}>
        Pasa el cursor sobre cada capa para ver qué incluye →
      </p>
      <div className="flex flex-col" style={{ gap: "1px", background: "#2A2A2A", border: "0.5px solid #2A2A2A" }}>
        {layers.map((layer) => (
          <div key={layer.num} className="layer-row">
            <div className="flex" style={{ minHeight: "120px" }}>
              <div className="layer-bar">
                <div>
                  <div className="layer-num">{layer.num}</div>
                  <div className="layer-tag">{layer.tag}</div>
                  {layer.subTag && (
                    <div className="font-mono" style={{ fontSize: "8px", letterSpacing: "0.08em", marginTop: "5px", color: "#333333" }}>
                      {layer.subTag}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex-1 p-7">
                <h3 className="font-display font-bold text-[15px] text-next-text-on-dk mb-3">{layer.title}</h3>
                <p className="font-mono text-[11px] text-next-text-2 leading-[1.8]">{layer.desc}</p>
                <p className="font-mono text-[10px] text-next-text-4 mt-3 pt-3" style={{ borderTop: "0.5px solid #1E1E1E" }}>{layer.result}</p>
              </div>
            </div>
            <div className="layer-included">
              {layer.includes.map((inc, i) => (
                <span key={inc.label} className="flex items-center gap-2">
                  <span className="font-mono text-[9px] px-[10px] py-1" style={{ letterSpacing: "0.05em", color: inc.highlight ? "#F8F7F4" : "#888888", background: inc.highlight ? "#2A2A2A" : "#1A1A1A", border: inc.highlight ? "0.5px solid #666" : "0.5px solid #333" }}>
                    {inc.label}
                  </span>
                  {i < layer.includes.length - 1 && (
                    <span className="font-mono text-[12px]" style={{ color: "#333333" }}>+</span>
                  )}
                </span>
              ))}
              <span className="font-mono text-[10px] text-next-text-2 ml-1">{layer.includeText}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}