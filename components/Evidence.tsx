"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const FORMSPREE_URL = "https://formspree.io/f/mnjynrjd";

function FadeIn({ children, direction = "up" }: { children: React.ReactNode; direction?: "up" | "left" | "right" }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  const getTransform = () => {
    if (visible) return "translate(0, 0)";
    if (direction === "right") return "translate(60px, 0)";
    return "translate(0, 28px)";
  };
  return (
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: getTransform(), transition: "opacity 0.9s ease, transform 0.9s ease" }}>
      {children}
    </div>
  );
}

export default function Evidence() {
  const [showModal, setShowModal] = useState(false);
  const [leadForm, setLeadForm] = useState({ nombre: "", email: "" });
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    setTimeout(check, 50);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleDownload = async () => {
    await fetch(FORMSPREE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ ...leadForm, tipo: "Descarga presentacion Quellaveco" }),
    });
    setLeadSubmitted(true);
    const link = document.createElement("a");
    link.href = "/quellaveco-caso.pdf";
    link.download = "Quellaveco-Caso-NEXT.pdf";
    link.click();
    setTimeout(() => { setShowModal(false); setLeadSubmitted(false); setLeadForm({ nombre: "", email: "" }); }, 2000);
  };

  return (
    <section id="evidence" style={{ backgroundColor: "#F8F7F4", padding: isMobile ? "48px 24px" : "80px 48px", borderBottom: "0.5px solid #D0CEC8" }}>
      <h2 style={{ fontSize: isMobile ? "28px" : "42px", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05, color: "#0A0A0A", marginBottom: isMobile ? "32px" : "72px" }}>
        Resultados operacionales medidos
      </h2>

      <FadeIn direction="right">
        <div style={{ background: "#EEECEA", border: "0.5px solid #C8C6C0", borderRadius: "12px", padding: isMobile ? "16px" : "28px", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 0.6fr", gap: isMobile ? "16px" : "28px", maxWidth: "1100px", margin: "0 auto" }}>

          {/* FICHA QUELLAVECO */}
          <div style={{ background: "#F8F7F4", border: "0.5px solid #C8C6C0", borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", flex: 1 }}>
              <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <img src="/logo-cosapi.png" alt="COSAPI" style={{ height: "28px", objectFit: "contain" }} />
                  <img src="/logo-angloamerican.png" alt="Anglo American" style={{ height: "28px", objectFit: "contain" }} />
                </div>
                <h3 style={{ fontSize: isMobile ? "17px" : "21px", fontWeight: 800, color: "#0A0A0A", lineHeight: 1.2, margin: 0 }}>
                  Diseño y optimización de un sistema de producción complejo
                </h3>
                <p style={{ fontSize: "13px", color: "#888888", lineHeight: 1.6, margin: 0, letterSpacing: "0.05em" }}>
                  Torre de Captación 04 · Obra civil · Quellaveco
                </p>
                <p style={{ fontSize: "17px", color: "#666666", lineHeight: 1.8, margin: 0 }}>
                  Sistema implementado para reducir variabilidad y optimizar el flujo de producción.
                </p>
              </div>
              <div style={{ position: "relative", background: "#111827", minHeight: isMobile ? "200px" : "320px" }}>
                <Image src="/quellaveco1.jpg" alt="Proyecto Quellaveco" fill sizes={isMobile ? "100vw" : "25vw"} style={{ objectFit: "cover", objectPosition: "center" }} />
              </div>
            </div>
            {/* Métricas */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", background: "#0A0A0A", borderTop: "0.5px solid #2A2A2A" }}>
              {[
                { val: "~95K", label: "USD ahorro operacional (~5%)" },
                { val: "9 dias", label: "Optimización de plazo" },
                { val: "15%", label: "Reducción ciclo TG 18.8 → 16 min/mov" },
              ].map((m, i) => (
                <div key={i} style={{ padding: isMobile ? "12px" : "18px 20px" }}>
                  <div style={{ fontSize: isMobile ? "16px" : "22px", fontWeight: 800, color: "#F8F7F4", lineHeight: 1, marginBottom: "4px" }}>{m.val}</div>
                  <div style={{ fontSize: "8px", color: "#F8F7F4", letterSpacing: "0.1em", textTransform: "uppercase", lineHeight: 1.4 }}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CARD VDC */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "16px", marginBottom: "24px", paddingBottom: "20px", borderBottom: "0.5px solid #C8C6C0" }}>
                <img src="/logo-universidad-lima.png" alt="Universidad de Lima" style={{ height: isMobile ? "40px" : "52px", objectFit: "contain" }} />
                <img src="/logo-stanford.png" alt="Stanford Engineering" style={{ height: isMobile ? "40px" : "52px", objectFit: "contain", flexShrink: 0 }} />
              </div>
              <p style={{ fontSize: "13px", color: "#888888", letterSpacing: "0.05em", marginBottom: "8px" }}>Certificación Diseño y Construcción Virtual (VDC) 2026</p>
              <h3 style={{ fontSize: isMobile ? "18px" : "22px", fontWeight: 800, color: "#0A0A0A", lineHeight: 1.2, margin: "0 0 8px 0" }}>
                Gestión de Producción de Proyectos (PPM)
              </h3>
              <p style={{ fontSize: "15px", color: "#888888", lineHeight: 1.6, margin: "0 0 20px 0" }}>Presentación en Semana Introductoria</p>
              <div style={{ display: "flex", flexDirection: "column", marginBottom: "20px" }}>
                {[["Autor", "Sebastian Villanueva"], ["Rol", "Mentor VDC"]].map(([k, v]) => (
                  <div key={k} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "0.5px solid #D0CEC8", padding: "10px 0" }}>
                    <span style={{ fontSize: "10px", color: "#888888", letterSpacing: "0.1em", textTransform: "uppercase" }}>{k}</span>
                    <span style={{ fontSize: "14px", color: "#0A0A0A", fontWeight: 500 }}>{v}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: "17px", color: "#666666", lineHeight: 1.8 }}>
                Caso de estudio presentado en la certificación VDC 2026. Análisis de variabilidad operativa en proyecto de infraestructura minera, con metodología PPM aplicada en campo.
              </p>
            </div>
            <div style={{ marginTop: "24px", paddingTop: "20px", borderTop: "0.5px solid #C8C6C0", display: "flex", justifyContent: "flex-end" }}>
              <button onClick={() => setShowModal(true)} style={{ display: "inline-flex", alignItems: "center", gap: "8px", paddingLeft: "14px", paddingRight: "8px", paddingTop: "7px", paddingBottom: "7px", borderRadius: "6px", fontSize: "10px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", background: "#0A0A0A", color: "#F8F7F4", border: "none" }}>
                Descargar presentación
                <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#C9A227", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "10px", color: "#0A0A0A" }}>&#8594;</span>
              </button>
            </div>
          </div>

        </div>
      </FadeIn>

      {showModal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ background: "#EEECEA", borderRadius: "12px", padding: "40px", maxWidth: "420px", width: "90%", position: "relative" }}>
            <button onClick={() => setShowModal(false)} style={{ position: "absolute", top: "16px", right: "20px", background: "none", border: "none", fontSize: "20px", cursor: "pointer", color: "#888" }}>&#x2715;</button>
            {!leadSubmitted ? (
              <>
                <p style={{ fontSize: "9px", color: "#888", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "12px" }}>Caso de estudio</p>
                <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#0A0A0A", marginBottom: "8px", lineHeight: 1.2 }}>Descarga la presentación</h3>
                <p style={{ fontSize: "13px", color: "#666", lineHeight: 1.7, marginBottom: "28px" }}>Ingresa tus datos para acceder al caso Quellaveco — Torre de Captación 04.</p>
                <div style={{ borderBottom: "0.5px solid #C8C6C0", padding: "12px 0" }}>
                  <label style={{ display: "block", fontSize: "9px", color: "#888", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "6px" }}>Nombre completo</label>
                  <input type="text" placeholder="Tu nombre completo" value={leadForm.nombre} onChange={(e) => setLeadForm(p => ({ ...p, nombre: e.target.value }))} style={{ width: "100%", background: "transparent", fontSize: "14px", color: "#0A0A0A", outline: "none", border: "none" }} />
                </div>
                <div style={{ borderBottom: "0.5px solid #C8C6C0", padding: "12px 0" }}>
                  <label style={{ display: "block", fontSize: "9px", color: "#888", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "6px" }}>Correo o número celular</label>
                  <input type="text" placeholder="Tu correo o celular" value={leadForm.email} onChange={(e) => setLeadForm(p => ({ ...p, email: e.target.value }))} style={{ width: "100%", background: "transparent", fontSize: "14px", color: "#0A0A0A", outline: "none", border: "none" }} />
                </div>
                <div style={{ padding: "16px 0", marginBottom: "8px" }}>
                  <label style={{ display: "block", fontSize: "9px", color: "#888", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "12px" }}>¿Te gustaría que te contactemos?</label>
                  <div style={{ display: "flex", gap: "16px" }}>
                    <button onClick={() => setLeadForm(p => ({ ...p, contactar: "si" } as any))} style={{ flex: 1, padding: "10px", borderRadius: "6px", border: (leadForm as any).contactar === "si" ? "1.5px solid #0A0A0A" : "0.5px solid #C8C6C0", background: (leadForm as any).contactar === "si" ? "#0A0A0A" : "transparent", color: (leadForm as any).contactar === "si" ? "#F8F7F4" : "#0A0A0A", fontSize: "12px", fontWeight: 600, cursor: "pointer" }}>Sí</button>
                    <button onClick={() => setLeadForm(p => ({ ...p, contactar: "no" } as any))} style={{ flex: 1, padding: "10px", borderRadius: "6px", border: (leadForm as any).contactar === "no" ? "1.5px solid #0A0A0A" : "0.5px solid #C8C6C0", background: (leadForm as any).contactar === "no" ? "#0A0A0A" : "transparent", color: (leadForm as any).contactar === "no" ? "#F8F7F4" : "#0A0A0A", fontSize: "12px", fontWeight: 600, cursor: "pointer" }}>No por ahora</button>
                  </div>
                </div>
                <button onClick={handleDownload} style={{ display: "inline-flex", alignItems: "center", gap: "8px", paddingLeft: "14px", paddingRight: "8px", paddingTop: "7px", paddingBottom: "7px", borderRadius: "6px", fontSize: "10px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", background: "#0A0A0A", color: "#F8F7F4", border: "none" }}>
                  Descargar ahora
                  <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#C9A227", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "10px", color: "#0A0A0A" }}>&#8594;</span>
                </button>
              </>
            ) : (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <p style={{ fontSize: "22px", fontWeight: 800, color: "#0A0A0A", marginBottom: "8px" }}>Descargando...</p>
                <p style={{ fontSize: "13px", color: "#666" }}>Gracias. El PDF se esta descargando.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
