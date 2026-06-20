import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";
import {
  Smartphone, Tv, Zap, Flame, Droplet, Wifi, Car, Banknote, Shield,
  Landmark, FileText, Repeat, Wallet, IdCard, Network, CreditCard, ArrowUpRight,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Platform — mPayHub" },
      { name: "description", content: "A unified platform for recharge, BBPS, AEPS, money transfer, API banking and payment gateway services — engineered for retailers, distributors and enterprises." },
      { property: "og:title", content: "Platform — mPayHub" },
      { property: "og:description", content: "Every payment surface, on one institutional-grade platform." },
    ],
  }),
  component: ServicesPage,
});

const groups = [
  {
    code: "01",
    title: "Consumer Recharge",
    intro: "Real-time top-ups across India's telecom, broadcast and mobility networks.",
    items: [
      { icon: Smartphone, title: "Mobile Recharge", desc: "Prepaid and postpaid recharge across every major telecom operator with instant confirmation and exceptional availability." },
      { icon: Tv, title: "DTH Recharge", desc: "Activate and recharge subscriptions across leading DTH providers with real-time settlement to the operator." },
      { icon: Car, title: "FASTag Recharge", desc: "Instant FASTag top-ups for personal and fleet vehicles, with consolidated reporting for distribution partners." },
    ],
  },
  {
    code: "02",
    title: "Bill Payments",
    intro: "A single integration point for India's most-paid recurring obligations.",
    items: [
      { icon: Zap, title: "Electricity", desc: "Pay state and regional electricity board bills through an audited, BBPS-grade payment surface." },
      { icon: Flame, title: "Gas", desc: "PNG and LPG bill payments across supported distributors with end-to-end reconciliation." },
      { icon: Droplet, title: "Water", desc: "Municipal and utility water bill collection with structured remittance to receiving authorities." },
      { icon: Wifi, title: "Broadband", desc: "Internet and broadband bill payments consolidated under one operations dashboard." },
      { icon: Banknote, title: "Loan EMIs", desc: "Secure EMI collection across partnered financial institutions with full transaction traceability." },
      { icon: Shield, title: "Insurance Premiums", desc: "Premium collection for life, health, motor and general insurance lines, with policy-level posting." },
    ],
  },
  {
    code: "03",
    title: "Banking & Financial Services",
    intro: "Aadhaar-led banking, BBPS rails and domestic money movement — built to bank standards.",
    items: [
      { icon: Landmark, title: "AEPS", desc: "Aadhaar Enabled Payment System for cash withdrawal, balance enquiry, mini statements and last-mile banking access." },
      { icon: FileText, title: "BBPS", desc: "Bharat Bill Payment System operations across multiple recurring bill categories with end-to-end audit." },
      { icon: Wallet, title: "Aadhaar Pay", desc: "Merchant acceptance using Aadhaar-based authentication for low-friction, biometric-secured payments." },
      { icon: Repeat, title: "Domestic Money Transfer", desc: "Fast, traceable money transfers across supported banking networks with structured remittance reporting." },
      { icon: IdCard, title: "PAN Services", desc: "PAN issuance, correction and related documentation services for partners serving identity-led workflows." },
    ],
  },
  {
    code: "04",
    title: "Enterprise Solutions",
    intro: "Production-grade APIs and payment surfaces for institutional integration.",
    items: [
      { icon: Network, title: "API Banking", desc: "A comprehensive, documented API layer for embedding banking and payment services into your own products and operations." },
      { icon: CreditCard, title: "Payment Gateway", desc: "Secure, PCI-aligned online payment acceptance for websites, mobile applications and enterprise platforms." },
    ],
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <PageHeader
        index="02"
        eyebrow="The Platform"
        title="One platform."
        highlight="Every payment surface."
        description="A unified financial infrastructure for retailers, distributors and enterprises — engineered to consolidate every transaction surface your business needs."
      />

      {groups.map((g, gi) => (
        <section key={g.title} className={`py-24 ${gi % 2 ? "bg-paper-warm border-y border-hairline" : "bg-paper"}`}>
          <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-4">
                  <span className="text-[11px] tracking-[0.22em] uppercase text-gold font-medium">{g.code}</span>
                  <span className="h-px w-10 bg-gold" />
                  <span className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">Category</span>
                </div>
                <h2 className="mt-6 font-display text-4xl md:text-6xl tracking-tight leading-[1.02]">{g.title}</h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-ink-soft leading-relaxed">{g.intro}</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-hairline">
              {g.items.map((s, i) => (
                <div key={s.title} className={`group p-9 border-b border-hairline ${i % 3 !== 2 ? "lg:border-r" : ""} ${i % 2 !== 1 ? "md:border-r lg:border-r" : ""} ${i % 3 === 2 ? "md:border-r-0 lg:border-r-0" : ""} relative`}>
                  <s.icon className="size-5 text-ink" strokeWidth={1.4} />
                  <h3 className="mt-8 font-display text-2xl tracking-tight">{s.title}</h3>
                  <p className="mt-3 text-[14.5px] text-ink-soft leading-relaxed">{s.desc}</p>
                  <ArrowUpRight className="absolute top-9 right-9 size-4 text-muted-foreground/30 group-hover:text-ink transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <div className="text-[11px] tracking-[0.22em] uppercase text-gold-soft">— Activate the platform</div>
            <h2 className="mt-6 font-display text-4xl md:text-6xl tracking-tight leading-[1.02]">
              Every service. <span className="italic text-gold-soft">One dashboard. One settlement.</span>
            </h2>
            <p className="mt-6 text-paper/75 max-w-2xl leading-relaxed">Complete KYC, integrate once and start operating across recharge, BBPS, AEPS, money transfer and enterprise banking from a single, audited surface.</p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <Link to="/signup" className="inline-flex items-center gap-2 bg-paper text-ink px-6 py-3.5 text-sm font-medium hover:bg-gold-soft transition rounded-sm">
              Begin onboarding <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
