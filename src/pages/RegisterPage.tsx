import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, UserPlus, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const ROLES = ["Hermano de Procesión", "Hermano de Cuota", "Junta Directiva", "Colaborador"];

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({
        nombre: "",
        apellidos: "",
        email: "",
        telefono: "",
        rol: "",
        password: "",
        confirmPassword: "",
        aceptaTerminos: false,
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.nombre.trim()) newErrors.nombre = "El nombre es obligatorio";
        if (!formData.apellidos.trim()) newErrors.apellidos = "Los apellidos son obligatorios";
        if (!formData.email.includes("@")) newErrors.email = "Introduce un correo válido";
        if (!formData.rol) newErrors.rol = "Selecciona tu rol";
        if (formData.password.length < 8)
            newErrors.password = "La contraseña debe tener al menos 8 caracteres";
        if (formData.password !== formData.confirmPassword)
            newErrors.confirmPassword = "Las contraseñas no coinciden";
        if (!formData.aceptaTerminos)
            newErrors.aceptaTerminos = "Debes aceptar los términos";
        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        setErrors({});
        setIsLoading(true);
        // TODO: integrar con Supabase Auth
        setTimeout(() => {
            setIsLoading(false);
            setSuccess(true);
        }, 1500);
    };

    const field = (key: keyof typeof formData, value: string | boolean) =>
        setFormData((prev) => ({ ...prev, [key]: value }));

    if (success) {
        return (
            <div className="min-h-screen bg-[#0D0B08] text-[#FAF6EE] flex flex-col items-center justify-center px-4">
                <div className="text-center max-w-sm">
                    <CheckCircle2 size={48} className="text-[#B8860B] mx-auto mb-6" />
                    <h2 className="font-display text-3xl mb-4">Solicitud enviada</h2>
                    <p className="text-[#FAF6EE]/50 text-sm font-body leading-relaxed mb-8">
                        Tu solicitud de inscripción ha sido recibida. La junta directiva la
                        revisará y recibirás un correo de confirmación en breve.
                    </p>
                    <Link
                        to="/login"
                        className="text-[11px] tracking-[0.2em] uppercase text-[#B8860B] hover:text-[#B8860B]/70 transition-colors no-underline font-body"
                    >
                        ← Volver al inicio de sesión
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0D0B08] text-[#FAF6EE] flex flex-col">
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 md:px-12 py-5 border-b border-[#B8860B]/20">
                <Link
                    to="/"
                    className="font-display text-[12px] tracking-[0.22em] uppercase text-[#FAF6EE]/70 hover:text-[#B8860B] transition-colors no-underline"
                >
                    Hermandad · Jesús Salvador
                </Link>
                <Link
                    to="/login"
                    className="font-display text-[11px] tracking-[0.18em] uppercase text-[#B8860B]/60 hover:text-[#B8860B] transition-colors no-underline"
                >
                    ¿Ya eres hermano? Accede →
                </Link>
            </div>

            {/* Main content */}
            <div className="flex flex-1 items-center justify-center px-4 py-16">
                <div className="w-full max-w-lg">
                    {/* Header */}
                    <div className="text-center mb-10">
                        <div className="flex items-center justify-center gap-3 mb-8">
                            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#B8860B]/60" />
                            <div className="w-2 h-2 rotate-45 bg-[#B8860B]/80" />
                            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#B8860B]/60" />
                        </div>
                        <h1 className="font-display text-3xl md:text-4xl text-[#FAF6EE] tracking-wide mb-3">
                            Inscripción
                        </h1>
                        <p className="text-[#FAF6EE]/50 text-sm tracking-widest uppercase font-body">
                            Únete a la hermandad
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Nombre + Apellidos */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <label className="block text-[11px] tracking-[0.2em] uppercase text-[#FAF6EE]/50 font-body">
                                    Nombre <span className="text-[#B8860B]">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.nombre}
                                    onChange={(e) => field("nombre", e.target.value)}
                                    placeholder="Juan"
                                    className="w-full bg-[#1B3022]/40 border border-[#B8860B]/20 text-[#FAF6EE] placeholder-[#FAF6EE]/25 px-4 py-3.5 text-sm font-body focus:outline-none focus:border-[#B8860B]/60 focus:bg-[#1B3022]/60 transition-all duration-200 rounded-none"
                                />
                                {errors.nombre && (
                                    <p className="text-[10px] text-red-400 tracking-wide font-body">{errors.nombre}</p>
                                )}
                            </div>
                            <div className="space-y-2">
                                <label className="block text-[11px] tracking-[0.2em] uppercase text-[#FAF6EE]/50 font-body">
                                    Apellidos <span className="text-[#B8860B]">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.apellidos}
                                    onChange={(e) => field("apellidos", e.target.value)}
                                    placeholder="García López"
                                    className="w-full bg-[#1B3022]/40 border border-[#B8860B]/20 text-[#FAF6EE] placeholder-[#FAF6EE]/25 px-4 py-3.5 text-sm font-body focus:outline-none focus:border-[#B8860B]/60 focus:bg-[#1B3022]/60 transition-all duration-200 rounded-none"
                                />
                                {errors.apellidos && (
                                    <p className="text-[10px] text-red-400 tracking-wide font-body">{errors.apellidos}</p>
                                )}
                            </div>
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <label className="block text-[11px] tracking-[0.2em] uppercase text-[#FAF6EE]/50 font-body">
                                Correo electrónico <span className="text-[#B8860B]">*</span>
                            </label>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => field("email", e.target.value)}
                                placeholder="tu@correo.es"
                                className="w-full bg-[#1B3022]/40 border border-[#B8860B]/20 text-[#FAF6EE] placeholder-[#FAF6EE]/25 px-4 py-3.5 text-sm font-body focus:outline-none focus:border-[#B8860B]/60 focus:bg-[#1B3022]/60 transition-all duration-200 rounded-none"
                            />
                            {errors.email && (
                                <p className="text-[10px] text-red-400 tracking-wide font-body">{errors.email}</p>
                            )}
                        </div>

                        {/* Teléfono + Rol */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <label className="block text-[11px] tracking-[0.2em] uppercase text-[#FAF6EE]/50 font-body">
                                    Teléfono
                                </label>
                                <input
                                    type="tel"
                                    value={formData.telefono}
                                    onChange={(e) => field("telefono", e.target.value)}
                                    placeholder="+34 600 000 000"
                                    className="w-full bg-[#1B3022]/40 border border-[#B8860B]/20 text-[#FAF6EE] placeholder-[#FAF6EE]/25 px-4 py-3.5 text-sm font-body focus:outline-none focus:border-[#B8860B]/60 focus:bg-[#1B3022]/60 transition-all duration-200 rounded-none"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-[11px] tracking-[0.2em] uppercase text-[#FAF6EE]/50 font-body">
                                    Rol <span className="text-[#B8860B]">*</span>
                                </label>
                                <select
                                    required
                                    value={formData.rol}
                                    onChange={(e) => field("rol", e.target.value)}
                                    className="w-full bg-[#1B3022]/40 border border-[#B8860B]/20 text-[#FAF6EE] px-4 py-3.5 text-sm font-body focus:outline-none focus:border-[#B8860B]/60 transition-all duration-200 rounded-none appearance-none cursor-pointer"
                                >
                                    <option value="" disabled className="bg-[#0D0B08]">Seleccionar...</option>
                                    {ROLES.map((r) => (
                                        <option key={r} value={r} className="bg-[#0D0B08]">{r}</option>
                                    ))}
                                </select>
                                {errors.rol && (
                                    <p className="text-[10px] text-red-400 tracking-wide font-body">{errors.rol}</p>
                                )}
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="flex items-center gap-3 py-1">
                            <div className="h-px flex-1 bg-[#B8860B]/15" />
                            <span className="text-[10px] tracking-[0.2em] uppercase text-[#FAF6EE]/25 font-body">Credenciales</span>
                            <div className="h-px flex-1 bg-[#B8860B]/15" />
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <label className="block text-[11px] tracking-[0.2em] uppercase text-[#FAF6EE]/50 font-body">
                                Contraseña <span className="text-[#B8860B]">*</span>
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    required
                                    value={formData.password}
                                    onChange={(e) => field("password", e.target.value)}
                                    placeholder="Mínimo 8 caracteres"
                                    className="w-full bg-[#1B3022]/40 border border-[#B8860B]/20 text-[#FAF6EE] placeholder-[#FAF6EE]/25 px-4 py-3.5 pr-12 text-sm font-body focus:outline-none focus:border-[#B8860B]/60 focus:bg-[#1B3022]/60 transition-all duration-200 rounded-none"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#FAF6EE]/30 hover:text-[#B8860B]/80 transition-colors"
                                >
                                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="text-[10px] text-red-400 tracking-wide font-body">{errors.password}</p>
                            )}
                        </div>

                        {/* Confirm Password */}
                        <div className="space-y-2">
                            <label className="block text-[11px] tracking-[0.2em] uppercase text-[#FAF6EE]/50 font-body">
                                Confirmar contraseña <span className="text-[#B8860B]">*</span>
                            </label>
                            <div className="relative">
                                <input
                                    type={showConfirm ? "text" : "password"}
                                    required
                                    value={formData.confirmPassword}
                                    onChange={(e) => field("confirmPassword", e.target.value)}
                                    placeholder="Repite la contraseña"
                                    className="w-full bg-[#1B3022]/40 border border-[#B8860B]/20 text-[#FAF6EE] placeholder-[#FAF6EE]/25 px-4 py-3.5 pr-12 text-sm font-body focus:outline-none focus:border-[#B8860B]/60 focus:bg-[#1B3022]/60 transition-all duration-200 rounded-none"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirm(!showConfirm)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#FAF6EE]/30 hover:text-[#B8860B]/80 transition-colors"
                                >
                                    {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                                </button>
                            </div>
                            {errors.confirmPassword && (
                                <p className="text-[10px] text-red-400 tracking-wide font-body">{errors.confirmPassword}</p>
                            )}
                        </div>

                        {/* Términos */}
                        <div className="flex items-start gap-3 pt-1">
                            <input
                                type="checkbox"
                                id="terminos"
                                checked={formData.aceptaTerminos}
                                onChange={(e) => field("aceptaTerminos", e.target.checked)}
                                className="mt-0.5 accent-[#B8860B] w-4 h-4 cursor-pointer flex-shrink-0"
                            />
                            <label htmlFor="terminos" className="text-[11px] text-[#FAF6EE]/45 font-body leading-relaxed cursor-pointer">
                                Acepto los{" "}
                                <a href="#" className="text-[#B8860B]/70 hover:text-[#B8860B] no-underline transition-colors">
                                    estatutos y reglamento
                                </a>{" "}
                                de la Hermandad de Jesús Salvador, así como el tratamiento de mis datos personales.
                            </label>
                        </div>
                        {errors.aceptaTerminos && (
                            <p className="text-[10px] text-red-400 tracking-wide font-body -mt-2">{errors.aceptaTerminos}</p>
                        )}

                        {/* Submit */}
                        <div className="pt-2">
                            <Button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-[#B8860B] hover:bg-[#B8860B]/85 text-[#0D0B08] font-display text-[11px] tracking-[0.25em] uppercase py-4 h-auto rounded-none transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                            >
                                {isLoading ? (
                                    <span className="inline-block w-4 h-4 border-2 border-[#0D0B08]/30 border-t-[#0D0B08] rounded-full animate-spin" />
                                ) : (
                                    <>
                                        <UserPlus size={14} />
                                        Enviar solicitud
                                    </>
                                )}
                            </Button>
                        </div>
                    </form>

                    {/* Footer */}
                    <p className="text-center text-[10px] tracking-[0.15em] uppercase text-[#FAF6EE]/25 font-body mt-8">
                        Tu solicitud será revisada por la junta directiva
                    </p>
                </div>
            </div>
        </div>
    );
}