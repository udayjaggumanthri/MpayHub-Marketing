export function PageHeader({ eyebrow, title, highlight, description, index }: { eyebrow: string; title: string; highlight?: string; description: string; index?: string }) {
  return (
    <section className="relative bg-paper-warm border-b border-hairline">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 pt-24 pb-20">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4">
              <span className="text-[11px] tracking-[0.22em] uppercase text-gold font-medium">{index ?? "—"} </span>
              <span className="h-px w-12 bg-gold" />
              <span className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">{eyebrow}</span>
            </div>
            <h1 className="mt-8 font-display text-[3rem] md:text-[5.5rem] leading-[0.98] tracking-tight text-ink">
              {title}{highlight && <> <span className="italic text-ink-soft">{highlight}</span></>}
            </h1>
          </div>
          <div className="lg:col-span-4 lg:pl-10 lg:border-l border-hairline">
            <p className="text-[16px] text-ink-soft leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}