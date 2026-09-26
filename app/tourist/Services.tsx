"use client";

import { BadgeDollarSign, Globe2, Headphones, Plane } from "lucide-react";

const services = [
  { icon: Plane, label: "Flight Booking" },
  { icon: Globe2, label: "Multiple Airlines" },
  { icon: BadgeDollarSign, label: "Fare Options" },
  { icon: Headphones, label: "Booking Assistance" },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#0f2557] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#f97316]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <span className="inline-block text-[#f97316] text-sm font-semibold tracking-widest uppercase mb-2">
            Our Services
          </span>

          <h3 className="text-3xl md:text-4xl font-bold text-white font-heading">
            Flight Booking Services
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.map(({ icon: Icon, label }, i) => (
            <div
              key={label}
              className={`group flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-8 text-center backdrop-blur-sm transition-all duration-200 hover:border-[#f97316]/40 hover:bg-white/10 ${
                i < services.length - 1 ? "md:border-r" : ""
              }`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f97316] text-white shadow-lg shadow-[#f97316]/20 transition-colors group-hover:bg-white group-hover:text-[#0f2557]">
                <Icon size={22} />
              </div>
              <span className="text-sm font-semibold text-white">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}