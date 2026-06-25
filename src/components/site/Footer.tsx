import { Link } from "@tanstack/react-router";
import logo from "@/assets/mpayhub-logo.png";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 sm:py-20 border-t border-border/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
        
        {/* Company Info */}
        <div className="lg:col-span-2 space-y-6">
          <Link
            to="/"
            className="inline-flex items-center bg-white rounded-xl p-2.5 shadow-soft"
            aria-label="mPayHub home"
          >
            <img src={logo} alt="mPayHub" className="h-10 sm:h-12 w-auto object-contain" />
          </Link>
          <p className="text-sm text-background/70 leading-relaxed max-w-sm">
            mPayHub is a trusted B2B fintech platform providing secure digital payment infrastructure. We offer BBPS bill payments, mobile and DTH recharges, AEPS, money transfers, and APIs for retail networks and enterprises across India.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-white tracking-wide mb-5">Quick Links</h3>
          <ul className="space-y-3.5 text-sm text-background/70">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link to="/pricing" className="hover:text-white transition-colors">Partners</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-white tracking-wide mb-5">Services</h3>
          <ul className="space-y-4 text-sm text-background/70">
            <li>
              <Link to="/services" className="group block">
                <span className="block font-medium text-white group-hover:text-white transition-colors">Recharge Services</span>
                <span className="block text-xs mt-0.5 text-background/50">Mobile, DTH &amp; FASTag</span>
              </Link>
            </li>
            <li>
              <Link to="/services" className="group block">
                <span className="block font-medium text-white group-hover:text-white transition-colors">Bill Payments</span>
                <span className="block text-xs mt-0.5 text-background/50">Electricity, Gas, Water</span>
              </Link>
            </li>
            <li>
              <Link to="/services" className="group block">
                <span className="block font-medium text-white group-hover:text-white transition-colors">Banking Services</span>
                <span className="block text-xs mt-0.5 text-background/50">AEPS, Money Transfer</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold text-white tracking-wide mb-5">Legal</h3>
          <ul className="space-y-3.5 text-sm text-background/70">
            <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link to="/refund" className="hover:text-white transition-colors">Refund Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
          </ul>
        </div>

      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-12 sm:mt-16 pt-8 border-t border-background/10 text-xs text-background/50 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>© 2026 mPayHub. All rights reserved.</div>
        <div className="flex gap-4">
          <Link to="/privacy" className="hover:text-white transition-colors text-background/60 hover:text-white">Privacy Policy</Link>
          <span>•</span>
          <Link to="/terms" className="hover:text-white transition-colors text-background/60 hover:text-white">Terms of Service</Link>
          <span>•</span>
          <Link to="/refund" className="hover:text-white transition-colors text-background/60 hover:text-white">Refund Policy</Link>
        </div>
      </div>
    </footer>
  );
}
