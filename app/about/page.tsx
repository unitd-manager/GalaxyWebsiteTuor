import { Metadata } from "next";
import About from "../components/About";

export const metadata: Metadata = {
  title: "About Us | Galaxy Islamic Travel Hub",
  description: "Learn about Galaxy Tours and Travels, your trusted partner for Hajj and Umrah journeys for over two decades.",
};

export default function AboutPage() {
  return (
    <main className="pt-24 pb-16">
      <About />
      
      {/* Additional About Page Content */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission & Vision</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Our mission is to provide exceptional Hajj and Umrah services that enable Muslims to fulfill their religious obligations with ease, comfort, and spiritual fulfillment.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                We envision being the world's most trusted Islamic travel service, known for our unwavering commitment to excellence, authenticity, and customer satisfaction.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Team</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Our team consists of experienced professionals who are not only experts in travel logistics but also deeply knowledgeable about Islamic practices and rituals.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Many of our guides and staff have performed Hajj and Umrah multiple times and bring personal insights and spiritual understanding to their service.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Certifications and Partnerships */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Certifications & Partnerships</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold">IATA</span>
              </div>
              <p className="text-center font-medium">IATA Accredited</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold">ATOL</span>
              </div>
              <p className="text-center font-medium">ATOL Protected</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold">Saudi</span>
              </div>
              <p className="text-center font-medium">Saudi Ministry Approved</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold">Hajj</span>
              </div>
              <p className="text-center font-medium">Official Hajj Operator</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Sacred Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our team today to learn more about our services and how we can help you fulfill your spiritual obligations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/packages" className="bg-white text-primary font-bold py-3 px-8 rounded-md hover:bg-white/90 transition-colors">
              View Our Packages
            </a>
            <a href="/#contact" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-md hover:bg-white/10 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}