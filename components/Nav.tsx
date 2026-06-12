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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 120);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
  const pillBg = dark ? "rgba(10,10,10,0.35)" : "rgba(220,218,215,0.28)";
  const pillBorder = dark ? "rgba(248,247,244,0.12)" : "rgba(180,180,180,0.25)";

  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, backgroundColor: "transparent" }}>
      <style>{`
        .nav-pill-desktop {
          position: absolute;
          top: 6px; left: 16px; right: 16px;
          height: 56px;
          border-radius: 14px;
          z-index: -1;
          transition: background-color 0.3s ease;
        }
        .nav-pill-mobile {
          position: absolute;
          top: 8px; left: 16px; right: 16px;
          height: 50px;
          background-color: rgba(200,200,200,0.35);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-radius: 12px;
          border: 0.5px solid rgba(180,180,180,0.3);
          z-index: -1;
          transition: opacity 0.5s ease;
        }
        .nav-links-desktop { display: flex; }
        .nav-cta-mobile { display: none; }
        @media (max-width: 767px) {
          .nav-pill-mobile { top: 6px !important; left: 6px !important; right: 6px !important; height: 52px !important; }
          
          .nav-pill-desktop { display: none; }
          .nav-links-desktop { display: none !important; }
          .nav-cta-mobile { display: block; }
        }
        @media (min-width: 768px) {
          .nav-pill-mobile { display: none; }
        }
      `}</style>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 28px", position: "relative" }}>

        {/* Pill desktop */}
        <div className="nav-pill-desktop" style={{ backgroundColor: pillBg, backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", border: `0.5px solid ${pillBorder}` }} />

        {/* Pill móvil */}
        <div className="nav-pill-mobile" style={{ opacity: scrolled ? 0 : 1, pointerEvents: scrolled ? "none" : "auto" }} />

        {/* Links desktop */}
        <nav className="nav-links-desktop" style={{ alignItems: "center", gap: "32px" }}>
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

        {/* CTA móvil */}
        <div className="nav-cta-mobile" style={{ overflow: "hidden", maxWidth: scrolled ? "0px" : "280px", opacity: scrolled ? 0 : 1, transition: "max-width 0.6s ease, opacity 0.5s ease", whiteSpace: "nowrap" }}>
          <a href="#contact" style={{ fontSize: "9px", color: textColor, textTransform: "uppercase", letterSpacing: "0.1em", textDecoration: "none", border: `0.5px solid ${borderColor}`, borderRadius: "5px", padding: "6px 10px", display: "inline-block" }}>
            Evalúa tu sistema de producción
          </a>
        </div>

        {/* Logo */}
        <a href="#hero" style={{ textDecoration: "none" }}>
          <Image src="/logo-next.png" alt="NEXT" width={56} height={52} style={{ objectFit: "contain", filter: dark ? "brightness(0) invert(1)" : "none", transition: "filter 0.3s ease" }} />
        </a>
      </div>
    </header>
  );
}
