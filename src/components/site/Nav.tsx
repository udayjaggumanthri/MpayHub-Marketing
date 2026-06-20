import { Link } from "@tanstack/react-router";
import { Sparkles, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/mpayhub-logo.png.asset.json";

const linkCls = "hover:text-brand-blue transition-colors";

export function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-3">
        <Link to="/" className="flex items-center shrink-0" aria-label="mPayHub home" onClick={close}>
          <img src={logo.url} alt="mPayHub" className="h-10 sm:h-12 md:h-16 w-auto object-contain" />
        </Link>
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-foreground/80">
          <Link to="/" className={linkCls} activeOptions={{ exact: true }} activeProps={{ className: "text-brand-blue" }}>Home</Link>
          <Link to="/services" className={linkCls} activeProps={{ className: "text-brand-blue" }}>Services</Link>
          <Link to="/pricing" className={linkCls} activeProps={{ className: "text-brand-blue" }}>Partners</Link>
          <Link to="/about" className={linkCls} activeProps={{ className: "text-brand-blue" }}>About</Link>
          <Link to="/contact" className={linkCls} activeProps={{ className: "text-brand-blue" }}>Contact</Link>
        </nav>
        <div className="flex items-center gap-2 sm:gap-4">
          <Link to="/login" className="hidden md:inline text-sm font-medium hover:text-brand-blue">Log in</Link>
          <Link to="/signup" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-brand text-white px-4 lg:px-5 py-2 lg:py-2.5 text-sm font-semibold shadow-soft hover:opacity-95 transition">
            <Sparkles className="size-4" /> <span className="hidden lg:inline">Become a Partner</span><span className="lg:hidden">Join</span>
          </Link>
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center size-10 rounded-lg hover:bg-muted transition"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl">
          <nav className="mx-auto max-w-7xl px-4 sm:px-6 py-4 flex flex-col gap-1 text-sm font-medium">
            {[
              ["/", "Home", true],
              ["/services", "Services", false],
              ["/pricing", "Partners", false],
              ["/about", "About", false],
              ["/contact", "Contact", false],
            ].map(([to, label, exact]) => (
              <Link
                key={label as string}
                to={to as string}
                onClick={close}
                activeOptions={exact ? { exact: true } : undefined}
                activeProps={{ className: "text-brand-blue bg-muted" }}
                className="rounded-lg px-3 py-2.5 hover:bg-muted"
              >
                {label as string}
              </Link>
            ))}
            <div className="mt-2 pt-3 border-t border-border/60 flex flex-col gap-2">
              <Link to="/login" onClick={close} className="rounded-lg px-3 py-2.5 hover:bg-muted">Log in</Link>
              <Link to="/signup" onClick={close} className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand text-white px-5 py-2.5 text-sm font-semibold shadow-soft">
                <Sparkles className="size-4" /> Become a Partner
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}