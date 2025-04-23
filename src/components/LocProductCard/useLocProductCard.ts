
import { useState } from "react";
import type { CartItem, LengthOption } from "../LocProductCard";

interface UseLocProductCardProps {
  img: string;
  title: string;
  priceWaist: number;
  priceButt: number;
  fibrePrice?: number;
  colors: string[];
  lengths?: LengthOption[];
  isWig?: boolean;
  colorCustomizationPrice?: number;
  gluelessPrice?: number;
}

export function useLocProductCard({
  img,
  title,
  priceWaist,
  priceButt,
  fibrePrice,
  colors,
  lengths,
  isWig = false,
  colorCustomizationPrice,
  gluelessPrice,
}: UseLocProductCardProps) {
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

  const lengthOptions = lengths
    ? lengths.map(l => l.label)
    : ["Waist length", "Butt length"];

  const createCartItem = (): CartItem => ({
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

  return {
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
      fibrePrice,
      gluelessPrice,
      colorCustomizationPrice,
      totalPrice,
      lengthOptions,
      isWig
    },
    createCartItem
  };
}
