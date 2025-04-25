
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LocProductCard, { CartItem } from "@/components/LocProductCard";
import CartDrawer from "@/components/CartDrawer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { BookingForm, BookingFormData } from "@/components/salon/BookingForm";
import { toast } from "sonner";

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
  const navigate = useNavigate();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [bookingProduct, setBookingProduct] = useState<CartItem | null>(null);
  const [bookingDialogOpen, setBookingDialogOpen] = useState(false);

  // Load cart from localStorage when component mounts
  React.useEffect(() => {
    const storedCart = localStorage.getItem('cartItems');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const handleBookNow = (item: CartItem) => {
    setBookingProduct(item);
    setBookingDialogOpen(true);
  };

  const handleBookingSubmit = (formData: BookingFormData) => {
    console.log("Booking submitted:", formData);
    toast.success("Your booking has been submitted!");
    setBookingDialogOpen(false);
    setBookingProduct(null);
  };

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
        
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#EA6683] drop-shadow-sm text-center">
          Luxury Loc Styling & Haircare
        </h1>
        
        <div className="relative">
          <CartDrawer items={cart} onRemove={handleRemove} onClear={handleClear} />
        </div>
      </div>
      
      <p className="text-md md:text-lg text-gray-700 mt-2 max-w-2xl mx-auto px-4 font-medium text-center mb-8">
        Select your preferred loc style, colour, and length! Add fibre for more glam. All prices below—simply book your favorite to begin your luxury hair journey.
      </p>
      
      {/* Product grid, fully auto-aligned */}
      <main className="flex-1 flex flex-col items-center w-full">
        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-3 items-stretch justify-items-center">
          {LOCPRODUCTS.map((prod, idx) => (
            <LocProductCard 
              key={prod.title + idx} 
              {...prod} 
              onAddToCart={handleBookNow}
              bookMode={true}
            />
          ))}
        </div>
      </main>
      
      {/* Booking Dialog */}
      <Dialog open={bookingDialogOpen} onOpenChange={setBookingDialogOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
          {bookingProduct && (
            <div className="py-2">
              <BookingForm 
                onSubmit={handleBookingSubmit} 
                selectedProduct={{
                  title: bookingProduct.title,
                  color: bookingProduct.color,
                  length: bookingProduct.length,
                  price: bookingProduct.price
                }}
              />
              <div className="mt-4 flex justify-center">
                <Button 
                  variant="outline" 
                  className="mr-2"
                  onClick={() => {
                    if (bookingProduct) {
                      handleAddToCart(bookingProduct);
                      setBookingDialogOpen(false);
                    }
                  }}
                >
                  Add to Cart Instead
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/checkout')}
                >
                  Go to Checkout
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
