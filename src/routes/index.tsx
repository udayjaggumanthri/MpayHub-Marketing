import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  Sparkles, ShieldCheck, ArrowRight, Check, Smartphone, Tv, Zap, Flame,
  Droplet, Wifi, Car, Landmark, FileText, Wallet, Building2, Repeat,
  CreditCard, Network, BarChart3, Headphones, Lock, Rocket, Globe,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "mPayHub — Digital Payment Solutions for Growing Businesses" },
      { name: "description", content: "Unified fintech platform for recharge, bill payments, AEPS, BBPS, money transfer and API banking. Built for retailers, distributors and enterprises." },
      { property: "og:title", content: "mPayHub — Digital Payment Infrastructure" },
      { property: "og:description", content: "Secure, scalable B2B fintech platform powering India's retailers, distributors and enterprises." },
    ],
  }),
  component: Index,
});

function Hero() {
  const trust = [
    "Secure and reliable transaction processing",
    "Multi-service payment ecosystem",
    "Real-time settlements and reporting",
    "Scalable B2B distribution network",
    "Dedicated partner support",
    "API-driven financial solutions",
  ];
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 -z-0 opacity-60">
        <div className="absolute -top-20 -left-32 size-96 rounded-full bg-brand-teal/20 blur-3xl" />
        <div className="absolute -bottom-20 -right-32 size-[28rem] rounded-full bg-brand-blue/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-24 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-4 py-1.5 text-xs font-medium shadow-card">
            <Sparkles className="size-3.5 text-brand-blue" />
            <span className="rounded-full bg-brand-blue/10 px-2 py-0.5 text-brand-blue font-semibold">Fintech</span>
            <span className="text-muted-foreground">Trusted Digital Financial Infrastructure</span>
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-[1.05] text-foreground">
            Digital Payment Solutions for{" "}
            <span className="text-gradient-brand">Growing Businesses</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Empower your business with a unified platform for recharge services, bill payments, banking solutions and digital financial services. Our secure fintech infrastructure helps retailers, distributors and enterprises deliver seamless transactions while maximizing revenue.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/signup" className="inline-flex items-center gap-2 rounded-full bg-brand-blue-deep text-white px-7 py-3.5 font-semibold shadow-soft hover:bg-brand-blue transition">
              Start Your Growth Journey <ArrowRight className="size-4" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-7 py-3.5 font-semibold hover:border-brand-blue transition">
              Explore Services
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="rounded-3xl bg-white border border-border/60 shadow-soft p-7">
            <div className="text-xs font-semibold tracking-wider text-brand-blue uppercase">Why Businesses Trust Us</div>
            <ul className="mt-5 space-y-3">
              {trust.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 size-5 rounded-full bg-gradient-brand grid place-items-center flex-shrink-0">
                    <Check className="size-3 text-white" />
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[["99.9%", "Uptime"], ["24/7", "Support"], ["100%", "Secure"]].map(([v, l]) => (
                <div key={l} className="rounded-xl bg-muted/50 p-3">
                  <div className="text-lg font-bold text-brand-blue">{v}</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  { icon: Smartphone, title: "Mobile Recharge" },
  { icon: Tv, title: "DTH Recharge" },
  { icon: Zap, title: "Electricity Bills" },
  { icon: Flame, title: "Gas Bills" },
  { icon: Droplet, title: "Water Bills" },
  { icon: Wifi, title: "Broadband Bills" },
  { icon: Car, title: "FASTag Recharge" },
  { icon: Landmark, title: "AEPS Banking" },
  { icon: FileText, title: "BBPS Services" },
  { icon: Repeat, title: "Money Transfer" },
  { icon: Wallet, title: "Aadhaar Pay" },
  { icon: CreditCard, title: "Payment Gateway" },
];

function Services() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-sm font-semibold text-brand-blue uppercase tracking-wider">Service Overview</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Comprehensive <span className="text-gradient-brand">Digital Payment Services</span></h2>
          <p className="mt-4 text-muted-foreground">Access every major recharge, bill payment, banking, and financial service through a single platform — built for retailers, distributors and enterprises seeking efficient transaction management.</p>
        </div>
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl bg-white p-5 border border-border/60 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all text-center">
              <div className="mx-auto size-12 rounded-xl bg-gradient-brand grid place-items-center mb-3">
                <s.icon className="size-5 text-white" />
              </div>
              <div className="text-sm font-semibold leading-snug">{s.title}</div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-7 py-3.5 font-semibold hover:border-brand-blue transition shadow-card">
            View All Services <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

const partnerTiers = [
  { name: "Retailer", income: "Up to ₹300/day", tag: "Entry Level" },
  { name: "Distributor", income: "₹1,000+/day", tag: "Popular" },
  { name: "Master Distributor", income: "₹5,000+/day", tag: "Professional" },
  { name: "Super Distributor", income: "₹10,000+/day", tag: "Enterprise" },
];

function PartnerEcosystem() {
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-sm font-semibold text-brand-blue uppercase tracking-wider">Partner Ecosystem</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">Build a <span className="text-gradient-brand">Profitable Fintech</span> Business</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">Join a growing network of retailers, distributors and business partners who leverage our technology platform to generate recurring revenue through digital payment services. Whether you run a small retail outlet or a large distribution network, our partnership models are engineered for sustainable growth.</p>
          <Link to="/pricing" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-blue-deep text-white px-7 py-3.5 font-semibold shadow-soft hover:bg-brand-blue transition">
            See Partner Plans <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {partnerTiers.map((p) => (
            <div key={p.name} className="rounded-2xl bg-white p-6 border border-border/60 shadow-card">
              <div className="text-[10px] font-bold uppercase tracking-wider text-brand-blue">{p.tag}</div>
              <div className="mt-2 text-xl font-bold">{p.name}</div>
              <div className="mt-3 text-2xl font-bold text-gradient-brand">{p.income}</div>
              <div className="mt-1 text-xs text-muted-foreground">Income potential</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const reasons = [
  { icon: Lock, title: "Secure Processing", desc: "Bank-grade encryption, fraud monitoring, and compliance with financial regulations." },
  { icon: ShieldCheck, title: "Regulatory Compliance", desc: "Aligned with industry standards and KYC norms for trusted operations." },
  { icon: Network, title: "Reliable Infrastructure", desc: "Resilient payment rails engineered for high transaction volumes." },
  { icon: Rocket, title: "Fast Activation", desc: "Onboard quickly and start transacting after KYC verification." },
  { icon: BarChart3, title: "Real-time Reporting", desc: "Live dashboards for transactions, settlements and commissions." },
  { icon: Headphones, title: "Dedicated Support", desc: "Account managers and technical teams ready to help you grow." },
];

function Trust() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-sm font-semibold text-brand-blue uppercase tracking-wider">Trust & Reliability</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Why Businesses <span className="text-gradient-brand">Trust Us</span></h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-2xl bg-white p-6 border border-border/60 shadow-card hover:shadow-soft transition-all">
              <div className="size-12 rounded-xl bg-gradient-brand grid place-items-center mb-4">
                <r.icon className="size-5 text-white" />
              </div>
              <h3 className="font-semibold text-lg">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GrowthCTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-brand text-white p-12 md:p-16">
          <div className="absolute -top-20 -right-20 size-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-xs font-medium"><Globe className="size-3.5" /> Business Growth</div>
              <h2 className="mt-5 text-3xl md:text-5xl font-bold leading-tight">Scale Your Business with <span className="opacity-90">Confidence</span></h2>
              <p className="mt-4 text-white/90 leading-relaxed">Our platform provides the tools, technology and support to expand your customer base, increase transaction volumes and maximize profitability.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/signup" className="inline-flex items-center gap-2 rounded-full bg-white text-brand-blue-deep px-7 py-3.5 font-semibold hover:bg-white/95 transition">
                  Start Your Growth Journey <ArrowRight className="size-4" />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-semibold hover:bg-white/10 transition">
                  Talk to Sales
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[["10K+", "Active Partners"], ["50M+", "Transactions"], ["28", "States Covered"], ["₹100Cr+", "Settled Monthly"]].map(([v, l]) => (
                <div key={l} className="rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-5">
                  <div className="text-3xl font-bold">{v}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-white/80">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <Services />
      <PartnerEcosystem />
      <Trust />
      <GrowthCTA />
      <Footer />
    </div>
  );
}

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`relative rounded-2xl bg-white p-7 border-2 shadow-card flex flex-col ${p.popular ? "border-brand-blue shadow-soft" : "border-border/60"}`}>
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-brand text-white text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</div>
              )}
              <div className="text-xs font-bold text-red-500">{p.off}</div>
              <h3 className="mt-2 text-2xl font-bold">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground min-h-[40px]">{p.desc}</p>
              <div className="mt-5">
                <div className="text-4xl font-bold text-brand-blue">{p.price}</div>
                <div className="mt-1 text-sm text-muted-foreground"><span className="line-through">{p.old}</span> · {p.period}</div>
              </div>
              <ul className="mt-6 space-y-2.5 text-sm flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2"><Check className="size-4 text-brand-teal flex-shrink-0 mt-0.5" /> <span>{f}</span></li>
                ))}
              </ul>
              <button className={`mt-7 w-full rounded-xl py-3 font-semibold transition ${p.popular ? "bg-gradient-brand text-white hover:opacity-95" : "bg-muted hover:bg-brand-blue hover:text-white"}`}>{p.cta}</button>
            </div>
          ))}
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-5">
          {[
            ["30-Day Money Back", "Full refund, no questions asked"],
            ["Easy EMI Options", "0% interest, up to 12 months"],
            ["Lifetime Updates", "Free access to new content"],
          ].map(([t, d]) => (
            <div key={t} className="rounded-xl bg-muted/50 p-5 flex items-center gap-4">
              <div className="size-10 rounded-lg bg-white grid place-items-center"><ShieldCheck className="size-5 text-brand-teal" /></div>
              <div>
                <div className="font-semibold">{t}</div>
                <div className="text-xs text-muted-foreground">{d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  { quote: "mPayHub transformed my career. The Full Stack course helped me land a job at a top tech company. The instructors are amazing and the content is up-to-date with industry standards.", course: "Full Stack Web Development", initials: "AV", name: "Aditya Verma", role: "Software Developer • Bangalore, India" },
  { quote: "As an international student, I was amazed by the quality of courses at such affordable prices. The Digital Marketing course gave me practical skills I use every day at work.", course: "Digital Marketing", initials: "SM", name: "Sarah Mitchell", role: "Marketing Manager • London, UK" },
  { quote: "The Python for Data Science course is exceptional. I went from knowing nothing about Python to building ML models in just 3 months!", course: "Python for Data Science", initials: "PS", name: "Priya Sharma", role: "Data Analyst • Bangalore, India" },
  { quote: "The UI/UX Design Masterclass was exactly what I needed to level up my skills. The project-based approach helped me build an impressive portfolio.", course: "UI/UX Design", initials: "JC", name: "James Chen", role: "UI Designer • Singapore" },
  { quote: "Got AWS certified thanks to mPayHub! The course was comprehensive and the practice exams were spot-on. Highly recommend for cloud computing.", course: "AWS Solutions Architect", initials: "RK", name: "Ravi Kumar", role: "Cloud Engineer • Hyderabad, India" },
  { quote: "I love that I can learn at my own pace. The mobile app is fantastic for learning during my commute. Already completed 5 courses and counting!", course: "Business English", initials: "ET", name: "Emma Thompson", role: "Freelancer • Toronto, Canada" },
];

function Testimonials() {
  return (
    <section className="py-24 bg-muted/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-sm font-semibold text-brand-blue uppercase tracking-wider">Student Stories</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Trusted by Learners <span className="text-gradient-brand">Worldwide</span></h2>
          <p className="mt-4 text-muted-foreground">Join over 50,000 students who have transformed their careers with mPayHub.</p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl bg-white p-7 border border-border/60 shadow-card">
              <div className="flex gap-1 text-amber-400 mb-4">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}
              </div>
              <p className="text-sm leading-relaxed text-foreground/90">"{t.quote}"</p>
              <div className="mt-5 inline-block text-[11px] font-semibold text-brand-blue bg-brand-blue/10 px-2.5 py-1 rounded">{t.course}</div>
              <div className="mt-5 pt-5 border-t border-border flex items-center gap-3">
                <div className="size-11 rounded-full bg-gradient-brand grid place-items-center text-white font-bold text-sm">{t.initials}</div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[["4.9", "Average Rating"], ["50K+", "Happy Students"], ["100+", "Countries Reached"], ["98%", "Recommend Us"]].map(([v, l]) => (
            <div key={l} className="rounded-2xl bg-white p-7 text-center border border-border/60">
              <div className="text-4xl font-bold text-gradient-brand">{v}</div>
              <div className="mt-2 text-sm text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-12 md:p-16 text-center text-white">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 size-64 rounded-full bg-white blur-3xl" />
            <div className="absolute bottom-0 right-1/4 size-64 rounded-full bg-white blur-3xl" />
          </div>
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-xs font-medium">
              <Sparkles className="size-3.5" /> Start Your Learning Journey Today
            </div>
            <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">Ready to Transform <br/> Your Career?</h2>
            <p className="mt-5 text-white/90 max-w-xl mx-auto">Join 50,000+ learners from India and around the world. Get unlimited access to 200+ courses with our Pro plan.</p>
            <div className="mt-9 flex flex-wrap gap-4 justify-center">
              <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white text-brand-blue-deep px-7 py-3.5 font-semibold hover:bg-white/95 transition">
                Start Free Trial <ArrowRight className="size-4" />
              </a>
              <a href="#courses" className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/30 backdrop-blur px-7 py-3.5 font-semibold hover:bg-white/20 transition">
                View All Courses
              </a>
            </div>
            <div className="mt-6 text-xs text-white/80">No credit card required • 7-day free trial • Cancel anytime</div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-xs">
              <div className="flex items-center gap-2"><ShieldCheck className="size-4" /> 256-bit SSL Secured</div>
              <div className="flex items-center gap-2"><Check className="size-4" /> 100% Money Back</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Features />
        <Courses />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
