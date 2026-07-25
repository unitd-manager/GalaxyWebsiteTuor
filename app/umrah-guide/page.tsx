import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Calendar, MapPin, Clock, AlertCircle, CheckCircle, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Umrah Guide - Islamic Travel Hub",
  description: "Comprehensive guide to performing Umrah with step-by-step instructions",
};

const UmrahGuidePage = () => {
  const umrahSteps = [
    {
      title: "Ihram",
      description: "Enter the state of Ihram by making the intention for Umrah, wearing the Ihram garments (for men), and reciting the Talbiyah.",
      icon: Calendar,
    },
    {
      title: "Tawaf",
      description: "Perform Tawaf by circling the Kaaba seven times in a counterclockwise direction, starting and ending at the Black Stone (Hajar al-Aswad).",
      icon: MapPin,
    },
    {
      title: "Sa'i",
      description: "Perform Sa'i by walking seven times between the hills of Safa and Marwah, commemorating Hajar's search for water for her son Ismail.",
      icon: Clock,
    },
    {
      title: "Halq or Taqsir",
      description: "Complete Umrah by cutting your hair (Halq for men - shaving the head, or Taqsir - trimming the hair for both men and women).",
      icon: AlertCircle,
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

  const duas = [
    {
      title: "Talbiyah",
      arabic: "لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ",
      transliteration: "Labbayk Allahumma labbayk, labbayk la shareeka laka labbayk, innal-hamda wan-ni'mata laka wal-mulk, la shareeka lak",
      translation: "Here I am at Your service, O Allah, here I am. Here I am, no partner do You have, here I am. Truly, all praise and favor is Yours, as well as all dominion. No partner do You have.",
    },
    {
      title: "Entering Masjid al-Haram",
      arabic: "اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ",
      transliteration: "Allahumma aftah li abwaba rahmatik",
      translation: "O Allah, open the doors of Your mercy for me.",
    },
    {
      title: "Starting Tawaf",
      arabic: "بِسْمِ اللَّهِ اللَّهُ أَكْبَرُ",
      transliteration: "Bismillah, Allahu Akbar",
      translation: "In the name of Allah, Allah is the Greatest.",
    },
    {
      title: "Between Rukn al-Yamani and Black Stone",
      arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
      transliteration: "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina 'adhaban-nar",
      translation: "Our Lord, give us good in this world and good in the Hereafter, and save us from the punishment of the Fire.",
    },
  ];

  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Complete <span className="islamic-gradient bg-clip-text text-transparent">Umrah Guide</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive guide to help you prepare for and perform the sacred pilgrimage of Umrah
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-16">
          <Card className="border-0 shadow-soft">
            <CardContent className="p-8">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">What is Umrah?</h2>
                <p>
                  Umrah is a voluntary Islamic pilgrimage to Makkah that can be performed at any time of the year. Unlike Hajj, which is mandatory for able Muslims and must be performed during specific dates, Umrah is optional but highly rewarded in Islam.
                </p>
                <p className="mt-4">
                  The word "Umrah" means "to visit a populated place," and it involves performing a set of rituals that symbolize the actions of Prophet Ibrahim (Abraham) and his family. Umrah is often referred to as the "lesser pilgrimage" or "minor pilgrimage" in comparison to Hajj.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Umrah Steps */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Step-by-Step Umrah Guide</h2>
          <div className="space-y-6">
            {umrahSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full islamic-gradient flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
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

        {/* Important Duas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Important Duas for Umrah</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {duas.map((dua, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{dua.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted/30 p-4 rounded-md">
                    <p className="text-right font-arabic text-lg">{dua.arabic}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Transliteration:</p>
                    <p className="text-muted-foreground italic">{dua.transliteration}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Translation:</p>
                    <p className="text-muted-foreground">{dua.translation}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Essentials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Umrah Essentials Packing List</h2>
          <Card className="border-0 shadow-soft">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {essentials.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full hero-gradient flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Best Times for Umrah */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Best Times to Perform Umrah</h2>
          <Card className="border-0 shadow-soft overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="bg-muted/30 p-8">
                  <h3 className="text-xl font-bold mb-4">Recommended Seasons</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full islamic-gradient flex items-center justify-center mt-0.5">
                        <Calendar className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <p className="font-medium">Ramadan</p>
                        <p className="text-sm text-muted-foreground">Umrah during Ramadan is equivalent in reward to performing Hajj with the Prophet Muhammad (PBUH).</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full islamic-gradient flex items-center justify-center mt-0.5">
                        <Calendar className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <p className="font-medium">Rajab, Dhul-Qa'dah, Dhul-Hijjah</p>
                        <p className="text-sm text-muted-foreground">These are sacred months in the Islamic calendar and are excellent times for Umrah.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full islamic-gradient flex items-center justify-center mt-0.5">
                        <Calendar className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <p className="font-medium">Winter Season</p>
                        <p className="text-sm text-muted-foreground">The cooler temperatures make the rituals more comfortable to perform.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-4">Times to Consider Avoiding</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full hero-gradient flex items-center justify-center mt-0.5">
                        <AlertCircle className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <p className="font-medium">Hajj Season</p>
                        <p className="text-sm text-muted-foreground">The days of Hajj and the days immediately before and after are extremely crowded.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full hero-gradient flex items-center justify-center mt-0.5">
                        <AlertCircle className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <p className="font-medium">Summer Peak</p>
                        <p className="text-sm text-muted-foreground">Extreme heat can make the rituals challenging, especially for elderly or those with health conditions.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full hero-gradient flex items-center justify-center mt-0.5">
                        <AlertCircle className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <p className="font-medium">School Holiday Seasons</p>
                        <p className="text-sm text-muted-foreground">These periods often see increased crowds from around the world.</p>
                      </div>
                    </li>
                  </ul>
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
              Our experienced guides will help you navigate every step of your Umrah pilgrimage with expert knowledge and dedicated support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="islamic">
                View Umrah Packages
              </Button>
              <Button size="lg" variant="outline">
                Contact Our Umrah Experts
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default UmrahGuidePage;