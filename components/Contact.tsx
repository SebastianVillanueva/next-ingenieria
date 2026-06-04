"use client";
import { useState } from "react";
import Button from "./Button";

const CALENDLY_URL = "https://calendly.com/tu-usuario/diagnostico-operativo";

const fields = [
  { id: "nombre", label: "Nombre", placeholder: "Tu nombre completo" },
  { id: "empresa", label: "Empresa", placeholder: "Organización o proyecto" },
  { id: "problema", label: "¿Cuál es el principal problema operacional?", placeholder: "Descríbelo en una frase" },
];

export default function Contact() {
  const [form, setForm] = useState({ nombre: "", empresa: "", problema: "" });

  const handleCalendly = () => {
    const url = new URL(CALENDLY_URL);
    if (form.nombre) url.searchParams.set("name", form.nombre);
    if (form.empresa) url.searchParams.set("a1", form.empresa);
    if (form.problema) url.searchParams.set("a2", form.problema);
    window.open(url.toString(), "_blank");
  };

  return (
    <section id="contact" style={{ backgroundColor: "#0A0A0A", padding: "80px 48px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "72px" }}>
        <div>
          <h2 style={{ fontSize: "32px", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.05, color: "#F8F7F4", marginBottom: "20px" }}>
            Evaluate your<br /><span style={{ color: "#2563EB" }}>operational system.</span>
          </h2>
          <p style={{ fontSize: "13px", color: "#666666", lineHeight: 1.9, marginBottom: "10px" }}>Cada proyecto enfrenta desafíos distintos.</p>
          <p style={{ fontSize: "12px", color: "#444444", lineHeight: 1.9 }}>El punto de partida es entender el sistema de producción para poder aumentar la capacidad operativa.</p>
        </div>
        <div>
          {fields.map((f) => (
            <div key={f.id} style={{ borderBottom: "0.5px solid #1E1E1E", padding: "18px 0" }}>
              <label style={{ display: "block", fontSize: "9px", color: "#444444", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "8px" }}>{f.label}</label>
              <input
                id={f.id}
                type="text"
                placeholder={f.placeholder}
                value={form[f.id as keyof typeof form]}
                onChange={(e) => setForm((prev) => ({ ...prev, [f.id]: e.target.value }))}
                style={{ width: "100%", background: "transparent", fontSize: "13px", color: "#2A2A2A", outline: "none", border: "none" }}
              />
            </div>
          ))}
          <div style={{ marginTop: "28px" }}>
            <Button variant="light" onClick={handleCalendly}>Agenda un diagnóstico</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
