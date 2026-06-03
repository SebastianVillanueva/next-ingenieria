"use client";

import Image from "next/image";

const links = [
  { label: "Método NEXT", href: "#solution" },
  { label: "Casos de éxito", href: "#evidence" },
];

export default function Nav() {
  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, backgroundColor: "transparent" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 48px" }}>
        <nav style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          <a href="#contact" style={{ fontSize: "11px", color: "#0A0A0A", textTransform: "uppercase", letterSpacing: "0.1em", textDecoration: "none", border: "0.5px solid rgba(10,10,10,0.6)", borderRadius: "5px", padding: "7px 14px" }}>
            Evalúa tu sistema de producción
          </a>
          {links.map((l) => (
            <a key={l.label} href={l.href} style={{ fontSize: "11px", color: "#0A0A0A", textTransform: "uppercase", letterSpacing: "0.1em", textDecoration: "none" }}>
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#hero" style={{ textDecoration: "none" }}>
          <Image src="/logo-next.png" alt="NEXT" width={72} height={66} style={{ objectFit: "contain" }} />
        </a>
      </div>
    </header>
  );
}
