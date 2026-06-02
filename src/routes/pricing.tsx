import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";
import { Check, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — mPayHub" },
      { name: "description", content: "Plans from ₹39,999 to ₹4,00,000. Pick the path that matches your career goals." },
      { property: "og:title", content: "Pricing — mPayHub" },
      { property: "og:description", content: "Plans that match every learner's career goals." },
    ],
  }),
  component: PricingPage,
});

const plans = [
  { name: "Foundation", desc: "Perfect for beginners starting their learning journey", price: "₹39,999", old: "₹59,999", period: "6 months access", off: "33% OFF", features: ["25+ foundational courses", "HD video content", "Mobile app access", "Completion certificates", "Community forum", "Email support (48hr)"], cta: "Get Started" },
  { name: "Professional", desc: "For career-focused learners seeking industry skills", price: "₹99,999", old: "₹1.50L", period: "12 months access", off: "33% OFF", popular: true, features: ["100+ professional courses", "Project-based paths", "Industry certificates", "1-on-1 mentor (4/mo)", "Resume & portfolio review", "Job placement assistance", "Priority support (24hr)", "Mock interviews"], cta: "Get Started" },
  { name: "Premium Elite", desc: "Complete transformation with personalized mentorship", price: "₹2.00L", old: "₹3.00L", period: "24 months access", off: "33% OFF", features: ["Unlimited course access", "Personal roadmap", "Weekly 1-on-1 mentorship", "Guaranteed internship", "Real-world projects", "Industry networking", "LinkedIn optimization", "Lifetime alumni network"], cta: "Get Started" },
  { name: "Enterprise", desc: "For organizations training teams at scale", price: "₹4.00L", old: "₹6.00L", period: "Custom duration", off: "33% OFF", features: ["Everything in Elite", "Custom course development", "Team analytics dashboard", "LMS integration", "Dedicated account manager", "On-site training", "White-label certificates", "Bulk enrollment (50+)"], cta: "Contact Sales" },
];

const faqs = [
  ["Can I switch plans later?", "Yes — upgrade any time and we'll prorate the difference. Downgrades take effect at the next renewal."],
  ["Do you offer EMI options?", "0% interest EMIs up to 12 months on cards from major Indian banks, plus international card support."],
  ["What's the refund policy?", "30-day full refund on all individual plans. Enterprise contracts follow the agreed SOW."],
  ["Are certificates accredited?", "Our certificates are industry-recognized and accepted by 5,000+ hiring partners worldwide."],
];

function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <PageHeader eyebrow="Investment Plans" title="Invest in Your" highlight="Future" description="Comprehensive programs from ₹39,999 to ₹4,00,000. Choose the plan that matches your career goals." />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((p) => (
              <div key={p.name} className={`relative rounded-2xl bg-white p-7 border-2 shadow-card flex flex-col ${p.popular ? "border-brand-blue shadow-soft" : "border-border/60"}`}>
                {p.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-brand text-white text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</div>}
                <div className="text-xs font-bold text-red-500">{p.off}</div>
                <h3 className="mt-2 text-2xl font-bold">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground min-h-[40px]">{p.desc}</p>
                <div className="mt-5">
                  <div className="text-4xl font-bold text-brand-blue">{p.price}</div>
                  <div className="mt-1 text-sm text-muted-foreground"><span className="line-through">{p.old}</span> · {p.period}</div>
                </div>
                <ul className="mt-6 space-y-2.5 text-sm flex-1">
                  {p.features.map((f) => <li key={f} className="flex gap-2"><Check className="size-4 text-brand-teal flex-shrink-0 mt-0.5" /> <span>{f}</span></li>)}
                </ul>
                <Link to={p.cta === "Contact Sales" ? "/contact" : "/signup"} className={`mt-7 w-full text-center rounded-xl py-3 font-semibold transition ${p.popular ? "bg-gradient-brand text-white hover:opacity-95" : "bg-muted hover:bg-brand-blue hover:text-white"}`}>{p.cta}</Link>
              </div>
            ))}
          </div>

          <div className="mt-12 grid sm:grid-cols-3 gap-5">
            {[["30-Day Money Back", "Full refund, no questions asked"], ["Easy EMI Options", "0% interest, up to 12 months"], ["Lifetime Updates", "Free access to new content"]].map(([t, d]) => (
              <div key={t} className="rounded-xl bg-muted/50 p-5 flex items-center gap-4">
                <div className="size-10 rounded-lg bg-white grid place-items-center"><ShieldCheck className="size-5 text-brand-teal" /></div>
                <div><div className="font-semibold">{t}</div><div className="text-xs text-muted-foreground">{d}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/40">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold text-center">Frequently asked questions</h2>
          <div className="mt-10 space-y-4">
            {faqs.map(([q, a]) => (
              <details key={q} className="group rounded-xl bg-white border border-border/60 p-5 shadow-card">
                <summary className="cursor-pointer font-semibold flex items-center justify-between list-none">
                  {q} <span className="text-brand-blue text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}