import { Button } from "@/components/ui/button";
import { GoldenDivider } from "./Helpers";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-16 overflow-hidden">
      {/* Fondos y efectos */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(107,26,26,0.35),transparent_70%),radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(201,168,76,0.08),transparent_60%),#0D0B08]" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,#C9A84C 0,#C9A84C 1px,transparent 1px,transparent 80px),repeating-linear-gradient(90deg,#C9A84C 0,#C9A84C 1px,transparent 1px,transparent 80px)",
        }}
      />

      <div className="relative z-10 max-w-3xl">
        <p className="font-serif text-[11px] tracking-[0.4em] uppercase text-[#C9A84C] mb-6 flex items-center justify-center gap-4">
          <span className="inline-block h-px w-10 bg-[#C9A84C]/50" />
          Est. Montijo · Badajoz
          <span className="inline-block h-px w-10 bg-[#C9A84C]/50" />
        </p>

        <h1 className="font-display text-5xl md:text-7xl leading-[1.15] text-white mb-2">
          Hermandad<br />
          <span className="text-[#C9A84C]">Jesús Salvador</span>
        </h1>

        <p className="font-serif text-sm md:text-lg tracking-[0.25em] uppercase text-white/50 mb-8">
          De los Hombres de Montijo
        </p>

        <GoldenDivider />

        <p className="font-body text-lg md:text-xl leading-[1.9] text-white/75 italic max-w-xl mx-auto mb-10">
          Una cofradía con raíces en la fe y el servicio, que une a su comunidad
          en la Estación de Penitencia y en la vida cotidiana.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Button className="font-serif text-[12px] tracking-[0.2em] uppercase bg-[#C9A84C] text-[#0D0B08] hover:bg-[#E8C96A] rounded-none px-10 py-6 h-auto cursor-pointer">
            Únete a la Hermandad
          </Button>
          <Button
            variant="outline"
            className="font-serif text-[12px] tracking-[0.2em] uppercase bg-transparent text-white border-white/30 hover:border-[#C9A84C] hover:text-[#C9A84C] hover:bg-transparent rounded-none px-10 py-6 h-auto cursor-pointer"
          >
            Conoce la Plataforma
          </Button>
        </div>
      </div>

      {/* Flecha de scroll animada */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-bounce">
        <span className="font-serif text-[9px] tracking-[0.2em] uppercase text-white">Descubre</span>
        <div className="w-px h-10 bg-[#C9A84C]" />
      </div>
    </section>
  );
}