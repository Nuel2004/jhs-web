import { Button } from "@/components/ui/button";

const NAV_LINKS = ["Historia", "Funciones", "Procesión", "Tienda"];

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-background/90 border-b border-secondary/20 backdrop-blur-md">
            <span className="font-display text-[13px] tracking-[0.2em] uppercase text-primary">
                Hermandad · Jesús Salvador
            </span>

            <ul className="hidden md:flex gap-10 list-none m-0 p-0">
                {NAV_LINKS.map((l) => (
                    <li key={l}>
                        <a
                            href={`#${l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                            className="font-serif text-[11px] tracking-[0.15em] uppercase text-primary/70 hover:text-secondary transition-colors no-underline"
                        >
                            {l}
                        </a>
                    </li>
                ))}
            </ul>

            <Button className="font-serif text-[11px] tracking-[0.15em] uppercase bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-6 cursor-pointer">
                Hacerse Hermano
            </Button>
        </nav>
    );
}