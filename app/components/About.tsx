"use client";

import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Award, Heart, Globe, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import islamicPattern from "../../public/islamic-pattern.jpg";

const About = () => {
  const stats = [
    { number: "10+", label: "Years of Experience", icon: Award },
    { number: "5000+", label: "Happy Pilgrims", icon: Heart },
    { number: "50+", label: "Countries Served", icon: Globe },
    { number: "100%", label: "Success Rate", icon: CheckCircle }
  ];

  const values = [
    {
      title: "Spiritual Excellence",
      description: "We ensure every aspect of your journey enhances your spiritual experience"
    },
    {
      title: "Premium Comfort",
      description: "Luxury accommodations and transportation for a comfortable pilgrimage"
    },
    {
      title: "Expert Guidance",
      description: "Our experienced guides provide knowledge and support throughout your journey"
    },
    {
      title: "Trusted Service",
      description: "Two decades of trusted service with thousands of satisfied pilgrims"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: `url(${islamicPattern})` }}
      ></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="islamic-gradient bg-clip-text text-transparent">Galaxy Tours</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For over two decades, we have been privileged to guide thousands of pilgrims on their sacred journey to the Holy Land
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="text-center group hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-soft">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full hero-gradient flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6">Your Trusted Partner in Sacred Journeys</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Galaxy Tours and Travels has been serving the Muslim community with dedication and excellence since 2003. 
                We understand that Umrah and Hajj are not just trips, but transformative spiritual experiences that require 
                careful planning, respect, and attention to detail.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of experienced professionals works tirelessly to ensure that every aspect of your pilgrimage 
                is seamless, allowing you to focus entirely on your spiritual journey and connection with Allah.
              </p>
            </div>
            
            <div className="flex justify-center">
              <Button asChild variant="hero" size="lg">
                <Link href="/about">
                  Learn More About Us
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Values */}
          <div className="space-y-6 w-full">
            <div className="text-center w-full mb-8">
              <h3 className="text-3xl md:text-4xl font-bold">Our Core Values</h3>
            </div>
            {values.map((value, index) => (
              <div key={index} className="flex gap-4 p-6 rounded-lg card-gradient shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="w-3 h-3 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;