import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { ShieldCheck, Lightbulb, HeartHandshake, Activity, ArrowRight, Sparkles, Target, Eye } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — mPayHub" },
      { name: "description", content: "mPayHub is a technology-driven fintech company delivering reliable digital payment and banking solutions to businesses across India." },
      { property: "og:title", content: "About — mPayHub" },
      { property: "og:description", content: "Driving financial inclusion through technology." },
    ],
  }),
  component: AboutPage,
});

const journey = [
  ["Foundation", "Established with a vision to simplify digital financial services and empower local businesses."],
  ["Expansion", "Introduced recharge, bill payment and banking services to support growing customer needs."],
  ["Network Growth", "Expanded our partner ecosystem across multiple regions through retailer and distributor programs."],
  ["Technology Advancement", "Enhanced platform capabilities through automation, analytics and enterprise-grade security."],
  ["Future Ready", "Continuing to innovate and build scalable financial technology solutions for businesses nationwide."],
];

const values = [
  { icon: ShieldCheck, title: "Security", desc: "Protecting transactions, customer data and business operations through robust security standards." },
  { icon: Lightbulb, title: "Innovation", desc: "Continuously improving technology and introducing new financial service opportunities." },
  { icon: HeartHandshake, title: "Customer Success", desc: "Supporting partners with the tools, training and resources needed to achieve sustainable growth." },
  { icon: Activity, title: "Reliability", desc: "Delivering consistent performance and dependable transaction processing." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <PageHeader eyebrow="Company Overview" title="Driving Financial Inclusion" highlight="Through Technology" description="We are a technology-driven fintech company focused on delivering reliable digital payment and banking solutions to businesses across India." />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid md:grid-cols-2 gap-4 sm:gap-6">
          <Reveal className="rounded-3xl bg-white p-6 sm:p-9 border border-border/60 shadow-card">
            <div className="size-12 rounded-xl bg-gradient-brand grid place-items-center"><Target className="size-5 text-white" /></div>
            <h2 className="mt-5 text-xl sm:text-2xl font-bold">Our Mission</h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">To simplify access to digital financial services while enabling businesses to grow through secure, efficient and innovative payment solutions.</p>
          </Reveal>
          <Reveal delay={120} className="rounded-3xl bg-white p-6 sm:p-9 border border-border/60 shadow-card">
            <div className="size-12 rounded-xl bg-gradient-brand grid place-items-center"><Eye className="size-5 text-white" /></div>
            <h2 className="mt-5 text-xl sm:text-2xl font-bold">Our Vision</h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">To become a leading digital financial services platform that connects businesses, consumers and communities through accessible and technology-driven payment infrastructure.</p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-muted/40">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center">
            <div className="text-sm font-semibold text-brand-blue uppercase tracking-wider">Our Growth Journey</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Milestones that <span className="text-gradient-brand">shape us</span></h2>
          </div>
          <div className="mt-10 sm:mt-14 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
            <div className="space-y-6 sm:space-y-8">
              {journey.map(([t, d], i) => (
                <Reveal key={t} delay={i * 80} className={`relative md:grid md:grid-cols-2 md:gap-10 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div className={`pl-10 md:pl-0 ${i % 2 ? "md:text-left md:pl-12" : "md:text-right md:pr-12"}`}>
                    <div className="rounded-2xl bg-white p-5 sm:p-6 border border-border/60 shadow-card inline-block max-w-full">
                      <div className="text-xs font-bold text-brand-blue uppercase tracking-wider">Stage 0{i + 1}</div>
                      <div className="mt-1 text-lg sm:text-xl font-bold">{t}</div>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
                    </div>
                  </div>
                  <div className="hidden md:block" />
                  <div className="absolute left-4 md:left-1/2 top-6 size-3 rounded-full bg-brand-blue ring-4 ring-background md:-translate-x-1/2" />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <div className="text-sm font-semibold text-brand-blue uppercase tracking-wider">Our Core Values</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Principles that <span className="text-gradient-brand">guide us</span></h2>
          </div>
          <div className="mt-10 sm:mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 70} className="rounded-2xl bg-white p-6 border border-border/60 shadow-card">
                <div className="size-12 rounded-xl bg-gradient-brand grid place-items-center mb-4"><v.icon className="size-5 text-white" /></div>
                <h3 className="font-bold text-lg">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-muted/40">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <div className="text-sm font-semibold text-brand-blue uppercase tracking-wider">Leadership & Governance</div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Built by experts in <span className="text-gradient-brand">fintech</span></h2>
          <p className="mt-5 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto">Our leadership team combines expertise in financial technology, operations, compliance and customer success. Together, we are committed to building trusted fintech infrastructure that drives growth for businesses of all sizes.</p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <Reveal className="rounded-3xl bg-gradient-brand text-white p-8 sm:p-12 md:p-14 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-xs font-medium"><Sparkles className="size-3.5" /> Partner with us</div>
            <h2 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-bold">Ready to grow with mPayHub?</h2>
            <p className="mt-3 text-sm sm:text-base text-white/90">Be among the founding partners shaping a new digital payments network in India.</p>
            <Link to="/contact" className="mt-7 sm:mt-8 inline-flex items-center gap-2 rounded-full bg-white text-brand-blue-deep px-5 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold hover:bg-white/95 transition">Talk to our team <ArrowRight className="size-4" /></Link>
          </Reveal>
        </div>
      </section>
      <Footer />
    </div>
  );
}