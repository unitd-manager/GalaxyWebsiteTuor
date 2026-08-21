"use client";

// ...rest of the file stays exactly the same
import { ArrowRight, MapPin, Star, Users, Award } from 'lucide-react';

const stats = [
  { icon: Users, value: '5000+', label: 'Happy Travellers' },
  { icon: MapPin, value: '12+', label: 'Destinations' },
  { icon: Award, value: '10+', label: 'Years Experience' },
  { icon: Star, value: '100%', label: 'Satisfaction' },
];

export default function TouristHero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/8828417/pexels-photo-8828417.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920)',
          backgroundPosition: 'center 30%',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f2557]/95 via-[#0f2557]/80 to-[#0f2557]/40" />

      {/* Decorative circles */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#f97316]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-32 pb-16 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-[#f97316] rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">
              Explore the World with Galaxy Tours
            </span>
          </div>

          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-6">
            Your Dream
            <br />
            <span className="text-[#f97316]">Destination</span>
            <br />
            Awaits You
          </h1>

          <p className="text-white/75 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            From tropical paradises to ancient wonders — discover handcrafted
            tour packages across Asia, the Middle East &amp; island escapes,
            all expertly planned for an unforgettable journey.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <a
              href="#packages"
              className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea6c0a] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-2xl hover:shadow-orange-500/30 hover:-translate-y-0.5"
            >
              Explore Packages
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200"
            >
              Get Custom Quote
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-4 text-center hover:bg-white/15 transition-colors"
              >
                <Icon className="text-[#f97316] mx-auto mb-1" size={22} />
                <div className="text-white font-bold text-2xl font-heading">
                  {value}
                </div>
                <div className="text-white/60 text-xs mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/40 text-xs">Scroll to explore</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </div>
    </section>
  );
}