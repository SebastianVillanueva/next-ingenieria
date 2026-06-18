export default function Footer() {
  return (
    <footer
      className="bg-next-black px-6 md:px-12 py-6 md:py-8"
      style={{ borderTop: "0.5px solid #1A1A1A" }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", textAlign: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "3px" }}>
          <div className="w-[22px] h-[16px] bg-next-text-on-dk" />
          <span className="font-display font-extrabold text-[10px] tracking-[0.22em] text-next-text-on-dk uppercase">
            NEXT
          </span>
        </div>
        <p className="font-mono text-[10px] text-[#888888] tracking-[0.1em]">
          © 2026 NEXT — Operational Intelligence for development & construction
        </p>
        <p className="font-mono text-[10px] text-[#888888] tracking-[0.1em]">
          Lima, Perú
        </p>
      </div>
    </footer>
  );
}
