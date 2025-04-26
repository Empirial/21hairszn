
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
  logoImage
}) => {
  const navigate = useNavigate();
  return <header className="relative">
      <img src={backgroundImage} alt="" className="w-full h-[700px] object-cover" />
      <div className="absolute flex flex-col justify-between inset-0">
        <Navbar logo="/lovable-uploads/2cab34ab-00dc-465c-a606-fedf0fb284c3.png" />

        <div className="flex flex-col items-center text-center pb-32 px-[24px]">
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-4 tracking-wide">{title}</h1>
          <p className="text-white text-xl font-normal max-w-[600px] mb-6">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={() => navigate("/luxury-loc-wigs")} className="bg-[#ff6f91] hover:bg-[#ff6f91]/90 text-white px-8 py-6 text-lg rounded-full">
              Shop Wigs
            </Button>
            <Button onClick={() => navigate("/cart")} variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#ff6f91] px-8 py-6 text-lg rounded-full flex items-center">
              <ShoppingCart className="mr-2" />
              View Cart
            </Button>
          </div>
        </div>
      </div>
    </header>;
};
