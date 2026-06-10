"use client";
import { useEffect, useRef, useState } from "react";

function FadeIn({ children, delay = 0, direction = "up" }: { children: React.ReactNode; delay?: number; direction?: "up" | "left" | "right" }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
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

const symptoms1 = [
  "El flujo de caja se vuelve más sensible",
  "El costo financiero de la operación aumenta",
  "El plazo empieza a convertirse en una fuente constante de presión",
];
const symptoms2 = [
  "La información no llega a tiempo para tomar decisiones",
  "El avance de producción no refleja el costo operativo semanal",
  "Y para recuperar el cronograma normalmente se asignan más recursos, más presión y más costo operativo",
];

export default function Problem() {
  return (
    <section id="problem" className="bg-[#EEECEA] px-6 md:px-24 pt-14 md:pt-20 pb-12 border-b border-[#D0CEC8]">
      <div className="max-w-[1100px] mx-auto flex flex-col gap-10">

        <FadeIn delay={0}>
          <h2 className="text-[26px] md:text-[38px] font-extrabold leading-tight tracking-[-0.03em] text-[#0A0A0A] text-left md:text-center">
            Los proyectos son cada vez más complejos y exigentes
          </h2>
          <p className="text-[22px] md:text-[30px] font-extrabold text-[#2563EB] text-left md:text-center mt-4 tracking-[-0.03em] leading-tight">
            Las operaciones no siempre evolucionan al mismo ritmo
          </p>
        </FadeIn>

        <FadeIn delay={0}>
          <p className="text-[17px] md:text-[20px] text-[#444444] leading-relaxed font-medium text-left md:text-center">
            Cuando esto sucede, suelen aparecer los mismos síntomas:
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12">
          <FadeIn delay={0} direction="left">
            <div className="flex flex-col">
              {symptoms1.map((s, i) => (
                <div key={i} className={`py-4 ${i < symptoms1.length - 1 ? "border-b border-[#D0CEC8]" : ""}`}>
                  <span className="text-[17px] md:text-[20px] text-[#555555] leading-relaxed">{s}</span>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={300} direction="right">
            <div className="flex flex-col">
              {symptoms2.map((s, i) => (
                <div key={i} className={`py-4 ${i < symptoms2.length - 1 ? "border-b border-[#D0CEC8]" : ""}`}>
                  <span className="text-[17px] md:text-[20px] text-[#555555] leading-relaxed">{s}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0}>
          <div className="flex flex-col gap-5 pt-5 border-t border-[#C8C6C0] max-w-[800px] mx-auto text-left md:text-center">
            <p className="text-[22px] md:text-[30px] font-bold text-[#0A0A0A] leading-snug">
              El problema empieza cuando la complejidad crece más rápido que la capacidad operativa de la organización
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
