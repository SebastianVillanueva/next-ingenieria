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

export default function Process() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    setTimeout(check, 50);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section id="process" style={{ backgroundColor: "#EEECEA", padding: isMobile ? "56px 24px" : "80px 48px", borderBottom: "0.5px solid #D0CEC8" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "40px" }}>

        <FadeIn delay={0}>
          <h2 style={{ fontSize: isMobile ? "32px" : "42px", fontWeight: 800, lineHeight: 1.0, letterSpacing: "-0.03em", color: "#0A0A0A" }}>
            Liderazgo
          </h2>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "0.7fr 2fr", gap: isMobile ? "32px" : "64px", alignItems: "start" }}>

          <FadeIn delay={200} direction="left">
            <div style={{ maxWidth: isMobile ? "200px" : "100%", margin: isMobile ? "0 auto" : "0" }}>
              <div style={{ position: "relative", width: "100%", aspectRatio: "2/3", borderRadius: "4px", overflow: "hidden", background: "#0A0A0A" }}>
                <Image src="/foto-perfil.png" alt="Sebastian Villanueva" fill sizes={isMobile ? "200px" : "33vw"} style={{ objectFit: "cover", objectPosition: "center top" }} />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={400} direction="right">
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", paddingTop: "0" }}>
              <div>
                <p style={{ fontSize: "13px", color: "#888888", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "8px" }}>
                  Consultor Principal & Fundador
                </p>
                <h3 style={{ fontSize: isMobile ? "28px" : "36px", fontWeight: 800, color: "#0A0A0A", lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0 }}>
                  Sebastian Villanueva
                </h3>
              </div>
              <div style={{ width: "40px", height: "1px", background: "#C8C6C0" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <p style={{ fontSize: isMobile ? "15px" : "17px", color: "#444444", lineHeight: 1.8, margin: 0 }}>
                  Especialista en diseño y optimización de sistemas de producción para proyectos y organizaciones.
                </p>
                <p style={{ fontSize: isMobile ? "15px" : "17px", color: "#444444", lineHeight: 1.8, margin: 0 }}>
                  Ha participado en proyectos complejos de ingeniería y construcción como Toromocho (Perú), Tranque El Mauro (Chile) y San Gabriel (Perú), desarrollando iniciativas de mejora operacional, gestión de información y tecnología desde la Gerencia de Innovación, Procesos y TI de COSAPI.
                </p>
                <p style={{ fontSize: isMobile ? "15px" : "17px", color: "#444444", lineHeight: 1.8, margin: 0 }}>
                  Su experiencia se centra en el desarrollo de capacidad operativa para organizaciones que enfrentan proyectos cada vez más exigentes.
                </p>
                <p style={{ fontSize: isMobile ? "15px" : "17px", color: "#444444", lineHeight: 1.8, margin: 0 }}>
                  Certificado en Diseño y Construcción Virtual (VDC) y mentor de la certificación VDC 2026.
                </p>
                <p style={{ fontSize: isMobile ? "15px" : "17px", color: "#444444", lineHeight: 1.8, margin: 0 }}>
                  Ingeniero civil por la Pontificia Universidad Católica del Perú.
                </p>
              </div>
            </div>
          </FadeIn>

        </div>

      </div>
    </section>
  );
}
