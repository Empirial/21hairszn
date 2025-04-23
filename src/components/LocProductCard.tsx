
import React, { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import ColourSelector from "./LocProductCard/ColourSelector";
import LengthSelector from "./LocProductCard/LengthSelector";
import WigOptions from "./LocProductCard/WigOptions";
import FibreAddon from "./LocProductCard/FibreAddon";
import ProductImage from "./LocProductCard/ProductImage";
import ProductTitle from "./LocProductCard/ProductTitle";
import ProductDescription from "./LocProductCard/ProductDescription";
import ProductTotalPrice from "./LocProductCard/ProductTotalPrice";
import AddToCartButton from "./LocProductCard/AddToCartButton";

export type LengthOption = {
  label: string;
  price: number;
};

export type CartItem = {
  title: string;
  color: string;
  length: string;
  fibre: boolean;
  price: number;
  img: string;
  isWig?: boolean;
  glueless?: boolean;
  colorCustomized?: boolean;
};

interface LocProductCardProps {
  img: string;
  title: string;
  priceWaist: number;
  priceButt: number;
  fibrePrice?: number;
  colors: string[];
  description?: string;
  onAddToCart: (item: CartItem) => void;
  lengths?: LengthOption[];
  isWig?: boolean;
  colorCustomizationPrice?: number;
  gluelessPrice?: number;
}

const getDisplayColour = (color: string) => {
  const map: Record<string, string> = {
    Black: "#222",
    Blonde: "#fdf6d4",
    White: "#fff",
    Red: "#e74c3c",
    Ginger: "#eaaa56",
    Grey: "#aaa",
    Brown: "#44170B",
    Blue: "#64F2FF",
    Pink: "#FFDEE2",
    "Ombre (brown, red, maroon)": "linear-gradient(90deg, #6B4226 0%, #b11e3f 50%, #6c1c39 100%)",
    "Ombre (blonde, red, maroon)": "linear-gradient(90deg, #fdf6d4 0%, #b11e3f 50%, #6c1c39 100%)",
  };
  return map[color] || "#8E9196";
};

const LocProductCard: React.FC<LocProductCardProps> = ({
  img,
  title,
  priceWaist,
  priceButt,
  fibrePrice,
  colors,
  description,
  onAddToCart,
  lengths,
  isWig = false,
  colorCustomizationPrice,
  gluelessPrice,
}) => {
  const [color, setColor] = useState(colors[0]);
  const [selectedLength, setSelectedLength] = useState(lengths ? lengths[0].label : "Waist length");
  const [withFibre, setWithFibre] = useState(false);
  const [withGlueless, setWithGlueless] = useState(false);
  const [withColorCustomization, setWithColorCustomization] = useState(false);

  const fibreIncluded = fibrePrice === undefined;
  const getBasePrice = () => {
    if (lengths) {
      const selected = lengths.find(l => l.label === selectedLength);
      return selected ? selected.price : lengths[0].price;
    }
    return selectedLength.toLowerCase().includes("butt") ? priceButt : priceWaist;
  };
  const basePrice = getBasePrice();
  const fibreVal = withFibre && !fibreIncluded ? fibrePrice || 0 : 0;
  const gluelessVal = withGlueless && isWig ? gluelessPrice || 0 : 0;
  const colorCustomizationVal = withColorCustomization && isWig ? colorCustomizationPrice || 0 : 0;
  const totalPrice = basePrice + fibreVal + gluelessVal + colorCustomizationVal;

  const handleAddToCart = () => {
    onAddToCart({
      title,
      color,
      length: selectedLength,
      fibre: fibreIncluded || withFibre,
      price: totalPrice,
      img,
      isWig,
      glueless: withGlueless,
      colorCustomized: withColorCustomization
    });
    toast.success("Added to cart!");
  };

  const lengthOptions = lengths
    ? lengths.map(l => l.label)
    : ["Waist length", "Butt length"];

  return (
    <div className="bg-white rounded-[26px] p-5 pb-6 drop-shadow-md flex flex-col items-center mx-auto mb-8 w-full max-w-[350px] shadow relative">
      <ProductImage img={img} title={title} />
      <ProductTitle title={title} />
      <ProductDescription description={description} />
      <ColourSelector
        colors={colors}
        color={color}
        setColor={setColor}
        getDisplayColour={getDisplayColour}
      />
      <LengthSelector
        selectedLength={selectedLength}
        setSelectedLength={setSelectedLength}
        lengthOptions={lengthOptions}
        basePrice={basePrice}
      />
      {isWig && (
        <WigOptions
          withGlueless={withGlueless}
          setWithGlueless={setWithGlueless}
          gluelessPrice={gluelessPrice}
          withColorCustomization={withColorCustomization}
          setWithColorCustomization={setWithColorCustomization}
          colorCustomizationPrice={colorCustomizationPrice}
          title={title}
        />
      )}
      <FibreAddon
        isWig={isWig}
        fibreIncluded={fibreIncluded}
        withFibre={withFibre}
        setWithFibre={setWithFibre}
        fibrePrice={fibrePrice}
        title={title}
      />
      <div className="w-full mt-4 flex flex-col items-center">
        <ProductTotalPrice totalPrice={totalPrice} />
        <AddToCartButton onClick={handleAddToCart} />
      </div>
    </div>
  );
};

export default LocProductCard;
