"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import { Zap, Menu, X, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    "App Development",
    "Web Development",
    "Marketing",
    "AI Integration",
  ];

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Instagram, href: "#" },
  ];

  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    // smooth-scroll for in-page anchors (#id or /#id)
    const hashMatch = href.match(/#(.+)$/);
    if (hashMatch) {
      e.preventDefault();
      const id = hashMatch[1];
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // fallback: try querySelector (in case id contains special chars)
        const qs = document.querySelector(href);
        if (qs && qs instanceof Element) {
          (qs as Element).scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
      setMobileMenuOpen(false);
    } else {
      // non-anchor links: close mobile menu and let default/Link behavior happen
      setMobileMenuOpen(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 bg-yellow-400 rounded-lg flex items-center justify-center shadow-md transform transition-transform group-hover:scale-105">
                <Zap className="w-5 h-5 text-black" />
              </div>
              <span className="text-lg font-extrabold tracking-tight text-yellow-500">
                Victaman
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium text-gray-700 hover:text-yellow-500 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <button
                type="button"
                className="inline-flex items-center px-5 py-2 rounded-lg bg-yellow-500 text-white font-semibold text-sm shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen((s) => !s)}
              aria-label="Toggle menu"
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-800" />
              ) : (
                <Menu className="w-6 h-6 text-gray-800" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden mt-2 transition-max-height duration-300 overflow-hidden ${
              mobileMenuOpen ? "max-h-[600px]" : "max-h-0"
            }`}
          >
            <nav className="pb-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-4 py-2 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-yellow-500 transition"
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center px-4 py-2 rounded-lg bg-yellow-500 text-white font-semibold hover:bg-yellow-600 transition"
                >
                  Get Started
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 bg-yellow-400 rounded-lg flex items-center justify-center shadow-sm">
                  <Zap className="w-5 h-5 text-black" />
                </div>
                <span className="text-lg font-bold text-yellow-500">
                  Victaman
                </span>
              </div>
              <p className="text-sm text-gray-600">
                AI-driven digital solutions for the future.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Services</h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-yellow-500 transition"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    onClick={(e) => handleNavClick(e, "#about")}
                    className="text-sm text-gray-600 hover:text-yellow-500 transition"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-yellow-500 transition"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, "#contact")}
                    className="text-sm text-gray-600 hover:text-yellow-500 transition"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Follow</h3>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-yellow-500 hover:text-white flex items-center justify-center transition"
                    aria-label={`Follow on social ${idx + 1}`}
                  >
                    <Icon className="w-5 h-5 text-gray-700" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-600">© 2025 Victaman. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="text-sm text-gray-600 hover:text-yellow-500 transition">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm text-gray-600 hover:text-yellow-500 transition">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}