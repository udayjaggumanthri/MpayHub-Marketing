import { Link } from "@tanstack/react-router";
import { Menu, ArrowUpRight } from "lucide-react";
import logo from "@/assets/mpayhub-logo.png.asset.json";

const linkCls = "relative text-foreground/75 hover:text-foreground transition-colors";
const activeCls = "text-foreground after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:h-px after:bg-gold";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-hairline">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3" aria-label="mPayHub home">
          <img src={logo.url} alt="mPayHub" className="h-12 md:h-14 w-auto object-contain" />
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-display text-2xl tracking-tight">mPayHub</span>
            <span className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground mt-0.5">Payments · Banking · APIs</span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-10 text-[13px] font-medium">
          <Link to="/" className={linkCls} activeOptions={{ exact: true }} activeProps={{ className: activeCls }}>Home</Link>
          <Link to="/services" className={linkCls} activeProps={{ className: activeCls }}>Platform</Link>
          <Link to="/pricing" className={linkCls} activeProps={{ className: activeCls }}>Partners</Link>
          <Link to="/about" className={linkCls} activeProps={{ className: activeCls }}>Company</Link>
          <Link to="/contact" className={linkCls} activeProps={{ className: activeCls }}>Contact</Link>
        </nav>
        <div className="flex items-center gap-5">
          <Link to="/login" className="hidden sm:inline text-[13px] font-medium text-foreground/75 hover:text-foreground">Sign in</Link>
          <Link to="/signup" className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 text-[13px] font-medium hover:bg-ink-soft transition rounded-sm">
            Request access <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <button className="lg:hidden" aria-label="Menu"><Menu className="size-6" /></button>
        </div>
      </div>
    </header>
  );
}