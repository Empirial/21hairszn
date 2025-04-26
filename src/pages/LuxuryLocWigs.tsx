import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LocProductCard, { CartItem } from "@/components/LocProductCard";
import CartDrawer from "@/components/CartDrawer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { SearchAndFilter } from "@/components/salon/SearchAndFilter";

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
    title: "Ocean Loc Wig",
    lengths: [
      { label: "20 inch", price: 2650 },
      { label: "22 inch", price: 2900 },
      { label: "24 inch", price: 3050 },
      { label: "26 inch", price: 3200 },
      { label: "28 inch", price: 3500 },
      { label: "30 inch", price: 3750 },
    ],
    colors: ["Black", "Brown"],
    description: "Stunning Ocean Locs wig in classic shades.",
    isWig: true,
    colorCustomizationPrice: 600,
    gluelessPrice: 250,
  },
  {
    img: "/lovable-uploads/78c1dd6a-b68a-4649-9cd7-77bee6e9cb92.png",
    title: "Distressed Loc Wig",
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
    description: "Natural-looking Distressed Locs wig.",
    isWig: true,
    colorCustomizationPrice: 600,
    gluelessPrice: 250,
  },
  {
    img: "/lovable-uploads/616110d4-d2cd-4289-bc50-49bc661c5c49.png",
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
    img: "/lovable-uploads/78c1dd6a-b68a-4649-9cd7-77bee6e9cb92.png",
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
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("popular");

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

  const filteredProducts = LOC_WIG_PRODUCTS
    .filter(prod => 
      prod.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.description?.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortOption) {
        case "priceAsc":
          return a.lengths[0].price - b.lengths[0].price;
        case "priceDesc":
          return b.lengths[0].price - a.lengths[0].price;
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-white flex flex-col px-2 md:px-4 pb-8 pt-3 relative">
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
          Luxury Loc Wigs Collection
        </h1>
        
        <div className="relative">
          <CartDrawer items={cart} onRemove={handleRemove} onClear={handleClear} />
        </div>
      </div>
      
      <p className="text-md md:text-lg text-gray-700 mt-2 max-w-2xl mx-auto px-4 font-medium text-center mb-8">
        Select from our curated line of Loc wigs in different lengths and styles. Add glueless option or custom colors for a perfect fit!
      </p>

      <SearchAndFilter 
        onSearch={setSearchQuery}
        onSort={setSortOption}
      />
      
      <main className="flex-1 flex flex-col items-center w-full">
        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-3 items-stretch justify-items-center">
          {filteredProducts.map((prod, idx) => (
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
