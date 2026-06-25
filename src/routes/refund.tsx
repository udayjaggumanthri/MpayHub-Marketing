import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Shield, RotateCcw, FileText } from "lucide-react";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { title: "Refund Policy — mPayHub" },
      {
        name: "description",
        content: "Read our terms for failed transactions, refund eligibility, and reversal timelines at mPayHub.",
      },
      { property: "og:title", content: "Refund Policy — mPayHub" },
      { property: "og:description", content: "Our clear, transparent policies for failed transactions and reversals." },
    ],
  }),
  component: RefundPage,
});

function RefundPage() {
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
        title="Refund"
        highlight="Policy"
        description="Transparent guidelines on transaction processing, failed payments, and refund cycles."
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
                const isActive = link.to === "/refund";
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
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">Refund Policy</h2>
                  <p className="text-sm text-muted-foreground mt-1">mPayHub B2B Fintech Platform</p>
                </div>
                <div className="inline-flex items-center rounded-full bg-brand-blue/10 px-3.5 py-1 text-xs font-semibold text-brand-blue-deep">
                  Effective Date: {currentDate}
                </div>
              </div>

              <div className="space-y-8 text-muted-foreground leading-relaxed text-sm sm:text-base">
                <p>
                  At <strong className="text-foreground">mPayHub</strong>, we strive to provide fast, secure, and reliable digital payment services. This Refund Policy explains how refunds are processed for transactions made through our platform.
                </p>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="inline-block w-1.5 h-6 rounded bg-brand-blue"></span>
                    Transaction Processing
                  </h3>
                  <p>
                    Most services including Mobile Recharge, DTH Recharge, BBPS Bill Payments, FASTag Recharge, AEPS, Domestic Money Transfer, and UPI Payments are processed in real-time through banks, payment gateways, and authorized service providers.
                  </p>
                  <p className="mt-2 font-medium text-foreground">
                    Once a transaction is successfully completed, it is generally considered final and cannot be reversed or cancelled.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="inline-block w-1.5 h-6 rounded bg-brand-blue"></span>
                    Failed Transactions
                  </h3>
                  <p>
                    If a transaction fails but the payment amount has been debited from your bank account or wallet:
                  </p>
                  <ul className="space-y-2.5 pl-5 list-disc mt-3">
                    <li>The amount is usually reversed automatically by the payment gateway or your bank.</li>
                    <li>Processing time depends on the banking channels and payment partner.</li>
                    <li>Typical refund timelines range between <strong className="text-foreground">3–7 business days</strong>, though some banks may take up to 10 working days.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="inline-block w-1.5 h-6 rounded bg-brand-blue"></span>
                    Refund Eligibility
                  </h3>
                  <p className="mb-3">Refunds may be considered only when:</p>
                  <ul className="space-y-2 pl-5 list-decimal">
                    <li>The payment was successfully debited but the downstream service operator failed to fulfill the transaction.</li>
                    <li>A duplicate charge occurred due to an verified technical glitch on our platform.</li>
                    <li>A verified system error prevented successful transaction completion.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="inline-block w-1.5 h-6 rounded bg-brand-blue"></span>
                    Non-Refundable Transactions
                  </h3>
                  <p className="mb-3">Refunds will generally not be provided for:</p>
                  <ul className="space-y-2.5 pl-5 list-disc">
                    <li>Successfully completed transactions (delivered to the operator/customer).</li>
                    <li>Incorrect mobile numbers, DTH IDs, or account numbers entered by the user.</li>
                    <li>Wrong operator or circle selection during recharge/bill payment.</li>
                    <li>Incorrect bill amounts or late fees processed by the customer.</li>
                    <li>Services already successfully delivered by the third-party provider.</li>
                  </ul>
                  <p className="mt-3 font-semibold text-foreground">
                    Users are solely responsible for verifying transaction details before submitting payments.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="inline-block w-1.5 h-6 rounded bg-brand-blue"></span>
                    Refund Process
                  </h3>
                  <p className="mb-3">
                    To request assistance or report a failed transaction that was not auto-reversed, please contact our support team with:
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 list-none pl-0 mb-4">
                    <li className="flex items-center gap-2">
                      <span className="text-brand-blue">✓</span>
                      <span>Transaction ID / Ref Number</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-blue">✓</span>
                      <span>Registered Mobile Number</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-blue">✓</span>
                      <span>Transaction Date &amp; Time</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-blue">✓</span>
                      <span>Payment Method &amp; Amount</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-blue">✓</span>
                      <span>Screenshot of payment receipt</span>
                    </li>
                  </ul>
                  <p>
                    Our support team will coordinate with the respective payment partner or bank for quick settlement. Approved refunds will be credited back to the original payment source, linked bank account, or platform wallet (where applicable).
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="inline-block w-1.5 h-6 rounded bg-brand-blue"></span>
                    Fraud Prevention &amp; Policy Updates
                  </h3>
                  <p className="mb-3">
                    mPayHub reserves the right to reject refund requests involving suspected fraud, misuse, duplicate claims, policy violations, or transactions that do not meet the core refund eligibility criteria.
                  </p>
                  <p>
                    This Refund Policy may be revised from time to time to comply with RBI, NPCI, regulatory changes, banking guidelines, or operational improvements.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="inline-block w-1.5 h-6 rounded bg-brand-blue"></span>
                    Contact Us
                  </h3>
                  <p>
                    For refund-related assistance, please contact the official mPayHub customer support team with complete transaction details at <a href="mailto:hello@mpayhub.in" className="text-brand-blue font-semibold hover:underline">hello@mpayhub.in</a>.
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
