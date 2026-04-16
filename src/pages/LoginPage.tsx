import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // TODO: integrar con Supabase Auth
        setTimeout(() => setIsLoading(false), 1500);
    };

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
                <span className="font-display text-[11px] tracking-[0.18em] uppercase text-[#B8860B]/60">
                    Área Privada
                </span>
            </div>

            {/* Main content */}
            <div className="flex flex-1 items-center justify-center px-4 py-16">
                <div className="w-full max-w-md">
                    {/* Header */}
                    <div className="text-center mb-12">
                        {/* Ornamento */}
                        <div className="flex items-center justify-center gap-3 mb-8">
                            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#B8860B]/60" />
                            <div className="w-2 h-2 rotate-45 bg-[#B8860B]/80" />
                            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#B8860B]/60" />
                        </div>

                        <h1 className="font-display text-3xl md:text-4xl text-[#FAF6EE] tracking-wide mb-3">
                            Bienvenido
                        </h1>
                        <p className="text-[#FAF6EE]/50 text-sm tracking-widest uppercase font-body">
                            Accede a tu cuenta de hermano
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Email */}
                        <div className="space-y-2">
                            <label className="block text-[11px] tracking-[0.2em] uppercase text-[#FAF6EE]/50 font-body">
                                Correo electrónico
                            </label>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                                placeholder="tu@correo.es"
                                className="w-full bg-[#1B3022]/40 border border-[#B8860B]/20 text-[#FAF6EE] placeholder-[#FAF6EE]/25 px-4 py-3.5 text-sm font-body focus:outline-none focus:border-[#B8860B]/60 focus:bg-[#1B3022]/60 transition-all duration-200 rounded-none"
                            />
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <label className="block text-[11px] tracking-[0.2em] uppercase text-[#FAF6EE]/50 font-body">
                                Contraseña
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    required
                                    value={formData.password}
                                    onChange={(e) =>
                                        setFormData({ ...formData, password: e.target.value })
                                    }
                                    placeholder="••••••••"
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
                        </div>

                        {/* Forgot password */}
                        <div className="text-right">
                            <a
                                href="#"
                                className="text-[11px] tracking-[0.15em] uppercase text-[#B8860B]/60 hover:text-[#B8860B] transition-colors no-underline font-body"
                            >
                                ¿Olvidaste tu contraseña?
                            </a>
                        </div>

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
                                        <LogIn size={14} />
                                        Iniciar sesión
                                    </>
                                )}
                            </Button>
                        </div>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-4 my-8">
                        <div className="h-px flex-1 bg-[#B8860B]/15" />
                        <span className="text-[10px] tracking-[0.2em] uppercase text-[#FAF6EE]/30 font-body">
                            ¿Nuevo hermano?
                        </span>
                        <div className="h-px flex-1 bg-[#B8860B]/15" />
                    </div>

                    {/* Register link */}
                    <Link
                        to="/registro"
                        className="block text-center border border-[#B8860B]/25 hover:border-[#B8860B]/60 text-[#FAF6EE]/60 hover:text-[#FAF6EE] py-3.5 text-[11px] tracking-[0.2em] uppercase font-body transition-all duration-200 no-underline"
                    >
                        Solicitar inscripción
                    </Link>
                </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-5 border-t border-[#B8860B]/10 text-center">
                <p className="text-[10px] tracking-widest uppercase text-[#FAF6EE]/20 font-body">
                    Hermandad de Jesús Salvador · Todos los derechos reservados
                </p>
            </div>
        </div>
    );
}