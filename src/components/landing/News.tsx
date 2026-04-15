import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const NOTICIAS = [
    { title: "Solemne Quinario", date: "15 Mar 2024", tag: "Cultos" },
    { title: "Igualá de Costaleros", date: "20 Mar 2024", tag: "Ensayo" },
    { title: "Nuevas Túnicas", date: "02 Abr 2024", tag: "Tienda" },
];

export function News() {
    return (
        <section id="noticias" className="py-24 px-6 max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-12 border-b border-gold-corp/20 pb-4">
                <h2 className="font-display text-4xl text-gold-corp uppercase tracking-tighter">Últimas Noticias</h2>
                <a href="#" className="text-gold-corp/60 text-xs uppercase tracking-widest hover:text-gold-corp">Ver todas</a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {NOTICIAS.map((n, i) => (
                    <Card key={i} className="bg-sacred-black/50 border-gold-corp/10 hover:border-gold-corp/40 transition-all rounded-none group cursor-pointer">
                        <CardHeader>
                            <Badge variant="outline" className="w-fit border-gold-corp/30 text-gold-corp text-[10px] uppercase rounded-none">
                                {n.tag}
                            </Badge>
                            <CardTitle className="font-serif text-2xl text-parchment group-hover:text-gold-corp transition-colors">
                                {n.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-parchment/40 uppercase tracking-widest">{n.date}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}