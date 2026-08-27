"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const items = [
  {
    src: "/mentor-1.jpeg",
    alt: "Mentor VDC 2026 Grupo Verde",
    desc: "Mentoría VDC 2026. Semana introductoria",
  },
  {
    src: "/mentor-2.jpeg",
    alt: "Mentor VDC 2026",
    desc: "Mentoría VDC 2026. Grupo Verde. Semana introductoria.",
  },
  {
    src: "/conversatorio-1.jpeg",
    alt: "Conversatorio Autodesk Flesan",
    desc: "Conversatorio sobre tecnología representando a Autodesk en Feria de Innovación del Grupo Flesan",
  },
  {
    src: "/capacitacion-1.jpeg",
    alt: "Programa Lean UKHA PRONIS",
    desc: "Programa de especialización Lean para el consorcio UKHA (Aecom, Gleeds) y el PRONIS",
  },
];

export default function Participaciones() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    setTimeout(check, 50);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const scroll = (dir: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = track.offsetWidth * (isMobile ? 0.8 : 0.45);
    track.scrollBy({ left: dir === "right" ? cardWidth + 24 : -(cardWidth + 24), behavior: "smooth" });
    setCurrent(prev => dir === "right" ? Math.min(prev + 1, items.length - 1) : Math.max(prev - 1, 0));
  };

  return (
    <section style={{ backgroundColor: "#EEECEA", padding: isMobile ? "56px 0 56px" : "80px 0 80px", borderBottom: "0.5px solid #D0CEC8", overflow: "hidden" }}>
      <div style={{ padding: isMobile ? "0 24px" : "0 48px", marginBottom: "40px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", maxWidth: "1100px", margin: "0 auto 40px" }}>
        <div>
          <h2 style={{ fontSize: isMobile ? "32px" : "42px", fontWeight: 700, lineHeight: 1.0, letterSpacing: "-0.03em", color: "#0A0A0A", margin: 0 }}>
            En la industria
          </h2>
        </div>
        {!isMobile && (
          <div style={{ display: "flex", gap: "8px" }}>
            <button onClick={() => scroll("left")} style={{ width: "40px", height: "40px", borderRadius: "50%", border: "0.5px solid #C8C6C0", background: "transparent", cursor: "pointer", fontSize: "16px", display: "flex", alignItems: "center", justifyContent: "center", color: current === 0 ? "#C8C6C0" : "#0A0A0A" }}>&#8592;</button>
            <button onClick={() => scroll("right")} style={{ width: "40px", height: "40px", borderRadius: "50%", border: "0.5px solid #C8C6C0", background: "transparent", cursor: "pointer", fontSize: "16px", display: "flex", alignItems: "center", justifyContent: "center", color: current === items.length - 1 ? "#C8C6C0" : "#0A0A0A" }}>&#8594;</button>
          </div>
        )}
      </div>
      <div
        ref={trackRef}
        style={{
          display: "flex",
          gap: "24px",
          overflowX: "auto",
          paddingLeft: isMobile ? "24px" : "48px",
          paddingRight: isMobile ? "24px" : "48px",
          paddingBottom: "8px",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {items.map((item) => (
          <div key={item.alt} style={{ flexShrink: 0, width: isMobile ? "80vw" : "calc(45% - 12px)", scrollSnapAlign: "start" }}>
            <div style={{ position: "relative", height: isMobile ? "240px" : "360px", borderRadius: "4px", overflow: "hidden", marginBottom: "16px" }}>
              <Image src={item.src} alt={item.alt} fill sizes={isMobile ? "80vw" : "45vw"} style={{ objectFit: "cover" }} />
            </div>
            <p style={{ fontSize: isMobile ? "13px" : "14px", color: "#666666", lineHeight: 1.7 }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
