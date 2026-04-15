export function Footer() {
    return (
        <footer className="bg-[#0D0B08] border-t border-[#C9A84C]/15 px-6 md:px-12 py-10 flex flex-col md:flex-row justify-between items-center gap-6 flex-wrap">
            <div>
                <p className="font-display text-[#C9A84C] text-base">Jesús Salvador de los Hombres</p>
                <p className="font-serif text-[10px] tracking-[0.2em] text-white/40 mt-1">
                    Cofradía de Montijo · Badajoz
                </p>
            </div>
            <div className="flex gap-8 flex-wrap justify-center">
                {["Historia", "Noticias", "Tienda", "Contacto", "Privacidad"].map((l) => (
                    <a
                        key={l}
                        href="#"
                        className="font-serif text-[10px] tracking-[0.15em] uppercase text-white/40 hover:text-[#C9A84C] transition-colors no-underline"
                    >
                        {l}
                    </a>
                ))}
            </div>
            <p className="font-body text-[0.8rem] text-white/25">
                © 2026 Jesús Salvador de los Hombres · Montijo
            </p>
        </footer>
    );
}