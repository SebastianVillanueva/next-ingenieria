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
  return (
    <section id="process" className="bg-[#EEECEA] px-6 md:px-12 pt-12 md:pt-[72px] pb-10 md:pb-16 border-b border-[#D0CEC8]">
      <div className="max-w-[900px] mx-auto flex flex-col gap-10">

        <FadeIn delay={0}>
          <h2 className="text-[32px] md:text-[42px] font-extrabold leading-none tracking-[-0.03em] text-[#0A0A0A]">
            Cómo operamos
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#C8C6C0] border border-[#C8C6C0] overflow-hidden rounded-[4px]">
          {steps.map((step, i) => (
            <FadeIn key={step.num} delay={i * 200} direction="up">
              <div className="pstep h-full">
                <div className="step-num">{step.num}</div>
                <h3 className="text-[18px] md:text-[20px] font-bold text-[#0A0A0A] mb-2">{step.title}</h3>
                <p className="text-[10px] md:text-[11px] text-[#888888] uppercase tracking-[0.15em] mb-4">{step.time}</p>
                <p className="text-[14px] md:text-[15px] text-[#666666] leading-relaxed">{step.desc}</p>
              </div>
            </FadeIn>
          ))}
          <FadeIn delay={400} direction="up">
            <div className="relative h-[200px] md:h-full md:min-h-[280px] overflow-hidden bg-[#0A0A0A]">
              <Image
                src="/proceso-obra.jpg"
                alt="NEXT en obra"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "cover", objectPosition: "center bottom" }}
              />
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
