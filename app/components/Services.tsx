"use client";

import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MapPin, Calendar, Users, Shield, Clock, Plane } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Umrah Packages",
      id: "umrah-packages",
      description: "Exclusive Umrah packages with premium accommodations",
      icon: MapPin,
      features: ["5-Star Hotels Near Haram", "VIP Transportation", "Guided Ziyarat Tours", "24/7 Support"],
      price: "Starting from $2,999",
      gradient: "islamic-gradient",
      buttonText: "Enquire Now"
    },
    {
      title: "Hajj Packages",
      id: "hajj-packages",
      description: "Complete Hajj packages with expert guidance",
      icon: Users,
      features: ["All Rituals Covered", "Expert Scholars", "Medical Support", "Comfortable Accommodations"],
      price: "Starting from $5,999",
      gradient: "card-gradient",
      buttonText: "Enquire Now"
    },
    {
      title: "Group Tours",
      description: "Special packages for groups and families",
      icon: Users,
      features: ["Custom Itineraries", "Group Discounts", "Dedicated Guide", "Flexible Dates"],
      price: "Custom Pricing",
      gradient: "hero-gradient",
      buttonText: "Enquire Now"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed tour operator with comprehensive insurance coverage"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance throughout your spiritual journey"
    },
    {
      icon: Plane,
      title: "Flight Arrangements",
      description: "Convenient flight bookings and airport transfer services"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="islamic-gradient bg-clip-text text-transparent">Sacred Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose from our carefully crafted packages designed to provide you with a meaningful and comfortable pilgrimage experience
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                id={service.id || ''}
                className="group hover:shadow-strong transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-soft overflow-hidden"
              >
                <div className={`h-2 ${service.gradient}`}></div>
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${service.gradient} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t pt-6 space-y-4">
                    <div className="text-center">
                      <span className="text-2xl font-bold text-primary">{service.price}</span>
                    </div>
                    <Button className="w-full" variant={index === 0 ? "default" : index === 1 ? "islamic" : "secondary"}>
                      {service.buttonText || "Get Quote"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;