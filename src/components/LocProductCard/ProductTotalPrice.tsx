
import React from "react";

interface ProductTotalPriceProps {
  totalPrice: number;
}

const ProductTotalPrice: React.FC<ProductTotalPriceProps> = ({ totalPrice }) => (
  <div className="font-bold text-lg text-[#EA6683] mb-2">
    Total: R{totalPrice}
  </div>
);

export default ProductTotalPrice;
