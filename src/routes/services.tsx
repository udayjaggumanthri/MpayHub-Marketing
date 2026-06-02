import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";
import { Code2, Smartphone, Cloud, Palette, Bot, ShieldCheck, ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Development Services — mPayHub" },
      { name: "description", content: "Custom software, mobile apps, cloud, design, and AI development services from mPayHub experts." },
      { property: "og:title", content: "Development Services — mPayHub" },
      { property: "og:description", content: "Custom development services for ambitious teams." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Code2, title: "Web Development", desc: "Production-grade React, Next.js, and TanStack apps built for scale.", price: "From ₹2,50,000" },
  { icon: Smartphone, title: "Mobile Apps", desc: "Cross-platform iOS and Android applications with React Native and Flutter.", price: "From ₹3,50,000" },
  { icon: Cloud, title: "Cloud & DevOps", desc: "AWS, GCP, and Azure architectures with CI/CD pipelines and observability.", price: "From ₹2,00,000" },
  { icon: Palette, title: "Product Design", desc: "End-to-end UX research, design systems, and pixel-perfect interfaces.", price: "From ₹1,50,000" },
  { icon: Bot, title: "AI Integration", desc: "Custom LLM workflows, RAG pipelines, and ML model deployment.", price: "From ₹4,00,000" },
  { icon: ShieldCheck, title: "Security Audits", desc: "Penetration testing, code reviews, and compliance hardening.", price: "From ₹1,80,000" },
];

const steps = [
  ["Discovery", "We map your goals, users, and technical constraints in a kickoff workshop."],
  ["Design", "Wireframes, prototypes, and design systems approved before code is written."],
  ["Build", "Two-week sprints with live demos, full transparency, and shared repos."],
  ["Launch", "Deployment, monitoring, training, and a 90-day support window."],
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <PageHeader eyebrow="Development Services" title="Custom Software, Built by" highlight="mPayHub Experts" description="The same instructors who teach your team can also ship your product. Engineering, design, and AI for teams that need world-class delivery." />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl bg-white p-7 border border-border/60 shadow-card hover:shadow-soft transition">
                <div className="size-12 rounded-xl bg-gradient-brand grid place-items-center mb-4">
                  <s.icon className="size-5 text-white" />
                </div>
                <h3 className="font-bold text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-5 pt-5 border-t border-border flex items-center justify-between">
                  <div className="text-sm font-semibold text-brand-blue">{s.price}</div>
                  <Link to="/contact" className="text-sm font-semibold text-brand-blue inline-flex items-center gap-1 hover:gap-2 transition-all">Inquire <ArrowRight className="size-3.5" /></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/40">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <div className="text-sm font-semibold text-brand-blue uppercase tracking-wider">Our Process</div>
            <h2 className="mt-3 text-4xl font-bold">How We <span className="text-gradient-brand">Ship</span></h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map(([t, d], i) => (
              <div key={t} className="rounded-2xl bg-white p-6 border border-border/60 shadow-card">
                <div className="text-3xl font-bold text-gradient-brand">0{i + 1}</div>
                <div className="mt-3 font-semibold">{t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl bg-gradient-brand text-white p-12 md:p-14 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Have a project in mind?</h2>
            <p className="mt-3 text-white/90">Tell us what you're building and we'll get back within one business day.</p>
            <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/90">
              {["Free 30-min scoping call", "Fixed-price proposals", "NDA on request"].map((i) => (
                <li key={i} className="flex items-center gap-2"><Check className="size-4" /> {i}</li>
              ))}
            </ul>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-brand-blue-deep px-7 py-3.5 font-semibold hover:bg-white/95 transition">Start a Project <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}