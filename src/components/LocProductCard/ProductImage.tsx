import React from "react";
interface ProductImageProps {
  img: string;
  title: string;
}
const ProductImage: React.FC<ProductImageProps> = ({
  img,
  title
}) => <img src={img} alt={title} style={{
  objectPosition: "center"
}} className="rounded-[20px] w-full h-[240px] max-h-[240px] border-4 border-[#fff] shadow mb-3 object-contain" />;
export default ProductImage;