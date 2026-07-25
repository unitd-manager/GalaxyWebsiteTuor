import React from "react";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageType: string;
}

export default function EnquiryModal({ isOpen, onClose, packageType }: EnquiryModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md p-6">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-4 text-center">Enquiry Form</h2>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 border rounded-md"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 border rounded-md"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-2 border rounded-md h-28"
          />
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
