import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";
import { Mail, MapPin, Phone, MessageCircle, Briefcase, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — mPayHub" },
      { name: "description", content: "Reach mPayHub's partnerships, integration and support teams. We respond to qualified inquiries within one business day." },
      { property: "og:title", content: "Contact — mPayHub" },
      { property: "og:description", content: "Partnership, integration and support — directly with our team." },
    ],
  }),
  component: ContactPage,
});

const channels = [
  { icon: Briefcase, label: "Partnerships", value: "partners@mpayhub.com", note: "Founding cohort & enterprise distribution" },
  { icon: MessageCircle, label: "WhatsApp", value: "+91 90000 00000", note: "Onboarding & rapid assistance" },
  { icon: Mail, label: "Support", value: "support@mpayhub.com", note: "Technical and account operations" },
  { icon: Phone, label: "Direct line", value: "+91 80 4567 8900", note: "Speak with a partnership specialist" },
  { icon: MapPin, label: "Headquarters", value: "Bangalore, India", note: "By appointment only" },
];

const faqs = [
  ["What documents are required to onboard?", "Identity, address and business verification documents — calibrated to the partnership tier you are applying for and to applicable regulatory requirements."],
  ["How long does activation take?", "Most applications are reviewed and activated promptly after successful KYC verification. Enterprise tiers include a dedicated integration runway."],
  ["What services become available after activation?", "Recharge, bill payments, AEPS, BBPS, money transfer, API banking and payment gateway — provisioned to the services your tier is eligible to operate."],
  ["How are commissions structured?", "Commission economics are tier-based and transparent. Each statement includes a service-level breakdown so partners can reconcile revenue with confidence."],
  ["What is the settlement cadence?", "Settlement frequency depends on tier and service type, ranging from weekly cycles for entry partners to daily and instant settlement for enterprise tiers."],
  ["Do you provide training and support?", "Yes. Every partner receives concierge onboarding, operational documentation and ongoing access to a dedicated support function."],
  ["Can businesses integrate through APIs?", "Yes. Our API Banking and Payment Gateway products provide production-grade, documented APIs for embedded financial services."],
];

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">{label}</label>
      <input name={name} type={type} required className="mt-2 w-full bg-transparent border-0 border-b border-hairline px-0 py-3 text-[15px] focus:outline-none focus:border-ink transition-colors" />
    </div>
  );
}

function ContactPage() {
  const [sending, setSending] = useState(false);
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message received. Our team will respond within one business day.");
      (e.target as HTMLFormElement).reset();
    }, 700);
  }
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <PageHeader
        index="05"
        eyebrow="Contact"
        title="Speak with"
        highlight="our team."
        description="Whether you are exploring partnership, integrating APIs, or evaluating mPayHub for your enterprise, we will route your inquiry to the right team within one business day."
      />

      <section className="py-24 bg-paper">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">— Direct channels</div>
            <h2 className="mt-6 font-display text-3xl md:text-4xl tracking-tight leading-tight">A team, <span className="italic text-ink-soft">not a queue.</span></h2>
            <ul className="mt-10 border-t border-hairline">
              {channels.map((c) => (
                <li key={c.label} className="grid grid-cols-12 gap-4 py-6 border-b border-hairline items-start">
                  <c.icon className="col-span-1 size-5 text-ink mt-1" strokeWidth={1.4} />
                  <div className="col-span-11">
                    <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">{c.label}</div>
                    <div className="mt-1 font-display text-xl">{c.value}</div>
                    <div className="mt-1 text-[13px] text-ink-soft">{c.note}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7 lg:pl-12 lg:border-l border-hairline">
            <div className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">— Send a message</div>
            <h2 className="mt-6 font-display text-3xl md:text-4xl tracking-tight leading-tight">Tell us about <span className="italic text-ink-soft">your business.</span></h2>
            <form onSubmit={onSubmit} className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-8">
              <Field label="Full name" name="name" />
              <Field label="Work email" name="email" type="email" />
              <Field label="Company" name="company" />
              <Field label="Phone" name="phone" />
              <div className="sm:col-span-2">
                <label className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">How can we help?</label>
                <textarea name="message" required rows={5} className="mt-2 w-full bg-transparent border-0 border-b border-hairline px-0 py-3 text-[15px] focus:outline-none focus:border-ink transition-colors resize-none" />
              </div>
              <div className="sm:col-span-2 pt-2">
                <button disabled={sending} className="inline-flex items-center gap-2 bg-ink text-paper px-6 py-3.5 text-sm font-medium hover:bg-ink-soft transition rounded-sm disabled:opacity-60">
                  {sending ? "Sending…" : "Send inquiry"} <ArrowUpRight className="size-3.5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="py-24 bg-paper-warm border-y border-hairline">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-12">
            <div className="lg:col-span-7">
              <div className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">— Frequently Asked</div>
              <h2 className="mt-6 font-display text-4xl md:text-6xl tracking-tight leading-[1.02]">
                The questions <span className="italic text-ink-soft">we hear most.</span>
              </h2>
            </div>
          </div>
          <div className="border-t border-hairline">
            {faqs.map(([q, a], i) => (
              <details key={q} className="group border-b border-hairline">
                <summary className="grid grid-cols-12 gap-6 py-7 cursor-pointer list-none items-start">
                  <span className="col-span-1 font-display text-xl text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <span className="col-span-10 font-display text-xl md:text-2xl tracking-tight">{q}</span>
                  <span className="col-span-1 text-ink text-2xl text-right transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="grid grid-cols-12 gap-6 pb-8">
                  <div className="col-span-1" />
                  <p className="col-span-10 text-[15px] text-ink-soft leading-relaxed">{a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
