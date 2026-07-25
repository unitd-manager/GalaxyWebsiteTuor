import { Calendar, MapPin, Plane, Hotel, Utensils, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from "./ui/button";

const UmrahPackages = () => {
  const packages = [
    {
      id: "december-2025",
      title: "DECEMBER UMRAH PACKAGE 2025",
      price: "INR 1,08,000",
      contact: "97507 92020",
      gst: "33EXDPS3768B1ZF",
      dates: "24 DEC - 06 JAN 2025",
      hotels: {
        makkah: "Diyafa Mubarak/Similar",
        madinah: "Diyar Al Tayba/Similar"
      },
      includes: [
        "Umrah Visa & Ziyarath",
        "Air Ticket",
        "Accommodation & Transport"
      ]
    },
    {
      id: "hilton-december-2025",
      title: "HILTON UMRAH PACKAGE 2025",
      price: "INR 1,40,000",
      contact: "97507 92020",
      gst: "33EXDPS3768B1ZF",
      dates: "24 DEC - 06 JAN 2025",
      hotels: {
        makkah: "Hilton Tower (4-5 Beds, Not Villa)",
        madinah: "Diyar Al Tayba/Similar"
      },
      includes: [
        "Visa Processing",
        "Air Ticket",
        "4-Star Hotel Accommodation",
        "Buffet Meals",
        "Ziyarath in Makkah & Madinah"
      ]
    },
    {
      id: "november-2025",
      title: "NOVEMBER UMRAH PACKAGE 2025",
      price: "INR 1,10,000",
      contact: "97507 92020",
      dates: "24 NOV - 07 DEC 2025",
      hotels: {
        makkah: "Areej Al Falah/Similar",
        madinah: "Diyar Al Habeeb/Similar"
      },
      includes: [
        "Flight",
        "Transport",
        "Hotel",
        "Visa"
      ]
    },
    {
      id: "october-2025",
      title: "OCTOBER UMRAH PACKAGE 2025",
      price: "INR 1,40,000",
      contact: "97507 92020",
      dates: "22 OCT - 04 NOV 2025",
      hotels: {
        makkah: "Hilton Tower (4-5 Beds, Not Villa)",
        madinah: "Diyar Al Tayba/Similar"
      },
      includes: [
        "Flight",
        "Transport",
        "Ziyarath",
        "Hotel Visa"
      ]
    },
    {
      id: "september-2025",
      title: "SEPTEMBER UMRAH PACKAGE 2025",
      price: "INR 1,45,000",
      contact: "97507 92020",
      dates: "28 SEP - 11 OCT 2025",
      hotels: {
        makkah: "Mira Ajyad/Similar",
        madinah: "Diyar Al Tayba/Similar"
      },
      flight: {
        departure: "28 SEP 2025",
        arrival: "11 OCT 2025",
        airline: "Kuwait Air / Similar"
      },
      includes: [
        "Round Air Ticket",
        "Umrah Visa",
        "4-Star Hotel Accommodation",
        "Buffet Meals",
        "Makkah/Medina Ziyarath"
      ]
    }
  ];

  return (
    <section id="umrah-packages" className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 mb-3 text-sm font-semibold text-orange-600 bg-orange-100 rounded-full">
            Special Packages 2025
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Exclusive Umrah Packages</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
            Experience a spiritually uplifting journey with our carefully curated Umrah packages
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={pkg.id} className="flex flex-col h-full bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-r from-orange-500 to-blue-600 p-6 text-white relative">
                <div className="mb-2">
                  <div className="inline-block bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium mb-2">
                    {pkg.dates}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1">{pkg.title}</h3>
                <div className="text-2xl md:text-3xl font-extrabold mt-2">{pkg.price}</div>
                <div className="w-12 h-1 bg-white/50 rounded-full mt-3"></div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-6 space-y-4 p-1">
                  <div className="flex items-start p-3 bg-blue-50 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3">
                      <MapPin className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Makkah</h4>
                      <p className="text-gray-600 text-sm">{pkg.hotels.makkah}</p>
                    </div>
                  </div>
                  <div className="flex items-start p-3 bg-orange-50 rounded-xl">
                    <div className="bg-orange-100 p-2 rounded-lg mr-3">
                      <MapPin className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Madinah</h4>
                      <p className="text-gray-600 text-sm">{pkg.hotels.madinah}</p>
                    </div>
                  </div>
                  {pkg.flight && (
                    <div className="flex items-start p-3 bg-gray-50 rounded-xl">
                      <div className="bg-gray-100 p-2 rounded-lg mr-3">
                        <Plane className="h-5 w-5 text-gray-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Flight</h4>
                        <p className="text-gray-600 text-sm">
                          {pkg.flight.airline}<br />
                          <span className="text-xs">
                            {pkg.flight.departure} - {pkg.flight.arrival}
                          </span>
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <div className="bg-blue-100 p-1 rounded-full mr-2">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    Package Includes:
                  </h4>
                  <ul className="space-y-3">
                    {pkg.includes.map((item, i) => (
                      <li key={i} className="flex items-start group">
                        <span className="flex-shrink-0 mt-0.5 mr-2 text-orange-500 group-hover:scale-110 transition-transform">✓</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-100">
                  <div className="min-h-[60px] flex items-center">
                    <a 
                      href={`tel:${pkg.contact}`}
                      className="w-full bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-xl flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm sm:text-base"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <span className="truncate">Book Now: {pkg.contact}</span>
                    </a>
                  </div>
                  {pkg.gst && (
                    <p className="text-xs text-gray-500 text-center mt-3">
                      GST: {pkg.gst}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl shadow-xl p-8 text-center border border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Need a Custom Umrah Package?</h3>
            <p className="text-gray-600 mb-8 text-lg">
              Contact us to create a personalized Umrah package that fits your schedule and budget perfectly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/contact">
                  Contact Us for Custom Package
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="/faq">
                  View FAQ
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-orange-500 text-orange-600 hover:bg-orange-50">
                <a href="mailto:info@galaxytours.com" className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Email Us
                </a>
              </Button>
            </div>
            <div className="mt-8 p-4 bg-white/50 rounded-xl inline-block">
              <p className="text-sm text-gray-700 font-medium">
                <span className="text-orange-600">Galaxy Tours and Travels</span> • GST: 33EXDPS3768B1ZF
              </p>
              <p className="text-sm text-gray-600 mt-1">36/22, 2nd Street, Balaji Nagar, Royapettah, Chennai - 600014</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UmrahPackages;
