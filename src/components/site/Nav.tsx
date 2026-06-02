import { Link } from "@tanstack/react-router";
import { BookOpen, Sparkles, Menu, ChevronDown } from "lucide-react";

const linkCls = "hover:text-brand-blue transition-colors";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="size-11 rounded-xl bg-gradient-brand grid place-items-center shadow-soft">
            <BookOpen className="size-5 text-white" />
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-brand-teal text-lg">Lumina Skill</div>
            <div className="text-[10px] text-muted-foreground tracking-wide">Learn. Grow. Succeed.</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-foreground/80">
          <Link to="/" className={linkCls} activeOptions={{ exact: true }} activeProps={{ className: "text-brand-blue" }}>Home</Link>
          <Link to="/courses" className={`${linkCls} flex items-center gap-1`} activeProps={{ className: "text-brand-blue" }}>
            Courses <ChevronDown className="size-3" />
          </Link>
          <Link to="/services" className={linkCls} activeProps={{ className: "text-brand-blue" }}>Development Services</Link>
          <Link to="/pricing" className={linkCls} activeProps={{ className: "text-brand-blue" }}>Pricing</Link>
          <Link to="/about" className={linkCls} activeProps={{ className: "text-brand-blue" }}>About</Link>
          <Link to="/contact" className={linkCls} activeProps={{ className: "text-brand-blue" }}>Contact</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link to="/login" className="hidden sm:inline text-sm font-medium hover:text-brand-blue">Log in</Link>
          <Link to="/signup" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand text-white px-5 py-2.5 text-sm font-semibold shadow-soft hover:opacity-95 transition">
            <Sparkles className="size-4" /> Get Started
          </Link>
          <button className="lg:hidden" aria-label="Menu"><Menu className="size-6" /></button>
        </div>
      </div>
    </header>
  );
}