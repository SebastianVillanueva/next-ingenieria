"use client";
import { useEffect, useState, useRef } from "react";
import Button from "./Button";

const metrics = [
  { value: "↓WIP  ↓TC", label: "Flujo óptimo" },
  { value: "D < TH", label: "Confiabilidad de plazo" },
  { value: "≥ 5%", label: "Ahorro operativo" },
];

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const [scale, setScale] = useState(1);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    setTimeout(check, 50);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = 1 + scrollY * 0.0008;
      setScale(Math.min(newScale, 1.3));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  if (isMobile) {
    return (
      <section id="hero" style={{ display: "flex", flexDirection: "column", borderBottom: "0.5px solid rgba(208,206,200,0.3)" }}>
        {/* Zona 1 — texto sobre fondo crema */}
        <div style={{ backgroundColor: "#F8F7F4", padding: "100px 24px 40px 24px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1 style={{ fontSize: "32px", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.02em", color: "#0A0A0A", margin: 0 }}>
            Sistemas de producción para desarrolladoras y constructoras
          </h1>
          <p style={{ fontSize: "17px", fontWeight: 600, color: "#333333", lineHeight: 1.5, margin: 0 }}>
            Diseñados para controlar el plazo y reducir sobrecostos operativos
          </p>
          <div style={{ display: "inline-flex", marginTop: "8px" }}>
            <Button variant="dark" href="#contact">
              Agenda un diagnóstico
            </Button>
          </div>
        </div>
        {/* Zona 2 — imagen con zoom parallax y métricas */}
        <div style={{ position: "relative", height: "420px", overflow: "hidden" }}>
          <div
            ref={imageRef}
            style={{
              position: "absolute", inset: 0,
              backgroundImage: "url('/hero-bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: 0,
              transform: `scale(${scale})`,
              transformOrigin: "center center",
              transition: "transform 0.1s linear",
            }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 50%)", zIndex: 1 }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 2, padding: "28px 24px", display: "flex", flexDirection: "column", gap: "14px", borderTop: "0.5px solid rgba(255,255,255,0.15)" }}>
            {metrics.map((m) => (
              <div key={m.label}>
                <div style={{ fontSize: "20px", fontWeight: 800, color: "#F8F7F4", lineHeight: 1 }}>{m.value}</div>
                <div style={{ fontSize: "9px", color: "rgba(248,247,244,0.7)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "3px" }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="hero" style={{ position: "relative", overflow: "hidden", padding: "0 48px", borderBottom: "0.5px solid rgba(208,206,200,0.3)", minHeight: "92vh", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/hero-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center", zIndex: 0 }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(248,247,244,0.92) 0%, rgba(248,247,244,0.88) 35%, rgba(248,247,244,0.1) 55%, rgba(248,247,244,0) 70%)", zIndex: 1 }} />
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "120px", background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 100%)", zIndex: 2 }} />
      <div style={{ position: "relative", zIndex: 3, display: "flex", flexDirection: "column", paddingTop: "140px", maxWidth: "560px" }}>
        <h1 style={{ fontSize: "52px", fontWeight: 800, lineHeight: 1.02, letterSpacing: "-0.02em", color: "#0A0A0A", maxWidth: "640px", marginBottom: "20px" }}>
          Sistemas de producción para desarrolladoras y constructoras
        </h1>
        <p style={{ fontSize: "21px", fontWeight: 600, color: "#333333", lineHeight: 1.5, maxWidth: "480px", marginBottom: "32px" }}>
          Diseñados para controlar el plazo y reducir sobrecostos operativos
        </p>
        <div style={{ display: "inline-flex" }}>
          <Button variant="dark" href="#contact">
            Agenda un diagnóstico
          </Button>
        </div>
      </div>
      <div style={{ position: "relative", zIndex: 3, display: "flex", alignItems: "center", gap: "48px", paddingTop: "24px", paddingBottom: "28px", borderTop: "0.5px solid rgba(208,206,200,0.5)", maxWidth: "560px" }}>
        {metrics.map((m, i) => (
          <div key={m.label} style={{ display: "flex", alignItems: "center", gap: "48px" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "22px", fontWeight: 800, color: "#0A0A0A", lineHeight: 1 }}>{m.value}</div>
              <div style={{ fontSize: "9px", color: "#666666", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "4px" }}>{m.label}</div>
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
