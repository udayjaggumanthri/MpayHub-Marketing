import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Lumina Skill" },
      { name: "description", content: "Get in touch with the Lumina Skill team. We reply within one business day." },
      { property: "og:title", content: "Contact — Lumina Skill" },
      { property: "og:description", content: "We reply within one business day." },
    ],
  }),
  component: ContactPage,
});

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
      toast.success("Message sent! We'll get back to you within one business day.");
      (e.target as HTMLFormElement).reset();
    }, 700);
  }
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <PageHeader eyebrow="Contact" title="Let's" highlight="Talk" description="Questions about courses, enterprise plans, or partnerships? Send us a note and we'll reply within one business day." />
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-4">
            {[
              { icon: Mail, label: "Email", value: "hello@luminaskill.com" },
              { icon: Phone, label: "Phone", value: "+91 80 4567 8900" },
              { icon: MapPin, label: "HQ", value: "Bangalore, India" },
            ].map((c) => (
              <div key={c.label} className="rounded-2xl bg-white p-6 border border-border/60 shadow-card flex items-start gap-4">
                <div className="size-11 rounded-xl bg-gradient-brand grid place-items-center flex-shrink-0"><c.icon className="size-5 text-white" /></div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                  <div className="mt-1 font-semibold">{c.value}</div>
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={onSubmit} className="lg:col-span-2 rounded-2xl bg-white p-8 border border-border/60 shadow-card space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Full name" name="name" />
              <Field label="Email" name="email" type="email" />
            </div>
            <Field label="Subject" name="subject" />
            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea name="message" required rows={6} className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:border-brand-blue" />
            </div>
            <button disabled={sending} className="inline-flex items-center gap-2 rounded-full bg-gradient-brand text-white px-6 py-3 font-semibold shadow-soft hover:opacity-95 disabled:opacity-60 transition">
              {sending ? "Sending..." : <>Send message <Send className="size-4" /></>}
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}