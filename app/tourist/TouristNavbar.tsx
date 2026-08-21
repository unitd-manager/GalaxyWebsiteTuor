"use client";

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Packages', href: '#packages' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function TouristNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-xl py-2' : 'bg-white/95 backdrop-blur-sm py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/lovable-uploads/galaxy-logo.png"
            alt="Galaxy Tours"
            className="h-20 w-auto object-contain"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#0f2557] hover:text-[#f97316] text-sm font-medium px-3 py-2 rounded transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+917507832020"
            className="flex items-center gap-1.5 text-[#0f2557]/70 text-sm hover:text-[#0f2557] transition-colors"
          >
            <Phone size={14} />
            +91 75078 32020
          </a>
          <a
            href="#packages"
            className="bg-[#f97316] hover:bg-[#ea6c0a] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg"
          >
            View Packages
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-[#0f2557] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-[#0f2557]/10 px-4 pb-4 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-[#0f2557] hover:text-[#f97316] py-2.5 text-sm font-medium border-b border-[#0f2557]/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#packages"
            onClick={() => setOpen(false)}
            className="mt-4 block bg-[#f97316] text-white text-center font-semibold py-3 rounded-lg"
          >
            View Packages
          </a>
        </div>
      )}
    </header>
  );
}