import { Link } from "@tanstack/react-router";
import logo from "@/assets/mpayhub-logo.png.asset.json";

export function Footer() {
  const cols = [
    { h: "Platform", l: [["Courses", "/courses"], ["Pricing", "/pricing"], ["Development Services", "/services"], ["Certificates", "/courses"]] as const },
    { h: "Company", l: [["About", "/about"], ["Careers", "/about"], ["Press", "/about"], ["Contact", "/contact"]] as const },
    { h: "Resources", l: [["Help Center", "/contact"], ["Community", "/about"], ["Blog", "/about"], ["Terms & Privacy", "/about"]] as const },
  ];
  return (
    <footer className="bg-foreground text-background py-14">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-4 gap-10">
        <div>
          <Link to="/" className="inline-flex items-center bg-white rounded-xl p-3" aria-label="mPayHub home">
            <img src={logo.url} alt="mPayHub" className="h-12 w-auto object-contain" />
          </Link>
          <p className="mt-5 text-sm text-background/70 leading-relaxed">Enterprise-grade learning and development services — engineered for ambitious teams.</p>
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <div className="font-semibold mb-4">{c.h}</div>
            <ul className="space-y-2 text-sm text-background/70">
              {c.l.map(([label, to]) => (
                <li key={label}><Link to={to} className="hover:text-background">{label}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto max-w-7xl px-6 mt-12 pt-6 border-t border-background/10 text-xs text-background/60 flex flex-wrap items-center justify-between gap-3">
        <div>© 2026 mPayHub. All rights reserved.</div>
        <div>Made with care for learners worldwide.</div>
      </div>
    </footer>
  );
}