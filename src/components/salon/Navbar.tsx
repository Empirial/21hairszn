
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import CartDrawer from "@/components/CartDrawer";

interface NavbarProps {
  logo: string;
  logoAlt?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ logo, logoAlt = "" }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cart, setCart] = useState([]);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-4xl bg-white/90 backdrop-blur-sm rounded-full shadow-lg z-50 py-2 px-6">
      <div className="flex items-center justify-between">
        <img src="/lovable-uploads/7aeec13b-93a5-42de-a333-6945090ecfae.png" alt="21HairSZN" className="h-12" />
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-gray-700 hover:text-[#EA6683] transition-colors">Home</a>
          <a href="/luxury-loc-wigs" className="text-gray-700 hover:text-[#EA6683] transition-colors">Wigs</a>
          <a href="/luxury-loc-styling" className="text-gray-700 hover:text-[#EA6683] transition-colors">Styling</a>
          <a href="/luxury-extension-locs" className="text-gray-700 hover:text-[#EA6683] transition-colors">Extensions</a>
        </div>

        <CartDrawer items={cart} onRemove={() => {}} onClear={() => {}} />

        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg p-4">
          <div className="flex flex-col space-y-3">
            <a href="/" className="text-gray-700 hover:text-[#EA6683] transition-colors">Home</a>
            <a href="/luxury-loc-wigs" className="text-gray-700 hover:text-[#EA6683] transition-colors">Wigs</a>
            <a href="/luxury-loc-styling" className="text-gray-700 hover:text-[#EA6683] transition-colors">Styling</a>
            <a href="/luxury-extension-locs" className="text-gray-700 hover:text-[#EA6683] transition-colors">Extensions</a>
          </div>
        </div>
      )}
    </nav>
  );
};
