"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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

const steps = [
  { num: "01", title: "Diagnóstico", time: "2 a 4 semanas", desc: "Identificamos la capa de entrada y el problema prioritario. Los síntomas identificados no son el problema, el problema se diagnostica." },
  { num: "02", title: "Diseño e Implementación", time: "3 a 12 meses", desc: "Diseñamos el sistema operativo a la medida del proyecto u organización. Sistema documentado, equipo habilitado." },
];

export default function Process() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section id="process" style={{ backgroundColor: "#EEECEA", padding: isMobile ? "48px 24px 48px" : "72px 48px 64px", borderBottom: "0.5px solid #D0CEC8" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "32px" }}>

        <FadeIn delay={0}>
          <h2 style={{ fontSize: isMobile ? "32px" : "42px", fontWeight: 800, lineHeight: 1.0, letterSpacing: "-0.03em", color: "#0A0A0A" }}>
            Cómo operamos
          </h2>
        </FadeIn>

        {isMobile ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#C8C6C0", border: "0.5px solid #C8C6C0", overflow: "hidden", borderRadius: "4px" }}>
            {steps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 200} direction="up">
                <div className="pstep">
                  <div className="step-num">{step.num}</div>
                  <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#0A0A0A", marginBottom: "6px" }}>{step.title}</h3>
                  <p style={{ fontSize: "10px", color: "#888888", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "12px" }}>{step.time}</p>
                  <p style={{ fontSize: "14px", color: "#666666", lineHeight: 1.8 }}>{step.desc}</p>
                </div>
              </FadeIn>
            ))}
            <FadeIn delay={400} direction="up">
              <div style={{ position: "relative", height: "320px", overflow: "hidden", background: "#0A0A0A" }}>
                <Image src="/proceso-obra.jpg" alt="NEXT en obra" fill sizes="100vw" style={{ objectFit: "cover", objectPosition: "center" }} />
              </div>
            </FadeIn>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1px", background: "#C8C6C0", border: "0.5px solid #C8C6C0", overflow: "hidden", borderRadius: "4px" }}>
            {steps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 200} direction="up">
                <div className="pstep" style={i === 1 ? { borderLeft: "0.5px solid #C8C6C0", borderRight: "0.5px solid #C8C6C0" } : {}}>
                  <div className="step-num">{step.num}</div>
                  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#0A0A0A", marginBottom: "8px" }}>{step.title}</h3>
                  <p style={{ fontSize: "11px", color: "#888888", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "16px" }}>{step.time}</p>
                  <p style={{ fontSize: "15px", color: "#666666", lineHeight: 1.8 }}>{step.desc}</p>
                </div>
              </FadeIn>
            ))}
            <FadeIn delay={400} direction="up">
              <div style={{ position: "relative", minHeight: "280px", height: "100%", overflow: "hidden", background: "#0A0A0A" }}>
                <Image src="/proceso-obra.jpg" alt="NEXT en obra" fill sizes="33vw" style={{ objectFit: "cover", objectPosition: "center bottom" }} />
              </div>
            </FadeIn>
          </div>
        )}

      </div>
    </section>
  );
}
