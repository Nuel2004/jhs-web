import { Button } from "@/components/ui/button";

const NAV_LINKS = ["Historia", "Funciones", "Procesión", "Tienda"];

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-[#0D0B08]/90 border-b border-[#C9A84C]/20 backdrop-blur-md">
            <span className="font-serif text-[13px] tracking-[0.2em] uppercase text-[#C9A84C]">
                Hermandad · Jesús Salvador
            </span>

            <ul className="hidden md:flex gap-10 list-none m-0 p-0">
                {NAV_LINKS.map((l) => (
                    <li key={l}>
                        <a
                            href={`#${l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                            className="font-serif text-[11px] tracking-[0.15em] uppercase text-white/70 hover:text-[#C9A84C] transition-colors no-underline"
                        >
                            {l}
                        </a>
                    </li>
                ))}
            </ul>

            <Button className="font-serif text-[11px] tracking-[0.15em] uppercase bg-[#C9A84C] text-[#0D0B08] hover:bg-[#E8C96A] rounded-none px-6 cursor-pointer">
                Hacerse Hermano
            </Button>
        </nav>
    );
}