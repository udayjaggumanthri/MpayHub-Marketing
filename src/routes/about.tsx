import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";
import { ShieldCheck, Lightbulb, HeartHandshake, Activity, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Company — mPayHub" },
      { name: "description", content: "mPayHub is an India-built fintech operating system advancing financial inclusion through engineered trust, modern infrastructure and a partner-first model." },
      { property: "og:title", content: "Company — mPayHub" },
      { property: "og:description", content: "Engineering the financial backbone for India's next generation of enterprises." },
    ],
  }),
  component: AboutPage,
});

const journey = [
  ["Foundation", "Established with a clear thesis: India's merchants and distributors deserve institutional-grade payment infrastructure, not legacy compromises."],
  ["Platform", "Architected a unified core for recharge, BBPS, AEPS, money transfer, identity and API banking — engineered for high concurrency and audit-grade traceability."],
  ["Network", "Opened a structured partner ladder — Retailer, Distributor, Master and Super Distributor — with transparent economics and tiered support."],
  ["Intelligence", "Deployed real-time reporting, settlement and reconciliation systems to give every partner the operational clarity a CFO would expect."],
  ["The next chapter", "Onboarding our founding cohort, scaling regional coverage and extending the platform into deeper enterprise-grade financial services."],
];

const values = [
  { icon: ShieldCheck, title: "Custodial trust", desc: "We treat every transaction as institutional capital — secured, reconciled and auditable end-to-end." },
  { icon: Lightbulb, title: "Engineered clarity", desc: "Plain economics, observable systems and transparent operations. No hidden fees, no opaque rails." },
  { icon: HeartHandshake, title: "Partner-first", desc: "Our partners are not customers of a product. They are operators on a shared platform we are building together." },
  { icon: Activity, title: "Operational rigour", desc: "Reliability is a posture, not a promise. We monitor, measure and improve every quarter, in public." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <PageHeader
        index="06"
        eyebrow="Company"
        title="Building the financial backbone"
        highlight="of modern India."
        description="mPayHub is a technology-first fintech company engineering the unified payments and banking layer that India's merchants, distributors and enterprises have long deserved."
      />

      <section className="bg-paper py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6 lg:pr-12 lg:border-r border-hairline">
            <div className="text-[11px] tracking-[0.22em] uppercase text-gold">Our Mission</div>
            <p className="mt-6 font-display text-3xl md:text-4xl leading-tight tracking-tight">
              To make institutional-grade financial infrastructure <span className="italic text-ink-soft">accessible to every business</span> — from the street-corner counter to the regional distributor.
            </p>
          </div>
          <div className="lg:col-span-6 lg:pl-12">
            <div className="text-[11px] tracking-[0.22em] uppercase text-gold">Our Vision</div>
            <p className="mt-6 font-display text-3xl md:text-4xl leading-tight tracking-tight">
              A connected India where every merchant operates on the same rails as the country's largest banks — <span className="italic text-ink-soft">secure, settled and observable in real time.</span>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper-warm border-y border-hairline py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 mb-16 items-end">
            <div className="lg:col-span-7">
              <div className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">— Trajectory</div>
              <h2 className="mt-6 font-display text-4xl md:text-6xl tracking-tight leading-[1.02]">
                A deliberate <span className="italic text-ink-soft">build sequence.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-ink-soft leading-relaxed">A chronological account of how mPayHub is being built — disciplined, capital-efficient and aligned to the long arc of financial infrastructure.</p>
            </div>
          </div>
          <ol className="border-t border-hairline">
            {journey.map(([t, d], i) => (
              <li key={t} className="grid grid-cols-12 gap-6 py-8 border-b border-hairline">
                <div className="col-span-2 md:col-span-1 font-display text-2xl text-gold">{String(i + 1).padStart(2, "0")}</div>
                <div className="col-span-10 md:col-span-4">
                  <div className="font-display text-2xl tracking-tight">{t}</div>
                </div>
                <div className="col-span-12 md:col-span-7 text-[15px] text-ink-soft leading-relaxed md:pl-6 md:border-l border-hairline">{d}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-paper py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
            <div className="lg:col-span-7">
              <div className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">— Operating Principles</div>
              <h2 className="mt-6 font-display text-4xl md:text-6xl tracking-tight leading-[1.02]">
                Four convictions <span className="italic text-ink-soft">that govern the firm.</span>
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-hairline">
            {values.map((v, i) => (
              <div key={v.title} className={`p-8 border-b border-hairline ${i % 4 !== 3 ? "lg:border-r" : ""} ${i % 2 !== 1 ? "md:border-r" : ""}`}>
                <v.icon className="size-5 text-ink" strokeWidth={1.4} />
                <h3 className="mt-8 font-display text-2xl tracking-tight">{v.title}</h3>
                <p className="mt-3 text-[14.5px] text-ink-soft leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <div className="text-[11px] tracking-[0.22em] uppercase text-gold-soft">— Partner With Us</div>
            <h2 className="mt-6 font-display text-4xl md:text-6xl tracking-tight leading-[1.02]">
              Help us shape the financial <span className="italic text-gold-soft">backbone of India.</span>
            </h2>
            <p className="mt-6 text-paper/75 max-w-2xl leading-relaxed">A small, deliberate cohort of founding partners will define how mPayHub serves the next million merchants. If your business shares our standard, we would like to speak.</p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-paper text-ink px-6 py-3.5 text-sm font-medium hover:bg-gold-soft transition rounded-sm">
              Speak with leadership <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
