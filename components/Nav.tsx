"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { label: "Evalúa tu sistema de producción", href: "#contact", isButton: true },
  { label: "Método NEXT", href: "#solution" },
  { label: "Casos de éxito", href: "#evidence" },
];

export default function Nav() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const solution = document.getElementById("solution");
    if (!solution) return;

    const observer = new IntersectionObserver(
      ([entry]) => setDark(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(solution);
    return () => observer.disconnect();
  }, []);

  const textColor = dark ? "#F8F7F4" : "#0A0A0A";
  const borderColor = dark ? "rgba(248,247,244,0.6)" : "rgba(10,10,10,0.6)";

  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, backgroundColor: "transparent", transition: "all 0.3s ease" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 48px" }}>
        <nav style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          {links.map((l) => (
            l.isButton ? (
              <a key={l.label} href={l.href} style={{ fontSize: "11px", color: textColor, textTransform: "uppercase", letterSpacing: "0.1em", textDecoration: "none", border: `0.5px solid ${borderColor}`, borderRadius: "5px", padding: "7px 14px", transition: "all 0.3s ease" }}>
                {l.label}
              </a>
            ) : (
              <a key={l.label} href={l.href} style={{ fontSize: "11px", color: textColor, textTransform: "uppercase", letterSpacing: "0.1em", textDecoration: "none", transition: "color 0.3s ease" }}>
                {l.label}
              </a>
            )
          ))}
        </nav>

        <a href="#hero" style={{ textDecoration: "none" }}>
          <Image
            src="/logo-next.png"
            alt="NEXT"
            width={72}
            height={66}
            style={{ objectFit: "contain", filter: dark ? "brightness(0) invert(1)" : "none", transition: "filter 0.3s ease" }}
          />
        </a>
      </div>
    </header>
  );
}
