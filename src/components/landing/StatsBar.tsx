const STATS = [
    { num: "10€", label: "Cuota anual de hermano" },
    { num: "4", label: "Roles de usuario" },
    { num: "GPS", label: "Seguimiento en tiempo real" },
];

export function StatsBar() {
    return (
        /* Usamos primary (verde oscuro) como fondo de contraste para las estadísticas */
        <div className="bg-primary border-y border-secondary/30 py-8 px-6 flex justify-center gap-10 md:gap-20 flex-wrap relative z-10">
            {STATS.map((s) => (
                <div key={s.label} className="text-center">
                    <span className="font-display text-3xl text-secondary block leading-none">{s.num}</span>
                    <span className="font-body text-[10px] tracking-[0.2em] uppercase text-primary-foreground/60 mt-1 block">{s.label}</span>
                </div>
            ))}
        </div>
    );
}