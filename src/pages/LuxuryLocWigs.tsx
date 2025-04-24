
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LocProductCard, { CartItem, LengthOption } from "@/components/LocProductCard";
import CartDrawer from "@/components/CartDrawer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

// Standardized product data structure
const LOC_WIG_PRODUCTS = [
  {
    img: "/lovable-uploads/616110d4-d2cd-4289-bc50-49bc661c5c49.png",
    title: "Island Wig",
    lengths: [
      { label: "20 inch", price: 2650 },
      { label: "22 inch", price: 2850 },
      { label: "24 inch", price: 3010 },
      { label: "26 inch", price: 3250 },
      { label: "28 inch", price: 3500 },
      { label: "30 inch", price: 3850 },
    ],
    colors: ["Black", "Brown"],
    description: "Island wig - super glam! Add glueless or colour customization.",
    isWig: true,
    colorCustomizationPrice: 350,
    gluelessPrice: 250,
  },
  {
    img: "/lovable-uploads/78c1dd6a-b68a-4649-9cd7-77bee6e9cb92.png",
    title: "Bohemian Wig",
    lengths: [
      { label: "18 inch", price: 2400 },
      { label: "20 inch", price: 2650 },
      { label: "22 inch", price: 2900 },
      { label: "24 inch", price: 3050 },
      { label: "26 inch", price: 3200 },
      { label: "28 inch", price: 3500 },
      { label: "30 inch", price: 3750 },
    ],
    colors: ["Black", "Brown"],
    description: "Classic Bohemian wig, easy to wear. Add glueless or colour customization.",
    isWig: true,
    colorCustomizationPrice: 600,
    gluelessPrice: 250,
  },
  {
    img: "/lovable-uploads/616110d4-d2cd-4289-bc50-49bc661c5c49.png",
    title: "Jungle Locs Wig",
    lengths: [
      { label: "18 inch", price: 2200 },
      { label: "20 inch", price: 2400 },
      { label: "22 inch", price: 2600 },
      { label: "24 inch", price: 2800 },
    ],
    colors: ["Black", "Brown"],
    description: "Handcrafted Jungle Locs wig with natural look.",
    isWig: true,
    colorCustomizationPrice: 350,
    gluelessPrice: 250,
  },
  {
    img: "/lovable-uploads/78c1dd6a-b68a-4649-9cd7-77bee6e9cb92.png",
    title: "Ocean Locs Wig",
    lengths: [
      { label: "18 inch", price: 2300 },
      { label: "20 inch", price: 2500 },
      { label: "22 inch", price: 2700 },
      { label: "24 inch", price: 2900 },
    ],
    colors: ["Black", "Brown"],
    description: "Stunning Ocean Locs wig in classic shades.",
    isWig: true,
    colorCustomizationPrice: 400,
    gluelessPrice: 250,
  },
  {
    img: "/lovable-uploads/616110d4-d2cd-4289-bc50-49bc661c5c49.png",
    title: "Distressed Locs Wig",
    lengths: [
      { label: "18 inch", price: 2100 },
      { label: "20 inch", price: 2300 },
      { label: "22 inch", price: 2500 },
      { label: "24 inch", price: 2700 },
    ],
    colors: ["Black", "Brown"],
    description: "Natural-looking Distressed Locs wig.",
    isWig: true,
    colorCustomizationPrice: 350,
    gluelessPrice: 250,
  },
  {
    img: "/lovable-uploads/78c1dd6a-b68a-4649-9cd7-77bee6e9cb92.png",
    title: "Faux Locs Wig",
    lengths: [
      { label: "18 inch", price: 2200 },
      { label: "20 inch", price: 2400 },
      { label: "22 inch", price: 2600 },
      { label: "24 inch", price: 2800 },
    ],
    colors: ["Black", "Brown"],
    description: "Bold Faux Locs wig in timeless colors.",
    isWig: true,
    colorCustomizationPrice: 400,
    gluelessPrice: 250,
  },
  {
    img: "/lovable-uploads/616110d4-d2cd-4289-bc50-49bc661c5c49.png",
    title: "Goddess Locs Wig",
    lengths: [
      { label: "18 inch", price: 2300 },
      { label: "20 inch", price: 2500 },
      { label: "22 inch", price: 2700 },
      { label: "24 inch", price: 2900 },
    ],
    colors: ["Black", "Brown"],
    description: "Premium Goddess Locs wig with a luxe finish.",
    isWig: true,
    colorCustomizationPrice: 350,
    gluelessPrice: 250,
  },
];

export default function LuxuryLocWigs() {
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
      {/* Cart always visible at top */}
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
          Luxury Loc Wigs Collection
        </h1>
        <p className="text-md md:text-lg text-gray-700 mt-2 max-w-2xl mx-auto px-4 font-medium text-center">
          Select from our curated line of Loc wigs in different lengths and styles. Add glueless option or custom colors for a perfect fit!
        </p>
      </div>
      
      <main className="flex-1 flex flex-col items-center w-full">
        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-3 items-stretch justify-items-center">
          {LOC_WIG_PRODUCTS.map((prod, idx) => (
            <LocProductCard
              key={prod.title + idx}
              img={prod.img}
              title={prod.title}
              priceWaist={prod.lengths[0].price}
              priceButt={prod.lengths[prod.lengths.length - 1].price}
              colors={prod.colors}
              description={prod.description}
              onAddToCart={handleAddToCart}
              lengths={prod.lengths}
              isWig={prod.isWig}
              colorCustomizationPrice={prod.colorCustomizationPrice}
              gluelessPrice={prod.gluelessPrice}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
