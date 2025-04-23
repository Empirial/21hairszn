
import React from "react";

interface ProductDescriptionProps {
  description?: string;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({ description }) => (
  description
    ? <div className="text-sm text-gray-700 text-center mb-2">{description}</div>
    : null
);

export default ProductDescription;
