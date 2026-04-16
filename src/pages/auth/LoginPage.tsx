import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabaseClient } from "@/database/supabase/Client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "react-hot-toast";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
        if (error) {
            toast.error("Credenciales incorrectas");
        } else {
            toast.success("Bienvenido de nuevo");
            navigate("/"); // O llévalo a "/dashboard" cuando lo creemos
        }
    };

    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 relative">
            <Link to="/" className="absolute top-8 left-8 font-serif text-[10px] tracking-widest text-secondary uppercase hover:text-primary transition-colors">
                ← Volver al inicio
            </Link>

            <Card className="w-full max-w-md bg-muted/30 border-secondary/20 rounded-none shadow-none">
                <CardHeader className="text-center pb-8 border-b border-secondary/10">
                    <CardTitle className="font-display text-3xl text-primary mt-2">Acceso</CardTitle>
                    <CardDescription className="font-body text-primary/60 text-sm mt-2">
                        Introduce tus credenciales para acceder al portal.
                    </CardDescription>
                </CardHeader>
                <CardContent className="pt-8">
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-4">
                            <Input
                                type="email"
                                placeholder="Correo electrónico"
                                required
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className="bg-background border-secondary/30 rounded-none focus-visible:ring-secondary"
                            />
                            <Input
                                type="password"
                                placeholder="Contraseña"
                                required
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                className="bg-background border-secondary/30 rounded-none focus-visible:ring-secondary"
                            />
                        </div>

                        <Button className="w-full bg-primary text-primary-foreground rounded-none uppercase tracking-widest font-serif text-xs py-6 hover:bg-primary/90 transition-colors">
                            Entrar
                        </Button>
                    </form>

                    {/* AQUÍ ESTÁ EL NUEVO BOTÓN/ENLACE DE REGISTRO */}
                    <div className="mt-8 text-center border-t border-secondary/10 pt-6">
                        <p className="font-body text-sm text-primary/60 mb-3">
                            ¿Aún no estás registrado o quieres ser hermano?
                        </p>
                        <Link to="/registro">
                            <Button variant="outline" className="w-full border-secondary/50 text-primary hover:bg-secondary/10 rounded-none uppercase tracking-widest font-serif text-[10px] py-5">
                                Crear nueva cuenta
                            </Button>
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
} 