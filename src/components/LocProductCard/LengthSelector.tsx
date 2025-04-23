
import React from "react";
import { Ruler } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface LengthSelectorProps {
  selectedLength: string;
  setSelectedLength: (len: string) => void;
  lengthOptions: string[];
  basePrice: number;
}

const LengthSelector: React.FC<LengthSelectorProps> = ({
  selectedLength,
  setSelectedLength,
  lengthOptions,
  basePrice
}) => (
  <div className="w-full mt-1 flex items-center gap-2">
    <span className="flex items-center gap-1 bg-[#ede6ed] px-4 py-1 rounded-full text-base font-semibold">
      <Ruler className="w-4 h-4 mr-1 text-[#8B5CF6]" />
      {selectedLength}
    </span>
    <Select
      value={selectedLength}
      onValueChange={setSelectedLength}
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
    <span className="ml-auto font-bold text-lg text-[#EA6683] bg-[#f7e3ee] px-3 py-1 rounded-lg shadow border border-[#EA6683]">
      R{basePrice}
    </span>
  </div>
);

export default LengthSelector;
