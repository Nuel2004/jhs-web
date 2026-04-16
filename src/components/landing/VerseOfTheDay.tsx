import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { GoldenDivider } from "./Helpers";

// Mapeo: "api" es lo que entiende el servidor, "mostrar" es lo que lee el usuario
const REFERENCIAS = [
    { api: "John 3:16", mostrar: "Juan 3:16" },
    { api: "Philippians 4:13", mostrar: "Filipenses 4:13" },
    { api: "Psalms 23:1", mostrar: "Salmos 23:1" },
    { api: "Romans 8:28", mostrar: "Romanos 8:28" },
    { api: "Joshua 1:9", mostrar: "Josué 1:9" },
    { api: "Proverbs 3:5", mostrar: "Proverbios 3:5" }
];

export function VerseOfTheDay() {
    const [verse, setVerse] = useState({ text: "Cargando palabra...", reference: "" });
    const [error, setError] = useState(false);

    useEffect(() => {
        const hoy = new Date();
        const inicioAño = new Date(hoy.getFullYear(), 0, 0);
        const diferencia = hoy.getTime() - inicioAño.getTime();
        const diaDelAño = Math.floor(diferencia / (1000 * 60 * 60 * 24));

        // Seleccionamos el objeto completo del día
        const versiculoHoy = REFERENCIAS[diaDelAño % REFERENCIAS.length];

        // Hacemos la petición con la versión en inglés que la API sí entiende
        fetch(`https://bible-api.com/${versiculoHoy.api}?translation=valera`)
            .then((response) => {
                if (!response.ok) throw new Error("Error en la red");
                return response.json();
            })
            .then((data) => {
                const textoLimpio = data.text.replace(/(\r\n|\n|\r)/gm, " ").trim();
                // Guardamos el texto traducido de la API, pero forzamos NUESTRO título en español
                setVerse({ text: textoLimpio, reference: versiculoHoy.mostrar });
            })
            .catch((err) => {
                console.error("Fallo al conectar con la API bíblica:", err);
                setError(true);
                setVerse({
                    text: "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito.",
                    reference: "Juan 3:16"
                });
            });
    }, []);

    return (
        <section className="py-16 px-6 bg-background flex justify-center">
            <Card className="max-w-3xl w-full bg-muted/30 border-secondary/20 shadow-none rounded-none text-center p-8 md:p-12">
                <CardContent className="p-0 flex flex-col items-center">
                    <span className="font-serif text-[10px] tracking-[0.2em] uppercase text-secondary mb-6 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-secondary/50"></span>
                        Palabra del Día
                        <span className="w-2 h-2 rounded-full bg-secondary/50"></span>
                    </span>

                    <p className="font-body text-xl md:text-2xl italic text-primary/90 leading-[1.8] mb-6 transition-opacity duration-500">
                        «{verse.text}»
                    </p>

                    <GoldenDivider className="opacity-70 my-2" />

                    <span className="font-serif text-sm text-primary tracking-widest mt-4">
                        {verse.reference}
                    </span>

                    <span className="font-body text-[10px] text-primary/40 mt-1 uppercase tracking-widest">
                        {error ? "Modo Offline" : "Reina-Valera 1909"}
                    </span>
                </CardContent>
            </Card>
        </section>
    );
}