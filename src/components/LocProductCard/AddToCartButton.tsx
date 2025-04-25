
import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Calendar } from "lucide-react";

interface AddToCartButtonProps {
  onClick: () => void;
  bookMode?: boolean;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ onClick, bookMode = false }) => (
  <Button
    className={`${bookMode ? 'bg-[#6E59A5]' : 'bg-[#EA6683]'} text-white w-full py-2 rounded-lg font-bold flex items-center justify-center gap-2 hover:opacity-90 mt-0`}
    onClick={onClick}
  >
    {bookMode ? (
      <>
        <Calendar className="w-5 h-5" />
        Book Now
      </>
    ) : (
      <>
        <ShoppingBag className="w-5 h-5" />
        Add To Cart
      </>
    )}
  </Button>
);

export default AddToCartButton;
