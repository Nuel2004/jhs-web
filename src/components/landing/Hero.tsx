import { Button } from "@/components/ui/button";
import { GoldenDivider } from "./Helpers";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-16 overflow-hidden bg-background">
      {/* Efectos de fondo adaptados a primary (verde) y secondary (dorado) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(27,48,34,0.15),transparent_70%),radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(184,134,11,0.05),transparent_60%)]" />

      <div className="relative z-10 max-w-3xl">
        <p className="font-body text-[11px] tracking-[0.4em] uppercase text-secondary mb-6 flex items-center justify-center gap-4">
          <span className="inline-block h-px w-10 bg-secondary/50" />
          Est. Montijo · Badajoz
          <span className="inline-block h-px w-10 bg-secondary/50" />
        </p>

        <h1 className="font-display text-5xl md:text-7xl leading-[1.15] text-primary mb-2">
          Hermandad<br />
          <span className="text-secondary">Jesús Salvador</span>
        </h1>

        <p className="font-body text-sm md:text-lg tracking-[0.25em] uppercase text-primary/50 mb-8">
          De los Hombres de Montijo
        </p>

        <GoldenDivider />

        <p className="font-body text-lg md:text-xl leading-[1.9] text-primary/75 italic max-w-xl mx-auto mb-10">
          Una cofradía con raíces en la fe y el servicio, que une a su comunidad
          en la Estación de Penitencia y en la vida cotidiana.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-10 py-6 h-auto">
            Únete a la Hermandad
          </Button>
          <Button
            variant="outline"
            className="border-secondary text-secondary hover:bg-secondary/10 rounded-none px-10 py-6 h-auto"
          >
            Conoce la Plataforma
          </Button>
        </div>
      </div>
    </section>
  );
}