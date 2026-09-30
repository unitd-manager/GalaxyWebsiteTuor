"use client";

// ...rest of the file stays exactly the same
import { CheckCircle, Globe, HeartHandshake, ShieldCheck, Headphones } from 'lucide-react';

const values = [
  {
    icon: Globe,
    title: 'Best Fares',
    description:
      'Compare airlines and get the best deals on every route.',
  },
  {
    icon: HeartHandshake,
    title: 'Personal Attention',
    description:
      'We treat every traveller as family, your comfort and preferences are our top priority.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe & Trusted',
    description:
      'Over 20 years of experience and 5000+ satisfied travellers.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description:
      'Always reachable for booking changes and travel assistance.',
  },
];

const highlights = [
  'Best fare guarantee',
  'Transparent, no-hidden-fee pricing',
  'Quick booking & instant e-tickets',
  'Easy reschedule & cancellation support',
  '24/7 customer support',
  'Trusted by 5000+ happy travellers',
];

export default function TouristAbout() {
  return (
    <section id="about" className="py-20 bg-[#f8faff]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#f97316] text-sm font-semibold tracking-widest uppercase mb-3">
            Who We Are
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f2557] font-heading mb-4">
            About Galaxy Tours
          </h2>
          <div className="w-16 h-1 bg-[#f97316] mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 xl:gap-14 items-start">
          {/* Left — text */}
          <div>
            <p className="text-neutral-600 text-lg leading-relaxed mb-6">
              Galaxy Tours &amp; Travels has been helping travellers book
              flights since 2003. Based in Chennai, we specialise in
              international flight tickets with the best fares and hassle-free
              service.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-8">
              Our team of experienced travel professionals handles your flight
              bookings, rescheduling, cancellations, and ticketing, so you can
              travel stress-free.
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white border border-[#e2e8f0] rounded-xl p-5 shadow-sm hover:shadow-md hover:border-[#f97316]/40 transition-all duration-300 group"
              >
                <div className="w-11 h-11 bg-[#0f2557] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#f97316] transition-colors duration-300">
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