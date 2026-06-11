import Image from "next/image";

const logos = [
  { src: "/logo-cosapi.png", alt: "Cosapi" },
  { src: "/logo-uk-healthcare.png", alt: "UK Healthcare Alliance" },
  { src: "/logo-universidad-lima.png", alt: "Universidad de Lima" },
  { src: "/logo-semcocad.png", alt: "SemcoCAD" },
];

export default function Logos() {
  const track = [...logos, ...logos];
  return (
    <section style={{ backgroundColor: "#FFFFFF", padding: "48px 48px", borderBottom: "0.5px solid #D0CEC8", overflow: "hidden" }}>
      <p style={{ textAlign: "center", fontSize: "13px", color: "#888888", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "32px" }}>
        Confían en nosotros
      </p>
      <div style={{ overflow: "hidden", width: "100%" }}>
        <div className="marquee-track">
          {track.map((logo, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, padding: "0 32px" }}>
              <Image src={logo.src} alt={logo.alt} height={64} width={192} style={{ objectFit: "contain", opacity: 0.9 }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}