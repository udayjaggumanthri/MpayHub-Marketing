import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X, Zap, ChevronDown, Smartphone, Landmark } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/mpayhub-logo.png";

const PARTNER_URL = "https://partner.mpayhub.in/";

const NAV_LINKS = [
  { to: "/", label: "Home", exact: true },
  { to: "/about", label: "About Us", exact: false },
  { to: "/services", label: "Services", exact: false },
  { to: "/pricing", label: "Partners", exact: false },
  { to: "/contact", label: "Contact Us", exact: false },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [hoveringServices, setHoveringServices] = useState(false);
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
    "relative py-1.5 text-foreground/75 font-medium transition-colors duration-300 hover:text-brand-blue-deep after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:rounded-full after:bg-gradient-brand after:transition-all after:duration-300 hover:after:w-full";

  return (
    <header className="sticky top-0 z-50">
      {/* Top promo bar — collapses on scroll */}
      <div
        className={`overflow-hidden bg-brand-blue-deep text-white transition-[max-height,opacity] duration-500 ease-out ${
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
            ? "bg-white/90 backdrop-blur-xl border-b border-border/60 shadow-[0_10px_30px_-20px_rgba(15,23,42,0.15)]"
            : "bg-white border-b border-border/40"
        }`}
      >
        <div
          className={`mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-[minmax(0,1fr)_auto] lg:grid-cols-[auto_1fr_auto] items-center gap-3 transition-all duration-500 ${
            scrolled ? "py-0.5" : "py-1.5 md:py-1"
          }`}
        >
          <Link
            to="/"
            className="flex items-center shrink-0 group min-w-0"
            aria-label="mPayHub home"
            onClick={close}
          >
            <img
              src={logo}
              alt="mPayHub"
              className={`w-auto object-contain transition-all duration-500 ease-out group-hover:scale-[1.02] ${
                scrolled
                  ? "h-10 md:h-11 opacity-95"
                  : "h-11 sm:h-12 md:h-14 opacity-100"
              }`}
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center justify-center gap-8 text-[14px]">
            {NAV_LINKS.map((l, i) => {
              if (l.label === "Services") {
                return (
                  <div
                    key={l.label}
                    className="relative py-2"
                    onMouseEnter={() => setHoveringServices(true)}
                    onMouseLeave={() => setHoveringServices(false)}
                    style={{
                      transitionDelay: `${80 + i * 60}ms`,
                      opacity: mounted ? 1 : 0,
                      transform: mounted ? "translateY(0)" : "translateY(-6px)",
                    }}
                  >
                    <Link
                      to={l.to}
                      activeOptions={l.exact ? { exact: true } : undefined}
                      activeProps={{ className: "text-brand-blue-deep after:w-full" }}
                      className={`${linkCls} flex items-center gap-1 transform-gpu transition-all duration-500`}
                    >
                      {l.label}
                      <ChevronDown className={`size-3.5 transition-transform duration-300 ${hoveringServices ? "rotate-180" : ""}`} />
                    </Link>

                    {/* Dropdown Menu */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 rounded-2xl bg-white border border-border/80 p-2.5 shadow-[0_15px_40px_-15px_rgba(15,23,42,0.15)] transition-all duration-300 origin-top ${
                        hoveringServices
                          ? "opacity-100 translate-y-0 pointer-events-auto scale-100"
                          : "opacity-0 -translate-y-2 pointer-events-none scale-95"
                      }`}
                    >
                      <div className="space-y-0.5">
                        <Link
                          to="/services"
                          className="flex items-center gap-3 rounded-xl p-2 hover:bg-muted transition duration-200"
                          onClick={() => setHoveringServices(false)}
                        >
                          <div className="size-8 rounded-lg bg-gradient-brand flex items-center justify-center text-white shrink-0">
                            <Smartphone className="size-4" />
                          </div>
                          <div className="text-left">
                            <div className="text-xs font-semibold text-foreground">Recharge Services</div>
                            <div className="text-[10px] text-muted-foreground">Mobile, DTH &amp; FASTag</div>
                          </div>
                        </Link>
                        <Link
                          to="/services"
                          className="flex items-center gap-3 rounded-xl p-2 hover:bg-muted transition duration-200"
                          onClick={() => setHoveringServices(false)}
                        >
                          <div className="size-8 rounded-lg bg-gradient-brand flex items-center justify-center text-white shrink-0">
                            <Zap className="size-4 animate-pulse" />
                          </div>
                          <div className="text-left">
                            <div className="text-xs font-semibold text-foreground">Bill Payments</div>
                            <div className="text-[10px] text-muted-foreground">Electricity, Gas, Water</div>
                          </div>
                        </Link>
                        <Link
                          to="/services"
                          className="flex items-center gap-3 rounded-xl p-2 hover:bg-muted transition duration-200"
                          onClick={() => setHoveringServices(false)}
                        >
                          <div className="size-8 rounded-lg bg-gradient-brand flex items-center justify-center text-white shrink-0">
                            <Landmark className="size-4" />
                          </div>
                          <div className="text-left">
                            <div className="text-xs font-semibold text-foreground">Banking Services</div>
                            <div className="text-[10px] text-muted-foreground">AEPS, Money Transfer</div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
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
              );
            })}
          </nav>

          {/* Right Side Buttons */}
          <div className="flex items-center justify-end gap-2 sm:gap-3">
            <div className="hidden sm:flex items-center gap-2.5">
              <a
                href={PARTNER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-brand-blue-deep/30 px-5 py-2 text-sm font-semibold text-brand-blue-deep hover:bg-brand-blue-deep/5 transition-all duration-300"
              >
                Login
              </a>
              <a
                href={PARTNER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-brand-blue-deep text-white px-5 py-2 text-sm font-semibold shadow-sm hover:bg-brand-blue transition-all duration-300 hover:shadow-soft"
              >
                Become Partner
              </a>
            </div>

            {/* Mobile Toggle Button */}
            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center size-9 rounded-lg text-foreground hover:bg-muted transition"
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
          className={`pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent transition-opacity duration-500 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Mobile Drawer */}
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
            <div className="mt-2 pt-3 border-t border-border/60 flex flex-col gap-2">
              <a
                href={PARTNER_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="inline-flex w-full items-center justify-center rounded-lg border border-brand-blue-deep/30 px-5 py-2.5 text-sm font-semibold text-brand-blue-deep hover:bg-brand-blue-deep/5 transition"
              >
                Login
              </a>
              <a
                href={PARTNER_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="inline-flex w-full items-center justify-center rounded-lg bg-brand-blue-deep text-white px-5 py-2.5 text-sm font-semibold hover:bg-brand-blue transition shadow-sm"
              >
                Become Partner <ArrowUpRight className="size-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}