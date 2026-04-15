import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SectionLabel } from "./Helpers";

export function GpsSection() {
    return (
        <section
            id="procesion"
            className="py-20 border-y border-[#C9A84C]/20"
            style={{ background: "linear-gradient(135deg,#6B1A1A 0%,#8B2222 100%)" }}
        >
            <div className="max-w-5xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <SectionLabel className="text-[#E8C96A] [&>div]:bg-[#E8C96A]">
                        Estación de Penitencia
                    </SectionLabel>
                    <h2 className="font-display text-3xl md:text-4xl text-white mb-6 leading-tight">
                        Sigue el paso<br />
                        <span className="text-[#C9A84C]">desde cualquier lugar</span>
                    </h2>
                    <p className="font-body text-lg leading-[1.9] text-white/80 mb-4">
                        Durante la procesión, el administrador activa el GPS desde su móvil y
                        la posición del paso se actualiza en tiempo real, visible para todos
                        sin necesidad de recargar la página.
                    </p>
                    <p className="font-body text-[0.95rem] leading-[1.9] text-white/60">
                        Tecnología Supabase Realtime sobre PostgreSQL, con rutas predefinidas:
                        Iglesia de Santiago Apóstol, Plaza de España y Ermita de Jesús.
                    </p>
                </div>

                <Card className="bg-black/40 border border-[#C9A84C]/30 rounded-lg">
                    <CardHeader className="border-b border-[#C9A84C]/20 pb-4">
                        <div className="flex items-center justify-between">
                            <span className="font-serif text-[12px] tracking-[0.2em] uppercase text-[#C9A84C]">
                                Seguimiento del Paso
                            </span>
                            <span className="flex items-center gap-2 font-serif text-[10px] tracking-[0.15em] text-green-400">
                                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                En Directo
                            </span>
                        </div>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="h-44 bg-[#C9A84C]/5 border border-dashed border-[#C9A84C]/20 flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-4 h-4 rounded-full bg-[#C9A84C] mx-auto mb-2 animate-ping opacity-75" />
                                <p className="font-serif text-[10px] text-[#C9A84C] tracking-wide whitespace-nowrap">
                                    Paso · Plaza de España
                                </p>
                            </div>
                        </div>
                        <p className="mt-4 font-serif text-[11px] text-white/50 tracking-wide leading-6">
                            Lat: 38.9108° N &nbsp;·&nbsp; Lon: 6.6163° O<br />
                            <span className="text-[#C9A84C]/70">Última actualización: ahora mismo</span>
                        </p>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}