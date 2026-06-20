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
    "Secure, bank-grade transaction processing",
    "Unified multi-service payment ecosystem",
    "Real-time settlements and reporting",
    "Built for a scalable B2B partner network",
    "Hands-on onboarding and partner support",
    "Modern API-driven financial infrastructure",
  ];
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 -z-0 opacity-60">
        <div className="absolute -top-20 -left-32 size-96 rounded-full bg-brand-teal/20 blur-3xl" />
        <div className="absolute -bottom-20 -right-32 size-[28rem] rounded-full bg-brand-blue/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-20 pb-16 sm:pb-24 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-border bg-white/80 px-3 sm:px-4 py-1.5 text-xs font-medium shadow-card max-w-full">
            <Sparkles className="size-3.5 text-brand-blue" />
            <span className="rounded-full bg-brand-blue/10 px-2 py-0.5 text-brand-blue font-semibold">Now Launching</span>
            <span className="text-muted-foreground">A new fintech platform for India's next wave of partners</span>
          </div>
          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-foreground">
            Digital Payment Solutions for{" "}
            <span className="text-gradient-brand">Growing Businesses</span>
          </h1>
          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            mPayHub is an emerging fintech platform unifying recharge, bill payments, banking and digital financial services. We are onboarding our founding partners — retailers, distributors and enterprises — who want to grow with a modern, secure and transparent payment infrastructure from day one.
          </p>
          <div className="mt-7 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
            <a href="https://partner.mpayhub.in/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-brand-blue-deep text-white px-5 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold shadow-soft hover:bg-brand-blue transition">
              Become a Founding Partner <ArrowRight className="size-4" />
            </a>
            <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-5 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold hover:border-brand-blue transition">
              Explore Services
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="rounded-3xl bg-white border border-border/60 shadow-soft p-5 sm:p-7">
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
              {[["99.9%", "Target Uptime"], ["24/7", "Partner Support"], ["Bank-grade", "Security"]].map(([v, l]) => (
                <div key={l} className="rounded-xl bg-muted/50 p-2 sm:p-3 min-w-0">
                  <div className="text-sm sm:text-lg font-bold text-brand-blue truncate">{v}</div>
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
    <section className="py-16 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-sm font-semibold text-brand-blue uppercase tracking-wider">Service Overview</div>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold">Comprehensive <span className="text-gradient-brand">Digital Payment Services</span></h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground">Access every major recharge, bill payment, banking, and financial service through a single platform — built for retailers, distributors and enterprises seeking efficient transaction management.</p>
        </div>
        <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl bg-white p-4 sm:p-5 border border-border/60 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all text-center">
              <div className="mx-auto size-12 rounded-xl bg-gradient-brand grid place-items-center mb-3">
                <s.icon className="size-5 text-white" />
              </div>
              <div className="text-sm font-semibold leading-snug">{s.title}</div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-5 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold hover:border-brand-blue transition shadow-card">
            View All Services <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

const partnerTiers = [
  { name: "Retailer", income: "Local storefront", tag: "Entry Level" },
  { name: "Distributor", income: "Multi-retailer network", tag: "Growth" },
  { name: "Master Distributor", income: "District coverage", tag: "Professional" },
  { name: "Super Distributor", income: "State-wide expansion", tag: "Enterprise" },
];

function PartnerEcosystem() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-hero">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        <div>
          <div className="text-sm font-semibold text-brand-blue uppercase tracking-wider">Partner Ecosystem</div>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">A <span className="text-gradient-brand">Partner-First</span> Fintech Platform</h2>
          <p className="mt-5 text-sm sm:text-base text-muted-foreground leading-relaxed">We are opening early access to retailers, distributors and business partners who want to build a digital financial services business with us from the ground up. Our partnership models are designed for sustainable, transparent growth — whether you are launching a single outlet or a regional distribution network.</p>
          <Link to="/pricing" className="mt-7 sm:mt-8 inline-flex items-center gap-2 rounded-full bg-brand-blue-deep text-white px-5 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold shadow-soft hover:bg-brand-blue transition">
            See Partner Plans <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {partnerTiers.map((p) => (
            <div key={p.name} className="rounded-2xl bg-white p-4 sm:p-6 border border-border/60 shadow-card min-w-0">
              <div className="text-[10px] font-bold uppercase tracking-wider text-brand-blue">{p.tag}</div>
              <div className="mt-2 text-lg sm:text-xl font-bold">{p.name}</div>
              <div className="mt-3 text-base sm:text-xl font-bold text-gradient-brand leading-snug">{p.income}</div>
              <div className="mt-1 text-xs text-muted-foreground">Designed for</div>
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
    <section className="py-16 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-sm font-semibold text-brand-blue uppercase tracking-wider">Trust & Reliability</div>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold">Why Businesses <span className="text-gradient-brand">Trust Us</span></h2>
        </div>
        <div className="mt-10 sm:mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-brand text-white p-6 sm:p-12 md:p-16">
          <div className="absolute -top-20 -right-20 size-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-8 md:gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-xs font-medium"><Globe className="size-3.5" /> Building Together</div>
              <h2 className="mt-5 text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">An Emerging Platform with <span className="opacity-90">Real Ambition</span></h2>
              <p className="mt-4 text-sm sm:text-base text-white/90 leading-relaxed">
                We are a new fintech venture setting out to build a transparent, reliable payment infrastructure for India's businesses. We do not claim decades of legacy — instead, we bring a dedicated team, clear milestones, robust technology, and an unwavering commitment to earning your trust from the very first transaction.
              </p>
              <div className="mt-7 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
                <a href="https://partner.mpayhub.in/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white text-brand-blue-deep px-5 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold hover:bg-white/95 transition">
                  Join Early Access <ArrowRight className="size-4" />
                </a>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold hover:bg-white/10 transition">
                  Talk to Our Team
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                ["100", "Initial Partner Cohort"],
                ["10,000+", "Target Daily Transactions"],
                ["99.5%", "Uptime Commitment"],
                ["Zero", "Hidden Platform Fees"],
              ].map(([v, l]) => (
                <div key={l} className="rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-4 sm:p-5 min-w-0">
                  <div className="text-2xl sm:text-3xl font-bold truncate">{v}</div>
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
