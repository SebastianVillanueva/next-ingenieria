"use client";
import { useState } from "react";
import Image from "next/image";
import Button from "./Button";

const CALENDLY_URL = "https://calendly.com/es-villanueva95/30min";
const FORMSPREE_URL = "https://formspree.io/f/mnjynrjd";

const fields = [
  { id: "nombre", label: "Nombre", placeholder: "Tu nombre completo" },
  { id: "empresa", label: "Empresa", placeholder: "Organizacion o proyecto" },
  { id: "problema", label: "Principal problema operacional", placeholder: "Describelo en una frase" },
  { id: "celular", label: "Nro celular", placeholder: "Tu numero de celular" },
  { id: "correo", label: "Correo electronico", placeholder: "Tu correo electronico" },
];

export default function Contact() {
  const [form, setForm] = useState({ nombre: "", empresa: "", problema: "", celular: "", correo: "" });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    await fetch(FORMSPREE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(form),
    });
    const url = new URL(CALENDLY_URL);
    if (form.nombre) url.searchParams.set("name", form.nombre);
    if (form.empresa) url.searchParams.set("a1", form.empresa);
    if (form.problema) url.searchParams.set("a2", form.problema);
    setSubmitted(true);
    window.open(url.toString(), "_blank");
  };

  return (
    <section id="contact" style={{ backgroundColor: "#0A0A0A", padding: "80px 0px 0px 48px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start" }}>

        {/* Izquierda: texto + ficha personal */}
        <div style={{ display: "flex", flexDirection: "column", gap: "48px", paddingBottom: "80px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "60px" }}>
            <p style={{ fontSize: "16px", color: "#888888", lineHeight: 1.9, margin: "0 0 16px 0" }}>Cada proyecto enfrenta desafios distintos</p>
            <h2 style={{ fontSize: "42px", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05, color: "#F8F7F4", margin: "0 0 16px 0" }}>
              Evalúa tu <span style={{ color: "#2563EB" }}>Sistema de Producción</span>
            </h2>
            <p style={{ fontSize: "18px", color: "#F8F7F4", lineHeight: 1.9, margin: 0 }}>El punto de partida es entender el sistema de produccion para poder aumentar la capacidad operativa.</p>
          </div>

          {/* Ficha personal */}
          <div style={{ background: "#1A1A1A", border: "1px solid #F8F7F4", borderRadius: "10px", padding: "20px 24px", display: "flex", alignItems: "center", gap: "20px", maxWidth: "480px" }}>
            <div style={{ position: "relative", width: "120px", height: "120px", borderRadius: "10px", overflow: "hidden", flexShrink: 0 }}>
              <Image src="/foto-perfil.png" alt="Sebastian Villanueva" fill sizes="90px" style={{ objectFit: "cover", objectPosition: "center top" }} />
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "18px" }}>
              <p style={{ fontSize: "9px", color: "#F8F7F4", letterSpacing: "0.15em", textTransform: "uppercase", margin: 0 }}>Consultor principal & Fundador</p>
              <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#F8F7F4", margin: 0, lineHeight: 1.1 }}>Sebastian Villanueva</h3>
              <p style={{ fontSize: "11px", color: "#F8F7F4", margin: 0 }}>Next Ingeniería y Construcción</p>
            </div>
            <a href="https://www.linkedin.com/in/sebastianvillanueva01/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", fontSize: "10px", color: "#F8F7F4", background: "#0A0A0A", border: "0.5px solid #0A0A0A", borderRadius: "5px", padding: "6px 12px", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 500, flexShrink: 0 }}>LinkedIn</a>
          </div>
        </div>

        {/* Derecha: formulario */}
        <div style={{ background: "#EEECEA", borderRadius: "12px 0px 0px 12px", padding: "32px", display: "flex", flexDirection: "column" }}>
          {fields.map((f) => (
            <div key={f.id} style={{ borderBottom: "0.5px solid #C8C6C0", padding: "14px 0" }}>
              <label style={{ display: "block", fontSize: "9px", color: "#888888", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "8px" }}>{f.label}</label>
              <input
                id={f.id}
                type="text"
                placeholder={f.placeholder}
                value={form[f.id as keyof typeof form]}
                onChange={(e) => setForm((prev) => ({ ...prev, [f.id]: e.target.value }))}
                style={{ width: "100%", background: "transparent", fontSize: "14px", color: "#0A0A0A", outline: "none", border: "none" }}
              />
            </div>
          ))}
          <div style={{ marginTop: "24px" }}>
            <Button variant="dark" onClick={handleSubmit}>Agenda una breve llamada</Button>
          </div>
        </div>

      </div>
    </section>
  );
}
