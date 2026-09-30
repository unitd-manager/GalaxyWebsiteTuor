"use client";

import { useState, useEffect, useLayoutEffect } from "react";
import {
  MapPin,
  ArrowRight,
  Plane,
  Check,
  LayoutGrid,
  Waves,
  Building2,
  Mountain,
  Globe2,
  Ticket,
  BadgeDollarSign,
  Headphones,
} from "lucide-react";

export type TourPackage = {
  id: string;
  country: string;
  title: string;
  description: string;
  image: string;
  destinations: string;
  featured?: boolean;
  highlights: string[];
};

export const packages: TourPackage[] = [
  {
    id: "srilanka",
    country: "Sri Lanka",
    title: "Sri Lanka – Island Escape",
    description:
      "Plan your journey to Sri Lanka with convenient international flight booking services. Explore available flight options and choose a suitable itinerary for your travel requirements.",
    image:
      "https://images.pexels.com/photos/5656452/pexels-photo-5656452.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    destinations: "Colombo · Kandy · Nuwara Eliya · Bentota",
    featured: true,
    highlights: [
      "Flight Booking",
      "Multiple Airline Options",
      "Fare Options",
      "Booking Assistance",
    ],
  },
  {
    id: "singapore",
    country: "Singapore",
    title: "Singapore – City Escape",
    description:
      "Plan your trip to Singapore with convenient flight booking services. Explore available airline and fare options and select a suitable flight for your journey.",
    image:
      "https://images.pexels.com/photos/18662417/pexels-photo-18662417.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    destinations: "Singapore · Marina Bay · Sentosa",
    featured: true,
    highlights: [
      "Flight Booking",
      "Multiple Airline Options",
      "Fare Options",
      "Booking Assistance",
    ],
  },
  {
    id: "malaysia",
    country: "Malaysia",
    title: "Malaysia – Truly Asia",
    description:
      "Discover flight options to Malaysia with Galaxy Tours Travels. Get convenient booking assistance and choose a suitable itinerary based on your travel needs.",
    image:
      "https://images.pexels.com/photos/9395978/pexels-photo-9395978.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    destinations: "Kuala Lumpur · Genting · Putrajaya",
    highlights: [
      "Flight Booking",
      "Multiple Airline Options",
      "Fare Options",
      "Booking Assistance",
    ],
  },
  {
    id: "vietnam",
    country: "Vietnam",
    title: "Vietnam – Discover the Charm",
    description:
      "Plan your journey to Vietnam with flexible flight booking options. Explore available flights and get assistance in selecting a suitable travel itinerary.",
    image:
      "https://images.pexels.com/photos/37405714/pexels-photo-37405714.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    destinations: "Hanoi · Ha Long Bay · Da Nang · Hoi An",
    highlights: [
      "Flight Booking",
      "Multiple Airline Options",
      "Fare Options",
      "Booking Assistance",
    ],
  },
  {
    id: "cambodia",
    country: "Cambodia",
    title: "Cambodia – Kingdom of Wonder",
    description:
      "Explore flight options to Cambodia with Galaxy Tours Travels. Choose from available airlines and fares with convenient booking assistance.",
    image:
      "https://images.pexels.com/photos/15890594/pexels-photo-15890594.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    destinations: "Siem Reap · Phnom Penh",
    highlights: [
      "Flight Booking",
      "Multiple Airline Options",
      "Fare Options",
      "Booking Assistance",
    ],
  },
  {
    id: "thailand",
    country: "Thailand",
    title: "Thailand – Tropical Getaway",
    description:
      "Plan your Thailand journey with convenient flight booking services. Explore available flight and fare options and choose an itinerary that suits your travel requirements.",
    image:
      "https://images.pexels.com/photos/30540817/pexels-photo-30540817.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    destinations: "Bangkok · Phuket · Pattaya",
    featured: true,
    highlights: [
      "Flight Booking",
      "Multiple Airline Options",
      "Fare Options",
      "Booking Assistance",
    ],
  },
  {
    id: "uae",
    country: "UAE",
    title: "UAE – Dubai & Abu Dhabi",
    description:
      "Explore flight options to the UAE with convenient booking assistance. Choose from available airlines and fare options for your Dubai or Abu Dhabi journey.",
    image:
      "https://images.pexels.com/photos/26926258/pexels-photo-26926258.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    destinations: "Dubai · Abu Dhabi",
    featured: true,
    highlights: [
      "Flight Booking",
      "Multiple Airline Options",
      "Fare Options",
      "Booking Assistance",
    ],
  },
  {
    id: "azerbaijan",
    country: "Azerbaijan",
    title: "Azerbaijan – Land of Fire",
    description:
      "Plan your journey to Azerbaijan with convenient international flight booking. Explore available airline and fare options with assistance from Galaxy Tours Travels.",
    image:
      "https://images.pexels.com/photos/36551751/pexels-photo-36551751.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    destinations: "Baku · Gabala · Gobustan",
    highlights: [
      "Flight Booking",
      "Multiple Airline Options",
      "Fare Options",
      "Booking Assistance",
    ],
  },
  {
    id: "kazakhstan",
    country: "Kazakhstan",
    title: "Kazakhstan – Steppe & Peaks",
    description:
      "Discover flight options to Kazakhstan with convenient booking assistance. Explore available airlines and fares for your international travel plans.",
    image:
      "https://images.pexels.com/photos/36811098/pexels-photo-36811098.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    destinations: "Almaty · Charyn Canyon · Kaindy Lake",
    highlights: [
      "Flight Booking",
      "Multiple Airline Options",
      "Fare Options",
      "Booking Assistance",
    ],
  },
  {
    id: "maldives",
    country: "Maldives",
    title: "Maldives – Paradise Escape",
    description:
      "Plan your journey to the Maldives with convenient flight booking services. Explore available flight and fare options for your island getaway.",
    image:
      "https://images.pexels.com/photos/1287455/pexels-photo-1287455.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    destinations: "Malé · Resort Islands",
    featured: true,
    highlights: [
      "Flight Booking",
      "Multiple Airline Options",
      "Fare Options",
      "Booking Assistance",
    ],
  },
  {
    id: "mauritius",
    country: "Mauritius",
    title: "Mauritius – Tropical Island",
    description:
      "Explore flight options to Mauritius with Galaxy Tours Travels. Get convenient booking assistance and choose a suitable flight itinerary for your journey.",
    image:
      "https://images.pexels.com/photos/33791769/pexels-photo-33791769.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    destinations: "Port Louis · Grand Baie · Le Morne",
    highlights: [
      "Flight Booking",
      "Multiple Airline Options",
      "Fare Options",
      "Booking Assistance",
    ],
  },
];

const categories = [
  { label: "All", icon: LayoutGrid },
  { label: "Islands & Beaches", icon: Waves },
  { label: "Cities & Culture", icon: Building2 },
  { label: "Adventure & Nature", icon: Mountain },
];

const services = [
  { icon: Plane, label: "Book Your Flight" },
  { icon: Globe2, label: "Multiple Airlines" },
  { icon: BadgeDollarSign, label: "Fare Options" },
  { icon: Headphones, label: "Booking Assistance" },
];

export default function Packages() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Prevent leftover package hashes from automatically scrolling
  // to a package card when the page initially loads.
  useLayoutEffect(() => {
    if (window.location.hash.startsWith("#pkg-")) {
      window.scrollTo(0, 0);

      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }
  }, []);

  const filtered = packages.filter((pkg) => {
    if (activeCategory === "All") return true;

    if (activeCategory === "Islands & Beaches") {
      return [
        "srilanka",
        "thailand",
        "maldives",
        "mauritius",
      ].includes(pkg.id);
    }

    if (activeCategory === "Cities & Culture") {
      return [
        "singapore",
        "malaysia",
        "vietnam",
        "cambodia",
        "uae",
      ].includes(pkg.id);
    }

    if (activeCategory === "Adventure & Nature") {
      return ["azerbaijan", "kazakhstan"].includes(pkg.id);
    }

    return true;
  });

  // Scroll to a specific destination when a destination chip
  // from another section is clicked.
  useEffect(() => {
    const goToPackage = (id: string) => {
      setActiveCategory("All");

      requestAnimationFrame(() => {
        setTimeout(() => {
          document
            .getElementById(`pkg-${id}`)
            ?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
        }, 50);
      });
    };

    const handleEvent = (e: Event) => {
      const id = (e as CustomEvent<string>).detail;

      if (id) {
        goToPackage(id);
      }
    };

    const handleHash = () => {
      const hash = window.location.hash;

      if (hash.startsWith("#pkg-")) {
        goToPackage(hash.replace("#pkg-", ""));
      }
    };

    window.addEventListener(
      "galaxy:scrollToPackage",
      handleEvent
    );

    window.addEventListener("hashchange", handleHash);

    return () => {
      window.removeEventListener(
        "galaxy:scrollToPackage",
        handleEvent
      );

      window.removeEventListener("hashchange", handleHash);
    };
  }, []);

  return (
    <section
      id="packages"
      className="py-24 bg-[#f8faff]"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-[#f97316] text-sm font-semibold tracking-widest uppercase mb-3">
            Explore The World
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0f2557] font-heading mb-4">
            International Flight Destinations
          </h2>

          <p className="text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            Explore popular international destinations with
            convenient flight booking services. Choose from
            available airlines and fare options and get booking
            assistance from Galaxy Tours Travels.
          </p>

          <div className="w-16 h-1 bg-[#f97316] mx-auto rounded-full mt-6" />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map(({ label, icon: Icon }) => (
            <button
              key={label}
              onClick={() => setActiveCategory(label)}
              className={`flex items-center gap-2 whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                activeCategory === label
                  ? "bg-[#f97316] text-white border-[#f97316] shadow-lg shadow-orange-500/20"
                  : "bg-white text-neutral-600 border-[#e2e8f0] hover:bg-[#dbeafe] hover:text-[#0f2557]"
              }`}
            >
              <Icon size={15} />
              {label}
            </button>
          ))}
        </div>

        {/* Destination Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
            />
          ))}
        </div>

        {/* Flight Booking Services */}
       

      </div>
    </section>
  );
}

const islandIds = [
  "srilanka",
  "thailand",
  "maldives",
  "mauritius",
];

const cityIds = [
  "singapore",
  "malaysia",
  "vietnam",
  "cambodia",
  "uae",
];

const adventureIds = [
  "azerbaijan",
  "kazakhstan",
];

function getPackageCategory(id: string) {
  if (islandIds.includes(id)) {
    return {
      label: "Island & Beach",
      icon: Waves,
    };
  }

  if (cityIds.includes(id)) {
    return {
      label: "City & Culture",
      icon: Building2,
    };
  }

  if (adventureIds.includes(id)) {
    return {
      label: "Adventure & Nature",
      icon: Mountain,
    };
  }

  return {
    label: "International",
    icon: Globe2,
  };
}

function PackageCard({
  pkg,
}: {
  pkg: TourPackage;
}) {
  const {
    label: categoryLabel,
    icon: CategoryIcon,
  } = getPackageCategory(pkg.id);

  return (
    <article
      id={`pkg-${pkg.id}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-[#e2e8f0] hover:shadow-xl transition-all duration-300 flex flex-col scroll-mt-24"
    >

      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={pkg.image}
          alt={`${pkg.country} flight booking`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0f2557]/60 to-transparent" />

        {/* Category */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-[#0f2557] text-[10px] font-bold px-2.5 py-1.5 rounded-full uppercase tracking-wide shadow-lg">
          <CategoryIcon
            size={12}
            className="text-[#f97316]"
          />

          {categoryLabel}
        </div>

        {/* Flight Booking Badge */}
        <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-lg">
          <span className="flex items-center gap-1.5 text-[#0f2557] font-bold text-sm font-heading">
            <Plane
              size={15}
              className="text-[#f97316]"
            />
            Book Your Flight
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">

        {/* Country */}
        <div className="flex items-center justify-between mb-2">
          <span className="bg-[#f8faff] text-[#1e40af] text-xs font-semibold px-3 py-1 rounded-full border border-[#dbeafe]">
            {pkg.country}
          </span>

          <div className="flex items-center gap-1 text-xs font-semibold text-neutral-500">
            <Plane
              size={13}
              className="text-[#f97316]"
            />
            International
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-[#0f2557] font-heading mb-2">
          {pkg.title}
        </h3>

        {/* Description */}
        <p className="text-neutral-500 text-sm leading-relaxed mb-4 line-clamp-3">
          {pkg.description}
        </p>

        {/* Destinations */}
        <div className="flex items-start gap-2 text-neutral-500 text-xs mb-4">
          <MapPin
            size={14}
            className="text-[#f97316] shrink-0 mt-0.5"
          />

          <span>
            {pkg.destinations}
          </span>
        </div>

        {/* Highlights */}
        <div className="space-y-1.5 mb-5 flex-1">
          {pkg.highlights.map((highlight) => (
            <div
              key={highlight}
              className="flex items-center gap-2 text-neutral-600 text-sm"
            >
              <Check
                size={14}
                className="text-[#f97316] shrink-0"
              />

              {highlight}
            </div>
          ))}
        </div>

        {/* Enquire Button */}
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 bg-[#0f2557] hover:bg-[#f97316] text-white font-semibold px-5 py-3 rounded-xl transition-all duration-200"
        >
          Plan Your Trip
          <ArrowRight size={16} />
        </a>

      </div>
    </article>
  );
}