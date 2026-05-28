export default function Footer() {
  return (
    <footer
      className="bg-next-black px-12 py-8 flex items-center justify-between"
      style={{ borderTop: "0.5px solid #1A1A1A" }}
    >
      <div className="flex flex-col gap-[3px]">
        <div className="w-[22px] h-[16px] bg-next-text-on-dk" />
        <span className="font-display font-extrabold text-[10px] tracking-[0.22em] text-next-text-on-dk uppercase">
          NEXT
        </span>
      </div>
      <p className="font-mono text-[10px] text-[#333333] tracking-[0.1em]">
        © 2026 NEXT — Operational Intelligence for development & construction
      </p>
      <p className="font-mono text-[10px] text-[#333333] tracking-[0.1em]">
        Lima, Perú
      </p>
    </footer>
  );
}