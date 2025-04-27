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
  getDisplayColour
}) => {};
export default ColourSelector;