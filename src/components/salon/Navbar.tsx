import React, { useState } from "react";
import { Button } from "./Button";

interface NavbarProps {
  logo: string;
  logoAlt?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ logo, logoAlt = "" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center p-4">
      <img src={logo} alt={logoAlt} className="h-[50px]" />

      {/* Mobile Menu Button */}
      <div className="hidden items-center max-md:flex">
        <button onClick={toggleMenu} aria-label="Toggle menu">
          <i className="ti ti-menu text-white text-2xl" />
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="flex gap-x-6 max-md:hidden">
        <a href="#home" className="text-white text-base font-medium">
          Home Page
        </a>
        <a href="#services" className="text-white text-base font-medium">
          Our Services
        </a>
        <a href="#booking" className="text-white text-base font-medium">
          Book Now
        </a>
        <a href="#contact" className="text-white text-base font-medium">
          Contact Us
        </a>
      </div>

      {/* Book Now Button */}
      <Button variant="primary" size="md">
        Book Now!
      </Button>

      {/* Mobile Menu (Overlay) */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 md:hidden">
          <div className="flex flex-col items-center justify-center h-full">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4"
              aria-label="Close menu"
            >
              <i className="ti ti-x text-white text-2xl" />
            </button>
            <div className="flex flex-col items-center gap-y-6">
              <a href="#home" className="text-white text-xl font-medium">
                Home Page
              </a>
              <a href="#services" className="text-white text-xl font-medium">
                Our Services
              </a>
              <a href="#booking" className="text-white text-xl font-medium">
                Book Now
              </a>
              <a href="#contact" className="text-white text-xl font-medium">
                Contact Us
              </a>
              <Button variant="primary" size="lg" className="mt-4">
                Book Now!
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
