import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { hermanoRepository } from "@/database/repositories";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionLabel } from "@/components/landing/Helpers";
import { cn } from "@/lib/utils";

export default function RegisterPage() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [quiereSerHermano, setQuiereSerHermano] = useState(true);

    const [formData, setFormData] = useState({
        nombre: "", apellidos: "", email: "", password: "",
        telefono: "", direccion: "", fecha_nacimiento: "", genero: "" as any
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const resultado = await hermanoRepository.registrar({
            ...formData,
            quiere_ser_hermano: quiereSerHermano,
        });

        if (resultado.success) {
            toast.success(quiereSerHermano ? "Solicitud enviada. ¡Bienvenido!" : "Cuenta creada.");
            navigate(quiereSerHermano ? "/pago-cuota" : "/login");
        } else {
            toast.error(resultado.error || "Error al registrar");
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-background flex flex-col items-center py-12 px-6">
            <Link to="/" className="font-serif text-[10px] tracking-widest text-secondary uppercase mb-8">
                ← Volver al inicio
            </Link>

            <Card className="w-full max-w-2xl bg-muted/30 border-secondary/20 rounded-none shadow-none">
                <CardHeader className="text-center border-b border-secondary/10 pb-8">
                    <div className="flex justify-center"><SectionLabel>Nuevo Miembro</SectionLabel></div>
                    <CardTitle className="font-display text-3xl text-primary mt-2">Crea tu cuenta</CardTitle>
                </CardHeader>
                <CardContent className="pt-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Selector de tipo de usuario */}
                        <div className="grid grid-cols-2 gap-4">
                            <div
                                onClick={() => setQuiereSerHermano(true)}
                                className={cn("p-4 border cursor-pointer transition-all", quiereSerHermano ? "border-secondary bg-secondary/5" : "border-secondary/20")}
                            >
                                <p className="font-serif text-primary text-sm">Hermano Cofrade</p>
                                <p className="text-[10px] text-primary/60">Participa en la procesión y paga cuota.</p>
                            </div>
                            <div
                                onClick={() => setQuiereSerHermano(false)}
                                className={cn("p-4 border cursor-pointer transition-all", !quiereSerHermano ? "border-secondary bg-secondary/5" : "border-secondary/20")}
                            >
                                <p className="font-serif text-primary text-sm">Usuario Tienda</p>
                                <p className="text-[10px] text-primary/60">Solo para compras y donaciones.</p>
                            </div>
                        </div>

                        {/* Campos del Formulario */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label className="text-[10px] uppercase tracking-widest">Nombre</Label>
                                <Input required className="bg-background border-secondary/30 rounded-none" value={formData.nombre} onChange={e => setFormData({ ...formData, nombre: e.target.value })} />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-[10px] uppercase tracking-widest">Apellidos</Label>
                                <Input required className="bg-background border-secondary/30 rounded-none" value={formData.apellidos} onChange={e => setFormData({ ...formData, apellidos: e.target.value })} />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-[10px] uppercase tracking-widest">Género</Label>
                                <Select onValueChange={v => setFormData({ ...formData, genero: v })}>
                                    <SelectTrigger className="bg-background border-secondary/30 rounded-none"><SelectValue placeholder="Seleccionar..." /></SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Mujer">Mujer</SelectItem>
                                        <SelectItem value="Hombre">Hombre</SelectItem>
                                        <SelectItem value="Otro">Otro</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label className="text-[10px] uppercase tracking-widest">Email</Label>
                                <Input type="email" required className="bg-background border-secondary/30 rounded-none" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                            </div>
                        </div>

                        <Button disabled={loading} className="w-full bg-primary text-primary-foreground rounded-none py-6 uppercase tracking-widest font-serif text-xs">
                            {loading ? "Procesando..." : "Finalizar Registro"}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}