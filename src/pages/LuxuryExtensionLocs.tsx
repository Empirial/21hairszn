
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LocProductCard, { CartItem } from "@/components/LocProductCard";
import CartDrawer from "@/components/CartDrawer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const EXTENSION_LOC_PRODUCTS = [
  {
    img: "/lovable-uploads/6f0453d1-d48e-4639-a35b-92bee07ec251.png",
    title: "Classic Extension Locs",
    priceWaist: 750,
    priceButt: 850,
    fibrePrice: 350,
    colors: ["Black", "Brown", "Blonde", "Red", "Ginger"],
    description: "Classic extension locs with a natural look. Choose your length and color.",
  },
  {
    img: "/lovable-uploads/6f0453d1-d48e-4639-a35b-92bee07ec251.png",
    title: "Premium Extension Locs",
    priceWaist: 850,
    priceButt: 950,
    fibrePrice: 400,
    colors: ["Black", "Brown", "Blonde", "Red", "Grey"],
    description: "Premium extension locs for a more luxurious finish. Available in various colors.",
  },
  {
    img: "/lovable-uploads/6f0453d1-d48e-4639-a35b-92bee07ec251.png",
    title: "Goddess Extension Locs",
    priceWaist: 950,
    priceButt: 1050,
    fibrePrice: 400,
    colors: ["Black", "Brown", "Blonde", "Red"],
    description: "Beautiful goddess extension locs with a fuller look. Select your perfect style.",
  },
  {
    img: "/lovable-uploads/6f0453d1-d48e-4639-a35b-92bee07ec251.png",
    title: "Natural Extension Locs",
    priceWaist: 800,
    priceButt: 900,
    fibrePrice: 375,
    colors: ["Black", "Brown", "Blonde"],
    description: "Natural-looking extension locs that blend seamlessly with your own hair.",
  },
  {
    img: "/lovable-uploads/6f0453d1-d48e-4639-a35b-92bee07ec251.png",
    title: "Deluxe Extension Locs",
    priceWaist: 1050,
    priceButt: 1150,
    fibrePrice: 450,
    colors: ["Black", "Brown", "Blonde", "Grey", "Red"],
    description: "Our most luxurious extension locs with premium materials and styling.",
  }
];

export default function LuxuryExtensionLocs() {
  const navigate = useNavigate();
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAddToCart = (item: CartItem) => {
    setCart((prev) => [...prev, item]);
  };
  
  const handleRemove = (idx: number) => {
    setCart((prev) => prev.filter((_, i) => i !== idx));
  };
  
  const handleClear = () => setCart([]);

  return (
    <div className="min-h-screen bg-white flex flex-col px-2 md:px-4 pb-8 pt-3 relative">
      {/* Cart fixed at the very top & centered */}
      <div className="flex w-full items-center justify-center mt-2 mb-7 z-50 relative">
        <div className="relative">
          <CartDrawer items={cart} onRemove={handleRemove} onClear={handleClear} />
        </div>
      </div>
      
      {/* Page Heading and Description with Back Button */}
      <div className="flex flex-col items-center mb-8 relative">
        <Button 
          variant="outline" 
          size="sm" 
          className="absolute left-0 top-0 flex items-center gap-1"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
        
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#6E59A5] drop-shadow-sm mt-8 text-center">
          Luxury Extension Locs
        </h1>
        <p className="text-md md:text-lg text-gray-700 mt-2 max-w-2xl mx-auto px-4 font-medium text-center">
          Shop our premium extension locs collection. Choose your favorite color, length, and add fibre for a fuller look. Add your favorites to cart!
        </p>
      </div>
      
      {/* Product grid, fully auto-aligned */}
      <main className="flex-1 flex flex-col items-center w-full">
        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-3 items-stretch justify-items-center">
          {EXTENSION_LOC_PRODUCTS.map((prod, idx) => (
            <LocProductCard 
              key={prod.title + idx} 
              {...prod} 
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
