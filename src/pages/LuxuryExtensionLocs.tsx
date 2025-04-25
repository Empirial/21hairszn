
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LocProductCard, { CartItem } from "@/components/LocProductCard";
import CartDrawer from "@/components/CartDrawer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const EXTENSION_LOC_PRODUCTS = [
  {
    img: "/lovable-uploads/6f0453d1-d48e-4639-a35b-92bee07ec251.png",
    title: "Jungle Locs",
    priceWaist: 1080,
    priceButt: 1180,
    fibrePrice: 350,
    colors: ["Black", "Brown", "Blonde", "Red", "Ginger"],
    description: "Premium Jungle Locs extensions. Waist length: R1080, Butt length: R1180. Choose your color and add fibre for a fuller look.",
  },
  {
    img: "/lovable-uploads/6f0453d1-d48e-4639-a35b-92bee07ec251.png",
    title: "Ocean Locs",
    priceWaist: 1260,
    priceButt: 1320,
    fibrePrice: 400,
    colors: ["Black", "Brown", "Blonde", "Red", "Grey"],
    description: "Ocean Locs extensions with a natural flow. Waist length: R1260, Butt length: R1320. Available in various colors.",
  },
  {
    img: "/lovable-uploads/6f0453d1-d48e-4639-a35b-92bee07ec251.png",
    title: "Distressed Locs",
    priceWaist: 980,
    priceButt: 1050,
    fibrePrice: 400,
    colors: ["Black", "Brown", "Blonde", "Red"],
    description: "Shoulder length: R800, Waist length: R980, Butt length: R1050. Select your perfect style and color.",
  },
  {
    img: "/lovable-uploads/6f0453d1-d48e-4639-a35b-92bee07ec251.png",
    title: "Faux Locs",
    priceWaist: 950,
    priceButt: 1050,
    fibrePrice: 375,
    colors: ["Black", "Brown", "Blonde"],
    description: "Faux Locs extensions. Waist length: R950, Butt length: R1050. Natural-looking that blend seamlessly with your own hair.",
  },
  {
    img: "/lovable-uploads/6f0453d1-d48e-4639-a35b-92bee07ec251.png",
    title: "Goddess Locs",
    priceWaist: 1180,
    priceButt: 1250,
    fibrePrice: 450,
    colors: ["Black", "Brown", "Blonde", "Grey", "Red"],
    description: "Goddess Locs extensions. Waist length: R1180, Butt length: R1250. Our most luxurious extension locs with premium materials.",
  },
  {
    img: "/lovable-uploads/6f0453d1-d48e-4639-a35b-92bee07ec251.png",
    title: "Bohemian Locs",
    priceWaist: 1180,
    priceButt: 1300,
    fibrePrice: 400,
    colors: ["Black", "Brown", "Blonde", "White", "Red", "Ginger", "Grey"],
    description: "Bohemian Locs extensions. Waist length: R1180, Butt length: R1300. Available in various colors for your perfect style.",
  }
];

export default function LuxuryExtensionLocs() {
  const navigate = useNavigate();
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from localStorage when component mounts
  React.useEffect(() => {
    const storedCart = localStorage.getItem('cartItems');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const handleAddToCart = (item: CartItem) => {
    const newCart = [...cart, item];
    setCart(newCart);
    localStorage.setItem('cartItems', JSON.stringify(newCart));
  };
  
  const handleRemove = (idx: number) => {
    const newCart = cart.filter((_, i) => i !== idx);
    setCart(newCart);
    localStorage.setItem('cartItems', JSON.stringify(newCart));
  };
  
  const handleClear = () => {
    setCart([]);
    localStorage.setItem('cartItems', JSON.stringify([]));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col px-2 md:px-4 pb-8 pt-3 relative">
      {/* Header with back button, title, and cart */}
      <div className="flex w-full items-center justify-between mt-2 mb-7 z-50 relative">
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center gap-1"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
        
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#6E59A5] drop-shadow-sm text-center">
          Luxury Extension Locs
        </h1>
        
        <div className="relative">
          <CartDrawer items={cart} onRemove={handleRemove} onClear={handleClear} />
        </div>
      </div>
      
      <p className="text-md md:text-lg text-gray-700 mt-2 max-w-2xl mx-auto px-4 font-medium text-center mb-8">
        Shop our premium extension locs collection. Choose your favorite color, length, and add fibre for a fuller look. Add your favorites to cart!
      </p>
      
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
