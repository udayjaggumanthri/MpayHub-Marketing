import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";
import { Mail, MapPin, Phone, MessageCircle, Briefcase, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — mPayHub" },
      { name: "description", content: "Get in touch with the mPayHub team for partnership, API integration, or service inquiries. We reply within one business day." },
      { property: "og:title", content: "Contact — mPayHub" },
      { property: "og:description", content: "Talk to sales, support or partnership teams." },
    ],
  }),
  component: ContactPage,
});

const channels = [
  { icon: Briefcase, label: "Business Inquiries", value: "sales@mpayhub.com", note: "Sales & partnership team" },
  { icon: MessageCircle, label: "WhatsApp Support", value: "+91 90000 00000", note: "Onboarding & quick help" },
  { icon: Mail, label: "Email Support", value: "support@mpayhub.com", note: "Technical & account help" },
  { icon: Phone, label: "Phone Support", value: "+91 80 4567 8900", note: "Speak with a specialist" },
  { icon: MapPin, label: "Office Location", value: "Bangalore, India", note: "Business meetings & demos" },
];

const faqs = [
  ["What documents are required for registration?", "Basic identity, address and business verification documents may be required depending on the partnership model."],
  ["How long does account activation take?", "Most applications are processed after successful KYC verification and document review."],
  ["What services can I offer after activation?", "Partners can access recharge services, bill payments, AEPS, BBPS, money transfer, API banking and other financial services based on eligibility."],
  ["How are commissions calculated?", "Commission structures vary by service category and partnership tier."],
  ["Are settlements processed daily?", "Settlement frequency depends on the partnership model and service type."],
  ["Do you provide training and support?", "Yes. We offer onboarding assistance, operational guidance and ongoing support for partners."],
  ["Can businesses integrate through APIs?", "Yes. Our API Banking and Payment Gateway solutions support seamless integration for businesses and developers."],
];

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input name={name} type={type} required className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:border-brand-blue" />
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
      toast.success("Message sent. Our team will respond within one business day.");
      (e.target as HTMLFormElement).reset();
    }, 700);
  }
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <PageHeader eyebrow="Contact Us" title="Get in" highlight="Touch" description="Whether you are interested in becoming a partner, integrating our APIs, or learning more about our services, our team is ready to assist you." />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {channels.map((c) => (
              <div key={c.label} className="rounded-2xl bg-white p-5 border border-border/60 shadow-card flex items-start gap-4">
                <div className="size-11 rounded-xl bg-gradient-brand grid place-items-center flex-shrink-0"><c.icon className="size-5 text-white" /></div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                  <div className="mt-1 font-semibold truncate">{c.value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{c.note}</div>
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={onSubmit} className="lg:col-span-3 rounded-2xl bg-white p-8 border border-border/60 shadow-card space-y-4 h-fit">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Full name" name="name" />
              <Field label="Business name" name="business" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Email" name="email" type="email" />
              <Field label="Phone" name="phone" type="tel" />
            </div>
            <div>
              <label className="text-sm font-medium">I'm interested in</label>
              <select name="interest" required className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:border-brand-blue">
                <option value="">Select an option</option>
                <option>Becoming a Partner</option>
                <option>API Banking Integration</option>
                <option>Payment Gateway</option>
                <option>Enterprise Solutions</option>
                <option>General Inquiry</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea name="message" required rows={5} className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:border-brand-blue" />
            </div>
            <button disabled={sending} className="inline-flex items-center gap-2 rounded-full bg-gradient-brand text-white px-6 py-3 font-semibold shadow-soft hover:opacity-95 disabled:opacity-60 transition">
              {sending ? "Sending..." : <>Send message <Send className="size-4" /></>}
            </button>
          </form>
        </div>
      </section>

      <section className="py-20 bg-muted/40">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <div className="text-sm font-semibold text-brand-blue uppercase tracking-wider">FAQ</div>
            <h2 className="mt-3 text-4xl font-bold">Frequently Asked <span className="text-gradient-brand">Questions</span></h2>
          </div>
          <div className="mt-10 space-y-3">
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