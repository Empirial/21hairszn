
import React from "react";
import { Palette } from "lucide-react";
import { cn } from "@/lib/utils";

interface ColourSelectorProps {
  colors: string[];
  color: string;
  setColor: (color: string) => void;
  getDisplayColour: (color: string) => string;
}

const ColourSelector: React.FC<ColourSelectorProps> = ({
  colors,
  color,
  setColor,
  getDisplayColour,
}) => (
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
);

export default ColourSelector;
