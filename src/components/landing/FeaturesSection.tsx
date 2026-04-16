import { Card, CardContent } from "@/components/ui/card";
import { SectionLabel } from "./Helpers";

export function FeaturesSection() {
    return (
        <section id="funciones" className="bg-background py-24">
            <div className="max-w-5xl mx-auto px-6 md:px-8">
                <SectionLabel>Plataforma Digital</SectionLabel>
                <h2 className="font-display text-3xl md:text-4xl text-primary mb-4 leading-tight">
                    Todo lo que la hermandad<br />
                    <span className="text-secondary">necesita, en un solo lugar</span>
                </h2>
                <p className="font-body text-lg leading-[1.9] text-primary/70 max-w-xl mb-14">
                    Gestión integral y tecnología al servicio de la fe.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5px] bg-secondary/15">
                    {/* Mapeo de FEATURES omitido por brevedad, usa la misma lógica de colores */}
                    <Card className="bg-background border-0 rounded-none hover:bg-muted/50 transition-colors">
                        <CardContent className="p-10">
                            {/* Contenido con text-primary y text-primary/60 */}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}