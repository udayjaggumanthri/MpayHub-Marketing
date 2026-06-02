import { Link } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";

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
          <Link to="/" className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-gradient-brand grid place-items-center">
              <BookOpen className="size-5 text-white" />
            </div>
            <div>
              <div className="font-display font-bold text-lg">Lumina Skill</div>
              <div className="text-[10px] text-background/60 tracking-wide">Learn. Grow. Succeed.</div>
            </div>
          </Link>
          <p className="mt-5 text-sm text-background/70 leading-relaxed">Empowering learners worldwide with expert-led courses and industry-recognized certifications.</p>
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
        <div>© 2026 Lumina Skill. All rights reserved.</div>
        <div>Made with care for learners worldwide.</div>
      </div>
    </footer>
  );
}