
import React, { useState } from "react";
import LocProductCard, { CartItem } from "@/components/LocProductCard";
import CartDrawer from "@/components/CartDrawer";

const LOCWIG_PRODUCTS = [
  {
    img: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=500&q=80",
    title: "Luxury Loc Wig - Ocean Locs",
    priceWaist: 3200,
    priceButt: 3600,
    fibrePrice: 0, // Fibre included in wigs
    colors: ["Black", "Blonde", "White", "Red", "Ginger", "Grey", "Brown"],
    description:
      "Waist: R3200, Butt: R3600. Custom luxury Ocean Loc Wig, choose your ideal length and colour. Fibre inclusive.",
  },
  {
    img: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=500&q=80",
    title: "Luxury Loc Wig - Jungle Locs",
    priceWaist: 2800,
    priceButt: 3200,
    fibrePrice: 0,
    colors: ["Black", "Blonde", "Ginger", "Brown"],
    description:
      "Waist: R2800, Butt: R3200. Lush Jungle Loc wig in natural and bold shades. Fibre inclusive.",
  },
  {
    img: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=500&q=80",
    title: "Luxury Loc Wig - Bohemian",
    priceWaist: 3500,
    priceButt: 3900,
    fibrePrice: 0,
    colors: ["Black", "Blonde", "White", "Red", "Ginger", "Grey", "Brown"],
    description:
      "Waist: R3500, Butt: R3900. Bohemian style, fibre included, select your most loved colour.",
  },
  {
    img: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=500&q=80",
    title: "Luxury Loc Wig - Human Hair Locs",
    priceWaist: 5250,
    priceButt: 6500,
    fibrePrice: 0,
    colors: ["Black", "Brown", "Custom (+R400)"],
    description:
      "Waist: R5250, Butt: R6500. 100% human hair luxury loc wig. Custom colours available for an additional R400. Fibre included.",
  },
  {
    img: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=500&q=80",
    title: "Luxury Loc Wig - Jumbo Distressed Locs",
    priceWaist: 3100,
    priceButt: 3500,
    fibrePrice: 0,
    colors: [
      "Black", "Brown", "Blonde", "White", "Ginger", "Red", "Blue", "Pink", "Grey", "Ombre (brown, red, maroon)"
    ],
    description:
      "Waist: R3100, Butt: R3500. Jumbo distressed style, fibre included, multiple colour choices.",
  }
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
      {/* Cart fixed at the very top, centered */}
      <div className="flex w-full items-center justify-center mt-2 mb-7 z-50 relative">
        <div className="relative">
          <CartDrawer items={cart} onRemove={handleRemove} onClear={handleClear} />
        </div>
      </div>
      {/* Page Heading and Description */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-[#6E59A5] drop-shadow-sm">
          Luxury Loc Wigs Collection
        </h1>
        <p className="text-lg text-gray-700 mt-2 max-w-2xl mx-auto px-4 font-medium">
          Shop our premium range of Luxury Loc Wigs—beautiful, bold, and totally glam! Select your color, preferred length, and get fibre included. Add to cart and start your transformation today.
        </p>
      </div>
      {/* Product grid, auto aligned */}
      <main className="flex-1 flex flex-col items-center w-full">
        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-3 auto-rows-fr items-start justify-items-center">
          {LOCWIG_PRODUCTS.map((prod, idx) => (
            <LocProductCard key={prod.title + idx} {...prod} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </main>
    </div>
  );
}
