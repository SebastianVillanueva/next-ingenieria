const problems = [
  "La información no llega a tiempo para tomar decisiones.",
  "La producción en campo no se conecta con los resultados financieros del proyecto.",
  "El plazo se vuelve difícil de controlar o nunca se controló realmente.",
  "Los equipos terminan reaccionando en lugar de anticiparse.",
];

export default function Problem() {
  return (
    <section id="problem" className="bg-next-bg-alt px-12 py-20 border-b border-next-border">
      <div className="blk-label">02 — El problema</div>
      <div className="grid grid-cols-2 gap-16">
        <div>
          <h2 className="font-display font-extrabold text-[26px] leading-[1.1] text-next-black" style={{ letterSpacing: "-0.02em" }}>
            Los proyectos son cada vez más complejos.
            <br />
            <span className="text-next-blue">Las operaciones no están al ritmo.</span>
          </h2>
        </div>
        <div>
          <p className="font-mono text-[12px] text-next-text-3 leading-[2] mb-6">
            El problema de capacidad operacional es mantener el control mientras la complejidad de los proyectos crece o el número de proyectos en simultáneo crece.
          </p>
          <div className="flex flex-col">
            {problems.map((p, i) => (
              <div key={i} className={`flex gap-[14px] py-[14px] ${i < problems.length - 1 ? "border-b border-next-border" : ""}`}>
                <span className="font-mono text-[12px] text-next-black flex-shrink-0">—</span>
                <span className="font-mono text-[12px] text-next-text-3 leading-[1.7]">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}