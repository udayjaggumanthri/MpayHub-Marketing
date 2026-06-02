import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";
import {
  Smartphone, Tv, Zap, Flame, Droplet, Wifi, Car, Banknote, Shield,
  Landmark, FileText, Repeat, Wallet, IdCard, Network, CreditCard,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — mPayHub" },
      { name: "description", content: "All major recharge, banking and bill payment services on one platform. Fast, secure and reliable digital financial services." },
      { property: "og:title", content: "Services — mPayHub" },
      { property: "og:description", content: "Recharge, BBPS, AEPS, money transfer, API banking and more." },
    ],
  }),
  component: ServicesPage,
});

const groups = [
  {
    title: "Recharge Services",
    items: [
      { icon: Smartphone, title: "Mobile Recharge", desc: "Prepaid and postpaid recharge for all major telecom operators with instant processing and high availability." },
      { icon: Tv, title: "DTH Recharge", desc: "Recharge services for all leading DTH providers with real-time confirmation and seamless transactions." },
      { icon: Car, title: "FASTag Recharge", desc: "Instant FASTag recharge services for uninterrupted travel and toll payments." },
    ],
  },
  {
    title: "Bill Payments",
    items: [
      { icon: Zap, title: "Electricity Bills", desc: "Pay electricity bills for multiple state and regional electricity boards through a secure payment platform." },
      { icon: Flame, title: "Gas Bills", desc: "Convenient payment solutions for PNG and LPG services across supported providers." },
      { icon: Droplet, title: "Water Bills", desc: "Quick and secure payments for municipal and utility water boards." },
      { icon: Wifi, title: "Broadband Bills", desc: "Manage internet and broadband bill payments through a centralized platform." },
      { icon: Banknote, title: "Loan EMI Payments", desc: "Simple and secure EMI payment solutions for multiple financial institutions." },
      { icon: Shield, title: "Insurance Premiums", desc: "Convenient premium payments for life, health, vehicle and general insurance policies." },
    ],
  },
  {
    title: "Banking & Financial",
    items: [
      { icon: Landmark, title: "AEPS", desc: "Aadhaar Enabled Payment System offering cash withdrawal, balance inquiry, mini statements and banking services." },
      { icon: FileText, title: "BBPS", desc: "Bharat Bill Payment System supporting multiple categories of recurring bill payments." },
      { icon: Wallet, title: "Aadhaar Pay", desc: "Secure merchant payment solution using Aadhaar authentication." },
      { icon: Repeat, title: "Domestic Money Transfer", desc: "Fast and reliable money transfer services across supported banking networks." },
      { icon: IdCard, title: "PAN Services", desc: "PAN card application, correction and related documentation services." },
    ],
  },
  {
    title: "Enterprise Solutions",
    items: [
      { icon: Network, title: "API Banking", desc: "Comprehensive API solutions enabling businesses to integrate banking and payment services into their applications." },
      { icon: CreditCard, title: "Payment Gateway", desc: "Secure online payment processing for websites, mobile applications and enterprise platforms." },
    ],
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <PageHeader eyebrow="Our Services" title="One Platform." highlight="Every Service." description="All major recharge, banking and bill payment services on one platform. Fast, secure and reliable — built for retailers, distributors and enterprises." />

      {groups.map((g, gi) => (
        <section key={g.title} className={`py-16 ${gi % 2 ? "bg-muted/40" : ""}`}>
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-end justify-between flex-wrap gap-4">
              <div>
                <div className="text-sm font-semibold text-brand-blue uppercase tracking-wider">Category</div>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold">{g.title}</h2>
              </div>
              <div className="text-sm text-muted-foreground">{g.items.length} services</div>
            </div>
            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {g.items.map((s) => (
                <div key={s.title} className="rounded-2xl bg-white p-7 border border-border/60 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all">
                  <div className="size-12 rounded-xl bg-gradient-brand grid place-items-center mb-4"><s.icon className="size-5 text-white" /></div>
                  <h3 className="font-bold text-lg">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl bg-gradient-brand text-white p-12 md:p-14 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Activate every service from one dashboard</h2>
            <p className="mt-3 text-white/90">Onboard quickly, complete KYC and start transacting across recharge, BBPS, AEPS and banking services.</p>
            <Link to="/signup" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-brand-blue-deep px-7 py-3.5 font-semibold hover:bg-white/95 transition">Start onboarding <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}