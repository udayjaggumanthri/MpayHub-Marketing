import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight, ArrowRight, Smartphone, Tv, Zap, Flame, Droplet, Wifi, Car,
  Landmark, FileText, Wallet, Repeat, CreditCard, Network, Lock, ShieldCheck,
  BarChart3, Headphones, Layers,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "mPayHub — Enterprise Digital Payments & Banking Infrastructure" },
      { name: "description", content: "mPayHub is the financial operating system for India's merchants, distributors and enterprises — recharge, BBPS, AEPS, money transfer, API banking and payment gateway, unified on one platform." },
      { property: "og:title", content: "mPayHub — Financial Operating System for India" },
      { property: "og:description", content: "A unified B2B fintech infrastructure built on bank-grade security, real-time settlement and modern APIs." },
    ],
  }),
  component: Index,
});

function Eyebrow({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-[11px] tracking-[0.22em] uppercase text-gold font-medium">{index}</span>
      <span className="h-px w-10 bg-gold" />
      <span className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">{label}</span>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper">
      <div className="absolute inset-0 -z-0 opacity-[0.04] pointer-events-none"
           style={{ backgroundImage: "linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10 pt-24 pb-28">
        <Eyebrow index="01" label="Now onboarding founding partners" />
        <div className="mt-10 grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <h1 className="font-display text-[3.25rem] md:text-[6.5rem] leading-[0.96] tracking-tight text-ink">
              The financial operating system <br className="hidden md:block" /> for India's <span className="italic text-ink-soft">next generation</span> of enterprises.
            </h1>
          </div>
          <div className="lg:col-span-4 lg:pl-10 lg:border-l border-hairline">
            <p className="text-[16px] md:text-[17px] text-ink-soft leading-relaxed">
              mPayHub unifies recharge, bill payments, AEPS, BBPS, money transfer, API banking and payment gateway services on a single, bank-grade platform — purpose-built for retailers, distributors and large institutions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/signup" className="group inline-flex items-center gap-2 bg-ink text-paper px-6 py-3.5 text-sm font-medium hover:bg-ink-soft transition rounded-sm">
                Request access <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 border border-ink/15 px-6 py-3.5 text-sm font-medium hover:border-ink transition rounded-sm">
                Explore the platform
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-10 border-t border-hairline grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-10">
          {[
            ["12+", "Unified financial services"],
            ["99.9%", "Target platform uptime"],
            ["Bank-grade", "Encryption & compliance"],
            ["24/7", "Partner success operations"],
          ].map(([v, l]) => (
            <div key={l}>
              <div className="font-display text-4xl md:text-5xl tracking-tight text-ink">{v}</div>
              <div className="mt-2 text-[11px] tracking-[0.18em] uppercase text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  { icon: Smartphone, title: "Mobile Recharge", note: "Prepaid · Postpaid" },
  { icon: Tv, title: "DTH", note: "All operators" },
  { icon: Zap, title: "Electricity", note: "State boards" },
  { icon: Flame, title: "Gas", note: "PNG · LPG" },
  { icon: Droplet, title: "Water", note: "Municipal" },
  { icon: Wifi, title: "Broadband", note: "ISPs · Fiber" },
  { icon: Car, title: "FASTag", note: "Toll & fleet" },
  { icon: Landmark, title: "AEPS", note: "Aadhaar banking" },
  { icon: FileText, title: "BBPS", note: "Recurring bills" },
  { icon: Repeat, title: "DMT", note: "Money transfer" },
  { icon: Wallet, title: "Aadhaar Pay", note: "Merchant payments" },
  { icon: CreditCard, title: "Payment Gateway", note: "Web · App · API" },
];

function Platform() {
  return (
    <section className="bg-paper-warm border-y border-hairline">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-24">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-7">
            <Eyebrow index="02" label="The Platform" />
            <h2 className="mt-6 font-display text-4xl md:text-6xl tracking-tight leading-[1.02]">
              One platform. <span className="italic text-ink-soft">Every payment surface</span> a modern business needs.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-ink-soft leading-relaxed">
              From the corner-shop counter to enterprise-grade API integrations, mPayHub gives every partner a single, audited surface for transactions, settlement and reporting — without the operational debt of stitching point solutions together.
            </p>
          </div>
        </div>

        <div className="border-t border-hairline">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {services.map((s, i) => (
              <div key={s.title}
                   className={`group relative p-7 lg:p-9 border-b border-hairline ${i % 4 !== 3 ? "lg:border-r" : ""} ${i % 2 !== 1 ? "border-r md:border-r" : ""} ${i % 3 === 2 ? "md:border-r-0 lg:border-r" : ""} hover:bg-paper transition-colors`}>
                <s.icon className="size-5 text-ink" strokeWidth={1.4} />
                <div className="mt-8 font-display text-2xl tracking-tight">{s.title}</div>
                <div className="mt-1 text-[12px] tracking-wider uppercase text-muted-foreground">{s.note}</div>
                <ArrowUpRight className="absolute top-7 right-7 size-4 text-muted-foreground/40 group-hover:text-ink transition-colors" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <Link to="/services" className="inline-flex items-center gap-2 border-b border-ink pb-1 text-sm font-medium hover:text-ink-soft transition">
            View the full service catalogue <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

const tiers = [
  { tag: "I", name: "Retailer", role: "For the storefront operator", desc: "Activate a single counter with the full range of consumer financial services." },
  { tag: "II", name: "Distributor", role: "For multi-retailer networks", desc: "Onboard, manage and grow a portfolio of retailers under one consolidated dashboard." },
  { tag: "III", name: "Master Distributor", role: "For district operators", desc: "Run district-level distribution with hierarchical reporting and instant settlement." },
  { tag: "IV", name: "Super Distributor", role: "For regional operators", desc: "Architect a state-wide network with enterprise governance and dedicated account leadership." },
];

function Partners() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-24">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Eyebrow index="03" label="The Partner Network" />
            <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.02] tracking-tight">
              A partner ladder, <span className="italic text-ink-soft">engineered to scale.</span>
            </h2>
            <p className="mt-6 text-ink-soft leading-relaxed">
              We are opening early access to a focused cohort of founding partners. Whether you operate a single counter or a state-wide distribution network, the mPayHub partner programme provides the technology, training and economics to compound from one tier to the next.
            </p>
            <Link to="/pricing" className="mt-10 inline-flex items-center gap-2 bg-ink text-paper px-6 py-3.5 text-sm font-medium hover:bg-ink-soft transition rounded-sm">
              Review partner programme <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
          <div className="lg:col-span-7">
            <ol className="border-t border-hairline">
              {tiers.map((t) => (
                <li key={t.name} className="group grid grid-cols-12 gap-6 py-7 border-b border-hairline hover:bg-paper-warm transition-colors px-2">
                  <div className="col-span-2 md:col-span-1 font-display text-2xl text-gold">{t.tag}</div>
                  <div className="col-span-10 md:col-span-4">
                    <div className="font-display text-2xl tracking-tight">{t.name}</div>
                    <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground mt-1">{t.role}</div>
                  </div>
                  <div className="col-span-12 md:col-span-6 text-[15px] text-ink-soft leading-relaxed md:pl-6 md:border-l border-hairline">
                    {t.desc}
                  </div>
                  <ArrowUpRight className="col-span-1 size-4 text-muted-foreground/40 group-hover:text-ink transition-colors hidden md:block ml-auto" />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

const pillars = [
  { icon: Lock, title: "Bank-grade security", desc: "End-to-end encryption, tokenisation and continuous fraud monitoring built into every transaction." },
  { icon: ShieldCheck, title: "Compliance by design", desc: "KYC, AML and regulatory reporting workflows embedded into onboarding and operations." },
  { icon: Network, title: "Resilient infrastructure", desc: "Multi-zone payment rails engineered for high concurrency and graceful failover." },
  { icon: BarChart3, title: "Real-time intelligence", desc: "Unified dashboards for transactions, settlement, commission and partner performance." },
  { icon: Layers, title: "Composable APIs", desc: "Production-ready APIs for banking, payments and identity — documented, versioned, observable." },
  { icon: Headphones, title: "Concierge support", desc: "Dedicated partnership managers, technical engineers and 24/7 operational response." },
];

function Pillars() {
  return (
    <section className="bg-paper-warm border-y border-hairline">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-24">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
          <div className="lg:col-span-7">
            <Eyebrow index="04" label="Why mPayHub" />
            <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.02] tracking-tight">
              Trust isn't claimed. <span className="italic text-ink-soft">It's engineered.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-ink-soft leading-relaxed">
              Every architectural decision at mPayHub answers a single question: would a regulated financial institution stake its reputation on this? That standard governs our security model, our operations and the way we treat every rupee that moves through the platform.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-hairline">
          {pillars.map((p, i) => (
            <div key={p.title} className={`p-9 border-b border-hairline ${i % 3 !== 2 ? "lg:border-r" : ""} ${i % 2 !== 1 ? "md:border-r lg:border-r" : ""}`}>
              <p.icon className="size-5 text-ink" strokeWidth={1.4} />
              <h3 className="mt-8 font-display text-2xl tracking-tight">{p.title}</h3>
              <p className="mt-3 text-[14.5px] text-ink-soft leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-28">
        <Eyebrow index="05" label="A founding chapter" />
        <div className="mt-10 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8">
            <h2 className="font-display text-4xl md:text-6xl leading-[1.04] tracking-tight">
              We are not the next fintech. <br />
              We are <span className="italic text-gold-soft">the financial backbone</span> our partners deserved a decade ago.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pl-10 lg:border-l border-paper/15">
            <p className="text-paper/75 leading-relaxed">
              mPayHub is in its founding chapter. We do not claim a legacy we have not earned. What we offer instead is rigour: a deliberate platform, transparent economics, and an institutional commitment to every partner who places their first transaction with us.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/signup" className="inline-flex items-center gap-2 bg-paper text-ink px-6 py-3.5 text-sm font-medium hover:bg-gold-soft transition rounded-sm">
                Become a founding partner <ArrowUpRight className="size-3.5" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 border border-paper/25 px-6 py-3.5 text-sm font-medium hover:border-paper transition rounded-sm">
                Speak with leadership
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-paper/15 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8">
          {[
            ["100", "Founding partner cohort"],
            ["10,000+", "Daily transactions at launch capacity"],
            ["99.5%", "Contractual uptime commitment"],
            ["Zero", "Hidden platform fees"],
          ].map(([v, l]) => (
            <div key={l}>
              <div className="font-display text-4xl md:text-5xl tracking-tight">{v}</div>
              <div className="mt-2 text-[11px] tracking-[0.18em] uppercase text-paper/55">{l}</div>
            </div>
          ))}
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
      <Platform />
      <Partners />
      <Pillars />
      <Manifesto />
      <Footer />
    </div>
  );
}
