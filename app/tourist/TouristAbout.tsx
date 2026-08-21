"use client";

// ...rest of the file stays exactly the same
import { CheckCircle, Globe, HeartHandshake, ShieldCheck, Headphones } from 'lucide-react';

const values = [
  {
    icon: Globe,
    title: 'Curated Experiences',
    description:
      'Every itinerary is crafted by destination experts to give you authentic, memorable moments.',
  },
  {
    icon: HeartHandshake,
    title: 'Personal Attention',
    description:
      'We treat every traveller as family — your comfort and preferences are our top priority.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe & Trusted',
    description:
      'Licensed operator with 10+ years of experience and thousands of satisfied guests.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description:
      'From booking to return, our team is always reachable for any assistance you need.',
  },
];

const highlights = [
  'IATA & licensed tour operator',
  'Expert local guides at every destination',
  'Flexible group & private packages',
  'Best price guarantee',
  'Transparent, no-hidden-fee pricing',
  'Seamless visa & documentation support',
];

export default function TouristAbout() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#f97316] text-sm font-semibold tracking-widest uppercase mb-3">
            Who We Are
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f2557] font-heading mb-4">
            About Galaxy Tours
          </h2>
          <div className="w-16 h-1 bg-[#f97316] mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <p className="text-neutral-600 text-lg leading-relaxed mb-6">
              Galaxy Tours &amp; Travels has been curating extraordinary travel
              experiences since 2003. Based in Chennai, we specialise in
              premium international packages across Asia, the Middle East, and
              iconic island destinations.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-8">
              Our team of seasoned travel professionals manages every detail —
              flights, accommodation, transfers, sightseeing, and more — so you
              can focus entirely on soaking in the beauty of the world.
            </p>

            {/* Highlights checklist */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle
                    className="text-[#f97316] shrink-0 mt-0.5"
                    size={18}
                  />
                  <span className="text-neutral-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — value cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-[#f8faff] border border-[#dbeafe] rounded-2xl p-6 hover:shadow-lg hover:border-[#93c5fd] transition-all duration-300 group"
              >
                <div className="w-11 h-11 bg-[#0f2557] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#f97316] transition-colors duration-300">
                  <Icon className="text-white" size={20} />
                </div>
                <h3 className="text-[#0f2557] font-bold text-base font-heading mb-2">
                  {title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}