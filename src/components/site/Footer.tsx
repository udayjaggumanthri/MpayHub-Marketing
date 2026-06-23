import { Link } from "@tanstack/react-router";
import logo from "@/assets/mpayhub-logo.png";

export function Footer() {
  const cols = [
    {
      h: "Platform",
      l: [
        ["Services", "/services"],
        ["Partner Plans", "/pricing"],
      ] as const,
    },
    {
      h: "Company",
      l: [
        ["About", "/about"],
        ["Leadership", "/about"],
        ["Compliance", "/about"],
        ["Contact", "/contact"],
      ] as const,
    },
    {
      h: "Resources",
      l: [
        ["Help Center", "/contact"],
        ["Terms & Privacy", "/about"],
      ] as const,
    },
  ];
  return (
    <footer className="bg-foreground text-background py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
        <div className="col-span-2 md:col-span-1">
          <Link
            to="/"
            className="inline-flex items-center bg-white rounded-xl p-2 sm:p-3"
            aria-label="mPayHub home"
          >
            <img src={logo} alt="mPayHub" className="h-10 sm:h-12 w-auto object-contain" />
          </Link>
          <p className="mt-5 text-sm text-background/70 leading-relaxed">
            Secure digital payment infrastructure for retailers, distributors and enterprises across
            India.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <div className="font-semibold mb-4">{c.h}</div>
            <ul className="space-y-2 text-sm text-background/70">
              {c.l.map(([label, to]) => (
                <li key={label}>
                  <Link to={to} className="hover:text-background">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-10 sm:mt-12 pt-6 border-t border-background/10 text-xs text-background/60 flex flex-wrap items-center justify-between gap-3">
        <div>© 2026 mPayHub. All rights reserved.</div>
        <div>Building India's fintech infrastructure.</div>
      </div>
    </footer>
  );
}
