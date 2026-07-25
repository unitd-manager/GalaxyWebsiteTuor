"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Phone, Mail, Star } from "lucide-react";
import Image from "next/image";
import heroImage from "../../public/kaaba-hero.jpg";
import EnquiryModal from "./EnquiryModal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");

  const openEnquiryModal = (pkg = "") => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const closeEnquiryModal = () => {
    setIsModalOpen(false);
    setSelectedPackage("");
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Kaaba Hero Image"
          fill
          priority
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>
      
      {/* Logo */}
      <div className="absolute top-8 left-8 z-20">
        <img 
          src="/lovable-uploads/galaxy-logo.png" 
          alt="Galaxy Tours and Travels" 
          className="h-16 w-auto animate-float"
        />
      </div>

      {/* Contact Info */}
      <div className="absolute top-8 right-8 z-20 text-white text-sm space-y-2">
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <span>+91 9750792020</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          <span>info@galaxytourstravels.com</span>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Journey to the
<span className="block islamic-gradient bg-clip-text text-transparent">
              Holy Land
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Experience the spiritual journey of a lifetime with our premium Umrah and Hajj packages
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-accent text-accent" />
              <span>Licensed Tour Operator</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-accent text-accent" />
              <span>20+ Years Experience</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-accent text-accent" />
              <span>5000+ Happy Pilgrims</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => document.getElementById('umrah-packages')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Umrah Package
            </Button>
            <Button 
              variant="cta" 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => document.getElementById('hajj-packages')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Hajj Package
            </Button>
          </div>
          
          <div className="text-center mt-4">
            <button 
              onClick={() => openEnquiryModal()}
              className="text-white/80 hover:text-white text-sm underline underline-offset-4 transition-colors"
            >
              or send us an enquiry
            </button>
          </div>
          
          <EnquiryModal 
            isOpen={isModalOpen} 
            onClose={closeEnquiryModal} 
            packageType={selectedPackage} 
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center text-white/70 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;