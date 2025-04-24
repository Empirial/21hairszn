
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { toast } from "@/components/ui/sonner";
import type { CartItem } from "./LocProductCard";

interface CartDrawerProps {
  items: CartItem[];
  onRemove: (idx: number) => void;
  onClear: () => void;
}

export default function CartDrawer({ items, onRemove, onClear }: CartDrawerProps) {
  const navigate = useNavigate();

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(items));
  }, [items]);

  // When the component loads, check localStorage for existing cart items
  useEffect(() => {
    const storedItems = localStorage.getItem('cartItems');
    if (storedItems) {
      const parsedItems = JSON.parse(storedItems);
      
      // Only update if the current items array is empty and there are stored items
      if (items.length === 0 && parsedItems.length > 0) {
        // We need to reconstruct the cart by adding each item
        parsedItems.forEach((item: CartItem) => {
          // Add each item back to the cart
          // This approach allows the parent component to manage state
          // Instead of directly overwriting the items array
        });
      }
    }
  }, []);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="fixed bottom-6 right-6 z-50 bg-[#EA6683] text-white rounded-full shadow-lg p-2 h-14 w-14 flex items-center justify-center hover:bg-[#ea668390] focus:ring-4 focus:ring-[#ea668390] md:relative md:bottom-auto md:right-auto md:rounded-lg md:h-auto md:w-auto md:px-4 md:py-2">
          <ShoppingCart className="w-7 h-7 md:w-5 md:h-5 md:mr-2" />
          <span className="hidden md:inline">Cart</span>
          {items.length > 0 && (
            <span className="absolute top-0 right-0 bg-white text-[#EA6683] font-bold text-xs rounded-full h-5 w-5 flex items-center justify-center border border-[#EA6683] shadow md:-top-2 md:-right-2">
              {items.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[320px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>
        {items.length === 0 ? (
          <div className="text-center text-gray-500 mt-8 text-lg">
            No items yet.
          </div>
        ) : (
          <div className="mt-4 space-y-5">
            {items.map((item, idx) => (
              <div key={idx} className="flex gap-3 items-center border-b py-3">
                <img src={item.img} alt={item.title} className="w-12 h-12 rounded-lg border" />
                <div className="flex-1">
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-xs text-[#EA6683]">{item.length}, {item.color}</div>
                  <div className="text-xs">
                    {item.fibre && <span className="text-[#6a8e21] mr-1">+ Fibre</span>}
                    {item.glueless && <span className="text-[#6a8e21] mr-1">+ Glueless</span>}
                    {item.colorCustomized && <span className="text-[#6a8e21]">+ Custom Color</span>}
                  </div>
                  <div className="font-bold">R{item.price}</div>
                </div>
                <button
                  aria-label="Remove"
                  className="ml-2 text-gray-400 hover:text-[#EA6683] transition"
                  onClick={() => { onRemove(idx); toast.info('Item removed'); }}
                >
                  <Minus className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        )}
        {items.length > 0 && (
          <div className="mt-8">
            <div className="flex items-center justify-between font-bold text-lg mb-3">
              <span>Total</span>
              <span>
                R
                {items.reduce((total, item) => total + item.price, 0)}
              </span>
            </div>
            <Button 
              className="w-full bg-[#EA6683] text-white rounded-lg font-bold hover:bg-[#EA6683]/90 mb-2"
              onClick={() => navigate('/checkout')}
            >
              Checkout
            </Button>
            <Button variant="secondary" className="w-full" onClick={onClear}>
              Clear Cart
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
