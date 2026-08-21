"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Are flights included in the package price?',
    a: 'Yes, all our packages include return economy flights from your departure city unless stated otherwise. We can also arrange upgrades to business class on request.',
  },
  {
    q: 'Can I customise a package to fit my budget?',
    a: 'Absolutely. Every itinerary is flexible. You can adjust hotel categories, add or remove activities, change duration, or upgrade room types. Tell us your budget and we will tailor accordingly.',
  },
  {
    q: 'Do you assist with visa applications?',
    a: 'Yes, we provide complete visa assistance including documentation guidance, application support, and appointment scheduling for all the destinations we offer.',
  },
  {
    q: 'What is the booking and cancellation policy?',
    a: 'A 25% advance confirms your booking, with the balance due 15 days before departure. Cancellation charges vary by destination and how close to departure you cancel — full details are shared at the time of booking.',
  },
  {
    q: 'Are these group tours or private tours?',
    a: 'We offer both. You can join a fixed-departure group tour for a more social experience, or book a fully private package tailored just for your family or friends.',
  },
  {
    q: 'Is travel insurance included?',
    a: 'Travel insurance is not included by default but we strongly recommend it. We can add comprehensive travel insurance to any package at a nominal cost.',
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
          <div className="w-16 h-1 bg-[#f97316] mx-auto rounded-full" />
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-200 ${
                open === i
                  ? 'border-[#93c5fd] bg-[#f8faff] shadow-sm'
                  : 'border-[#e2e8f0] bg-white'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className="text-[#0f2557] font-semibold text-sm md:text-base">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`text-[#f97316] shrink-0 transition-transform duration-200 ${
                    open === i ? 'rotate-180' : ''
                  }`}
                  size={20}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
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
            Still have questions?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[#f97316] hover:text-[#0f2557] font-semibold text-sm transition-colors"
          >
            Contact our team
          </a>
        </div>
      </div>
    </section>
  );
}