"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Which destinations can I book flights to?",
    a: "We currently focus on international flight bookings for destinations including Sri Lanka, Singapore, Malaysia, Vietnam, Cambodia, Thailand, UAE, Azerbaijan, Kazakhstan, Maldives, and Mauritius.",
  },
  {
    q: "Can you help me find suitable flight options?",
    a: "Yes. Share your destination, preferred travel dates, and passenger details with us. We can help you explore available flight options based on your travel requirements.",
  },
  {
    q: "Can I choose between different airlines and fares?",
    a: "Yes. We can provide available airline and fare options for your selected route, allowing you to choose an option that suits your travel requirements.",
  },
  {
    q: "How can I enquire about a flight booking?",
    a: "Simply use the Enquire Now button on our website or contact our team with your destination and travel dates. Our team will get back to you with the available flight options.",
  },
  {
    q: "Can I request a specific travel date or destination?",
    a: "Yes. You can share your preferred destination and travel dates with us. We will check the available flight options for your requested journey.",
  },
  {
    q: "What information do I need to provide for booking?",
    a: "To check flight options, we generally need your destination, travel date, preferred return date if applicable, number of passengers, and any specific travel requirements.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#f97316] text-sm font-semibold tracking-widest uppercase mb-3">
            Good To Know
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0f2557] font-heading mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-neutral-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed mb-6">
            Find answers to common questions about our international
            flight booking services.
          </p>

          <div className="w-16 h-1 bg-[#f97316] mx-auto rounded-full" />
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-200 ${
                open === i
                  ? "border-[#93c5fd] bg-[#f8faff] shadow-sm"
                  : "border-[#e2e8f0] bg-white"
              }`}
            >
              <button
                type="button"
                onClick={() =>
                  setOpen(open === i ? null : i)
                }
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                aria-expanded={open === i}
              >
                <span className="text-[#0f2557] font-semibold text-sm md:text-base">
                  {faq.q}
                </span>

                <ChevronDown
                  className={`text-[#f97316] shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                  size={20}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  open === i
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-neutral-600 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-neutral-500 text-sm mb-3">
            Need help finding a flight?
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[#f97316] hover:text-[#0f2557] font-semibold text-sm transition-colors"
          >
            Enquire for Flight Booking
          </a>
        </div>

      </div>
    </section>
  );
}