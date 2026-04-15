import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "./Helpers";

const PRODUCTOS = [
    { icon: "🌿", nombre: "Palma Grande", desc: "Palma rizada artesanal para procesión", precio: "25€" },
    { icon: "🌱", nombre: "Palma Chica", desc: "Palma para niños o acompañamiento", precio: "15€" },
    { icon: "🏅", nombre: "Medalla Hermandad", desc: "Medalla oficial bañada en plata", precio: "12€" },
    { icon: "👘", nombre: "Túnica Oficial", desc: "Traje completo de cofrade, bajo pedido", precio: "80€" },
];

export function TiendaSection() {
    return (
        <section id="tienda" className="max-w-5xl mx-auto px-6 md:px-8 py-24">
            <SectionLabel>Tienda oficial</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4 leading-tight">
                Materiales y<br />
                <span className="text-[#C9A84C]">merchandising</span>
            </h2>
            <p className="font-body text-lg leading-[1.9] text-white/70 max-w-xl mb-12">
                Adquiere los materiales de la hermandad de forma segura. Los usuarios
                registrados pueden comprar palmas; los hermanos cofrades tienen acceso
                completo a la tienda.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {PRODUCTOS.map((p) => (
                    <Card
                        key={p.nombre}
                        className="bg-transparent border border-[#C9A84C]/15 rounded-none hover:border-[#C9A84C] transition-colors overflow-hidden flex flex-col"
                    >
                        <div className="h-28 bg-[#1A1610] flex items-center justify-center text-4xl border-b border-[#C9A84C]/10">
                            {p.icon}
                        </div>
                        <CardContent className="p-5 flex-1">
                            <p className="font-serif text-[0.85rem] tracking-wide text-white mb-1">{p.nombre}</p>
                            <p className="font-body text-[0.85rem] text-white/50 italic leading-relaxed">{p.desc}</p>
                        </CardContent>
                        <CardFooter className="px-5 pb-5 pt-0 flex items-center justify-between">
                            <span className="font-display text-xl text-[#C9A84C]">{p.precio}</span>
                            <Button
                                variant="outline"
                                size="sm"
                                className="font-serif text-[9px] tracking-[0.15em] uppercase bg-transparent text-[#C9A84C] border-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0D0B08] rounded-none cursor-pointer"
                            >
                                Comprar
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
}