import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { SectionLabel } from "./Helpers";

const ROLES = [
    {
        name: "Visitante",
        featured: false,
        items: [
            { label: "Historia y noticias", active: true },
            { label: "Mapa GPS en procesión", active: true },
            { label: "Formulario de alta", active: true },
            { label: "Donación de trajes", active: true },
            { label: "Compras en tienda", active: false },
            { label: "Gestión de cuotas", active: false },
        ],
    },
    {
        name: "Registrado",
        featured: false,
        items: [
            { label: "Historia y noticias", active: true },
            { label: "Mapa GPS en procesión", active: true },
            { label: "Compra de palmas", active: true },
            { label: "Donación de trajes", active: true },
            { label: "Gestión de cuotas", active: false },
            { label: "Elección de puesto", active: false },
        ],
    },
    {
        name: "Hermano Cofrade",
        featured: true,
        badge: "Premium",
        items: [
            { label: "Todas las funciones anteriores", active: true },
            { label: "Gestión de cuotas online", active: true },
            { label: "Elección de puesto", active: true },
            { label: "Materiales y merchandising", active: true },
            { label: "Acceso completo a la tienda", active: true },
            { label: "Contacto directo costurera", active: true },
        ],
    },
    {
        name: "Administrador",
        featured: false,
        items: [
            { label: "Control total del sistema", active: true },
            { label: "Activar GPS del paso", active: true },
            { label: "Gestión de usuarios", active: true },
            { label: "Panel de estadísticas", active: true },
            { label: "Gestión de pedidos", active: true },
            { label: "Publicar noticias", active: true },
        ],
    },
];

export function RolesSection() {
    return (
        <section id="roles" className="max-w-5xl mx-auto px-6 md:px-8 py-24">
            <SectionLabel>Accesos y permisos</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-12 leading-tight">
                Un sistema pensado<br />
                <span className="text-[#C9A84C]">para cada miembro</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {ROLES.map((r) => (
                    <Card
                        key={r.name}
                        className={cn(
                            "bg-transparent rounded-none relative transition-colors",
                            r.featured
                                ? "border border-[#C9A84C]"
                                : "border border-[#C9A84C]/20 hover:border-[#C9A84C]",
                        )}
                    >
                        {r.badge && (
                            <Badge className="absolute -top-[1px] right-6 font-serif text-[9px] tracking-[0.15em] uppercase bg-[#C9A84C] text-[#0D0B08] rounded-none px-3 py-1 hover:bg-[#C9A84C]">
                                {r.badge}
                            </Badge>
                        )}
                        <CardHeader className="pb-2 pt-8 px-6">
                            <p className="font-serif text-[#C9A84C] tracking-wide text-base">{r.name}</p>
                        </CardHeader>
                        <CardContent className="px-6 pb-8">
                            <ul className="space-y-0 list-none p-0 m-0">
                                {r.items.map((item) => (
                                    <li
                                        key={item.label}
                                        className={cn(
                                            "font-body text-[0.9rem] py-[0.4rem] border-b border-[#C9A84C]/10 flex items-center gap-2",
                                            item.active ? "text-white/65" : "text-white/30 line-through",
                                        )}
                                    >
                                        <span className="text-[#C9A84C] text-[0.6rem] opacity-70 shrink-0">✦</span>
                                        {item.label}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}