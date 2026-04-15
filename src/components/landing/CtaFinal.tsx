import { Button } from "@/components/ui/button";
import { GoldenDivider } from "./Helpers";

export function CtaFinal() {
    return (
        <section className="bg-[#1A1610] text-center py-32 px-8 border-t border-[#C9A84C]/15 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(107,26,26,0.2),transparent_70%)]" />
            </div>
            <div className="relative z-10">
                <p className="font-body text-2xl italic text-white/70 max-w-xl mx-auto mb-3 leading-[1.7]">
                    «Porque de tal manera amó Dios al mundo...»
                </p>
                <span className="font-serif text-[11px] tracking-[0.2em] text-[#C9A84C] block mb-2">
                    Juan 3:16 · Reina-Valera
                </span>
                <GoldenDivider />
                <h2 className="font-display text-4xl text-white mb-4">
                    Forma parte de la hermandad
                </h2>
                <p className="font-body text-lg text-white/60 max-w-md mx-auto mb-10 italic">
                    Únete como hermano cofrade por solo 10€ al año y accede a todas
                    las funciones de la plataforma digital.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                    <Button className="font-serif text-[12px] tracking-[0.2em] uppercase bg-[#C9A84C] text-[#0D0B08] hover:bg-[#E8C96A] rounded-none px-10 py-6 h-auto cursor-pointer">
                        Solicitar Alta
                    </Button>
                    <Button
                        variant="outline"
                        className="font-serif text-[12px] tracking-[0.2em] uppercase bg-transparent text-white border-white/30 hover:border-[#C9A84C] hover:text-[#C9A84C] hover:bg-transparent rounded-none px-10 py-6 h-auto cursor-pointer"
                    >
                        Más información
                    </Button>
                </div>
            </div>
        </section>
    );
}