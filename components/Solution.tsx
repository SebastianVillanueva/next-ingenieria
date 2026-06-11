"use client";
import { useEffect, useRef, useState } from "react";

function FadeIn({ children, delay = 0, direction = "up" }: { children: React.ReactNode; delay?: number; direction?: "up" | "left" | "right" }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
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

const layers = [
  {
    num: "01", tag: "Planeamiento",
    title: "Planificación y Gestión de la Producción",
    desc: "Implementación de rutinas operativas y planificación colaborativa para aumentar confiabilidad y control de producción.",
    includes: [{ label: "Capa 01", highlight: false }],
    includeText: "LPS · Rutinas semanales · PPC · Gestión de restricciones",
  },
  {
    num: "02", tag: "Estrategia",
    title: "Estrategia operacional y métricas",
    desc: "Diseño de métricas y sistemas de seguimiento para conectar producción, plazo y resultados del negocio.",
    includes: [{ label: "Capa 01", highlight: false }, { label: "Capa 02", highlight: false }],
    includeText: "Todo lo anterior · Estrategia VDC · Métricas · Sistemas de información",
  },
  {
    num: "03", tag: "Sistemas Integrados",
    title: "Diseño y optimización del Sistema de Producción",
    desc: "Análisis de flujo, variabilidad y cuellos de botella para mejorar el desempeño operativo y atender proyectos más complejos.",
    includes: [{ label: "Capa 01", highlight: false }, { label: "Capa 02", highlight: false }, { label: "Capa 03", highlight: true }],
    includeText: "Sistema completo · PPM · Optimización de flujos · Simulación de escenarios · Tecnología",
  },
];

export default function Solution() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section id="solution" style={{ backgroundColor: "#0A0A0A", padding: isMobile ? "64px 24px" : "120px 48px", borderBottom: "0.5px solid #2A2A2A" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexDirection: "column", gap: isMobile ? "40px" : "64px" }}>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? "24px" : "48px", alignItems: "start" }}>
          <div>
            <FadeIn delay={0}>
              <h2 style={{ fontSize: isMobile ? "32px" : "42px", fontWeight: 800, lineHeight: 1.0, letterSpacing: "-0.03em", color: "#F8F7F4", marginBottom: isMobile ? "24px" : "48px" }}>
                Nuestro Sistema
              </h2>
            </FadeIn>
            <FadeIn delay={400}>
              <p style={{ fontSize: isMobile ? "22px" : "32px", fontWeight: 600, color: "#F8F7F4", lineHeight: 1.4, marginBottom: "12px" }}>
                Tres capas acumulativas.
              </p>
              <p style={{ fontSize: isMobile ? "22px" : "32px", fontWeight: 600, color: "#F8F7F4", lineHeight: 1.4 }}>
                El diagnóstico define la entrada.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={800}>
            <p style={{ fontSize: isMobile ? "16px" : "20px", color: "#F8F7F4", lineHeight: 1.8, paddingTop: "8px" }}>
              Un sistema operativo implementado por capas para desarrollar la capacidad operativa que los proyectos y organizaciones necesitan.
            </p>
          </FadeIn>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#2A2A2A", border: "0.5px solid #2A2A2A" }}>
          {layers.map((layer, index) => (
            <FadeIn key={layer.num} delay={index * 150} direction="left">
              <div className="layer-row">
                <div style={{ display: "flex", minHeight: isMobile ? "auto" : "120px" }}>
                  <div className="layer-bar" style={{ minWidth: isMobile ? "90px" : "180px", maxWidth: isMobile ? "90px" : "180px", padding: isMobile ? "16px 12px" : "0 24px" }}>
                    <div>
                      <div className="layer-num" style={{ fontSize: isMobile ? "22px" : "36px" }}>{layer.num}</div>
                      <div className="layer-tag" style={{ fontSize: isMobile ? "8px" : "11px" }}>{layer.tag}</div>
                    </div>
                  </div>
                  <div style={{ flex: 1, padding: isMobile ? "16px" : "28px 32px" }}>
                    <h3 style={{ fontSize: isMobile ? "15px" : "20px", fontWeight: 700, color: "#F8F7F4", marginBottom: "8px" }}>{layer.title}</h3>
                    <p style={{ fontSize: isMobile ? "13px" : "16px", color: "#AAAAAA", lineHeight: 1.7 }}>{layer.desc}</p>
                  </div>
                </div>
                <div className="layer-included">
                  {layer.includes.map((inc, i) => (
                    <span key={inc.label} style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ fontSize: "9px", padding: "4px 10px", letterSpacing: "0.05em", color: inc.highlight ? "#F8F7F4" : "#888888", background: inc.highlight ? "#2A2A2A" : "#1A1A1A", border: inc.highlight ? "0.5px solid #666" : "0.5px solid #333" }}>{inc.label}</span>
                      {i < layer.includes.length - 1 && <span style={{ color: "#333333", fontSize: "12px" }}>+</span>}
                    </span>
                  ))}
                  <span style={{ fontSize: "11px", color: "#F8F7F4", marginLeft: "4px" }}>{layer.includeText}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
