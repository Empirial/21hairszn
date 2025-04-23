
import React, { useState } from "react";
import LocProductCard, { CartItem } from "@/components/LocProductCard";
import CartDrawer from "@/components/CartDrawer";

// All prices & options from screenshots
const LOC_WIG_PRODUCTS = [
  {
    img: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=700&q=80",
    title: "Jungle Locs",
    lengths: [
      { label: "Waist length", price: 1080 },
      { label: "Butt length", price: 1180 }
    ],
    colors: ["Black", "Brown"],
    description: "Handcrafted Jungle Locs available in black or brown.",
    isWig: false,
  },
  {
    img: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=700&q=80",
    title: "Ocean Locs",
    lengths: [
      { label: "Waist length", price: 1260 },
      { label: "Butt length", price: 1320 }
    ],
    colors: ["Black", "Brown"],
    description: "Stunning Ocean Locs in classic shades.",
    isWig: false,
  },
  {
    img: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=700&q=80",
    title: "Distressed Locs",
    lengths: [
      { label: "Shoulder length", price: 800 },
      { label: "Waist length", price: 980 },
      { label: "Butt length", price: 1050 }
    ],
    colors: ["Black", "Brown"],
    description: "Natural-looking Distressed Locs - three lengths.",
    isWig: false,
  },
  {
    img: "https://images.unsplash.com/photo-1556228720-da28da58b344?auto=format&fit=crop&w=700&q=80",
    title: "Faux Locs",
    lengths: [
      { label: "Waist length", price: 950 },
      { label: "Butt length", price: 1050 }
    ],
    colors: ["Black", "Brown"],
    description: "Bold Faux Locs in timeless colors.",
    isWig: false,
  },
  {
    img: "https://images.unsplash.com/photo-1530673362162-5edde02c9d43?auto=format&fit=crop&w=700&q=80",
    title: "Goddess Locs",
    lengths: [
      { label: "Waist length", price: 1100 },
      { label: "Butt length", price: 1250 }
    ],
    colors: ["Black", "Brown"],
    description: "Premium Goddess Locs with a luxe finish.",
    isWig: false,
  },
  {
    img: "https://images.unsplash.com/photo-1510337550647-e84f83e341ca?auto=format&fit=crop&w=700&q=80",
    title: "Bohemian Locs",
    lengths: [
      { label: "Waist length", price: 1180 },
      { label: "Butt length", price: 1300 }
    ],
    colors: ["Black", "Brown"],
    description: "Fun, stylish Bohemian Locs.",
    isWig: false,
  },
  // Wigs with additional options
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
];

export default function LuxuryLocWigs() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAddToCart = (item: CartItem) => {
    setCart((prev) => [...prev, item]);
  };
  const handleRemove = (idx: number) => {
    setCart((prev) => prev.filter((_, i) => i !== idx));
  };
  const handleClear = () => setCart([]);

  return (
    <div className="min-h-screen bg-white flex flex-col px-2 pb-8 pt-3 relative">
      {/* Cart always visible at top */}
      <div className="flex w-full items-center justify-center mt-2 mb-7 z-50 relative">
        <div className="relative">
          <CartDrawer items={cart} onRemove={handleRemove} onClear={handleClear} />
        </div>
      </div>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-[#6E59A5] drop-shadow-sm">Luxury Loc Wigs Collection</h1>
        <p className="text-lg text-gray-700 mt-2 max-w-2xl mx-auto px-4 font-medium">
          Select from our curated line of Loc wigs and luxury loc styles in different lengths/prices. Wig options can add glueless or custom colours!
        </p>
      </div>
      <main className="flex-1 flex flex-col items-center w-full">
        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-3 auto-rows-fr items-start justify-items-center">
          {LOC_WIG_PRODUCTS.map((prod, idx) => {
            // Get the min and max prices for display in the price ranges
            const waistPrice = prod.lengths.find(l => l.label.toLowerCase().includes("waist"))?.price || prod.lengths[0].price;
            const buttPrice = prod.lengths.find(l => l.label.toLowerCase().includes("butt"))?.price || prod.lengths[prod.lengths.length - 1].price;
            
            return (
              <LocProductCard
                key={prod.title + idx}
                img={prod.img}
                title={prod.title}
                priceWaist={waistPrice}
                priceButt={buttPrice}
                fibrePrice={undefined} // No fibre options for now
                colors={prod.colors}
                description={prod.description}
                onAddToCart={handleAddToCart}
                lengths={prod.lengths}
                isWig={prod.isWig}
                colorCustomizationPrice={prod.colorCustomizationPrice}
                gluelessPrice={prod.gluelessPrice}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
