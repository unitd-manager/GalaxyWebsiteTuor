import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Calendar, MapPin, Clock, AlertCircle, CheckCircle, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Hajj Guide - Islamic Travel Hub",
  description: "Comprehensive guide to performing Hajj pilgrimage with step-by-step instructions",
};

const HajjGuidePage = () => {
  const hajjSteps = [
    {
      day: "8th Dhul-Hijjah (Yawm al-Tarwiyah)",
      title: "Enter Ihram & Travel to Mina",
      description: "Enter the state of Ihram, recite the Talbiyah, and travel to Mina where you will spend the day and night in prayer and reflection.",
      icon: Calendar,
    },
    {
      day: "9th Dhul-Hijjah (Yawm al-Arafah)",
      title: "Day of Arafah",
      description: "Travel to Arafah after Fajr prayer. Stand in prayer at Arafah from noon until sunset, making dua and seeking forgiveness. This is the most important day of Hajj.",
      icon: MapPin,
    },
    {
      day: "9th Dhul-Hijjah (Night)",
      title: "Muzdalifah",
      description: "After sunset, travel to Muzdalifah without praying Maghrib. Combine Maghrib and Isha prayers at Muzdalifah and spend the night there. Collect pebbles for the stoning ritual.",
      icon: Clock,
    },
    {
      day: "10th Dhul-Hijjah (Yawm al-Nahr)",
      title: "Stoning, Sacrifice, & Tawaf",
      description: "Return to Mina after Fajr. Stone the largest Jamarat (pillar), perform animal sacrifice, shave/trim hair, and perform Tawaf al-Ifadah and Sa'i in Makkah.",
      icon: AlertCircle,
    },
    {
      day: "11th-13th Dhul-Hijjah (Ayyam al-Tashreeq)",
      title: "Days of Tashreeq",
      description: "Stay in Mina and stone all three Jamarat each day after Dhuhr prayer. On the 12th or 13th, return to Makkah.",
      icon: CheckCircle,
    },
    {
      day: "Before Departure",
      title: "Farewell Tawaf",
      description: "Perform Tawaf al-Wada (Farewell Tawaf) before leaving Makkah to complete your Hajj journey.",
      icon: BookOpen,
    },
  ];

  const essentials = [
    "Ihram garments (for men: two white seamless cloths; for women: simple, modest clothing)",
    "Comfortable walking shoes",
    "Small prayer mat",
    "Travel prayer book and Quran",
    "Medications and first aid supplies",
    "Unscented toiletries (while in Ihram)",
    "Money belt or secure pouch",
    "Umbrella for sun protection",
    "Reusable water bottle",
    "Light snacks",
  ];

  const tips = [
    "Prepare physically by walking regularly before your journey",
    "Learn the rituals and duas before traveling",
    "Stay hydrated at all times",
    "Keep your important documents secure",
    "Be patient and maintain good character",
    "Help others when possible",
    "Focus on spiritual reflection",
    "Travel with a knowledgeable guide",
    "Protect your health with proper rest",
    "Remember the purpose of your journey",
  ];

  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Complete <span className="islamic-gradient bg-clip-text text-transparent">Hajj Guide</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive guide to help you prepare for and perform the sacred pilgrimage of Hajj
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-16">
          <Card className="border-0 shadow-soft">
            <CardContent className="p-8">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">What is Hajj?</h2>
                <p>
                  Hajj is the annual Islamic pilgrimage to Makkah, Saudi Arabia, and a mandatory religious duty that must be carried out at least once in a lifetime by every able-bodied Muslim who can afford to do so. It is one of the Five Pillars of Islam and takes place during the Islamic month of Dhul-Hijjah.
                </p>
                <p className="mt-4">
                  The pilgrimage commemorates the actions of Prophet Ibrahim (Abraham) and his family, and it represents the unity and solidarity of Muslims worldwide. Hajj involves a series of rituals performed over five to six days, following the path of Prophet Muhammad's final pilgrimage.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Hajj Steps */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Step-by-Step Hajj Guide</h2>
          <div className="space-y-6">
            {hajjSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full hero-gradient flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{step.day}</p>
                        <CardTitle className="text-xl">{step.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Two Column Section */}
        <section className="mb-16 grid md:grid-cols-2 gap-8">
          {/* Essentials */}
          <Card className="border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full islamic-gradient flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                Hajj Essentials Packing List
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {essentials.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Tips */}
          <Card className="border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full hero-gradient flex items-center justify-center">
                  <AlertCircle className="w-4 h-4 text-white" />
                </div>
                Helpful Tips for Pilgrims
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {tips.map((tip, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span className="text-muted-foreground">{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Hajj Map */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Hajj Journey Map</h2>
          <Card className="border-0 shadow-soft overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video bg-muted/50 flex items-center justify-center">
                <div className="text-center p-8">
                  <h3 className="text-xl font-medium mb-2">Interactive Hajj Map</h3>
                  <p className="text-muted-foreground mb-4">
                    Visual representation of the Hajj journey showing all locations and movements
                  </p>
                  <div className="flex justify-center">
                    <Button variant="outline">
                      View Full Map
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="max-w-3xl mx-auto bg-muted/50 p-8 rounded-xl shadow-soft">
            <h3 className="text-2xl font-bold mb-4">Ready for Your Sacred Journey?</h3>
            <p className="text-muted-foreground mb-6">
              Our experienced guides will help you navigate every step of your Hajj pilgrimage with expert knowledge and dedicated support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="hero">
                View Hajj Packages
              </Button>
              <Button size="lg" variant="outline">
                Contact Our Hajj Experts
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default HajjGuidePage;