"use client";

import { useState, useEffect, useLayoutEffect } from 'react';
import {
  Calendar,
  MapPin,
  Star,
  ArrowRight,
  Plane,
  Hotel,
  Utensils,
  Camera,
  Check,
  LayoutGrid,
  Waves,
  Building2,
  Mountain,
} from 'lucide-react';

export type TourPackage = {
  id: string;
  country: string;
  title: string;
  description: string;
  image: string;
  nights: number;
  days: number;
  destinations: string;
  price: number;
  rating: number;
  featured?: boolean;
  highlights: string[];
};

export const packages: TourPackage[] = [
  {
    id: 'srilanka',
    country: 'Sri Lanka',
    title: 'Pearl of the Indian Ocean',
    description:
      'Discover ancient temples, misty tea hills, and golden beaches. From Kandy to Bentota, experience Sri Lanka\'s rich heritage and warm hospitality.',
    image: 'https://images.pexels.com/photos/5656452/pexels-photo-5656452.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    nights: 6,
    days: 7,
    destinations: 'Colombo · Kandy · Nuwara Eliya · Bentota',
    price: 38999,
    rating: 4.7,
    featured: true,
    highlights: ['Temple of Tooth', 'Tea Plantations', 'Galle Fort', 'Bentota Beach'],
  },
  {
    id: 'singapore',
    country: 'Singapore',
    title: 'The Lion City Escape',
    description:
      'A futuristic city of gardens, iconic skylines, and world-class attractions. Universal Studios, Sentosa, and Marina Bay await.',
    image: 'https://images.pexels.com/photos/18662417/pexels-photo-18662417.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    nights: 4,
    days: 5,
    destinations: 'Singapore · Sentosa',
    price: 54999,
    rating: 4.8,
    featured: true,
    highlights: ['Universal Studios', 'Gardens by the Bay', 'Sentosa Island', 'Night Safari'],
  },
  {
    id: 'malaysia',
    country: 'Malaysia',
    title: 'Truly Asia Adventure',
    description:
      'From the towering Petronas Towers to the lush Cameron Highlands and Borneo rainforests — Malaysia offers a vibrant cultural mosaic.',
    image: 'https://images.pexels.com/photos/9395978/pexels-photo-9395978.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    nights: 5,
    days: 6,
    destinations: 'Kuala Lumpur · Genting · Putrajaya',
    price: 41999,
    rating: 4.6,
    highlights: ['Petronas Towers', 'Genting Highlands', 'Batu Caves', 'KL City Tour'],
  },
  {
    id: 'vietnam',
    country: 'Vietnam',
    title: 'Charming Vietnam Trail',
    description:
      'Cruise through Ha Long Bay, wander Hanoi\'s Old Quarter, and explore the lantern-lit streets of Hoi An in this enchanting journey.',
    image: 'https://images.pexels.com/photos/37405714/pexels-photo-37405714.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    nights: 6,
    days: 7,
    destinations: 'Hanoi · Ha Long Bay · Da Nang · Hoi An',
    price: 44999,
    rating: 4.7,
    highlights: ['Ha Long Bay Cruise', 'Hoi An Ancient Town', 'Mekong Delta', 'Cu Chi Tunnels'],
  },
  {
    id: 'cambodia',
    country: 'Cambodia',
    title: 'Kingdom of Wonder',
    description:
      'Stand in awe before Angkor Wat at sunrise, explore floating villages, and uncover the soul of Southeast Asia\'s hidden gem.',
    image: 'https://images.pexels.com/photos/15890594/pexels-photo-15890594.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    nights: 4,
    days: 5,
    destinations: 'Siem Reap · Phnom Penh',
    price: 36999,
    rating: 4.6,
    highlights: ['Angkor Wat Sunrise', 'Tonle Sap Lake', 'Royal Palace', 'Killing Fields'],
  },
  {
    id: 'thailand',
    country: 'Thailand',
    title: 'Land of Smiles',
    description:
      'Glide through Bangkok\'s canals, relax on Phuket\'s beaches, and indulge in world-famous Thai cuisine on this tropical adventure.',
    image: 'https://images.pexels.com/photos/30540817/pexels-photo-30540817.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    nights: 5,
    days: 6,
    destinations: 'Bangkok · Phuket · Pattaya',
    price: 39999,
    rating: 4.8,
    featured: true,
    highlights: ['Grand Palace', 'Coral Island', 'Phi Phi Islands', 'Thai Massage'],
  },
  {
    id: 'uae',
    country: 'UAE',
    title: 'Dubai & Abu Dhabi Glamour',
    description:
      'Experience the glitz of Burj Khalifa, thrill of desert safaris, and serenity of mosques. The UAE blends ultra-modern with deeply traditional.',
    image: 'https://images.pexels.com/photos/26926258/pexels-photo-26926258.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    nights: 4,
    days: 5,
    destinations: 'Dubai · Abu Dhabi',
    price: 59999,
    rating: 4.9,
    featured: true,
    highlights: ['Burj Khalifa', 'Desert Safari', 'Sheikh Zayed Mosque', 'Dhow Cruise'],
  },
  {
    id: 'azerbaijan',
    country: 'Azerbaijan',
    title: 'Land of Fire',
    description:
      'Where East meets West. Explore Baku\'s flame towers, ancient fire temples, and the Caucasus Mountains in this emerging gem.',
    image: 'https://images.pexels.com/photos/36551751/pexels-photo-36551751.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    nights: 4,
    days: 5,
    destinations: 'Baku · Gabala · Gobustan',
    price: 52999,
    rating: 4.6,
    highlights: ['Flame Towers', 'Gobustan Rock Art', 'Fire Temple', 'Caspian Sea'],
  },
  {
    id: 'kazakhstan',
    country: 'Kazakhstan',
    title: 'Steppe & Peaks Explorer',
    description:
      'Vast steppes, alpine lakes, and modern cities. Discover Almaty\'s charm, Charyn Canyon, and the beauty of Central Asia.',
    image: 'https://images.pexels.com/photos/36811098/pexels-photo-36811098.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    nights: 4,
    days: 5,
    destinations: 'Almaty · Charyn Canyon · Kaindy Lake',
    price: 57999,
    rating: 4.5,
    highlights: ['Charyn Canyon', 'Kaindy Lake', 'Medeu Rink', 'Almaty City Tour'],
  },
  {
    id: 'maldives',
    country: 'Maldives',
    title: 'Paradise Found',
    description:
      'Crystal-clear lagoons, overwater villas, and pristine coral reefs. The Maldives is the ultimate luxury island escape.',
    image: 'https://images.pexels.com/photos/1287455/pexels-photo-1287455.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    nights: 4,
    days: 5,
    destinations: 'Male · Resort Island',
    price: 89999,
    rating: 4.9,
    featured: true,
    highlights: ['Overwater Villa', 'Snorkeling', 'Sunset Dolphin', 'Sandbank Picnic'],
  },
  {
    id: 'mauritius',
    country: 'Mauritius',
    title: 'Tropical Island Bliss',
    description:
      'Powder-white beaches, turquoise lagoons, and lush interiors. Mauritius offers romance, adventure, and pure relaxation.',
    image: 'https://images.pexels.com/photos/33791769/pexels-photo-33791769.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    nights: 6,
    days: 7,
    destinations: 'Port Louis · Grand Baie · Le Morne',
    price: 79999,
    rating: 4.8,
    highlights: ['Ile aux Cerfs', 'Seven Coloured Earth', 'Black River Gorges', 'Catamaran Cruise'],
  },
  {
    id: 'andaman',
    country: 'Andaman',
    title: 'Emerald Islands',
    description:
      'India\'s tropical paradise. Cell Islands, Havelock beaches, and world-class diving await in the Bay of Bengal.',
    image: 'https://images.pexels.com/photos/37949155/pexels-photo-37949155.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    nights: 5,
    days: 6,
    destinations: 'Port Blair · Havelock · Neil Island',
    price: 42999,
    rating: 4.7,
    highlights: ['Radhanagar Beach', 'Scuba Diving', 'Cellular Jail', 'Island Hopping'],
  },
];

const categories = [
  { label: 'All', icon: LayoutGrid },
  { label: 'Islands & Beaches', icon: Waves },
  { label: 'Cities & Culture', icon: Building2 },
  { label: 'Adventure & Nature', icon: Mountain },
];

const inclusions = [
  { icon: Plane, label: 'Return Flights' },
  { icon: Hotel, label: 'Hotel Stay' },
  { icon: Utensils, label: 'Daily Meals' },
  { icon: Camera, label: 'Sightseeing' },
];

export default function Packages() {
  const [activeCategory, setActiveCategory] = useState('All');

  // If the page is (re)loaded with a leftover #pkg-... hash in the URL from
  // a previous visit, strip it immediately so the browser doesn't
  // auto-scroll straight to the Packages section on open.
  useLayoutEffect(() => {
    if (window.location.hash.startsWith('#pkg-')) {
      window.scrollTo(0, 0);
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }, []);

  const filtered = packages.filter((pkg) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Islands & Beaches')
      return ['srilanka', 'thailand', 'maldives', 'mauritius', 'andaman'].includes(pkg.id);
    if (activeCategory === 'Cities & Culture')
      return ['singapore', 'malaysia', 'vietnam', 'cambodia', 'uae'].includes(pkg.id);
    if (activeCategory === 'Adventure & Nature')
      return ['azerbaijan', 'kazakhstan'].includes(pkg.id);
    return true;
  });

  // Jump to a specific package card when a Destinations chip is clicked.
  // Resets the category filter to "All" first, in case the target card
  // is hidden under the currently active filter, then scrolls to it.
  useEffect(() => {
    const goToPackage = (id: string) => {
      setActiveCategory('All');
      requestAnimationFrame(() => {
        setTimeout(() => {
          document
            .getElementById(`pkg-${id}`)
            ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 50);
      });
    };

    const handleEvent = (e: Event) => {
      const id = (e as CustomEvent<string>).detail;
      if (id) goToPackage(id);
    };

    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#pkg-')) {
        goToPackage(hash.replace('#pkg-', ''));
      }
    };

    window.addEventListener('galaxy:scrollToPackage', handleEvent);
    window.addEventListener('hashchange', handleHash);
    // Note: intentionally NOT calling handleHash() on mount — we only want
    // to react to hash changes that happen *while* the user is on the page
    // (e.g. clicking a Destinations chip), not auto-scroll on initial load
    // just because the URL happens to still have a leftover #pkg-... hash
    // from a previous visit.

    return () => {
      window.removeEventListener('galaxy:scrollToPackage', handleEvent);
      window.removeEventListener('hashchange', handleHash);
    };
  }, []);

  return (
    <section id="packages" className="py-24 bg-[#f8faff]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-[#f97316] text-sm font-semibold tracking-widest uppercase mb-3">
            Explore The World
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f2557] font-heading mb-4">
            Featured Tour Packages
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            Handpicked itineraries across 12 breathtaking destinations. Each
            package includes flights, hotels, transfers, and guided
            sightseeing — all tailored for a seamless experience.
          </p>
          <div className="w-16 h-1 bg-[#f97316] mx-auto rounded-full mt-6" />
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map(({ label, icon: Icon }) => (
            <button
              key={label}
              onClick={() => setActiveCategory(label)}
              className={`flex items-center gap-2 whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                activeCategory === label
                  ? 'bg-[#f97316] text-white border-[#f97316] shadow-lg shadow-orange-500/20'
                  : 'bg-white text-neutral-600 border-[#e2e8f0] hover:bg-[#dbeafe] hover:text-[#0f2557]'
              }`}
            >
              <Icon size={15} />
              {label}
            </button>
          ))}
        </div>

        {/* Package grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {/* Inclusions strip */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <span className="inline-block text-[#f97316] text-sm font-semibold tracking-widest uppercase mb-2">
              What You Get
            </span>
            <h3 className="text-2xl font-bold text-[#0f2557] font-heading">
              Every Package Includes
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 bg-white rounded-3xl shadow-sm border border-[#e2e8f0] overflow-hidden">
            {inclusions.map(({ icon: Icon, label }, i) => (
              <div
                key={label}
                className={`flex flex-col items-center gap-3 py-8 px-4 text-center hover:bg-[#f8faff] transition-colors ${
                  i < inclusions.length - 1 ? 'md:border-r border-[#f1f5f9]' : ''
                } ${i < 2 ? 'border-b md:border-b-0 border-[#f1f5f9]' : ''}`}
              >
                <div className="w-12 h-12 bg-[#0f2557] rounded-2xl flex items-center justify-center group-hover:bg-[#f97316] transition-colors">
                  <Icon className="text-[#f97316] group-hover:text-white" size={22} />
                </div>
                <span className="text-[#0f2557] font-semibold text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const islandIds = ['srilanka', 'thailand', 'maldives', 'mauritius', 'andaman'];
const cityIds = ['singapore', 'malaysia', 'vietnam', 'cambodia', 'uae'];
const adventureIds = ['azerbaijan', 'kazakhstan'];

function getPackageCategory(id: string) {
  if (islandIds.includes(id)) return { label: 'Island & Beach', icon: Waves };
  if (cityIds.includes(id)) return { label: 'City & Culture', icon: Building2 };
  if (adventureIds.includes(id)) return { label: 'Adventure & Nature', icon: Mountain };
  return { label: 'Getaway', icon: LayoutGrid };
}

function PackageCard({ pkg }: { pkg: TourPackage }) {
  const { label: categoryLabel, icon: CategoryIcon } = getPackageCategory(pkg.id);

  return (
    <article
      id={`pkg-${pkg.id}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-[#e2e8f0] hover:shadow-xl transition-all duration-300 flex flex-col scroll-mt-24"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.country}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f2557]/60 to-transparent" />
        {pkg.featured && (
          <div className="absolute top-3 right-3 bg-[#f97316] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
            Featured
          </div>
        )}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-[#0f2557] text-[10px] font-bold px-2.5 py-1.5 rounded-full uppercase tracking-wide shadow-lg">
          <CategoryIcon size={12} className="text-[#f97316]" />
          {categoryLabel}
        </div>
        <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-lg">
          <span className="text-[#0f2557] font-bold text-base font-heading">
            ₹{pkg.price.toLocaleString('en-IN')}
          </span>
          <span className="text-neutral-400 text-[10px] block leading-none">/ person</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-2">
          <span className="bg-[#f8faff] text-[#1e40af] text-xs font-semibold px-3 py-1 rounded-full border border-[#dbeafe]">
            {pkg.country}
          </span>
          <div className="flex items-center gap-1 text-sm">
            <Star className="text-[#f97316] fill-[#f97316]" size={13} />
            <span className="font-semibold text-neutral-700">{pkg.rating}</span>
          </div>
        </div>

        <h3 className="text-lg font-bold text-[#0f2557] font-heading mb-2">
          {pkg.title}
        </h3>
        <p className="text-neutral-500 text-sm leading-relaxed mb-3 line-clamp-2">
          {pkg.description}
        </p>

        <div className="flex items-center gap-4 text-neutral-500 text-xs mb-4">
          <span className="flex items-center gap-1.5">
            <Calendar size={13} className="text-[#f97316]" />
            {pkg.nights}N / {pkg.days}D
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={13} className="text-[#f97316]" />
            {pkg.destinations}
          </span>
        </div>

        {/* Highlights */}
        <div className="space-y-1.5 mb-5 flex-1">
          {pkg.highlights.map((h) => (
            <div key={h} className="flex items-center gap-2 text-neutral-600 text-sm">
              <Check size={14} className="text-[#f97316] shrink-0" />
              {h}
            </div>
          ))}
        </div>

        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 bg-[#0f2557] hover:bg-[#f97316] text-white font-semibold px-5 py-3 rounded-xl transition-all duration-200"
        >
          Enquire Now
          <ArrowRight size={16} />
        </a>
      </div>
    </article>
  );
}