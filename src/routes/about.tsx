import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";
import { Heart, Target, Globe, Sparkles, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Lumina Skill" },
      { name: "description", content: "Lumina Skill is on a mission to make world-class learning accessible to everyone, everywhere." },
      { property: "og:title", content: "About — Lumina Skill" },
      { property: "og:description", content: "Our mission, our people, our story." },
    ],
  }),
  component: AboutPage,
});

const team = [
  { initials: "AO", name: "Anjali Oberoi", role: "Founder & CEO" },
  { initials: "FH", name: "Farhan Hassan", role: "Chief Learning Officer" },
  { initials: "MK", name: "Mira Kapoor", role: "Head of Engineering" },
  { initials: "DT", name: "Daniel Tran", role: "Head of Design" },
];

const values = [
  { icon: Heart, title: "Learner First", desc: "Every product decision starts with: does this help someone learn faster, deeper, or more confidently?" },
  { icon: Target, title: "Outcomes Over Hours", desc: "We measure success by job offers, promotions, and confident builders — not by minutes watched." },
  { icon: Globe, title: "Global by Default", desc: "Our content, pricing, and support are designed for learners in 100+ countries from day one." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <PageHeader eyebrow="Our Story" title="Learning that meets" highlight="Real Life" description="We started Lumina Skill because the best teachers we knew weren't on the biggest platforms. Now they are — and 50,000+ learners are building careers because of it." />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-6">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl bg-white p-7 border border-border/60 shadow-card">
              <div className="size-12 rounded-xl bg-gradient-brand grid place-items-center mb-4"><v.icon className="size-5 text-white" /></div>
              <h3 className="font-bold text-lg">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-muted/40">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <div className="text-sm font-semibold text-brand-blue uppercase tracking-wider">By the Numbers</div>
            <h2 className="mt-3 text-4xl font-bold">Built with our <span className="text-gradient-brand">community</span></h2>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-5">
            {[["2019", "Founded"], ["50K+", "Learners"], ["200+", "Instructors"], ["100+", "Countries"]].map(([v, l]) => (
              <div key={l} className="rounded-2xl bg-white p-7 text-center border border-border/60">
                <div className="text-4xl font-bold text-gradient-brand">{v}</div>
                <div className="mt-2 text-sm text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <div className="text-sm font-semibold text-brand-blue uppercase tracking-wider">Leadership</div>
            <h2 className="mt-3 text-4xl font-bold">Meet the team</h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m) => (
              <div key={m.name} className="rounded-2xl bg-white p-6 border border-border/60 shadow-card text-center">
                <div className="mx-auto size-20 rounded-full bg-gradient-brand grid place-items-center text-white text-xl font-bold">{m.initials}</div>
                <div className="mt-4 font-semibold">{m.name}</div>
                <div className="text-xs text-muted-foreground">{m.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl bg-gradient-brand text-white p-12 md:p-14 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-xs font-medium"><Sparkles className="size-3.5" /> Join us</div>
            <h2 className="mt-5 text-3xl md:text-4xl font-bold">Want to teach with Lumina?</h2>
            <p className="mt-3 text-white/90">We're always looking for working professionals who love to teach.</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-brand-blue-deep px-7 py-3.5 font-semibold hover:bg-white/95 transition">Apply to teach <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}