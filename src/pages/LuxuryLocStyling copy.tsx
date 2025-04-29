import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LocProductCard, { CartItem } from "@/components/LocProductCard";
import CartDrawer from "@/components/CartDrawer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { SearchAndFilter } from "@/components/salon/SearchAndFilter";
import { toast } from "sonner";

const WIGS_AND_BUNDLES = [
  {
    img: "/lovable-uploads/Deep Wave.jpg",
    title: "Deep Wave Bundle",
    lengths: [
      { label: "12 inch", price: 1200 },
      { label: "14 inch", price: 1400 },
      { label: "16 inch", price: 1600 },
      { label: "18 inch", price: 1800 },
      { label: "20 inch", price: 2000 },
      { label: "22 inch", price: 2200 },
    ],
    colors: ["Natural Black", "Brown", "Honey Blonde"],
    description: "Premium quality deep wave human hair bundles. Perfect for a voluminous, textured look.",
    isWig: false,
    colorCustomizationPrice: 350,
  },
  {
    img: "/lovable-uploads/Body Wave.jpg",
    title: "Body Wave Bundle",
    lengths: [
      { label: "12 inch", price: 1250 },
      { label: "14 inch", price: 1450 },
      { label: "16 inch", price: 1650 },
      { label: "18 inch", price: 1850 },
      { label: "20 inch", price: 2050 },
      { label: "22 inch", price: 2250 },
    ],
    colors: ["Natural Black", "Brown", "Honey Blonde"],
    description: "Luxurious body wave human hair bundles with natural movement and shine.",
    isWig: false,
    colorCustomizationPrice: 350,
  },
  {
    img: "/lovable-uploads/Straight.jpg",
    title: "Straight Bundle",
    lengths: [
      { label: "12 inch", price: 1150 },
      { label: "14 inch", price: 1350 },
      { label: "16 inch", price: 1550 },
      { label: "18 inch", price: 1750 },
      { label: "20 inch", price: 1950 },
      { label: "22 inch", price: 2150 },
    ],
    colors: ["Natural Black", "Brown", "Honey Blonde"],
    description: "Premium straight human hair bundles. Sleek, smooth, and easy to style.",
    isWig: false,
    colorCustomizationPrice: 350,
  },
  {
    img: "/lovable-uploads/Kinky Straight.jpg",
    title: "Kinky Straight Bundle",
    lengths: [
      { label: "12 inch", price: 1300 },
      { label: "14 inch", price: 1500 },
      { label: "16 inch", price: 1700 },
      { label: "18 inch", price: 1900 },
      { label: "20 inch", price: 2100 },
      { label: "22 inch", price: 2300 },
    ],
    colors: ["Natural Black", "Brown"],
    description: "Premium kinky straight human hair bundles. Perfect for a natural, textured look.",
    isWig: false,
    colorCustomizationPrice: 400,
  },
  {
    img: "/lovable-uploads/Bob Wig.jpg",
    title: "Bob Wig",
    lengths: [
      { label: "8 inch", price: 1800 },
      { label: "10 inch", price: 2000 },
      { label: "12 inch", price: 2200 },
    ],
    colors: ["Natural Black", "Brown", "Honey Blonde"],
    description: "Stylish bob wig made with premium human hair. Easy to wear and natural-looking.",
    isWig: true,
    colorCustomizationPrice: 350,
    gluelessPrice: 250,
  },
  {
    img: "/lovable-uploads/Straight Wig.jpg",
    title: "Straight Full Lace Wig",
    lengths: [
      { label: "14 inch", price: 2400 },
      { label: "16 inch", price: 2600 },
      { label: "18 inch", price: 2800 },
      { label: "20 inch", price: 3000 },
      { label: "22 inch", price: 3200 },
    ],
    colors: ["Natural Black", "Brown", "Honey Blonde"],
    description: "Premium full lace straight wig with natural hairline. Custom sizing available.",
    isWig: true,
    colorCustomizationPrice: 350,
    gluelessPrice: 250,
  },
];

export default function LuxuryWigsAndBundles() {
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
    toast.success(`${item.title} added to cart!`);
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

  const filteredProducts = WIGS_AND_BUNDLES
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
        
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#EA6683] drop-shadow-sm text-center">
          Luxury Wigs And Bundles
        </h1>
        
        <div className="relative">
          <CartDrawer items={cart} onRemove={handleRemove} onClear={handleClear} />
        </div>
      </div>
      
      <p className="text-md md:text-lg text-gray-700 mt-2 max-w-2xl mx-auto px-4 font-medium text-center mb-8">
        Shop our premium quality human hair wigs and bundles. Choose your perfect length, color, and style for a stunning transformation!
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
              gluelessPrice={prod.isWig ? prod.gluelessPrice : undefined}
            />
          ))}
        </div>
      </main>
    </div>
  );
}