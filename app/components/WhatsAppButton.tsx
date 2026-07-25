"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const phoneNumber = "919750792020";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <Button
        onClick={() => window.open(whatsappUrl, "_blank", "noopener,noreferrer")}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        size="icon"
        className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 animate-bounce-slow"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </Button>
      {showTooltip && (
        <span className="absolute -top-10 right-0 bg-black/80 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">
          Chat on WhatsApp
        </span>
      )}
    </div>
  );
};

export default WhatsAppButton;