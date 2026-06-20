import { Link } from "@tanstack/react-router";
import logo from "@/assets/mpayhub-logo.png.asset.json";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const cols = [
    { h: "Platform", l: [["Services", "/services"], ["Partner Plans", "/pricing"], ["API Banking", "/services"], ["Payment Gateway", "/services"]] as const },
    { h: "Company", l: [["About mPayHub", "/about"], ["Leadership", "/about"], ["Compliance & Trust", "/about"], ["Contact", "/contact"]] as const },
    { h: "Resources", l: [["Help Center", "/contact"], ["Partner Onboarding", "/signup"], ["Partner Sign in", "/login"], ["Terms & Privacy", "/about"]] as const },
  ];
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 pt-20 pb-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Link to="/" className="inline-flex items-center gap-3" aria-label="mPayHub home">
              <span className="bg-paper rounded-sm p-2"><img src={logo.url} alt="mPayHub" className="h-10 w-auto object-contain" /></span>
              <span className="font-display text-3xl tracking-tight">mPayHub</span>
            </Link>
            <p className="mt-8 text-[15px] text-paper/65 leading-relaxed max-w-md font-display italic text-xl">
              The financial operating system for India's next generation of merchants, distributors and enterprises.
            </p>
            <Link to="/contact" className="mt-10 inline-flex items-center gap-2 border-b border-gold pb-1 text-sm font-medium text-paper hover:text-gold transition">
              Speak with our partnerships team <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-10">
            {cols.map((c) => (
              <div key={c.h}>
                <div className="text-[11px] tracking-[0.2em] uppercase text-gold-soft/80 mb-5">{c.h}</div>
                <ul className="space-y-3 text-[14px] text-paper/70">
                  {c.l.map(([label, to]) => (
                    <li key={label}><Link to={to} className="hover:text-paper transition-colors">{label}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-paper/10 text-[12px] text-paper/55 flex flex-wrap items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} mPayHub Technologies Pvt. Ltd. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <span>Registered in India</span>
            <span>Built for enterprise-grade reliability</span>
          </div>
        </div>
      </div>
    </footer>
  );
}