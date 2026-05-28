"use client";
import Button from "./Button";

const links = [
  { label: "Systems", href: "#solution" },
  { label: "Process", href: "#process" },
  { label: "Cases", href: "#evidence" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-next-bg border-b border-next-border">
      <div className="flex items-center justify-between px-12 py-[22px]">
        <a href="#hero" className="flex flex-col gap-[3px]" style={{ textDecoration: "none" }}>
          <div className="w-8 h-6 bg-next-black" />
          <span className="font-display font-extrabold text-[12px] text-next-black uppercase" style={{ letterSpacing: "0.22em" }}>
            NEXT
          </span>
        </a>
        <nav className="flex items-center gap-9">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="font-mono text-[11px] text-next-text-4 uppercase hover:text-next-black transition-colors" style={{ textDecoration: "none", letterSpacing: "0.1em" }}>
              {l.label}
            </a>
          ))}
          <Button variant="outline" href="#contact">
            Agenda un diagnóstico
          </Button>
        </nav>
      </div>
    </header>
  );
}