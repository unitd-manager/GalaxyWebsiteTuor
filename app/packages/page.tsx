import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { MapPin, Calendar, Users, Star, Clock, Plane, Hotel, Utensils, Bus } from "lucide-react";

export const metadata: Metadata = {
  title: "Packages - Islamic Travel Hub",
  description: "Explore our premium Hajj and Umrah packages for a blessed spiritual journey",
};

const PackagesPage = () => {
  const umrahPackages = [
    {
      title: "Economy Umrah",
      duration: "10 Days",
      accommodation: "3-Star Hotels",
      distance: "500m from Haram",
      meals: "Breakfast",
      transport: "Standard",
      price: "$1,999",
      features: ["Visa Processing", "Airport Transfers", "Guided Tours", "Basic Support"],
      popular: false,
      gradient: "bg-gradient-to-r from-blue-500 to-blue-700"
    },
    {
      title: "Premium Umrah",
      duration: "14 Days",
      accommodation: "4-Star Hotels",
      distance: "300m from Haram",
      meals: "Breakfast & Dinner",
      transport: "Premium",
      price: "$2,999",
      features: ["Express Visa", "VIP Airport Transfers", "Guided Tours", "24/7 Support", "Ziyarat Tours"],
      popular: true,
      gradient: "hero-gradient"
    },
    {
      title: "VIP Umrah",
      duration: "15 Days",
      accommodation: "5-Star Hotels",
      distance: "100m from Haram",
      meals: "All Inclusive",
      transport: "Luxury",
      price: "$4,999",
      features: ["Express Visa", "Luxury Transportation", "Private Guide", "24/7 Concierge", "Ziyarat Tours", "Exclusive Access"],
      popular: false,
      gradient: "islamic-gradient"
    },
  ];

  const hajjPackages = [
    {
      title: "Standard Hajj",
      duration: "21 Days",
      accommodation: "Shared Tents & 3-Star Hotels",
      distance: "Standard Locations",
      meals: "Three Meals Daily",
      transport: "Standard",
      price: "$6,999",
      features: ["Visa Processing", "Airport Transfers", "Guided Rituals", "Group Support"],
      popular: false,
      gradient: "bg-gradient-to-r from-blue-500 to-blue-700"
    },
    {
      title: "Premium Hajj",
      duration: "25 Days",
      accommodation: "Upgraded Tents & 4-Star Hotels",
      distance: "Premium Locations",
      meals: "Premium Catering",
      transport: "Premium",
      price: "$9,999",
      features: ["Express Visa", "VIP Airport Transfers", "Expert Guides", "24/7 Support", "Ziyarat Tours"],
      popular: true,
      gradient: "hero-gradient"
    },
    {
      title: "VIP Hajj",
      duration: "28 Days",
      accommodation: "VIP Tents & 5-Star Hotels",
      distance: "Prime Locations",
      meals: "Luxury Catering",
      transport: "Luxury",
      price: "$14,999",
      features: ["Express Visa", "Luxury Transportation", "Private Guide", "24/7 Concierge", "Extended Ziyarat", "Exclusive Access"],
      popular: false,
      gradient: "islamic-gradient"
    },
  ];

  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="islamic-gradient bg-clip-text text-transparent">Sacred Packages</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose from our carefully crafted packages designed to provide you with a meaningful and comfortable pilgrimage experience
          </p>
        </div>

        {/* Umrah Packages */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-10 h-10 rounded-full hero-gradient flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </span>
            Umrah Packages
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {umrahPackages.map((pkg, index) => (
              <Card key={index} className={`group hover:shadow-strong transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-soft overflow-hidden ${pkg.popular ? 'ring-2 ring-primary' : ''}`}>
                <div className={`h-2 ${pkg.gradient}`}></div>
                {pkg.popular && (
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold mb-2">{pkg.title}</CardTitle>
                  <CardDescription className="text-base flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {pkg.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Hotel className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{pkg.accommodation}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{pkg.distance}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Utensils className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{pkg.meals}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Bus className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{pkg.transport}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">Package Includes:</h4>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-accent"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-6 space-y-4">
                    <div className="text-center">
                      <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                      <span className="text-sm text-muted-foreground"> / per person</span>
                    </div>
                    <Button className="w-full" variant={index === 1 ? "default" : index === 2 ? "islamic" : "secondary"}>
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Hajj Packages */}
        <section>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-10 h-10 rounded-full islamic-gradient flex items-center justify-center">
              <Star className="w-5 h-5 text-white" />
            </span>
            Hajj Packages
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {hajjPackages.map((pkg, index) => (
              <Card key={index} className={`group hover:shadow-strong transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-soft overflow-hidden ${pkg.popular ? 'ring-2 ring-primary' : ''}`}>
                <div className={`h-2 ${pkg.gradient}`}></div>
                {pkg.popular && (
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold mb-2">{pkg.title}</CardTitle>
                  <CardDescription className="text-base flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {pkg.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Hotel className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{pkg.accommodation}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{pkg.distance}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Utensils className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{pkg.meals}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Bus className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{pkg.transport}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">Package Includes:</h4>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-accent"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-6 space-y-4">
                    <div className="text-center">
                      <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                      <span className="text-sm text-muted-foreground"> / per person</span>
                    </div>
                    <Button className="w-full" variant={index === 1 ? "default" : index === 2 ? "islamic" : "secondary"}>
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-20 text-center">
          <div className="max-w-3xl mx-auto bg-muted/50 p-8 rounded-xl shadow-soft">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Package?</h3>
            <p className="text-muted-foreground mb-6">
              We understand that every pilgrim has unique needs. Contact our experts to create a personalized package that suits your requirements and preferences.
            </p>
            <Button size="lg" variant="hero">
              Request Custom Quote
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PackagesPage;