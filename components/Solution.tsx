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
  return (
    <section id="solution" className="bg-[#0A0A0A] px-6 md:px-12 py-16 md:py-[120px] border-b border-[#2A2A2A]">
      <div className="max-w-[1100px] mx-auto flex flex-col gap-12 md:gap-16">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start">
          <div>
            <FadeIn delay={0}>
              <h2 className="text-[32px] md:text-[42px] font-extrabold leading-none tracking-[-0.03em] text-[#F8F7F4] mb-6 md:mb-12">
                Nuestro Sistema
              </h2>
            </FadeIn>
            <FadeIn delay={400}>
              <p className="text-[24px] md:text-[32px] font-semibold text-[#F8F7F4] leading-snug mb-3">
                Tres capas acumulativas.
              </p>
              <p className="text-[24px] md:text-[32px] font-semibold text-[#F8F7F4] leading-snug">
                El diagnóstico define la entrada.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={800}>
            <p className="text-[17px] md:text-[20px] text-[#F8F7F4] leading-relaxed">
              Un sistema operativo instalado por capas para desarrollar la capacidad operativa que los proyectos y organizaciones necesitan para crecer de forma confiable.
            </p>
          </FadeIn>
        </div>

        <div className="flex flex-col gap-px bg-[#2A2A2A] border border-[#2A2A2A]">
          {layers.map((layer, index) => (
            <FadeIn key={layer.num} delay={index * 150} direction="left">
              <div className="layer-row">
                <div className="flex min-h-[100px] md:min-h-[120px]">
                  <div className="layer-bar" style={{ minWidth: "100px" }}>
                    <div>
                      <div className="layer-num">{layer.num}</div>
                      <div className="layer-tag">{layer.tag}</div>
                    </div>
                  </div>
                  <div className="flex-1 p-5 md:p-7">
                    <h3 className="text-[15px] md:text-[20px] font-bold text-[#F8F7F4] mb-2 md:mb-3">{layer.title}</h3>
                    <p className="text-[13px] md:text-[16px] text-[#AAAAAA] leading-relaxed">{layer.desc}</p>
                  </div>
                </div>
                <div className="layer-included">
                  {layer.includes.map((inc, i) => (
                    <span key={inc.label} className="inline-flex items-center gap-2">
                      <span style={{ fontSize: "9px", padding: "4px 10px", letterSpacing: "0.05em", color: inc.highlight ? "#F8F7F4" : "#888888", background: inc.highlight ? "#2A2A2A" : "#1A1A1A", border: inc.highlight ? "0.5px solid #666" : "0.5px solid #333" }}>{inc.label}</span>
                      {i < layer.includes.length - 1 && <span className="text-[#333333] text-xs">+</span>}
                    </span>
                  ))}
                  <span className="text-[11px] text-[#F8F7F4] ml-1">{layer.includeText}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
