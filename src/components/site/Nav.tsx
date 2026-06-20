import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/mpayhub-logo.png.asset.json";

const PARTNER_URL = "https://partner.mpayhub.in/";

const NAV_LINKS = [
  { to: "/", label: "Home", exact: true },
  { to: "/services", label: "Services", exact: false },
  { to: "/pricing", label: "Partners", exact: false },
  { to: "/about", label: "About", exact: false },
  { to: "/contact", label: "Contact", exact: false },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t = window.setTimeout(() => setMounted(true), 30);
    return () => window.clearTimeout(t);
  }, []);

  const linkCls =
    "relative py-1.5 text-foreground/70 transition-colors duration-300 hover:text-brand-blue-deep after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:rounded-full after:bg-gradient-brand after:transition-all after:duration-300 hover:after:w-full";

  return (
    <header className="sticky top-0 z-50">
      {/* Top promo bar — collapses on scroll */}
      <div
        className={`overflow-hidden bg-gradient-to-r from-brand-blue-deep via-brand-blue to-brand-teal text-white transition-[max-height,opacity] duration-500 ease-out ${
          scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        }`}
        aria-hidden={scrolled}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-2 flex items-center justify-center gap-2 text-xs sm:text-sm font-medium">
          <Zap className="size-3.5 sm:size-4 text-amber-300 fill-amber-300 shrink-0" />
          <span className="truncate">Fast Recharge &amp; Bill Payment Platform — onboarding founding partners now</span>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`relative transition-all duration-500 ease-out ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-border/70 shadow-[0_10px_30px_-18px_rgba(15,23,42,0.25)]"
            : "bg-white border-b border-border/40"
        }`}
      >
        <div
          className={`mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-[minmax(0,1fr)_auto] lg:grid-cols-[auto_1fr_auto] items-center gap-3 transition-all duration-500 ${
            scrolled ? "py-2 sm:py-2.5" : "py-3 sm:py-4"
          }`}
        >
          <Link
            to="/"
            className="flex items-center shrink-0 group min-w-0"
            aria-label="mPayHub home"
            onClick={close}
          >
            <img
              src={logo.url}
              alt="mPayHub"
              className={`w-auto object-contain transition-all duration-500 ease-out group-hover:scale-[1.03] ${
                scrolled
                  ? "h-8 sm:h-9 md:h-10 opacity-90"
                  : "h-10 sm:h-12 md:h-14 opacity-100"
              }`}
            />
          </Link>

          <nav className="hidden lg:flex items-center justify-center gap-9 text-sm font-semibold">
            {NAV_LINKS.map((l, i) => (
              <Link
                key={l.label}
                to={l.to}
                activeOptions={l.exact ? { exact: true } : undefined}
                activeProps={{ className: "text-brand-blue-deep after:w-full" }}
                className={`${linkCls} transform-gpu transition-all duration-500`}
                style={{
                  transitionDelay: `${80 + i * 60}ms`,
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(-6px)",
                }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-2 sm:gap-3">
            <a
              href={PARTNER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-brand text-white px-5 lg:px-6 py-2 lg:py-2.5 text-sm font-semibold shadow-soft hover:shadow-[0_14px_30px_-10px_rgba(37,71,180,0.55)] hover:-translate-y-[1px] transition-all duration-300"
            >
              Get Started <ArrowUpRight className="size-4" />
            </a>
            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center size-10 rounded-lg text-foreground hover:bg-muted transition"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        {/* gradient hairline accent */}
        <div
          className={`pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent transition-opacity duration-500 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {open && (
        <div className="lg:hidden border-b border-border/60 bg-white/95 backdrop-blur-xl animate-fade-in">
          <nav className="mx-auto max-w-7xl px-4 sm:px-6 py-4 flex flex-col gap-1 text-sm font-semibold">
            {NAV_LINKS.map((l, i) => (
              <Link
                key={l.label}
                to={l.to}
                onClick={close}
                activeOptions={l.exact ? { exact: true } : undefined}
                activeProps={{ className: "text-brand-blue-deep bg-accent" }}
                className="rounded-lg px-3 py-2.5 text-foreground/80 hover:bg-muted hover:text-brand-blue-deep transition animate-fade-in"
                style={{ animationDelay: `${i * 60}ms`, animationFillMode: "both" }}
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-2 pt-3 border-t border-border/60">
              <a
                href={PARTNER_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand text-white px-5 py-2.5 text-sm font-semibold shadow-soft"
              >
                Get Started <ArrowUpRight className="size-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}