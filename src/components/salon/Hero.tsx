
import React from "react";
import { Button } from "@/components/ui/button";
import { Navbar } from "./Navbar";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

interface HeroProps {
  backgroundImage: string;
  title: string;
  description: string;
  logoImage: string;
}

export const Hero: React.FC<HeroProps> = ({
  backgroundImage,
  title,
  description,
  logoImage,
}) => {
  const navigate = useNavigate();

  return (
    <header className="relative min-h-[90vh] bg-gradient-to-b from-[#ff6f91]/10 to-[#ff6f91]/5">
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt=""
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-black/40" /> {/* Overlay for better text readability */}
      </div>

      <div className="absolute inset-0 flex flex-col justify-between">
        <Navbar logo={logoImage} />

        <div className="flex flex-col items-center text-center px-4 pb-32 relative z-10">
          <img 
            src="/lovable-uploads/65e0e8fe-f288-4ab9-a82c-7593e8717c1e.png" 
            alt="21 HAIR SZN"
            className="w-64 md:w-80 mb-8 drop-shadow-xl animate-fade-in"
          />
          <h1 className="text-white text-5xl md:text-7xl font-bold mb-6 tracking-wide animate-fade-in">{title}</h1>
          <p className="text-white text-xl md:text-2xl font-light max-w-[700px] mb-8 leading-relaxed animate-fade-in">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => navigate("/luxury-loc-wigs")}
              className="bg-[#ff6f91] hover:bg-[#ff6f91]/90 text-white px-8 py-6 text-lg rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Shop Wigs
            </Button>
            <Button
              onClick={() => navigate("/cart")}
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#ff6f91] px-8 py-6 text-lg rounded-full flex items-center shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <ShoppingCart className="mr-2" />
              View Cart
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
