import { Sparkles } from "lucide-react";

export function PageHeader({ eyebrow, title, highlight, description }: { eyebrow: string; title: string; highlight?: string; description: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-hero border-b border-border/60">
      <div className="absolute -top-20 -left-32 size-96 rounded-full bg-brand-teal/20 blur-3xl opacity-60" />
      <div className="absolute -bottom-20 -right-32 size-[28rem] rounded-full bg-brand-blue/20 blur-3xl opacity-60" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 pt-14 sm:pt-20 pb-12 sm:pb-16 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-3 sm:px-4 py-1.5 text-xs font-medium shadow-card">
          <Sparkles className="size-3.5 text-brand-blue" />
          <span className="text-muted-foreground">{eyebrow}</span>
        </div>
        <h1 className="mt-6 text-3xl sm:text-4xl md:text-6xl font-extrabold leading-[1.05]">
          {title} {highlight && <span className="text-gradient-brand">{highlight}</span>}
        </h1>
        <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">{description}</p>
      </div>
    </section>
  );
}