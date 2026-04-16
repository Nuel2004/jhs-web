import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SectionLabel } from "./Helpers";

export function GpsSection() {
    return (
        <section id="procesion" className="py-20 border-y border-secondary/20 bg-primary">
            <div className="max-w-5xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <SectionLabel className="text-secondary [&>div]:bg-secondary">
                        Estación de Penitencia
                    </SectionLabel>
                    <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-6 leading-tight">
                        Sigue el paso<br />
                        <span className="text-secondary">desde cualquier lugar</span>
                    </h2>
                    <p className="font-body text-lg leading-[1.9] text-primary-foreground/80 mb-4">
                        Posición en tiempo real durante la procesión.
                    </p>
                </div>

                <Card className="bg-background/10 border border-secondary/30 rounded-lg">
                    <CardHeader className="border-b border-secondary/20 pb-4">
                        <span className="font-body text-[12px] tracking-[0.2em] uppercase text-secondary">
                            Seguimiento del Paso
                        </span>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="h-44 bg-secondary/5 border border-dashed border-secondary/20 flex items-center justify-center">
                            <div className="w-4 h-4 rounded-full bg-secondary animate-ping" />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}