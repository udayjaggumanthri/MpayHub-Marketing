import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Shield, RotateCcw, FileText } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — mPayHub" },
      {
        name: "description",
        content: "Learn how mPayHub collects, uses, stores, processes, and safeguards your personal and business information.",
      },
      { property: "og:title", content: "Privacy Policy — mPayHub" },
      { property: "og:description", content: "Our commitment to protecting your privacy." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const legalLinks = [
    { to: "/privacy", label: "Privacy Policy", icon: Shield },
    { to: "/refund", label: "Refund Policy", icon: RotateCcw },
    { to: "/terms", label: "Terms & Conditions", icon: FileText },
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
        title="Privacy"
        highlight="Policy"
        description="Your privacy is extremely important to us. Learn about our commitment to keeping your data secure."
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
                const isActive = link.to === "/privacy";
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
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">Privacy Policy</h2>
                  <p className="text-sm text-muted-foreground mt-1">mPayHub B2B Fintech Platform</p>
                </div>
                <div className="inline-flex items-center rounded-full bg-brand-blue/10 px-3.5 py-1 text-xs font-semibold text-brand-blue-deep">
                  Effective Date: {currentDate}
                </div>
              </div>

              <div className="space-y-8 text-muted-foreground leading-relaxed text-sm sm:text-base">
                <p>
                  At <strong className="text-foreground">mPayHub</strong>, we value your privacy and are committed to protecting the personal information of our customers, retailers, distributors, API partners, and business associates. This Privacy Policy explains how we collect, use, store, process, and safeguard your information when you access or use our website, mobile applications, APIs, and digital financial services.
                </p>
                <p>
                  mPayHub is a trusted <strong className="text-foreground">B2B fintech platform</strong> offering secure digital payment solutions including BBPS Bill Payments, Mobile Recharge, DTH Recharge, FASTag Recharge, AEPS, Domestic Money Transfer (DMT), UPI Payments, Payment Gateway Solutions, Recharge APIs, and Merchant Services.
                </p>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="inline-block w-1.5 h-6 rounded bg-brand-blue"></span>
                    Information We Collect
                  </h3>
                  <p className="mb-4">
                    To provide secure and compliant financial services, we may collect the following details:
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 list-none pl-0">
                    <li className="flex items-start gap-2.5">
                      <span className="text-brand-blue mt-1">✓</span>
                      <span>Full Name &amp; Contact Details</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-brand-blue mt-1">✓</span>
                      <span>Mobile Number &amp; Email Address</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-brand-blue mt-1">✓</span>
                      <span>Business Information &amp; GST Details</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-brand-blue mt-1">✓</span>
                      <span>KYC Documents &amp; Bank Account Details</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-brand-blue mt-1">✓</span>
                      <span>PAN &amp; Aadhaar (regulatory compliance)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-brand-blue mt-1">✓</span>
                      <span>Device Info, IP Address &amp; OS details</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-brand-blue mt-1">✓</span>
                      <span>Transaction History &amp; API Usage Logs</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="inline-block w-1.5 h-6 rounded bg-brand-blue"></span>
                    How We Use Your Information
                  </h3>
                  <p className="mb-3">Your information is used strictly to:</p>
                  <ul className="space-y-2.5 pl-5 list-disc">
                    <li>Create, verify (KYC), and manage your partner/business account.</li>
                    <li>Process recharge, bill payment, AEPS, DMT, and UPI transactions successfully.</li>
                    <li>Prevent fraudulent transactions and secure the platform against unauthorized activities.</li>
                    <li>Analyze and improve our API capabilities and platform uptime/performance.</li>
                    <li>Provide responsive customer support and resolve transaction grievances.</li>
                    <li>Meet RBI, NPCI, BBPS, and applicable legal/compliance requirements.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="inline-block w-1.5 h-6 rounded bg-brand-blue"></span>
                    Data Security
                  </h3>
                  <p className="mb-3">
                    mPayHub follows strict industry-standard security practices to protect all user data, including:
                  </p>
                  <ul className="space-y-2.5 pl-5 list-disc">
                    <li><strong className="text-foreground">SSL/TLS Encryption:</strong> All data transmitted to and from our APIs is encrypted using bank-grade protocols.</li>
                    <li><strong className="text-foreground">Access Controls:</strong> Role-based access ensures only authorized staff handles compliance records.</li>
                    <li><strong className="text-foreground">Security Audits:</strong> Continuous monitoring and firewall checks protect database boundaries.</li>
                    <li><strong className="text-foreground">Fraud Detection:</strong> Real-time algorithms to intercept suspicious transactions.</li>
                  </ul>
                  <p className="mt-3 text-sm italic">
                    While we implement advanced security measures, no online transaction system can guarantee absolute, 100% security.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="inline-block w-1.5 h-6 rounded bg-brand-blue"></span>
                    Sharing of Information
                  </h3>
                  <p>
                    We value your trust and <strong className="text-foreground">never sell or rent your personal information</strong> to third parties for marketing purposes. Data is only shared with:
                  </p>
                  <ul className="space-y-2.5 pl-5 list-disc mt-3">
                    <li>Banking Partners and Payment Gateways to complete transaction clearing.</li>
                    <li>NPCI Authorized Partners and BBPS Network Participants for routing utility payments.</li>
                    <li>Government, Law Enforcement, or Regulatory Authorities where legally mandated.</li>
                    <li>Trusted technology providers assisting in secure platform maintenance.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="inline-block w-1.5 h-6 rounded bg-brand-blue"></span>
                    Cookies
                  </h3>
                  <p>
                    Our website uses cookies to remember your preferences, secure session handling, analyze traffic, and enhance your overall portal experience. You may configure your browser settings to reject cookies, though some features of our dashboard may cease to function correctly.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="inline-block w-1.5 h-6 rounded bg-brand-blue"></span>
                    Data Retention &amp; User Rights
                  </h3>
                  <p className="mb-3">
                    We retain customer and transaction logs only as long as required by financial regulators and applicable laws in India.
                  </p>
                  <p>
                    Depending on regulations, you may request to access your information, correct outdated details, request account closure, or delete eligible personal data. We comply with all legitimate requests promptly.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="inline-block w-1.5 h-6 rounded bg-brand-blue"></span>
                    Contact Us
                  </h3>
                  <p>
                    If you have questions regarding this Privacy Policy or data processing, you can contact our security and compliance officer through the official mPayHub website contact section or via email at <a href="mailto:hello@mpayhub.in" className="text-brand-blue font-semibold hover:underline">hello@mpayhub.in</a>.
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
