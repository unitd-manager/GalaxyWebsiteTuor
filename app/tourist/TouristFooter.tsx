"use client";

// ...rest of the file stays exactly the same
import { Phone, Mail, MapPin, Share2, Smartphone, Plane, ArrowRight } from 'lucide-react';

const footerLinks = {
  Destinations: [
    'Sri Lanka',
    'Singapore',
    'Malaysia',
    'Vietnam',
    'Cambodia',
    'Thailand',
  ],
  More: [
    'UAE',
    'Azerbaijan',
    'Kazakhstan',
    'Maldives',
    'Mauritius',
    'Andaman',
  ],
  Company: ['About Us', 'Packages', 'Contact', 'FAQ'],
};

export default function TouristFooter() {
  return (
    <footer className="bg-[#0a1738] text-white">
      {/* Top CTA strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Plane className="text-[#f97316]" size={28} />
            <div>
              <h3 className="text-lg font-bold font-heading">
                Ready for your next adventure?
              </h3>
              <p className="text-white/50 text-sm">
                Get a free customised quote today.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea6c0a] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200"
          >
            Get Started
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <div className="inline-flex items-center justify-center bg-gradient-to-br from-white to-[#dbeafe] rounded-2xl px-4 py-3 shadow-lg">
                <img
                  src="/lovable-uploads/galaxy-logo.png"
                  alt="Galaxy Tours"
                  className="h-24 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Your trusted travel partner for unforgettable international
              journeys. Crafting memories since 2003.
            </p>
            <div className="flex justify-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 bg-white/10 hover:bg-[#f97316] rounded-lg flex items-center justify-center transition-colors"
              >
                <Share2 size={16} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 bg-white/10 hover:bg-[#f97316] rounded-lg flex items-center justify-center transition-colors"
              >
                <Smartphone size={16} />
              </a>
              <a
                href="tel:+917507832020"
                aria-label="Phone"
                className="w-9 h-9 bg-white/10 hover:bg-[#f97316] rounded-lg flex items-center justify-center transition-colors"
              >
                <Phone size={16} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-4 font-heading">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#packages"
                      className="text-white/50 hover:text-[#f97316] text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact row */}
        <div className="grid sm:grid-cols-3 gap-4 mt-12 pt-8 border-t border-white/10">
          <div className="flex items-center gap-2.5 text-white/60 text-sm">
            <Phone className="text-[#f97316]" size={16} />
            +91 75078 32020
          </div>
          <div className="flex items-center gap-2.5 text-white/60 text-sm">
            <Mail className="text-[#f97316]" size={16} />
            info@galaxytours.com
          </div>
          <div className="flex items-center gap-2.5 text-white/60 text-sm">
            <MapPin className="text-[#f97316]" size={16} />
            Chennai, Tamil Nadu, India
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Galaxy Tours &amp; Travels. All rights
            reserved.
          </p>
          <p className="text-white/40 text-xs">
            Designed with passion for travellers.
          </p>
        </div>
      </div>
    </footer>
  );
}