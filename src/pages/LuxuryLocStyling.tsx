
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
    description: "Lengths: Waist (R850), Butt (R950). Fibre +R400. Colours: Black, Blonde, White, Red, Ginger, Grey, Brown. Price excludes fibre.",
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
    description: "Lengths: Waist (R680), Butt (R800). Fibre +R380. Colours: Black, Blonde, Ginger, Brown. Price excludes fibre.",
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
    description: "Lengths: Waist (R600), Butt (R700). Fibre +R400. Many colours available including ombré blends. Price excludes fibre.",
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
    description: "Lengths: Waist (R650), Butt (R710). Fibre +R350. Extensive colour choices & ombré. Price excludes fibre.",
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
    description: "Lengths: Waist (R750), Butt (R820). Fibre +R400. Available in Black, Brown, Ginger, Blonde. Price excludes fibre.",
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
    description: "Lengths: Waist (R780), Butt (R880). Fibre +R400. Black, Blonde, White, Red, Ginger, Grey, Brown. Price excludes fibre.",
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
    description: "Lengths: Waist (R2250), Butt (R2850). Colours: Black, Brown. Custom colours available for an extra fee. Price includes fibre.",
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
    <div className="min-h-screen w-full bg-white flex flex-col pb-2 pt-3 relative">
      <main className="flex-1">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#EA6683]">
            Luxury Loc Styling & Haircare
          </h1>
          <p className="text-lg text-gray-700 mt-2 max-w-2xl mx-auto px-4">
            Select your preferred loc style, colour, and length! Add fibre for even more glam. All prices and options below—simply add to cart to begin your luxury hair journey.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 px-3">
          {LOCPRODUCTS.map((prod, idx) => (
            <LocProductCard key={prod.title + idx} {...prod} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </main>

      <CartDrawer items={cart} onRemove={handleRemove} onClear={handleClear} />
    </div>
  );
}
