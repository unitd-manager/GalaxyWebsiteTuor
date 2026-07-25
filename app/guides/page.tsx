import { Metadata } from "next";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";

export const metadata: Metadata = {
  title: "Pilgrimage Guides | Galaxy Islamic Travel Hub",
  description: "Comprehensive guides for Hajj and Umrah pilgrimages, including step-by-step instructions, tips, and spiritual preparation.",
};

export default function GuidesPage() {
  return (
    <main className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Pilgrimage Guides</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive resources to help you prepare for and perform your sacred journey with confidence and spiritual focus.
          </p>
        </div>
      </section>
      
      {/* Guide Cards */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Hajj Guide Card */}
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-primary to-secondary text-white">
                <CardTitle className="text-2xl">Hajj Guide</CardTitle>
                <CardDescription className="text-white/80">
                  Complete guide to the fifth pillar of Islam
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="mb-4">
                  Our comprehensive Hajj guide covers all aspects of the pilgrimage, from preparation to completion. Learn about:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Step-by-step rituals and their spiritual significance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Essential duas and prayers for each stage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Practical tips for a comfortable journey</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Packing lists and preparation advice</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/hajj-guide" className="w-full">
                  <Button variant="default" className="w-full">View Hajj Guide</Button>
                </Link>
              </CardFooter>
            </Card>
            
            {/* Umrah Guide Card */}
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-secondary to-primary text-white">
                <CardTitle className="text-2xl">Umrah Guide</CardTitle>
                <CardDescription className="text-white/80">
                  Complete guide to the lesser pilgrimage
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="mb-4">
                  Our detailed Umrah guide provides everything you need to know about this blessed journey. Discover:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Detailed explanation of Umrah rituals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Best times to perform Umrah</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Important duas and their meanings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Travel tips and accommodation advice</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/umrah-guide" className="w-full">
                  <Button variant="default" className="w-full">View Umrah Guide</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Additional Resources */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Additional Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Preparation Checklist</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Download our comprehensive checklist to ensure you're fully prepared for your pilgrimage.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Download PDF</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Duas Collection</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Essential prayers and supplications for your journey, with translations and transliterations.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View Duas</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Video Tutorials</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Watch our step-by-step video guides explaining each ritual and practice in detail.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Watch Videos</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Sacred Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Browse our packages and start planning your pilgrimage today.
          </p>
          <Link href="/packages">
            <Button variant="hero" size="lg">View Our Packages</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}