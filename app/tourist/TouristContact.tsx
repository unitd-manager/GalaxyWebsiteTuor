"use client";

import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle,
} from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '+91 9444 207 357',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'info@galaxytourstravels.com',
    sub: 'We reply within 24 hours',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: 'United Technologies, 36/22, Balaji Nagar',
    sub: '2nd Street, Royapettah',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+91 9444 207 357',
    sub: 'Quick chat support',
  },
];

export default function TouristContact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travellers: '2',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#0f2557] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f97316]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-5 gap-8 xl:gap-12 items-start">
          {/* Contact info */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <span className="inline-block text-[#f97316] text-sm font-semibold uppercase mb-3">
                Get In Touch
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-4">
                Plan Your Next Trip
              </h2>
              <p className="text-white/65 leading-relaxed max-w-md">
                Tell us where you want to go and we&apos;ll craft a personalised
                quote within 24 hours. No obligation, no hidden fees.
              </p>
              <div className="w-16 h-1 bg-[#f97316] rounded-full mt-5" />
            </div>
            <div className="space-y-3">
              {contactInfo.map(({ icon: Icon, label, value, sub }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 bg-[#f97316] rounded-lg flex items-center justify-center shrink-0">
                    <Icon className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs uppercase tracking-wide mb-1">
                      {label}
                    </div>
                    <div className="text-white font-semibold">{value}</div>
                    {sub && (
                      <div className="text-white/40 text-xs mt-0.5">{sub}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 text-center h-full min-h-[420px] flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-[#f97316] rounded-full flex items-center justify-center mb-5">
                  <CheckCircle className="text-white" size={32} />
                </div>
                <h3 className="text-white text-2xl font-bold font-heading mb-3">
                  Thank You, {form.name || 'Traveller'}!
                </h3>
                <p className="text-white/60 max-w-md mx-auto leading-relaxed">
                  Your enquiry has been received. Our travel expert will reach
                  out to you within 24 hours with a personalised quote for your{' '}
                  {form.destination || 'dream'} trip.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: '',
                      email: '',
                      phone: '',
                      destination: '',
                      travellers: '2',
                      message: '',
                    });
                  }}
                  className="mt-6 text-[#f97316] hover:text-white text-sm font-semibold transition-colors"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl"
              >
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <Field
                    label="Full Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                  <Field
                    label="Phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 98765 43210"
                  />
                  <div>
                    <label className="block text-neutral-700 text-sm font-medium mb-1.5">
                      Destination
                    </label>
                    <select
                      name="destination"
                      value={form.destination}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#f8faff] border border-[#e2e8f0] rounded-lg px-4 py-3 text-sm text-neutral-700 focus:outline-none focus:border-[#3b82f6] focus:ring-2 focus:ring-blue-100 transition-all"
                    >
                      <option value="">Select destination</option>
                      <option>Sri Lanka</option>
                      <option>Singapore</option>
                      <option>Malaysia</option>
                      <option>Vietnam</option>
                      <option>Cambodia</option>
                      <option>Thailand</option>
                      <option>UAE</option>
                      <option>Azerbaijan</option>
                      <option>Kazakhstan</option>
                      <option>Maldives</option>
                      <option>Mauritius</option>
                      {/* <option>Andaman</option> — hidden for now */}
                    </select>
                  </div>
                </div>

                <div className="mb-5">
                  <label className="block text-neutral-700 text-sm font-medium mb-1.5">
                    Number of Travellers
                  </label>
                  <select
                    name="travellers"
                    value={form.travellers}
                    onChange={handleChange}
                    className="w-full bg-[#f8faff] border border-[#e2e8f0] rounded-lg px-4 py-3 text-sm text-neutral-700 focus:outline-none focus:border-[#3b82f6] focus:ring-2 focus:ring-blue-100 transition-all"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5 People</option>
                    <option value="6+">6+ People (Group)</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-neutral-700 text-sm font-medium mb-1.5">
                    Message (optional)
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Tell us about your travel preferences, dates, budget..."
                    className="w-full bg-[#f8faff] border border-[#e2e8f0] rounded-lg px-4 py-3 text-sm text-neutral-700 focus:outline-none focus:border-[#3b82f6] focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea6c0a] text-white font-semibold px-6 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/30"
                >
                  Send Enquiry
                  <Send size={17} />
                </button>
                <p className="text-neutral-400 text-xs text-center mt-4">
                  By submitting, you agree to be contacted about your travel
                  enquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-neutral-700 text-sm font-medium mb-1.5">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full bg-[#f8faff] border border-[#e2e8f0] rounded-lg px-4 py-3 text-sm text-neutral-700 focus:outline-none focus:border-[#3b82f6] focus:ring-2 focus:ring-blue-100 transition-all"
      />
    </div>
  );
}