"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const alianzas = [
  { src: "/logo-lciperu.jpeg", alt: "Lean Construction Institute Perú" },
  { src: "/logo-cip.jpeg", alt: "Colegio de Ingenieros del Perú" },
];

export default function Alliance() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    setTimeout(check, 50);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section style={{ backgroundColor: "#C8C6C0", padding: "48px 48px", borderBottom: "0.5px solid #D0CEC8" }}>
      <p style={{ textAlign: "center", fontSize: "13px", color: "#0A0A0A", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "40px" }}>
        Alianzas que respaldan nuestro trabajo
      </p>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: isMobile ? "20px" : "32px" }}>
        {alianzas.map((alianza) => (
          <div
            key={alianza.alt}
            style={{
              borderRadius: "8px",
              padding: "20px 32px",
              backgroundColor: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src={alianza.src}
              alt={alianza.alt}
              height={56}
              width={160}
              style={{ objectFit: "contain", opacity: 0.9 }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
