import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import {
  Check,
  TrendingUp,
  Layers,
  Wallet,
  Headphones,
  BarChart3,
  Grid3x3,
  ArrowRight,
  FileCheck,
  ClipboardCheck,
  Rocket,
  Activity,
  LineChart,
  Sprout,
} from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Partner Opportunities — mPayHub" },
      {
        name: "description",
        content:
          "Build your business with mPayHub. Choose a partnership model — Retailer, Distributor, Master or Super Distributor — and start earning recurring revenue.",
      },
      { property: "og:title", content: "Partner Opportunities — mPayHub" },
      {
        property: "og:description",
        content: "Retailer, Distributor, Master and Super Distributor partnership models.",
      },
    ],
  }),
  component: PartnersPage,
});

const tiers = [
  {
    name: "Retailer",
    tag: "Entry Level",
    desc: "Ideal for local shops, service centers and entrepreneurs.",
    income: "Local storefront",
    commission: "5% – 10%",
    features: [
      "Free onboarding support",
      "Basic business dashboard",
      "Weekly settlements",
      "Access to essential services",
    ],
    cta: "Start as Retailer",
  },
  {
    name: "Distributor",
    tag: "Popular Choice",
    desc: "Perfect for businesses managing multiple retailers.",
    income: "Multi-retailer network",
    commission: "10% – 15%",
    popular: true,
    features: [
      "Retailer management tools",
      "Advanced reporting dashboard",
      "Daily settlements",
      "Business growth support",
    ],
    cta: "Become Distributor",
  },
  {
    name: "Master Distributor",
    tag: "Professional",
    desc: "Designed for entrepreneurs building larger distribution networks.",
    income: "District coverage",
    commission: "15% – 20%",
    features: [
      "District-level management",
      "Real-time analytics",
      "Instant settlement options",
      "Expanded operational control",
    ],
    cta: "Apply Now",
  },
  {
    name: "Super Distributor",
    tag: "Enterprise",
    desc: "For businesses seeking regional expansion and large-scale network management.",
    income: "State-wide expansion",
    commission: "20% – 25%",
    features: [
      "State-level network control",
      "Advanced reporting systems",
      "Dedicated account management",
      "Priority support services",
    ],
    cta: "Talk to Sales",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "High ROI Potential",
    desc: "Generate recurring income through multiple digital payment and financial services.",
  },
  {
    icon: Layers,
    title: "Scalable Business Model",
    desc: "Expand from a single retail outlet to a large distribution network with structured growth opportunities.",
  },
  {
    icon: Wallet,
    title: "Fast Settlements",
    desc: "Receive timely payouts through efficient settlement systems designed for business continuity.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    desc: "Access onboarding assistance, technical guidance and dedicated account management.",
  },
  {
    icon: BarChart3,
    title: "Business Analytics",
    desc: "Track transactions, revenue and performance through comprehensive reporting tools.",
  },
  {
    icon: Grid3x3,
    title: "Multi-Service Platform",
    desc: "Offer a wide range of financial services from one centralized dashboard.",
  },
];

const steps = [
  {
    icon: ClipboardCheck,
    t: "Registration",
    d: "Complete the online registration process by providing your business and contact information.",
  },
  {
    icon: FileCheck,
    t: "KYC Verification",
    d: "Submit required identity and business verification documents for compliance and account activation.",
  },
  {
    icon: Rocket,
    t: "Service Activation",
    d: "Once verified, gain access to the dashboard and activate the services relevant to your business model.",
  },
  {
    icon: Activity,
    t: "Start Transactions",
    d: "Begin offering recharge, bill payment, banking and digital financial services to your customers.",
  },
  {
    icon: LineChart,
    t: "Manage Operations",
    d: "Monitor transactions, track commissions, view reports and manage your network through a centralized dashboard.",
  },
  {
    icon: Sprout,
    t: "Grow Your Business",
    d: "Expand your customer base, recruit partners and increase revenue through scalable fintech solutions.",
  },
];

function PartnersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <PageHeader
        eyebrow="Partner Opportunities"
        title="Build Your Business"
        highlight="With Us"
        description="Join our B2B partner network and choose a partnership model that aligns with your business goals."
      />

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {tiers.map((t, i) => (
              <Reveal
                key={t.name}
                delay={i * 90}
                className={`relative rounded-2xl bg-white p-5 sm:p-7 border-2 shadow-card flex flex-col min-w-0 ${t.popular ? "border-brand-blue shadow-soft" : "border-border/60"}`}
              >
                {t.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-brand text-white text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <div className="text-[10px] font-bold uppercase tracking-wider text-brand-blue">
                  {t.tag}
                </div>
                <h3 className="mt-2 text-xl sm:text-2xl font-bold">{t.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground sm:min-h-[48px]">{t.desc}</p>
                <div className="mt-5 rounded-xl bg-muted/50 p-4 min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    Designed For
                  </div>
                  <div className="mt-1 text-lg sm:text-xl font-bold text-gradient-brand leading-snug">
                    {t.income}
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">
                    Commission range:{" "}
                    <span className="font-semibold text-foreground">{t.commission}</span>
                  </div>
                </div>
                <ul className="mt-5 space-y-2.5 text-sm flex-1">
                  {t.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <Check className="size-4 text-brand-teal flex-shrink-0 mt-0.5" />{" "}
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                {t.cta === "Talk to Sales" ? (
                  <Link
                    to="/contact"
                    className={`mt-6 w-full text-center rounded-xl py-3 font-semibold transition ${t.popular ? "bg-gradient-brand text-white hover:opacity-95" : "bg-muted hover:bg-brand-blue hover:text-white"}`}
                  >
                    {t.cta}
                  </Link>
                ) : (
                  <a
                    href="https://partner.mpayhub.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 w-full text-center rounded-xl py-3 font-semibold transition ${t.popular ? "bg-gradient-brand text-white hover:opacity-95" : "bg-muted hover:bg-brand-blue hover:text-white"}`}
                  >
                    {t.cta}
                  </a>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-sm font-semibold text-brand-blue uppercase tracking-wider">
              Partner Benefits
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
              Why Join Our <span className="text-gradient-brand">Partner Network</span>
            </h2>
          </div>
          <div className="mt-10 sm:mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {benefits.map((b, i) => (
              <Reveal
                key={b.title}
                delay={i * 70}
                className="rounded-2xl bg-white p-6 border border-border/60 shadow-card hover:shadow-soft transition-all"
              >
                <div className="size-12 rounded-xl bg-gradient-brand grid place-items-center mb-4">
                  <b.icon className="size-5 text-white" />
                </div>
                <h3 className="font-bold text-lg">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-sm font-semibold text-brand-blue uppercase tracking-wider">
              How It Works
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
              Simple <span className="text-gradient-brand">Onboarding Process</span>
            </h2>
          </div>
          <div className="mt-10 sm:mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {steps.map((s, i) => (
              <Reveal
                key={s.t}
                delay={i * 70}
                className="rounded-2xl bg-white p-6 border border-border/60 shadow-card relative"
              >
                <div className="absolute -top-3 -left-3 size-10 rounded-xl bg-gradient-brand grid place-items-center text-white font-bold">
                  {i + 1}
                </div>
                <div className="size-12 rounded-xl bg-accent grid place-items-center mb-4 ml-8">
                  <s.icon className="size-5 text-brand-blue" />
                </div>
                <h3 className="font-bold text-lg">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <Reveal className="rounded-3xl bg-gradient-brand text-white p-8 sm:p-12 md:p-14 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Ready to launch your fintech business?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-white/90">
              Register today and start earning recurring revenue with India's growing digital
              payment ecosystem.
            </p>
            <a
              href="https://partner.mpayhub.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 sm:mt-8 inline-flex items-center gap-2 rounded-full bg-white text-brand-blue-deep px-5 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold hover:bg-white/95 transition"
            >
              Become a Partner <ArrowRight className="size-4" />
            </a>
          </Reveal>
        </div>
      </section>
      <Footer />
    </div>
  );
}
