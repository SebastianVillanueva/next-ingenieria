import Button from "./Button";

const metrics = [
  { value: "↓WIP  ↓TC", label: "Flujo óptimo" },
  { value: "D < TH", label: "Confiabilidad de plazo" },
  { value: "≥ 5%", label: "Ahorro operativo" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden px-6 md:px-12 border-b border-[rgba(208,206,200,0.3)] min-h-[100svh] md:min-h-[92vh] flex flex-col justify-between"
    >
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(248,247,244,0.92)] via-[rgba(248,247,244,0.88)] to-[rgba(248,247,244,0)] z-[1]" />
      <div className="absolute top-0 left-0 right-0 h-[120px] bg-gradient-to-b from-[rgba(0,0,0,0.15)] to-transparent z-[2]" />

      <div className="relative z-[3] flex flex-col pt-[100px] md:pt-[140px] max-w-[560px]">
        <h1 className="text-[36px] md:text-[52px] font-extrabold leading-[1.02] tracking-[-0.02em] text-[#0A0A0A] mb-5">
          Sistemas de producción para desarrolladoras y constructoras
        </h1>
        <p className="text-[17px] md:text-[21px] font-semibold text-[#333333] leading-relaxed max-w-[480px] mb-8">
          Diseñados para controlar el plazo y reducir sobrecostos operativos
        </p>
        <div className="inline-flex">
          <Button variant="dark" href="#contact">
            Agenda un diagnóstico
          </Button>
        </div>
      </div>

      <div className="relative z-[3] flex flex-col md:flex-row md:items-center gap-4 md:gap-12 pt-6 pb-7 border-t border-[rgba(208,206,200,0.5)] max-w-[560px]">
        {metrics.map((m, i) => (
          <div key={m.label} className="flex items-center gap-12">
            <div className="text-center">
              <div className="text-[20px] md:text-[22px] font-extrabold text-[#0A0A0A] leading-none">
                {m.value}
              </div>
              <div className="text-[9px] text-[#666666] uppercase tracking-widest mt-1">
                {m.label}
              </div>
            </div>
            {i < metrics.length - 1 && (
              <div className="hidden md:block w-px h-9 bg-[#D0CEC8]" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
