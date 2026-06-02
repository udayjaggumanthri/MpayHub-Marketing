import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Sparkles } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Log in — Lumina Skill" },
      { name: "description", content: "Log in to your Lumina Skill account to continue learning." },
    ],
  }),
  component: LoginPage,
});

function Field({ label, name, type }: { label: string; name: string; type: string }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input name={name} type={type} required className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:border-brand-blue" />
    </div>
  );
}

function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Nav />
      <main className="flex-1 grid place-items-center py-20 bg-gradient-hero">
        <div className="w-full max-w-md mx-6 rounded-3xl bg-white p-8 border border-border/60 shadow-soft">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1 text-xs"><Sparkles className="size-3 text-brand-blue" /> Welcome back</div>
            <h1 className="mt-4 text-3xl font-bold">Log in to <span className="text-gradient-brand">Lumina</span></h1>
            <p className="mt-2 text-sm text-muted-foreground">Continue your learning journey.</p>
          </div>
          <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <Field label="Email" name="email" type="email" />
            <Field label="Password" name="password" type="password" />
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2"><input type="checkbox" className="rounded" /> Remember me</label>
              <a href="#" className="text-brand-blue font-medium">Forgot?</a>
            </div>
            <button className="w-full rounded-xl bg-gradient-brand text-white py-3 font-semibold shadow-soft hover:opacity-95 transition">Log in</button>
          </form>
          <div className="mt-6 text-center text-sm text-muted-foreground">
            New here? <Link to="/signup" className="text-brand-blue font-semibold">Create an account</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}