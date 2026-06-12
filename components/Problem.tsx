"use client";
import { useEffect, useRef, useState } from "react";

function FadeIn({ children, delay = 0, direction = "up" }: { children: React.ReactNode; delay?: number; direction?: "up" | "left" | "right" }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
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
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: getTransform(), transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms` }}>
      {children}
    </div>
  );
}

const symptoms1 = [
  "El flujo de caja se vuelve más sensible",
  "El costo financiero de la operación aumenta",
  "Los retrasos de obra empiezan a afectar la rentabilidad del proyecto",
];
const symptoms2 = [
  "La información no llega a tiempo para tomar decisiones",
  "El avance de producción no refleja el costo operativo semanal",
  "Y para recuperar el plazo se asignan más recursos, aumentando el costo operativo",
];

export default function Problem() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section id="problem" style={{ backgroundColor: "#F8F7F4", padding: isMobile ? "56px 24px 40px" : "80px 96px 48px 96px", borderBottom: "0.5px solid #D0CEC8" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "32px" }}>

        <FadeIn delay={0}>
          <h2 style={{ fontSize: isMobile ? "26px" : "38px", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#0A0A0A", textAlign: isMobile ? "left" : "center", whiteSpace: "normal" }}>
            Los proyectos son cada vez más complejos y exigentes.
          </h2>
          <p style={{ fontSize: isMobile ? "23px" : "34px", fontWeight: 800, color: "#555555", textAlign: isMobile ? "left" : "center", marginTop: "12px", letterSpacing: "-0.03em", lineHeight: 1.2 }}>
            Las operaciones no siempre evolucionan al mismo ritmo.
          </p>
        </FadeIn>

        <FadeIn delay={0}>
          <p style={{ fontSize: isMobile ? "16px" : "20px", color: "#444444", lineHeight: 1.8, fontWeight: 500, textAlign: isMobile ? "left" : "center" }}>
            Cuando esto sucede, suelen aparecer los mismos síntomas:
          </p>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? "0" : "48px" }}>
          <FadeIn delay={0} direction="left">
            <div style={{ display: "flex", flexDirection: "column" }}>
              {symptoms1.map((s, i) => (
                <div key={i} style={{ padding: "14px 0", borderBottom: i < symptoms1.length - 1 ? "0.5px solid #D0CEC8" : "none" }}>
                  <span style={{ fontSize: isMobile ? "16px" : "20px", color: "#555555", lineHeight: 1.6 }}>{s}</span>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={isMobile ? 0 : 1400} direction="right">
            <div style={{ display: "flex", flexDirection: "column" }}>
              {symptoms2.map((s, i) => (
                <div key={i} style={{ padding: "14px 0", borderBottom: i < symptoms2.length - 1 ? "0.5px solid #D0CEC8" : "none" }}>
                  <span style={{ fontSize: isMobile ? "16px" : "20px", color: "#555555", lineHeight: 1.6 }}>{s}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0}>
          <div style={{ paddingTop: "20px", borderTop: "0.5px solid #C8C6C0", maxWidth: "800px", margin: "0 auto", textAlign: isMobile ? "left" : "center" }}>
            <p style={{ fontSize: isMobile ? "23px" : "34px", fontWeight: 700, color: "#0A0A0A", lineHeight: 1.5 }}>
              El problema empieza cuando la complejidad crece más rápido que la <span style={{background: "linear-gradient(to bottom, transparent 60%, rgba(255,213,0,0.9) 60%)", display: "inline"}}>capacidad operativa</span> de la organización
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
