// ============================================================================
// MACA (Umrah/Hajj pilgrimage) homepage — TEMPORARILY DISABLED / COMMENTED OUT
// The original content is preserved below (and also saved as a full backup
// in app/page.maca-backup.tsx.txt) so it can be restored later.
// ============================================================================
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Services from "./components/Services";
// import UmrahPackages from "./components/UmrahPackages";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
//
// export default function Home() {
//   return (
//     <main className="min-h-screen bg-white">
//       <Hero />
//       <About />
//       <UmrahPackages />
//       <Contact />
//       <Footer />
//     </main>
//   );
// }

// ============================================================================
// TOURIST (Galaxy Tours) homepage — now active on "/"
// ============================================================================
import TouristNavbar from "./tourist/TouristNavbar";
import TouristHero from "./tourist/TouristHero";
import TouristAbout from "./tourist/TouristAbout";
import Destinations from "./tourist/Destinations";
import Packages from "./tourist/Packages";
import FAQ from "./tourist/FAQ";
import TouristContact from "./tourist/TouristContact";
import TouristFooter from "./tourist/TouristFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <TouristNavbar />
      <main>
        <TouristHero />
        <TouristAbout />
        <Destinations />
        <Packages />
        <FAQ />
        <TouristContact />
      </main>
      <TouristFooter />
    </div>
  );
}