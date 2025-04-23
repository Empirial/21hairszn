
import React from "react";

interface ProductImageProps {
  img: string;
  title: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ img, title }) => (
  <img
    src={img}
    alt={title}
    className="rounded-[20px] w-full object-cover h-[240px] max-h-[240px] border-4 border-[#fff] shadow mb-3"
    style={{ objectPosition: "center" }}
  />
);

export default ProductImage;
