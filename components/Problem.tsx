"use client";
import { useEffect, useRef, useState } from "react";

function FadeIn({ children, delay = 0, direction = "up" }: { children: React.ReactNode; delay?: number; direction?: "up" | "left" | "right" }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (visible) return "translate(0, 0)";
    if (direction === "left") return "translate(-40px, 0)";
    if (direction === "right") return "translate(40px, 0)";
    return "translate(0, 28px)";
  };

  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: getTransform(),
      transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

const symptoms1 = [
  "El flujo de caja se vuelve más sensible.",
  "El costo financiero de la operación aumenta.",
  "El plazo empieza a convertirse en una fuente constante de presión.",
];

const symptoms2 = [
  "La información no llega a tiempo para tomar decisiones.",
  "El avance de producción no refleja el costo operativo semanal.",
  "Y para recuperar el cronograma normalmente se asignan más recursos, más presión y más costo operativo.",
];

export default function Problem() {
  return (
    <section id="problem" style={{ backgroundColor: "#EEECEA", padding: "120px 48px", borderBottom: "0.5px solid #D0CEC8" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "80px" }}>

        {/* Grupo 1 — H1 centrado */}
        <FadeIn delay={0}>
          <h2 style={{ fontSize: "48px", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#0A0A0A", textAlign: "center", whiteSpace: "nowrap" }}>
            Los proyectos son cada vez más complejos y exigentes.
          </h2>
          <p style={{ fontSize: "38px", fontWeight: 800, color: "#2563EB", textAlign: "center", marginTop: "16px", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            Las operaciones no siempre evolucionan al mismo ritmo.
          </p>
        </FadeIn>

        {/* Grupo 2 — Intro */}
        <FadeIn delay={0}>
          <p style={{ fontSize: "20px", color: "#444444", lineHeight: 1.8, fontWeight: 500, textAlign: "center" }}>
            Cuando esto sucede, suelen aparecer los mismos síntomas:
          </p>
        </FadeIn>

        {/* Grupos 3 y 4 — 2 columnas */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px" }}>
          <FadeIn delay={0} direction="left">
            <div style={{ display: "flex", flexDirection: "column" }}>
              {symptoms1.map((s, i) => (
                <div key={i} style={{ padding: "16px 0", borderBottom: i < symptoms1.length - 1 ? "0.5px solid #D0CEC8" : "none" }}>
                  <span style={{ fontSize: "20px", color: "#555555", lineHeight: 1.6 }}>{s}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={1400} direction="right">
            <div style={{ display: "flex", flexDirection: "column" }}>
              {symptoms2.map((s, i) => (
                <div key={i} style={{ padding: "16px 0", borderBottom: i < symptoms2.length - 1 ? "0.5px solid #D0CEC8" : "none" }}>
                  <span style={{ fontSize: "20px", color: "#555555", lineHeight: 1.6 }}>{s}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Grupo 5 — Cierre */}
        <FadeIn delay={0}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", paddingTop: "20px", borderTop: "0.5px solid #C8C6C0", maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <p style={{ fontSize: "26px", fontWeight: 700, color: "#0A0A0A", lineHeight: 1.7 }}>
              El problema empieza cuando la complejidad crece más rápido que la capacidad operativa de la organización.
            </p>
            <p style={{ fontSize: "24px", color: "#0A0A0A", lineHeight: 1.7 }}>
              Lo que hoy es un problema de proyecto, mañana se convierte en una limitación para el crecimiento de toda la organización.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
