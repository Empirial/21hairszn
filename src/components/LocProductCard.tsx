
import React from "react";
import { toast } from "@/components/ui/sonner";
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
import { useLocProductCard } from "./LocProductCard/useLocProductCard";

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
  bookMode?: boolean;
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
  bookMode = false,
}) => {
  const {
    state: {
      color,
      selectedLength,
      withFibre,
      withGlueless,
      withColorCustomization
    },
    setters: {
      setColor,
      setSelectedLength,
      setWithFibre,
      setWithGlueless,
      setWithColorCustomization
    },
    computed: {
      basePrice,
      fibreIncluded,
      totalPrice,
      lengthOptions
    },
    createCartItem
  } = useLocProductCard({
    img,
    title,
    priceWaist,
    priceButt,
    fibrePrice,
    colors,
    lengths,
    isWig,
    colorCustomizationPrice,
    gluelessPrice,
  });

  const handleAddToCart = () => {
    onAddToCart(createCartItem());
    if (!bookMode) {
      toast("Added to cart!");
    }
  };

  return (
    <div className="bg-white rounded-[26px] p-4 sm:p-5 pb-6 drop-shadow-md flex flex-col items-center w-full h-full max-w-[350px] shadow relative">
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
        <AddToCartButton 
          onClick={handleAddToCart} 
          bookMode={bookMode} 
        />
      </div>
    </div>
  );
};

export default LocProductCard;
