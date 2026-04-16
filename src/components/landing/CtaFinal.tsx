import { Button } from "@/components/ui/button";
import { GoldenDivider } from "./Helpers";

export function CtaFinal() {
    return (
        <section className="bg-muted text-center py-32 px-8 border-t border-secondary/15 relative overflow-hidden">
            <div className="relative z-10">
                <GoldenDivider />
                <h2 className="font-display text-4xl text-primary mb-4">
                    Forma parte de la hermandad
                </h2>
                <div className="flex gap-4 justify-center flex-wrap">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-10 py-6 h-auto">
                        Solicitar Alta
                    </Button>
                    <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 rounded-none px-10 py-6 h-auto">
                        Más información
                    </Button>
                </div>
            </div>
        </section>
    );
}