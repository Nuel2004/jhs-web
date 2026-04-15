import { cn } from "@/lib/utils";

export function GoldenDivider({ className }: { className?: string }) {
    return (
        <div className={cn("flex items-center justify-center gap-4 my-6", className)}>
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#C9A84C]" />
            <span className="text-[#C9A84C] text-lg">✦</span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#C9A84C]" />
        </div>
    );
}

export function SectionLabel({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={cn(
            "flex items-center gap-3 mb-3",
            "font-serif text-[10px] tracking-[0.4em] uppercase text-[#C9A84C]",
            className,
        )}>
            {children}
            <div className="h-px w-10 bg-[#C9A84C] opacity-50" />
        </div>
    );
}