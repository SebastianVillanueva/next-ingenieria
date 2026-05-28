"use client";

import { useState } from "react";
import Button from "./Button";

const CALENDLY_URL = "https://calendly.com/tu-usuario/diagnostico-operativo";

const fields = [
  { id: "nombre",   label: "Nombre",   placeholder: "Tu nombre completo" },
  { id: "empresa",  label: "Empresa",  placeholder: "Organización o proyecto" },
  { id: "problema", label: "¿Cuál es el principal problema operacional?", placeholder: "Descríbelo en una frase" },
];

export default function Contact() {
  const [form, setForm] = useState({ nombre: "", empresa: "", problema: "" });

  const handleCalendly = () => {
    const url = new URL(CALENDLY_URL);
    if (form.nombre)   url.searchParams.set("name", form.nombre);
    if (form.empresa)  url.searchParams.set("a1",   form.empresa);
    if (form.problema) url.searchParams.set("a2",   form.problema);
    window.open(url.toString(), "_blank");
  };

  return (
    <section
      id="contact"
      className="bg-next-black px-12 py-20"
    >
      <div className="blk-label-dark">06 — Contacto</div>

      <div className="grid grid-cols-2 gap-[72px]">
        <div>
          <h2 className="font-display font-extrabold text-[32px] tracking-[-0.02em] leading-[1.05] text-next-text-on-dk mb-5">
            Evaluate your
            <br />
            <span className="text-next-blue">operational system.</span>
          </h2>
          <p className="font-mono text-[13px] text-[#666666] leading-[1.9] mb-[10px]">
            Cada proyecto enfrenta desafíos distintos.
          </p>
          <p className="font-mono text-[12px] text-next-text-dk-3 leading-[1.9]">
            El punto de partida es entender el sistema de producción para
            poder aumentar la capacidad operativa.
          </p>
        </div>

        <div>
          {fields.map((f) => (
            <div
              key={f.id}
              className="py-[18px]"
              style={{ borderBottom: "0.5px solid #1E1E1E" }}
            >
              <label
                htmlFor={f.id}
                className="block font-mono text-[9px] text-next-text-dk-3 uppercase tracking-[0.2em] mb-2"
              >
                {f.label}
              </label>
              <input
                id={f.id}
                type="text"
                placeholder={f.placeholder}
                value={form[f.id as keyof typeof form]}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, [f.id]: e.target.value }))
                }
                className="w-full bg-transparent font-mono text-[13px] text-next-text-dk-2 placeholder:text-[#333333] outline-none"
              />
            </div>
          ))}

          <div className="mt-7">
            <Button variant="light" onClick={handleCalendly}>
              Agenda un diagnóstico
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}