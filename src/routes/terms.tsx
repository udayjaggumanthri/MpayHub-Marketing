import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Shield, RotateCcw, FileText } from "lucide-react";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — mPayHub" },
      {
        name: "description",
        content: "Review the Terms & Conditions governing your access and use of the mPayHub digital payment platform and APIs.",
      },
      { property: "og:title", content: "Terms of Service — mPayHub" },
      { property: "og:description", content: "Terms and conditions for our B2B fintech services and APIs." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  const legalLinks = [
    { to: "/privacy", label: "Privacy Policy", icon: Shield },
    { to: "/refund", label: "Refund Policy", icon: RotateCcw },
    { to: "/terms", label: "Terms of Service", icon: FileText },
  ];

  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <PageHeader
        eyebrow="Legal & Compliance"
        title="Terms of"
        highlight="Service"
        description="The terms and rules governing the use of mPayHub's B2B payment platform and APIs."
      />

      <section className="py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Sidebar sticky navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-2 bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-border/40">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-3">
                Legal Documents
              </div>
              {legalLinks.map((link) => {
                const Icon = link.icon;
                const isActive = link.to === "/terms";
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? "bg-gradient-brand text-white shadow-soft"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <Icon className={`size-4 ${isActive ? "text-white" : "text-muted-foreground"}`} />
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Policy content */}
          <div className="lg:col-span-3">
            <Reveal className="rounded-2xl bg-white p-6 sm:p-10 border border-border/60 shadow-card">
              <div className="border-b border-border pb-6 mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">Terms &amp; Conditions</h2>
                  <p className="text-sm text-muted-foreground mt-1">mPayHub B2B Fintech Platform</p>
                </div>
                <div className="inline-flex items-center rounded-full bg-brand-blue/10 px-3.5 py-1 text-xs font-semibold text-brand-blue-deep">
                  Effective Date: {currentDate}
                </div>
              </div>

              <div className="space-y-8 text-muted-foreground leading-relaxed text-sm sm:text-base">
                <p>
                  Welcome to <strong className="text-foreground">mPayHub</strong>. These Terms &amp; Conditions govern your access to and use of our digital payment platform, APIs, applications, and financial services.
                </p>
                <p>
                  By registering on, accessing, or using our platform, you agree to comply with these terms, our policies, and all applicable laws in India.
                </p>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="inline-block w-1.5 h-6 rounded bg-brand-blue"></span>
                    Our Services
                  </h3>
                  <p className="mb-3">
                    mPayHub provides secure digital financial and payment infrastructure, including:
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 list-none pl-0">
                    <li className="flex items-center gap-2">
                      <span className="text-brand-blue">✓</span>
                      <span>BBPS Bill Payments &amp; Utilities</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-blue">✓</span>
                      <span>Mobile, DTH &amp; FASTag Recharge</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-blue">✓</span>
                      <span>Aadhaar Enabled Payment System (AEPS)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-blue">✓</span>
                      <span>Domestic Money Transfer (DMT)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-blue">✓</span>
                      <span>UPI &amp; Payment Gateway Solutions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-blue">✓</span>
                      <span>Developer APIs &amp; Merchant Services</span>
                    </li>
                  </ul>
                  <p className="mt-3">
                    We reserve the right to expand, suspend, modify, or retire any services without prior notice.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="inline-block w-1.5 h-6 rounded bg-brand-blue"></span>
                    User Account &amp; Responsibilities
                  </h3>
                  <p className="mb-3">To use the services, you must:</p>
                  <ul className="space-y-2.5 pl-5 list-disc">
                    <li>Provide accurate registration details and maintain updated KYC status.</li>
                    <li>Keep login credentials, passwords, and API secret keys strictly confidential.</li>
                    <li>Use the platform exclusively for lawful commercial and business transactions.</li>
                    <li>Report any suspected account compromise or unauthorized activity immediately.</li>
                  </ul>
                  <p className="mt-3">
                    You are solely responsible for all activities and transactions performed through your account credentials.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="inline-block w-1.5 h-6 rounded bg-brand-blue"></span>
                    Transactions &amp; Fees
                  </h3>
                  <p>
                    All payment transactions processed on mPayHub are subject to banking network availability, NPCI/BBPS approvals, payment gateway routing, and regulatory checkpoints. Confirmation is subject to successful clearing from these institutions.
                  </p>
                  <p className="mt-2">
                    Certain services may carry Convenience Fees, API charges, or transaction processing fees. Any applicable fees will be displayed before confirming the transaction.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="inline-block w-1.5 h-6 rounded bg-brand-blue"></span>
                    Prohibited Activities
                  </h3>
                  <p className="mb-3">Users are strictly prohibited from:</p>
                  <ul className="space-y-2.5 pl-5 list-disc">
                    <li>Attempting unauthorized system access, reverse engineering APIs, or breaching firewalls.</li>
                    <li>Conducting fraudulent transactions, using stolen identities, or money laundering.</li>
                    <li>Violating RBI guidelines, NPCI regulations, or BBPS standard operating procedures.</li>
                    <li>Spreading malware, ransomware, or attempting DDoS attacks on our infrastructure.</li>
                  </ul>
                  <p className="mt-3 font-semibold text-foreground">
                    Violations will result in immediate suspension, terminal contract termination, and legal prosecution.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="inline-block w-1.5 h-6 rounded bg-brand-blue"></span>
                    Uptime &amp; Liability Limits
                  </h3>
                  <p>
                    While we strive for 99.9% uptime, mPayHub does not guarantee uninterrupted service due to routine maintenance, banking partner downtime, telecom service outages, or regulatory restrictions beyond our control.
                  </p>
                  <p className="mt-2">
                    mPayHub shall not be liable for any direct or indirect losses, business interruptions, or transaction failures resulting from banking channel downtime, incorrect user input data, or force majeure events.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="inline-block w-1.5 h-6 rounded bg-brand-blue"></span>
                    Intellectual Property
                  </h3>
                  <p>
                    All text, software, proprietary code, graphics, brand logos, APIs, and documentation remain the exclusive intellectual property of mPayHub. Copying, distributing, or licensing our assets without written consent is strictly prohibited.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="inline-block w-1.5 h-6 rounded bg-brand-blue"></span>
                    Governing Law &amp; Disputes
                  </h3>
                  <p>
                    These Terms of Service shall be governed by the laws of India. Any disputes arising from the use of our services shall be subject to the exclusive jurisdiction of the competent courts where mPayHub is corporate registered.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="inline-block w-1.5 h-6 rounded bg-brand-blue"></span>
                    Contact Information
                  </h3>
                  <p>
                    For queries regarding these Terms &amp; Conditions, please contact our support team at <a href="mailto:hello@mpayhub.in" className="text-brand-blue font-semibold hover:underline">hello@mpayhub.in</a>.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
