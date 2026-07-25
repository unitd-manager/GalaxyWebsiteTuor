"use client";

import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 9750792020"],
      description: "Call us 24/7 for immediate assistance",
      action: {
        type: "tel",
        url: "tel:+919750792020"
      }
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: ["+91 9750792020"],
      description: "Chat with us on WhatsApp for quick responses",
      action: {
        type: "whatsapp",
        url: "https://wa.me/919750792020"
      }
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@galaxytourstravels.com"],
      description: "Email us for detailed information"
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["universal 36/22 ,Balaji nagar,2nd street,royapettah,chennai-600014"],
      description: "Visit our office for consultation"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 9AM-8PM", "Sat-Sun: 10AM-6PM"],
      description: "We're here when you need us"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="islamic-gradient bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to begin your spiritual journey? Contact us today and let our experts help you plan the perfect pilgrimage
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-medium border-0">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Send className="w-6 h-6 text-primary" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Your last name" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="service">Service Interest</Label>
                  <select 
                    id="service" 
                    className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select a service</option>
                    <option value="umrah">Umrah Package</option>
                    <option value="hajj">Hajj Package</option>
                    <option value="group">Group Tour</option>
                    <option value="consultation">Consultation</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your pilgrimage plans and any specific requirements..."
                    rows={5}
                  />
                </div>
                
                <Button variant="hero" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our experienced team is ready to assist you with all your pilgrimage needs. 
                Reach out to us through any of the following channels.
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="group hover:shadow-medium transition-all duration-300 border-0 shadow-soft">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full hero-gradient flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-1">{info.title}</h4>
                          <div className="space-y-1 mb-2">
                            {info.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-primary font-medium">
                                {info.action ? (
                                  <a 
                                    href={info.action.url} 
                                    target={info.action.type === "whatsapp" ? "_blank" : "_self"}
                                    rel={info.action.type === "whatsapp" ? "noopener noreferrer" : ""}
                                    className="hover:underline hover:text-primary-dark transition-colors"
                                  >
                                    {detail}
                                  </a>
                                ) : detail}
                              </p>
                            ))}
                          </div>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                          {info.action?.type === "whatsapp" && (
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="mt-2 bg-green-500 hover:bg-green-600 text-white border-0"
                              onClick={() => window.open(info.action.url, "_blank", "noopener,noreferrer")}
                            >
                              <MessageCircle className="w-4 h-4 mr-2" /> Chat Now
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* CTA Card */}
            <Card className="islamic-gradient text-white border-0 shadow-medium">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
                <p className="mb-6 opacity-90">
                  Schedule a free consultation with our pilgrimage experts
                </p>
                <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                  Book Free Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;