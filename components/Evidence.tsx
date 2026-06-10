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
    <section id="evidence" className="bg-[#F8F7F4] px-6 md:px-12 py-14 md:py-20 border-b border-[#D0CEC8]">
      <h2 className="text-[30px] md:text-[42px] font-extrabold tracking-[-0.03em] leading-tight text-[#0A0A0A] mb-10 md:mb-[72px]">
        Resultados operacionales medidos
      </h2>

      <FadeIn direction="right">
        <div className="bg-[#EEECEA] border border-[#C8C6C0] rounded-[12px] p-4 md:p-7 grid grid-cols-1 md:grid-cols-[1fr_0.6fr] gap-4 md:gap-7 max-w-[1100px] mx-auto">

          {/* FICHA INTERIOR */}
          <div className="bg-[#F8F7F4] border border-[#C8C6C0] rounded-[8px] overflow-hidden flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-5 flex flex-col gap-4">
                <div className="flex items-center gap-3 mb-2">
                  <img src="/logo-cosapi.png" alt="COSAPI" className="h-8 object-contain" />
                  <img src="/logo-angloamerican.png" alt="Anglo American" className="h-8 object-contain" />
                </div>
                <h3 className="text-[18px] md:text-[21px] font-extrabold text-[#0A0A0A] leading-snug m-0">
                  Diseño y optimización de un sistema de producción complejo
                </h3>
                <p className="text-[13px] md:text-[14px] text-[#888888] leading-relaxed m-0 tracking-wide">
                  Torre de Captación 04 · Obra civil · Quellaveco
                </p>
                <p className="text-[14px] md:text-[15px] text-[#666666] leading-relaxed m-0">
                  Sistema instalado para reducir variabilidad operativa y mejorar el flujo de producción.
                </p>
              </div>
              <div className="relative bg-[#111827] h-[220px] md:h-auto md:min-h-[280px]">
                <Image src="/quellaveco1.jpg" alt="Proyecto Quellaveco" fill sizes="(max-width: 768px) 100vw, 25vw" style={{ objectFit: "cover", objectPosition: "center" }} />
              </div>
            </div>

            {/* Métricas */}
            <div className="grid grid-cols-3 bg-[#0A0A0A] border-t border-[#2A2A2A]">
              {[
                { val: "~95K", label: "USD ahorro operacional (~5%)" },
                { val: "9 dias", label: "Optimización de plazo" },
                { val: "15%", label: "Reducción ciclo TG 18.8 → 16 min/mov" },
              ].map((m, i) => (
                <div key={i} className={`p-4 md:p-[18px] ${i < 2 ? "border-r border-[#2A2A2A]" : ""}`}>
                  <div className="text-[18px] md:text-[22px] font-extrabold text-[#F8F7F4] leading-none mb-1">{m.val}</div>
                  <div className="text-[8px] md:text-[9px] text-[#F8F7F4] tracking-widest uppercase leading-snug">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* DERECHA - Informe VDC */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-[#C8C6C0]">
                <img src="/logo-universidad-lima.png" alt="Universidad de Lima" className="h-12 object-contain" />
                <img src="/logo-stanford.png" alt="Stanford Engineering" className="h-12 object-contain" />
              </div>
              <p className="text-[13px] text-[#888888] tracking-wide mb-2">Certificación Diseño y Construcción Virtual (VDC) 2026</p>
              <h3 className="text-[20px] md:text-[22px] font-extrabold text-[#0A0A0A] leading-snug mb-2">
                Gestión de Producción de Proyectos (PPM)
              </h3>
              <p className="text-[15px] text-[#888888] leading-relaxed mb-6">Presentación en Semana Introductoria</p>
              <div className="flex flex-col mb-6">
                {[["Autor", "Sebastian Villanueva"], ["Rol", "Mentor VDC"]].map(([k, v]) => (
                  <div key={k} className="flex justify-between items-baseline border-b border-[#D0CEC8] py-2 pr-3">
                    <span className="text-[10px] text-[#888888] tracking-widest uppercase">{k}</span>
                    <span className="text-[14px] text-[#0A0A0A] font-medium text-right">{v}</span>
                  </div>
                ))}
              </div>
              <p className="text-[14px] text-[#666666] leading-relaxed pr-3">
                Caso de estudio presentado en la certificación VDC 2026. Análisis de variabilidad operativa en proyecto de infraestructura minera, con metodología PPM aplicada en campo.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-[#C8C6C0] flex justify-end">
              <button
                onClick={() => setShowModal(true)}
                className="inline-flex items-center gap-2 pl-3 pr-2 py-1.5 rounded-[6px] text-[10px] font-medium tracking-widest uppercase cursor-pointer bg-[#0A0A0A] text-[#F8F7F4] border-none"
              >
                Descargar presentación
                <span className="w-[18px] h-[18px] rounded-full bg-[#C9A227] flex items-center justify-center text-[10px] text-[#0A0A0A]">→</span>
              </button>
            </div>
          </div>
        </div>
      </FadeIn>

      {showModal && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.7)] z-[1000] flex items-center justify-center">
          <div className="bg-[#EEECEA] rounded-[12px] p-10 max-w-[420px] w-[90%] relative">
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-5 bg-none border-none text-xl cursor-pointer text-[#888]">✕</button>
            {!leadSubmitted ? (
              <>
                <p className="text-[9px] text-[#888] tracking-[0.2em] uppercase mb-3">Caso de estudio</p>
                <h3 className="text-[22px] font-extrabold text-[#0A0A0A] mb-2 leading-snug">Descarga la presentación</h3>
                <p className="text-[13px] text-[#666] leading-relaxed mb-7">Ingresa tus datos para acceder al caso Quellaveco — Torre de Captación 04.</p>
                <div className="border-b border-[#C8C6C0] py-3">
                  <label className="block text-[9px] text-[#888] uppercase tracking-[0.2em] mb-1">Nombre completo</label>
                  <input type="text" placeholder="Tu nombre completo" value={leadForm.nombre} onChange={(e) => setLeadForm(p => ({ ...p, nombre: e.target.value }))} className="w-full bg-transparent text-[14px] text-[#0A0A0A] outline-none border-none" />
                </div>
                <div className="border-b border-[#C8C6C0] py-3">
                  <label className="block text-[9px] text-[#888] uppercase tracking-[0.2em] mb-1">Correo o número celular</label>
                  <input type="text" placeholder="Tu correo o celular" value={leadForm.email} onChange={(e) => setLeadForm(p => ({ ...p, email: e.target.value }))} className="w-full bg-transparent text-[14px] text-[#0A0A0A] outline-none border-none" />
                </div>
                <div className="py-4 mb-2">
                  <label className="block text-[9px] text-[#888] uppercase tracking-[0.2em] mb-3">¿Te gustaría que te contactemos?</label>
                  <div className="flex gap-4">
                    <button onClick={() => setLeadForm(p => ({ ...p, contactar: "si" } as any))} className={`flex-1 py-2.5 rounded-[6px] text-[12px] font-semibold cursor-pointer tracking-wide ${(leadForm as any).contactar === "si" ? "border-[1.5px] border-[#0A0A0A] bg-[#0A0A0A] text-[#F8F7F4]" : "border border-[#C8C6C0] bg-transparent text-[#0A0A0A]"}`}>Sí</button>
                    <button onClick={() => setLeadForm(p => ({ ...p, contactar: "no" } as any))} className={`flex-1 py-2.5 rounded-[6px] text-[12px] font-semibold cursor-pointer tracking-wide ${(leadForm as any).contactar === "no" ? "border-[1.5px] border-[#0A0A0A] bg-[#0A0A0A] text-[#F8F7F4]" : "border border-[#C8C6C0] bg-transparent text-[#0A0A0A]"}`}>No por ahora</button>
                  </div>
                </div>
                <button onClick={handleDownload} className="inline-flex items-center gap-2 pl-3 pr-2 py-1.5 rounded-[6px] text-[10px] font-medium tracking-widest uppercase cursor-pointer bg-[#0A0A0A] text-[#F8F7F4] border-none">
                  Descargar ahora
                  <span className="w-[18px] h-[18px] rounded-full bg-[#C9A227] flex items-center justify-center text-[10px] text-[#0A0A0A]">→</span>
                </button>
              </>
            ) : (
              <div className="text-center py-5">
                <p className="text-[22px] font-extrabold text-[#0A0A0A] mb-2">Descargando...</p>
                <p className="text-[13px] text-[#666]">Gracias. El PDF se esta descargando.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
