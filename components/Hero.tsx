import Button from "./Button";

const metrics = [
  { value: "↓WIP  ↓TC", label: "Flujo óptimo" },
  { value: "D < TH", label: "Confiabilidad" },
  { value: "≥ 5%", label: "Ahorro operativo" },
];

export default function Hero() {
  return (
    <section id="hero" style={{ position: "relative", overflow: "hidden", padding: "0 48px", borderBottom: "0.5px solid rgba(208,206,200,0.3)", minHeight: "92vh", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>

      <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/hero-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center", zIndex: 0 }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(248,247,244,0.92) 0%, rgba(248,247,244,0.88) 35%, rgba(248,247,244,0.1) 55%, rgba(248,247,244,0) 70%)", zIndex: 1 }} />
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "120px", background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 100%)", zIndex: 2 }} />

      <div style={{ position: "relative", zIndex: 3, display: "flex", flexDirection: "column", paddingTop: "140px", maxWidth: "560px" }}>
        <h1 style={{ fontSize: "52px", fontWeight: 800, lineHeight: 1.02, letterSpacing: "-0.02em", color: "#0A0A0A", maxWidth: "640px", marginBottom: "20px" }}>
          Sistemas de producción para desarrolladoras y constructoras
        </h1>
        <p style={{ fontSize: "18px", fontWeight: 600, color: "#333333", lineHeight: 1.5, maxWidth: "480px", marginBottom: "32px" }}>
          Diseñados para controlar el plazo y reducir sobrecostos operativos
        </p>
        <div style={{ display: "inline-flex" }}>
          <Button variant="dark" href="#contact">
            Agenda un diagnóstico operativo
          </Button>
        </div>
      </div>

      <div style={{ position: "relative", zIndex: 3, display: "flex", alignItems: "center", gap: "48px", paddingTop: "24px", paddingBottom: "28px", borderTop: "0.5px solid rgba(208,206,200,0.5)", maxWidth: "560px" }}>
        {metrics.map((m, i) => (
          <div key={m.label} style={{ display: "flex", alignItems: "center", gap: "48px" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "22px", fontWeight: 800, color: "#0A0A0A", lineHeight: 1 }}>
                {m.value}
              </div>
              <div style={{ fontSize: "9px", color: "#666666", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "4px" }}>
                {m.label}
              </div>
            </div>
            {i < metrics.length - 1 && (
              <div style={{ width: "1px", height: "36px", background: "#D0CEC8" }} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
