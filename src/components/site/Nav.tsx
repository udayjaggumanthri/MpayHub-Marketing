import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/mpayhub-logo.png.asset.json";

const PARTNER_URL = "https://partner.mpayhub.in/";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkCls =
    "relative py-1 transition-colors hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gradient-brand after:transition-all hover:after:w-full";

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-[#0a0f1f]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)]"
          : "bg-[#0a0f1f] border-b border-white/5"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between gap-3 transition-all duration-500 ${
          scrolled ? "py-2 sm:py-2.5" : "py-3 sm:py-4"
        }`}
      >
        <Link to="/" className="flex items-center shrink-0 group" aria-label="mPayHub home" onClick={close}>
          <div className="rounded-lg bg-white/95 px-2 py-1 sm:px-3 sm:py-1.5 transition-transform duration-300 group-hover:scale-[1.02]">
            <img
              src={logo.url}
              alt="mPayHub"
              className={`w-auto object-contain transition-all duration-500 ${
                scrolled ? "h-8 sm:h-9 md:h-10" : "h-9 sm:h-11 md:h-12"
              }`}
            />
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-white/75">
          <Link to="/" className={linkCls} activeOptions={{ exact: true }} activeProps={{ className: "text-white after:w-full" }}>Home</Link>
          <Link to="/services" className={linkCls} activeProps={{ className: "text-white after:w-full" }}>Services</Link>
          <Link to="/pricing" className={linkCls} activeProps={{ className: "text-white after:w-full" }}>Partners</Link>
          <Link to="/about" className={linkCls} activeProps={{ className: "text-white after:w-full" }}>About</Link>
          <Link to="/contact" className={linkCls} activeProps={{ className: "text-white after:w-full" }}>Contact</Link>
        </nav>
        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href={PARTNER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white text-[#0a0f1f] px-5 lg:px-6 py-2 lg:py-2.5 text-sm font-semibold shadow-[0_8px_24px_-8px_rgba(255,255,255,0.4)] hover:bg-white/90 hover:translate-y-[-1px] transition-all"
          >
            Get Started <ArrowUpRight className="size-4" />
          </a>
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center size-10 rounded-lg text-white hover:bg-white/10 transition"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-[#0a0f1f]/95 backdrop-blur-xl animate-fade-in">
          <nav className="mx-auto max-w-7xl px-4 sm:px-6 py-4 flex flex-col gap-1 text-sm font-medium text-white/80">
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
                activeProps={{ className: "text-white bg-white/10" }}
                className="rounded-lg px-3 py-2.5 hover:bg-white/5 hover:text-white transition"
              >
                {label as string}
              </Link>
            ))}
            <div className="mt-2 pt-3 border-t border-white/10">
              <a
                href={PARTNER_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white text-[#0a0f1f] px-5 py-2.5 text-sm font-semibold"
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