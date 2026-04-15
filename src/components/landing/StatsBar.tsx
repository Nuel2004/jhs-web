const STATS = [
    { num: "10€", label: "Cuota anual de hermano" },
    { num: "4", label: "Roles de usuario" },
    { num: "GPS", label: "Seguimiento en tiempo real" },
    { num: "Stripe", label: "Pagos seguros integrados" },
];

export function StatsBar() {
    return (
        <div className="bg-[#6B1A1A] border-y border-[#C9A84C]/30 py-6 px-6 flex justify-center gap-10 md:gap-20 flex-wrap relative z-10">
            {STATS.map((s) => (
                <div key={s.label} className="text-center">
                    <span className="font-display text-3xl text-[#E8C96A] block leading-none">{s.num}</span>
                    <span className="font-serif text-[10px] tracking-[0.2em] uppercase text-white/60 mt-1 block">{s.label}</span>
                </div>
            ))}
        </div>
    );
}