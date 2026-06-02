import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Check, Sparkles } from "lucide-react";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Get Started — mPayHub" },
      { name: "description", content: "Create your free mPayHub account and start learning today." },
    ],
  }),
  component: SignupPage,
});

const perks = [
  "7-day free trial — no credit card",
  "Access to 200+ expert-led courses",
  "Industry-recognized certificates",
  "Mobile apps for iOS and Android",
  "Cancel anytime",
];

function Field({ label, name, type }: { label: string; name: string; type: string }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input name={name} type={type} required className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:border-brand-blue" />
    </div>
  );
}

function SignupPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Nav />
      <main className="flex-1 grid lg:grid-cols-2 bg-gradient-hero">
        <div className="hidden lg:flex flex-col justify-center px-12 py-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-3 py-1 text-xs w-fit"><Sparkles className="size-3 text-brand-blue" /> Start free today</div>
          <h1 className="mt-5 text-5xl font-extrabold leading-[1.05]">Join 50,000+ learners building the <span className="text-gradient-brand">careers they want</span>.</h1>
          <ul className="mt-8 space-y-3">
            {perks.map((p) => (
              <li key={p} className="flex items-center gap-3 text-foreground/85">
                <span className="size-6 rounded-full bg-gradient-brand grid place-items-center"><Check className="size-3.5 text-white" /></span>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid place-items-center py-16 px-6">
          <div className="w-full max-w-md rounded-3xl bg-white p-8 border border-border/60 shadow-soft">
            <h2 className="text-2xl font-bold">Create your account</h2>
            <p className="mt-1 text-sm text-muted-foreground">Free to start. Upgrade any time.</p>
            <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <Field label="Full name" name="name" type="text" />
              <Field label="Email" name="email" type="email" />
              <Field label="Password" name="password" type="password" />
              <button className="w-full rounded-xl bg-gradient-brand text-white py-3 font-semibold shadow-soft hover:opacity-95 transition">Create account</button>
            </form>
            <div className="mt-6 text-center text-sm text-muted-foreground">
              Already a member? <Link to="/login" className="text-brand-blue font-semibold">Log in</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}