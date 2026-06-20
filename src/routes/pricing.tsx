import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";
import {
  Check, TrendingUp, Layers, Wallet, Headphones, BarChart3, Grid3x3,
  ArrowUpRight, FileCheck, ClipboardCheck, Rocket, Activity, LineChart, Sprout,
} from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Partner Programme — mPayHub" },
      { name: "description", content: "Join mPayHub's structured partner ladder — Retailer, Distributor, Master and Super Distributor — with transparent economics, enterprise-grade tooling and dedicated growth support." },
      { property: "og:title", content: "Partner Programme — mPayHub" },
      { property: "og:description", content: "A four-tier partner ladder designed to compound." },
    ],
  }),
  component: PartnersPage,
});

const tiers = [
  {
    code: "I", name: "Retailer", tag: "Entry",
    desc: "For the storefront operator — a single counter, the full range of consumer financial services.",
    designed: "Local storefronts",
    commission: "5% – 10%",
    features: ["Concierge onboarding", "Operational dashboard", "Weekly settlement cycle", "Access to core services"],
  },
  {
    code: "II", name: "Distributor", tag: "Growth",
    popular: true,
    desc: "For operators managing a network of retailers under a consolidated operational view.",
    designed: "Multi-retailer networks",
    commission: "10% – 15%",
    features: ["Retailer management suite", "Advanced reporting", "Daily settlement", "Dedicated growth manager"],
  },
  {
    code: "III", name: "Master Distributor", tag: "Professional",
    desc: "For district operators running hierarchical networks with deeper economic and operational control.",
    designed: "District-level coverage",
    commission: "15% – 20%",
    features: ["Hierarchical governance", "Real-time analytics", "Instant settlement option", "Expanded operational control"],
  },
  {
    code: "IV", name: "Super Distributor", tag: "Enterprise",
    desc: "For regional operators architecting state-wide distribution with institutional support.",
    designed: "State-wide expansion",
    commission: "20% – 25%",
    features: ["State-level governance", "Enterprise reporting", "Dedicated account leadership", "Priority operations response"],
  },
];

const benefits = [
  { icon: TrendingUp, title: "Compounding economics", desc: "Recurring revenue across a portfolio of services — engineered to scale alongside your operations." },
  { icon: Layers, title: "A graduated ladder", desc: "Move from a single counter to a regional network on the same platform, with the same partner team." },
  { icon: Wallet, title: "Predictable settlement", desc: "Defined settlement cycles, transparent statements and zero hidden platform fees." },
  { icon: Headphones, title: "Concierge support", desc: "Onboarding specialists, partner managers and 24/7 operations — accessible without a ticket queue." },
  { icon: BarChart3, title: "Operational telemetry", desc: "Track transactions, revenue, network performance and partner activity in one observable surface." },
  { icon: Grid3x3, title: "One platform, every service", desc: "Recharge, BBPS, AEPS, money transfer, identity and enterprise banking — under one contract." },
];

const steps = [
  { icon: ClipboardCheck, t: "Registration", d: "Complete a structured onboarding form with business, contact and operational information." },
  { icon: FileCheck, t: "KYC & Verification", d: "Submit identity and business documents for compliance review and account provisioning." },
  { icon: Rocket, t: "Activation", d: "Receive credentialled access to the partner dashboard and activate the services relevant to your model." },
  { icon: Activity, t: "Operations", d: "Begin offering recharge, bill payment, banking and money movement services to your customers." },
  { icon: LineChart, t: "Reporting", d: "Monitor transactions, commissions, settlement and network performance from a single observable surface." },
  { icon: Sprout, t: "Growth", d: "Graduate up the partner ladder as your operations and network mature — same platform, expanded mandate." },
];

function PartnersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <PageHeader
        index="03"
        eyebrow="Partner Programme"
        title="A partner ladder,"
        highlight="engineered to scale."
        description="A four-tier partner programme that meets your business where it is today — and provides a deliberate path to where it could be tomorrow."
      />

      <section className="py-24 bg-paper">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-hairline">
            {tiers.map((t, i) => (
              <div key={t.name} className={`relative p-9 border-b border-hairline flex flex-col ${i % 4 !== 3 ? "lg:border-r" : ""} ${i % 2 !== 1 ? "md:border-r" : ""} ${t.popular ? "bg-paper-warm" : ""}`}>
                {t.popular && <div className="absolute top-0 left-0 right-0 h-px bg-gold" />}
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-2xl text-gold">{t.code}</span>
                  <span className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground">{t.tag}</span>
                </div>
                <h3 className="mt-8 font-display text-3xl tracking-tight">{t.name}</h3>
                <p className="mt-3 text-[14px] text-ink-soft min-h-[64px] leading-relaxed">{t.desc}</p>
                <div className="mt-7 pt-6 border-t border-hairline">
                  <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">Designed for</div>
                  <div className="mt-2 font-display text-xl italic">{t.designed}</div>
                  <div className="mt-4 text-[11px] tracking-[0.18em] uppercase text-muted-foreground">Commission</div>
                  <div className="mt-2 font-display text-xl">{t.commission}</div>
                </div>
                <ul className="mt-7 space-y-3 text-[14px] flex-1">
                  {t.features.map((f) => (
                    <li key={f} className="flex gap-3"><Check className="size-4 text-gold flex-shrink-0 mt-0.5" strokeWidth={1.6} /> <span>{f}</span></li>
                  ))}
                </ul>
                <Link to={t.name === "Super Distributor" ? "/contact" : "/signup"} className={`mt-8 inline-flex items-center justify-between gap-2 px-5 py-3 text-sm font-medium transition rounded-sm ${t.popular ? "bg-ink text-paper hover:bg-ink-soft" : "border border-ink/20 hover:border-ink"}`}>
                  Apply <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-paper-warm border-y border-hairline">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
            <div className="lg:col-span-7">
              <div className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">— Programme Benefits</div>
              <h2 className="mt-6 font-display text-4xl md:text-6xl tracking-tight leading-[1.02]">
                Built around the <span className="italic text-ink-soft">operator's reality.</span>
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-hairline">
            {benefits.map((b, i) => (
              <div key={b.title} className={`p-8 border-b border-hairline ${i % 3 !== 2 ? "lg:border-r" : ""} ${i % 2 !== 1 ? "md:border-r" : ""}`}>
                <b.icon className="size-5 text-ink" strokeWidth={1.4} />
                <h3 className="mt-8 font-display text-2xl tracking-tight">{b.title}</h3>
                <p className="mt-3 text-[14.5px] text-ink-soft leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-paper">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
            <div className="lg:col-span-7">
              <div className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">— Onboarding</div>
              <h2 className="mt-6 font-display text-4xl md:text-6xl tracking-tight leading-[1.02]">
                Six steps. <span className="italic text-ink-soft">One platform.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-ink-soft leading-relaxed">A structured onboarding journey — engineered to take you from registration to revenue without operational ambiguity.</p>
            </div>
          </div>
          <ol className="border-t border-hairline">
            {steps.map((s, i) => (
              <li key={s.t} className="grid grid-cols-12 gap-6 py-8 border-b border-hairline items-start">
                <div className="col-span-2 md:col-span-1 font-display text-2xl text-gold">{String(i + 1).padStart(2, "0")}</div>
                <div className="col-span-10 md:col-span-4 flex items-center gap-4">
                  <s.icon className="size-5 text-ink" strokeWidth={1.4} />
                  <div className="font-display text-2xl tracking-tight">{s.t}</div>
                </div>
                <div className="col-span-12 md:col-span-7 text-[15px] text-ink-soft leading-relaxed md:pl-6 md:border-l border-hairline">{s.d}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <div className="text-[11px] tracking-[0.22em] uppercase text-gold-soft">— Founding Cohort</div>
            <h2 className="mt-6 font-display text-4xl md:text-6xl tracking-tight leading-[1.02]">
              The first hundred partners <span className="italic text-gold-soft">will define the firm.</span>
            </h2>
            <p className="mt-6 text-paper/75 max-w-2xl leading-relaxed">If you are operating today and want to build the next chapter with us, we would like to speak. Founding partners receive priority onboarding, direct access to leadership and economics designed to compound.</p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <Link to="/signup" className="inline-flex items-center gap-2 bg-paper text-ink px-6 py-3.5 text-sm font-medium hover:bg-gold-soft transition rounded-sm">
              Apply to the cohort <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
