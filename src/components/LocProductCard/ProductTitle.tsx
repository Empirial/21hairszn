
import React from "react";

interface ProductTitleProps {
  title: string;
}

const ProductTitle: React.FC<ProductTitleProps> = ({ title }) => (
  <h3 className="font-bold text-xl text-[#EA6683] text-center mb-2">{title}</h3>
);

export default ProductTitle;
