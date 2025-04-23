
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Palette, Ruler, ShoppingBag } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

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
  fibrePrice?: number; // Optional, if not supplied product includes fibre
  colors: string[];
  description?: string;
  onAddToCart: (item: CartItem) => void;
  // Add the missing properties that we're passing from LuxuryLocWigs.tsx
  lengths?: LengthOption[];
  isWig?: boolean;
  colorCustomizationPrice?: number;
  gluelessPrice?: number;
}

const getDisplayColour = (color: string) => {
  // Match with tailwind/hex if possible, fallback to bg-neutral-600
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

export default function LocProductCard({
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
}: LocProductCardProps) {
  const [color, setColor] = useState(colors[0]);
  const [selectedLength, setSelectedLength] = useState(lengths ? lengths[0].label : "Waist length");
  const [withFibre, setWithFibre] = useState(false);
  const [withGlueless, setWithGlueless] = useState(false);
  const [withColorCustomization, setWithColorCustomization] = useState(false);

  // Determine price based on selected length or default to waist/butt lengths
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
  const fibreIncluded = fibrePrice === undefined;
  
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

  // Derive length options from lengths prop or use default
  const lengthOptions = lengths ? 
    lengths.map(l => l.label) : 
    ["Waist length", "Butt length"];

  return (
    <div className="bg-white rounded-[26px] p-5 pb-6 drop-shadow-md flex flex-col items-center mx-auto mb-8 w-full max-w-[350px] shadow relative">
      {/* image */}
      <img
        src={img}
        alt={title}
        className="rounded-[20px] w-full object-cover h-[240px] max-h-[240px] border-4 border-[#fff] shadow mb-3"
        style={{ objectPosition: "center" }}
      />
      {/* title */}
      <h3 className="font-bold text-xl text-[#EA6683] text-center mb-2">{title}</h3>
      {/* Description */}
      {description && (
        <div className="text-sm text-gray-700 text-center mb-2">{description}</div>
      )}

      {/* Color Selection */}
      <div className="w-full mt-2">
        <label className="flex mb-1 items-center gap-2 text-base font-medium text-black">
          <Palette className="w-5 h-5 text-[#EA6683]" /> Colour
        </label>
        <div className="flex gap-2 mb-2 flex-wrap">
          {colors.map((col) => (
            <button
              key={col}
              className={cn(
                "rounded-xl border-2 px-3 py-1 text-xs font-semibold min-w-[54px] transition bg-white",
                color === col
                  ? "border-[#EA6683] text-[#EA6683] ring-2 ring-[#ea668360]"
                  : "border-[#ececec] text-black"
              )}
              onClick={() => setColor(col)}
              aria-pressed={color === col}
              style={
                {
                  background:
                    getDisplayColour(col).startsWith("linear")
                      ? getDisplayColour(col)
                      : undefined,
                  color:
                    getDisplayColour(col).startsWith("linear") && color === col
                      ? "#EA6683"
                      : undefined,
                } as React.CSSProperties
              }
              type="button"
            >
              {col}
            </button>
          ))}
        </div>
      </div>

      {/* Length Selection (oval label and price) */}
      <div className="w-full mt-1 flex items-center gap-2">
        <span className="flex items-center gap-1 bg-[#ede6ed] px-4 py-1 rounded-full text-base font-semibold">
          <Ruler className="w-4 h-4 mr-1 text-[#8B5CF6]" />
          {selectedLength}
        </span>
        {/* Dropdown for length */}
        <Select
          value={selectedLength}
          onValueChange={(val) => setSelectedLength(val)}
        >
          <SelectTrigger className="w-[130px] ml-2 font-medium bg-white border-[#EA6683] text-[#EA6683]">
            <SelectValue placeholder="Length">{selectedLength}</SelectValue>
          </SelectTrigger>
          <SelectContent className="z-40 bg-white">
            {lengthOptions.map((opt) => (
              <SelectItem key={opt} value={opt}>
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {/* Show current price */}
        <span className="ml-auto font-bold text-lg text-[#EA6683] bg-[#f7e3ee] px-3 py-1 rounded-lg shadow border border-[#EA6683]">
          R{basePrice}
        </span>
      </div>
      
      {/* Wig specific options */}
      {isWig && (
        <div className="w-full mt-3">
          <div className="flex items-center gap-2 mb-2">
            <input
              type="checkbox"
              id={`${title}-glueless`}
              checked={withGlueless}
              onChange={(e) => setWithGlueless(e.target.checked)}
              className="accent-[#EA6683] w-4 h-4 mr-1"
            />
            <label htmlFor={`${title}-glueless`} className="text-base font-medium">
              Glueless Option (+R{gluelessPrice})
            </label>
          </div>
          
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id={`${title}-color-customization`}
              checked={withColorCustomization}
              onChange={(e) => setWithColorCustomization(e.target.checked)}
              className="accent-[#EA6683] w-4 h-4 mr-1"
            />
            <label htmlFor={`${title}-color-customization`} className="text-base font-medium">
              Custom Colour (+R{colorCustomizationPrice})
            </label>
          </div>
        </div>
      )}
      
      {/* Fibre Addon (only for non-wigs) */}
      {!isWig && (
        <div className="w-full mt-2 flex items-center gap-2">
          {fibreIncluded ? (
            <span className="block font-semibold text-[15px] text-[#191919] mt-2 bg-[#dceadc] px-3 py-1 rounded-full">
              Fibre Included
            </span>
          ) : (
            <>
              <input
                type="checkbox"
                id={`${title}-fibre`}
                checked={withFibre}
                onChange={(e) => setWithFibre(e.target.checked)}
                className="accent-[#EA6683] w-4 h-4 mr-2"
              />
              <label htmlFor={`${title}-fibre`} className="text-base font-medium">
                Add Fibre (+R{fibrePrice})
              </label>
            </>
          )}
        </div>
      )}
      
      {/* Price and Add to Cart */}
      <div className="w-full mt-4 flex flex-col items-center">
        <div className="font-bold text-lg text-[#EA6683] mb-2">
          Total: R{totalPrice}
        </div>
        <Button
          className="bg-[#EA6683] text-white w-full py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-[#EA6683]/90 mt-0"
          onClick={handleAddToCart}
        >
          <ShoppingBag className="w-5 h-5" />
          Add To Cart
        </Button>
      </div>
    </div>
  );
}
