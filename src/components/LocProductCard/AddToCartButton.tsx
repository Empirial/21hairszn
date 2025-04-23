
import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

interface AddToCartButtonProps {
  onClick: () => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ onClick }) => (
  <Button
    className="bg-[#EA6683] text-white w-full py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-[#EA6683]/90 mt-0"
    onClick={onClick}
  >
    <ShoppingBag className="w-5 h-5" />
    Add To Cart
  </Button>
);

export default AddToCartButton;
