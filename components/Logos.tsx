const logos = [
  "Quellaveco",
  "Anglo American",
  "Cosapi",
  "Inmobiliaria B",
  "Graña y Montero",
  "JJC Contratistas",
  "Constructora C",
];

export default function Logos() {
  const track = [...logos, ...logos];

  return (
    <section className="bg-next-bg-logo px-12 py-[52px] border-b border-next-border overflow-hidden">
      <div className="blk-label">¿Quiénes confían en nosotros?</div>

      <div className="overflow-hidden w-full">
        <div className="marquee-track">
          {track.map((name, i) => (
            <div
              key={i}
              className="font-mono text-[10px] text-next-text-5 uppercase tracking-[0.15em] whitespace-nowrap border border-next-border bg-next-bg-logo px-[22px] py-[9px] flex-shrink-0"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}