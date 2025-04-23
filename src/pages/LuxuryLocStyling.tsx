
import React, { useState } from "react";
import LocProductCard, { CartItem } from "@/components/LocProductCard";
import CartDrawer from "@/components/CartDrawer";

const LOCPRODUCTS = [
  {
    img: "/lovable-uploads/6f0453d1-d48e-4639-a35b-92bee07ec251.png",
    title: "Ocean Locs",
    priceWaist: 850,
    priceButt: 950,
    fibrePrice: 400,
    colors: [
      "Black", "Blonde", "White", "Red", "Ginger", "Grey", "Brown"
    ],
    description: "Waist length: R850, Butt length: R950. Fibre +R400. Colours: Black, Blonde, White, Red, Ginger, Grey, Brown. Price excludes fibre.",
  },
  {
    img: "/lovable-uploads/6f0453d1-d48e-4639-a35b-92bee07ec251.png",
    title: "Jungle Locs",
    priceWaist: 680,
    priceButt: 800,
    fibrePrice: 380,
    colors: [
      "Black", "Blonde", "Ginger", "Brown"
    ],
    description: "Waist length: R680, Butt length: R800. Fibre +R380. Colours: Black, Blonde, Ginger, Brown. Price excludes fibre.",
  },
  {
    img: "/lovable-uploads/6f0453d1-d48e-4639-a35b-92bee07ec251.png",
    title: "Jumbo Distressed Locs",
    priceWaist: 600,
    priceButt: 700,
    fibrePrice: 400,
    colors: [
      "Black", "Brown", "Blonde", "White", "Ginger", "Red", "Blue", "Pink", "Ombre (brown, red, maroon)"
    ],
    description: "Waist length: R600, Butt length: R700. Fibre +R400. Many colours including ombré. Price excludes fibre.",
  },
  {
    img: "/lovable-uploads/6f0453d1-d48e-4639-a35b-92bee07ec251.png",
    title: "Distressed Locs",
    priceWaist: 650,
    priceButt: 710,
    fibrePrice: 350,
    colors: [
      "Black", "Brown", "Blonde", "Red", "Ginger", "White", "Blue", "Pink", "Ombre (blonde, red, maroon)", "Grey"
    ],
    description: "Waist length: R650, Butt length: R710. Fibre +R350. Colour choices & ombré. Price excludes fibre.",
  },
  {
    img: "/lovable-uploads/6f0453d1-d48e-4639-a35b-92bee07ec251.png",
    title: "Fringe Locs",
    priceWaist: 750,
    priceButt: 820,
    fibrePrice: 400,
    colors: [
      "Black", "Brown", "Ginger", "Blonde"
    ],
    description: "Waist length: R750, Butt length: R820. Fibre +R400. Available in Black, Brown, Ginger, Blonde. Price excludes fibre.",
  },
  {
    img: "/lovable-uploads/6f0453d1-d48e-4639-a35b-92bee07ec251.png",
    title: "Bohemian Locs",
    priceWaist: 780,
    priceButt: 880,
    fibrePrice: 400,
    colors: [
      "Black", "Blonde", "White", "Red", "Ginger", "Grey", "Brown"
    ],
    description: "Waist length: R780, Butt length: R880. Fibre +R400. Black, Blonde, White, Red, Ginger, Grey, Brown. Price excludes fibre.",
  },
  {
    img: "/lovable-uploads/6f0453d1-d48e-4639-a35b-92bee07ec251.png",
    title: "Human Hair Bohemian Locs",
    priceWaist: 2250,
    priceButt: 2850,
    fibrePrice: undefined, // Fibre included
    colors: [
      "Black", "Brown"
    ],
    description: "Waist length: R2250, Butt length: R2850. Colours: Black, Brown. Custom colours for a fee. Fibre included.",
  },
];

export default function LuxuryLocStyling() {
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
      {/* Cart fixed at the very top & centered */}
      <div className="flex w-full items-center justify-center mt-2 mb-7 z-50 relative">
        <div className="relative">
          <CartDrawer items={cart} onRemove={handleRemove} onClear={handleClear} />
        </div>
      </div>
      {/* Page Heading and Description */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-[#EA6683] drop-shadow-sm">
          Luxury Loc Styling & Haircare
        </h1>
        <p className="text-lg text-gray-700 mt-2 max-w-2xl mx-auto px-4 font-medium">
          Select your preferred loc style, colour, and length! Add fibre for more glam. All prices below—simply add your favorite to the cart to begin your luxury hair journey.
        </p>
      </div>
      {/* Product grid, fully auto-aligned */}
      <main className="flex-1 flex flex-col items-center w-full">
        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-3 auto-rows-fr items-start justify-items-center">
          {LOCPRODUCTS.map((prod, idx) => (
            <LocProductCard key={prod.title + idx} {...prod} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </main>
    </div>
  );
}
