"use client";

// ...rest of the file stays exactly the same
import { ArrowRight } from 'lucide-react';

const destinations = [
  { id: 'srilanka', name: 'Sri Lanka', emoji: '🐘' },
  { id: 'singapore', name: 'Singapore', emoji: '🌆' },
  { id: 'malaysia', name: 'Malaysia', emoji: '🕌' },
  { id: 'vietnam', name: 'Vietnam', emoji: '🚣' },
  { id: 'cambodia', name: 'Cambodia', emoji: '🛕' },
  { id: 'thailand', name: 'Thailand', emoji: '🏝️' },
  { id: 'uae', name: 'UAE', emoji: '🏙️' },
  { id: 'azerbaijan', name: 'Azerbaijan', emoji: '🔥' },
  { id: 'kazakhstan', name: 'Kazakhstan', emoji: '🏔️' },
  { id: 'maldives', name: 'Maldives', emoji: '🐠' },
  { id: 'mauritius', name: 'Mauritius', emoji: '🌊' },
  { id: 'andaman', name: 'Andaman', emoji: '🏖️' },
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-20 bg-[#0f2557] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#f97316]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#f97316] text-sm font-semibold tracking-widest uppercase mb-3">
            Where We Go
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-heading mb-4">
            Our Destinations
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
            12 handpicked countries across Asia, the Middle East, and the
            Indian Ocean — each with its own unique story to tell.
          </p>
          <div className="w-16 h-1 bg-[#f97316] mx-auto rounded-full mt-6" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {destinations.map((d) => (
            <a
              key={d.name}
              href={`#pkg-${d.id}`}
              onClick={(e) => {
                e.preventDefault();
                // Let the Packages section clear any active filter and
                // scroll to this exact destination's card.
                window.dispatchEvent(
                  new CustomEvent('galaxy:scrollToPackage', { detail: d.id })
                );
                window.history.pushState(null, '', `#pkg-${d.id}`);
              }}
              className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl px-4 py-4 transition-all duration-200 hover:border-[#f97316]/40"
            >
              <span className="text-2xl">{d.emoji}</span>
              <div className="flex-1">
                <div className="text-white font-semibold text-sm group-hover:text-[#f97316] transition-colors">
                  {d.name}
                </div>
              </div>
              <ArrowRight
                className="text-white/30 group-hover:text-[#f97316] group-hover:translate-x-0.5 transition-all"
                size={14}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}