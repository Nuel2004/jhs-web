import { Card, CardContent } from "@/components/ui/card";
import { SectionLabel } from "./Helpers";

const FEATURES = [
    { icon: "⛪", title: "Historia y noticias", body: "Ventana pública con la historia de la hermandad, novedades y noticias de la cofradía accesibles para todos los visitantes." },
    { icon: "📍", title: "Mapa GPS en tiempo real", body: "Sigue el paso durante la Estación de Penitencia en un mapa interactivo actualizado en tiempo real desde el móvil del capataz." },
    { icon: "💳", title: "Pagos online con Stripe", body: "Pago de cuotas y compra de materiales de forma segura. También se ofrece la opción de cobro presencial en domicilio." },
    { icon: "🕊️", title: "Elección de puesto", body: "Los hermanos cofrades pueden elegir su posición en la procesión: Palma Grande, Palma Chica, Cruz de Guía y más." },
    { icon: "👗", title: "Donación de trajes", body: "Sistema de contacto directo con la costurera vía WhatsApp y correo para la donación y gestión de túnicas y trajes." },
    { icon: "🛡️", title: "Panel de administración", body: "Dashboard completo: gestión de usuarios, pedidos, estadísticas y control del GPS del paso." },
];

export function FeaturesSection() {
    return (
        <section id="funciones" className="bg-[#1A1610] py-24">
            <div className="max-w-5xl mx-auto px-6 md:px-8">
                <SectionLabel>Plataforma Digital</SectionLabel>
                <h2 className="font-display text-3xl md:text-4xl text-white mb-4 leading-tight">
                    Todo lo que la hermandad<br />
                    <span className="text-[#C9A84C]">necesita, en un solo lugar</span>
                </h2>
                <p className="font-body text-lg leading-[1.9] text-white/70 max-w-xl mb-14">
                    Desde la gestión de cuotas hasta el seguimiento en tiempo real del paso.
                    Construida con las tecnologías más robustas del mercado.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5px] bg-[#C9A84C]/15">
                    {FEATURES.map((f) => (
                        <Card
                            key={f.title}
                            className="bg-[#1A1610] border-0 rounded-none hover:bg-[#6B1A1A]/20 transition-colors"
                        >
                            <CardContent className="p-10">
                                <div className="w-12 h-12 border border-[#C9A84C] flex items-center justify-center mb-6 text-xl">
                                    {f.icon}
                                </div>
                                <h3 className="font-serif text-base text-white mb-3 tracking-wide">{f.title}</h3>
                                <p className="font-body text-[0.95rem] leading-[1.8] text-white/60">{f.body}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}