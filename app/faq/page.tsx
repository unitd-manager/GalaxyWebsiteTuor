import { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

export const metadata: Metadata = {
  title: "FAQ - Islamic Travel Hub",
  description: "Frequently asked questions about Hajj and Umrah pilgrimages",
};

const FAQPage = () => {
  const generalFaqs = [
    {
      question: "What is the difference between Hajj and Umrah?",
      answer: "Hajj is the mandatory pilgrimage that Muslims must perform at least once in their lifetime if they are physically and financially able. It takes place during specific days in the Islamic month of Dhul-Hijjah. Umrah, on the other hand, is a voluntary pilgrimage that can be performed at any time of the year. Hajj involves more rituals and takes longer to complete compared to Umrah."
    },
    {
      question: "Do I need a special visa for Hajj or Umrah?",
      answer: "Yes, you need a specific Hajj or Umrah visa to enter Saudi Arabia for pilgrimage. These visas are different from tourist or business visas and have specific requirements. Our agency handles the visa application process for all our pilgrims as part of our packages."
    },
    {
      question: "How far in advance should I book my Hajj or Umrah trip?",
      answer: "For Hajj, we recommend booking at least 8-12 months in advance as spots are limited by country quotas and fill up quickly. For Umrah, booking 2-3 months in advance is generally sufficient, though during peak seasons like Ramadan, we recommend booking 4-6 months ahead."
    },
    {
      question: "What vaccinations are required for Hajj and Umrah?",
      answer: "Saudi Arabia requires all pilgrims to have a valid Meningococcal Meningitis vaccination certificate. Additionally, depending on your country of origin, you may need Yellow Fever and seasonal influenza vaccinations. We provide detailed health requirements during the booking process."
    },
    {
      question: "Can women travel alone for Hajj or Umrah?",
      answer: "According to Saudi regulations, women under 45 years of age must be accompanied by a Mahram (a male relative whom she cannot marry) for both Hajj and Umrah. Women over 45 may travel without a Mahram if they are part of an organized group and have a notarized letter of consent from their Mahram."
    },
  ];

  const hajjFaqs = [
    {
      question: "How physically demanding is Hajj?",
      answer: "Hajj is physically demanding and involves walking long distances (often in hot weather), standing for extended periods, and navigating through large crowds. Pilgrims should be in good health and prepare physically before the journey. Our packages include transportation options for those with mobility issues."
    },
    {
      question: "What are the different types of Hajj?",
      answer: "There are three types of Hajj: Ifrad (Hajj only), Qiran (Hajj and Umrah with one Ihram), and Tamattu (Umrah first, then Hajj with a separate Ihram). Most pilgrims from outside Saudi Arabia perform Hajj al-Tamattu as it is generally easier and recommended by many scholars."
    },
    {
      question: "What is the Hajj quota system?",
      answer: "Saudi Arabia allocates a specific number of Hajj visas to each country based on its Muslim population. This quota system helps manage the number of pilgrims and ensure safety. Our agency works within these quotas and secures spots for our clients well in advance."
    },
    {
      question: "What happens if I cannot complete all Hajj rituals due to illness?",
      answer: "If you fall ill during Hajj and cannot complete certain rituals, there are provisions in Islamic law for alternatives or compensations (fidyah). Our guides are knowledgeable about these situations and will provide guidance based on your specific circumstances."
    },
    {
      question: "What is the significance of the Day of Arafah?",
      answer: "The Day of Arafah (9th of Dhul-Hijjah) is the most important day of Hajj. Standing at the plain of Arafah from noon until sunset is the essential ritual of Hajj, without which the Hajj is not valid. It is a day of forgiveness, prayer, and supplication."
    },
  ];

  const umrahFaqs = [
    {
      question: "Can I perform Umrah during any time of the year?",
      answer: "Yes, Umrah can be performed at any time of the year except during the days of Hajj for those performing Hajj. However, certain times like Ramadan are especially virtuous for Umrah, and these periods tend to be more crowded."
    },
    {
      question: "How long does it take to complete Umrah?",
      answer: "The core rituals of Umrah (entering Ihram, Tawaf around the Kaaba, Sa'i between Safa and Marwah, and cutting hair) can be completed in a few hours. However, most pilgrims stay for 7-14 days to pray in the holy mosques and visit other significant sites in Makkah and Madinah."
    },
    {
      question: "Is it true that Umrah in Ramadan is equivalent to Hajj?",
      answer: "According to a hadith of Prophet Muhammad (PBUH), 'Umrah in Ramadan is equivalent to Hajj (in reward).' While performing Umrah in Ramadan carries great spiritual reward, it does not fulfill the obligation of Hajj, which remains a separate pillar of Islam."
    },
    {
      question: "What is the difference between the three types of Tawaf?",
      answer: "There are three main types of Tawaf: Tawaf al-Qudum (arrival Tawaf), Tawaf al-Ifadah (the main Tawaf of Hajj), and Tawaf al-Wada (farewell Tawaf). For Umrah, pilgrims perform Tawaf al-Umrah, which is the primary Tawaf of the Umrah ritual."
    },
    {
      question: "Can I visit Madinah as part of my Umrah trip?",
      answer: "Yes, most Umrah packages include a visit to Madinah to pray in Masjid al-Nabawi (the Prophet's Mosque) and visit other historical sites. While visiting Madinah is not part of the Umrah ritual itself, it is highly recommended and spiritually significant."
    },
  ];

  const packageFaqs = [
    {
      question: "What's included in your Hajj and Umrah packages?",
      answer: "Our packages typically include visa processing, round-trip flights, hotel accommodations, transportation within Saudi Arabia, guided tours of holy sites, assistance with rituals, meals (as specified in the package), and 24/7 support from our team. Premium packages include additional amenities like closer hotel accommodations, private transportation, and more extensive meal plans."
    },
    {
      question: "Can you accommodate special dietary requirements?",
      answer: "Yes, we can accommodate various dietary requirements including vegetarian, vegan, diabetic, and other medical dietary needs. Please inform us of your requirements during booking so we can make appropriate arrangements."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Our cancellation policy varies depending on how close to the departure date you cancel. Generally, cancellations made 90+ days before departure receive a full refund minus administrative fees. Cancellations 60-89 days before departure receive a 75% refund, 30-59 days receive a 50% refund, and less than 30 days may not be eligible for a refund. We recommend purchasing travel insurance to protect against unforeseen circumstances."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes, we offer flexible payment plans for both Hajj and Umrah packages. For Hajj, you can secure your spot with a deposit and make installment payments leading up to the departure date. For Umrah, we typically require a deposit at booking with full payment due 30-45 days before departure."
    },
    {
      question: "What kind of support will I have during my pilgrimage?",
      answer: "Our packages include dedicated group leaders and guides who are knowledgeable about the rituals and locations. They provide spiritual guidance, practical assistance, and are available 24/7 during your journey. We also have local staff in Saudi Arabia to assist with any issues that may arise."
    },
  ];

  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently <span className="islamic-gradient bg-clip-text text-transparent">Asked Questions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about Hajj, Umrah, and our services
          </p>
        </div>

        {/* FAQ Tabs */}
        <Tabs defaultValue="general" className="mb-16">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-4 w-full max-w-2xl">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="hajj">Hajj</TabsTrigger>
              <TabsTrigger value="umrah">Umrah</TabsTrigger>
              <TabsTrigger value="packages">Packages</TabsTrigger>
            </TabsList>
          </div>
          
          {/* General FAQs */}
          <TabsContent value="general">
            <Accordion type="single" collapsible className="w-full">
              {generalFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
          
          {/* Hajj FAQs */}
          <TabsContent value="hajj">
            <Accordion type="single" collapsible className="w-full">
              {hajjFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
          
          {/* Umrah FAQs */}
          <TabsContent value="umrah">
            <Accordion type="single" collapsible className="w-full">
              {umrahFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
          
          {/* Package FAQs */}
          <TabsContent value="packages">
            <Accordion type="single" collapsible className="w-full">
              {packageFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
        </Tabs>

        {/* Still Have Questions */}
        <section className="text-center">
          <div className="max-w-3xl mx-auto bg-muted/50 p-8 rounded-xl shadow-soft">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our team of Hajj and Umrah experts is ready to assist you with any additional questions or concerns you may have about your pilgrimage journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="hero">
                Contact Us
              </Button>
              <Button size="lg" variant="outline">
                Request Consultation
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default FAQPage;