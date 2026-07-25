import { Button } from "@/components/ui/button";
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <img 
                src="/lovable-uploads/c94ed2c8-c253-4cef-957c-4557e6dac7e6.png" 
                alt="Galaxy Tours and Travels" 
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-background/80 leading-relaxed">
                Your trusted partner for sacred journeys to the Holy Land. Experience the spiritual transformation with our expert guidance.
              </p>
            </div>
            
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-background hover:text-primary hover:bg-background/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary hover:bg-background/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary hover:bg-background/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary hover:bg-background/10">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Umrah Packages",
                "Hajj Pilgrimage",
                "Group Tours", 
                "VIP Services",
                "Flight Booking",
                "Hotel Reservations"
              ].map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-background/80 hover:text-primary transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                "About Us",
                "Our Team",
                "Testimonials",
                "FAQ",
                "Travel Guide",
                "Contact"
              ].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-background/80 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
         <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-islamic-orange mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80 font-medium">+91 9750 792 020</p>
                  {/* Additional phone number if needed */}
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-islamic-orange mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80 font-medium">info@galaxytourstravels.com</p>
                  {/* Additional email if needed */}
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-islamic-orange mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80 font-medium">Universal 36/22, Balaji Nagar</p>
                  <p className="text-white/80">2nd Street, Royapettah</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <div className="flex items-center gap-2">
              <span>© 2024 Galaxy Tours and Travels. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for spiritual journeys.</span>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;