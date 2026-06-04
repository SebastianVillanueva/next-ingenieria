const metrics = [
  { value: "78%", desc: "PPC promedio en proyectos con sistema NEXT instalado en Capa 1", ref: "Benchmark Perú: 45–55%" },
  { value: "22%", desc: "Reducción de plazo con estrategia VDC + métricas auditables (Capa 2)", ref: "Ref: P2SL Berkeley · LCI 2024" },
  { value: "~100K", desc: "USD en ahorro operacional. Reducción de pérdidas y mejora de flujo.", ref: "Torre de Captación 04 · Quellaveco" },
];

export default function Evidence() {
  return (
    <section id="evidence" style={{ backgroundColor: "#F8F7F4", padding: "80px 48px", borderBottom: "0.5px solid #D0CEC8" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "end", marginBottom: "32px" }}>
        <h2 style={{ fontSize: "32px", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.05, color: "#0A0A0A" }}>
          Measured operational results.
        </h2>
        <p style={{ fontSize: "12px", color: "#666666", lineHeight: 1.8 }}>
          NEXT trabaja con métricas reales de producción, flujo y desempeño operacional.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1px", background: "#D0CEC8", border: "0.5px solid #D0CEC8", marginBottom: "16px" }}>
        {metrics.map((m, i) => (
          <div key={i} style={{ backgroundColor: "#F8F7F4", padding: "32px 28px", borderLeft: i > 0 ? "0.5px solid #D0CEC8" : "none" }}>
            <div style={{ fontSize: "48px", fontWeight: 800, color: "#0A0A0A", lineHeight: 1, marginBottom: "8px" }}>{m.value}</div>
            <p style={{ fontSize: "11px", color: "#666666", lineHeight: 1.8 }}>{m.desc}</p>
            <p style={{ fontSize: "10px", color: "#AAAAAA", marginTop: "14px" }}>{m.ref}</p>
          </div>
        ))}
      </div>
      <div style={{ backgroundColor: "#EEECEA", border: "0.5px solid #C8C6C0", padding: "32px 36px", display: "grid", gridTemplateColumns: "auto 1fr", gap: "36px", alignItems: "center" }}>
        <div style={{ borderRight: "0.5px solid #C8C6C0", paddingRight: "36px" }}>
          <p style={{ fontSize: "9px", color: "#888888", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "8px" }}>Case</p>
          <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#0A0A0A", lineHeight: 1.2 }}>Quellaveco</h3>
          <p style={{ fontSize: "12px", color: "#666666", marginTop: "4px" }}>Torre de Captación 04</p>
        </div>
        <div>
          <p style={{ fontSize: "12px", color: "#666666", lineHeight: 1.9 }}>Reducción de pérdidas operativas y mejora de flujo de producción. Sistema NEXT instalado en capas 1 y 2.</p>
          <div style={{ display: "flex", gap: "32px", alignItems: "center", marginTop: "16px" }}>
            <div>
              <div style={{ fontSize: "22px", fontWeight: 800, color: "#0A0A0A" }}>~USD 100K</div>
              <p style={{ fontSize: "10px", color: "#888888", marginTop: "2px" }}>Ahorro operacional medido</p>
            </div>
            <div style={{ width: "1px", height: "40px", background: "#C8C6C0" }} />
            <div>
              <div style={{ fontSize: "22px", fontWeight: 800, color: "#0A0A0A" }}>Capas 1+2</div>
              <p style={{ fontSize: "10px", color: "#888888", marginTop: "2px" }}>LPS + VDC instalados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
