"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";
import { useIsMobile } from "../hooks/use-mobile";
import EnquiryModal from "./EnquiryModal";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();
  const isMobile = useIsMobile();
  
  const openEnquiryModal = () => {
    setIsModalOpen(true);
    setIsOpen(false); // Close mobile menu if open
  };
  
  // Close mobile menu when route changes or screen size changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname, isMobile]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Umrah Packages", path: "/#umrah-packages" },
    { 
      name: "Guides", 
      path: "/guides", 
      dropdown: [
        { name: "Hajj Guide", path: "/guides/hajj" },
        { name: "Umrah Guide", path: "/guides/umrah" },
      ]
    },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/#contact" },
  ];
  
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  
  const toggleDropdown = (path: string) => {
    setOpenDropdown(openDropdown === path ? null : path);
  };
  
  const closeDropdowns = () => {
    setOpenDropdown(null);
  };
  
  useEffect(() => {
    closeDropdowns();
  }, [pathname]);

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    
    if (path.startsWith('/#')) {
      const [basePath, hash] = path.split('#');
      if (window.location.pathname === basePath || window.location.pathname + '/' === basePath) {
        // If we're already on the page, just scroll to the section
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to the page with hash, Next.js will handle the scroll
        window.location.href = path;
      }
    } else {
      // Regular navigation
      window.location.href = path;
    }
    
    // Close mobile menu if open
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-orange-500 to-blue-600 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-6 py-1">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={(e) => handleNavClick(e, '/')}>
            <div className="bg-white/90 rounded-full p-2 shadow-lg ring-2 ring-white/50 hover:ring-white transition-all duration-300">
              <img 
                src="/lovable-uploads/galaxy-logo.png" 
                alt="Galaxy Tours and Travels" 
                className="h-16 w-auto drop-shadow-md hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-0.5">
            {navItems.map((item) => (
              <div key={item.path} className="relative">
                {item.dropdown ? (
                  <>
                    <button
                      suppressHydrationWarning
                      onClick={(e) => {
                        e.preventDefault();
                        toggleDropdown(item.path);
                      }}
                      aria-expanded={openDropdown === item.path}
                      className={cn(
                        "px-4 py-2 rounded-lg text-base font-medium transition-colors flex items-center",
                        pathname.startsWith(item.path) || item.dropdown?.some(subItem => pathname === subItem.path)
                          ? "bg-white/90 text-orange-600 font-bold shadow-md"
                          : "text-white hover:bg-white/20 hover:backdrop-blur-sm"
                      )}
                    >
                      {item.name}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`ml-1 h-3 w-3 transition-transform ${openDropdown === item.path ? 'rotate-180' : ''}`}
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>
                    {openDropdown === item.path && (
                      <div className="absolute top-full left-0 mt-1 w-40 bg-white rounded-md shadow-lg overflow-hidden z-20">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.path}
                            href={subItem.path}
                            className={cn(
                              "block px-4 py-2 text-sm text-gray-800 hover:bg-primary hover:text-white transition-colors",
                              pathname === subItem.path ? "bg-primary/10 font-medium" : ""
                            )}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.path}
                    onClick={(e) => handleNavClick(e, item.path)}
                    className={cn(
                      "px-4 py-2 rounded-lg text-base font-medium transition-colors",
                      pathname === item.path || (pathname === '/' && item.path === '/#umrah-packages')
                        ? 'bg-white/90 text-orange-600 font-bold shadow-md'
                        : 'text-white hover:bg-white/20 hover:backdrop-blur-sm'
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            {/* <Button 
              variant="hero" 
              size="sm" 
              className="ml-2 py-1 text-xs"
              onClick={openEnquiryModal}
            >
              Book Now
            </Button>
            <EnquiryModal 
              isOpen={isModalOpen} 
              onClose={() => setIsModalOpen(false)}
            /> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="bg-white/80 text-primary-dark hover:bg-white hover:text-primary border-accent/50"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container mx-auto px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.path}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.path)}
                      className={cn(
                        "flex justify-between items-center w-full px-4 py-3 rounded-md text-base font-medium transition-colors",
                        pathname.startsWith(item.path) || item.dropdown?.some(subItem => pathname === subItem.path)
                          ? "text-primary bg-primary/10"
                          : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                      )}
                    >
                      {item.name}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`ml-1 h-4 w-4 transition-transform ${openDropdown === item.path ? 'rotate-180' : ''}`}
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>
                    {openDropdown === item.path && (
                      <div className="ml-4 mt-1 space-y-1 border-l-2 border-primary/20 pl-4">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.path}
                            href={subItem.path}
                            className={cn(
                              "block px-4 py-2 rounded-md text-sm font-medium transition-colors",
                              pathname === subItem.path
                                ? "text-primary bg-primary/10"
                                : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                            )}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.path}
                    className={cn(
                      "block px-4 py-3 rounded-md text-base font-medium transition-colors",
                      pathname === item.path
                        ? "text-primary bg-primary/10"
                        : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            {/* <div className="pt-2">
              <Button 
                variant="hero" 
                className="w-full"
                onClick={openEnquiryModal}
              >
                Book Now
              </Button>
            </div> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;