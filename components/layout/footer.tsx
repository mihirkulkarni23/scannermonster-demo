// File: ./components/layout/footer.tsx
import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Twitter, Youtube, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-heading text-xl font-bold mb-1">Stay Updated</h3>
              <p className="text-gray-400 text-sm">
                Get the latest deals and scanner tips delivered to your inbox.
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-primary"
              />
              <Button className="bg-primary text-black hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Scanner Master</h4>
            <p className="text-gray-400 text-sm mb-4">
              America&apos;s oldest and largest scanner-only dealer. Serving scanner enthusiasts since 1978.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/collections/scanners"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  All Scanners
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/portable"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Portable Scanners
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/base-mobile"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Base/Mobile Scanners
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/accessories"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Accessories
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/programming"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Programming Services
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/sale"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  On Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Help</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/help/faq"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/help/shipping"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link
                  href="/help/returns"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Returns &amp; Exchanges
                </Link>
              </li>
              <li>
                <Link
                  href="/help/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/learning-center"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Learning Center
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/buying-guide"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Buying Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium text-white">1-800-SCANNER</p>
                  <p className="text-gray-400">Mon-Thu 10am-3pm EST</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href="mailto:sales@scannermaster.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  sales@scannermaster.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-400">
                  215 Hopping Brook Road
                  <br />
                  STE B, Holliston, MA 01746
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>&copy; 2026 Scanner Master Corporation. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <div className="flex items-center gap-2">
                <span className="text-xs">We Accept:</span>
                <div className="flex gap-1">
                  {/* Add payment icons here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

