"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const logos = [
  { src: "/logo-cosapi.png", alt: "Cosapi" },
  { src: "/logo-semcocad.png", alt: "SemcoCAD" },
  { src: "/logo-4E.png", alt: "4E", small: true },
  { src: "/logo-universidad-lima.png", alt: "Universidad de Lima" },
  { src: "/logo-corporacion.jpg", alt: "Corporacion", small: true },
];

export default function Logos() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    setTimeout(check, 50);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section style={{ backgroundColor: "#FFFFFF", padding: "48px 48px", borderBottom: "0.5px solid #D0CEC8" }}>
      <p style={{ textAlign: "center", fontSize: "13px", color: "#888888", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "40px" }}>
        Confían en nosotros
      </p>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: isMobile ? "wrap" : "nowrap", gap: isMobile ? "32px" : "48px", overflowX: isMobile ? "visible" : "auto" }}>
        {logos.map((logo) => (
          <div key={logo.alt} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image
              src={logo.src}
              alt={logo.alt}
              height={isMobile && logo.alt === "Cosapi" ? 110 : isMobile && logo.alt === "Corporacion" ? 70 : logo.small ? 56 : 80}
              width={isMobile && logo.alt === "Cosapi" ? 330 : isMobile && logo.alt === "Corporacion" ? 210 : logo.small ? 168 : 240}
              style={{ objectFit: "contain", opacity: 0.9 }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
