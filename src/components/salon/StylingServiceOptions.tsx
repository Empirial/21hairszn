import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

interface StylingServiceOptionsProps {
  onStylingOptionChange: (value: number) => void;
  onWigInstallationChange: (value: boolean) => void;
  onWigTreatmentChange: (value: boolean) => void;
  onCustomizationChange: (value: boolean) => void;
}

export function StylingServiceOptions({
  onStylingOptionChange,
  onWigInstallationChange,
  onWigTreatmentChange,
  onCustomizationChange
}: StylingServiceOptionsProps) {
  const [hasWigInstallation, setHasWigInstallation] = useState(false);
  const [hasWigTreatment, setHasWigTreatment] = useState(false);
  const [hasCustomization, setHasCustomization] = useState(false);
  const [stylingOption, setStylingOption] = useState<string | null>(null);

  const handleWigInstallationChange = (checked: boolean) => {
    setHasWigInstallation(checked);
    onWigInstallationChange(checked);
  };

  const handleWigTreatmentChange = (checked: boolean) => {
    setHasWigTreatment(checked);
    onWigTreatmentChange(checked);
  };

  const handleCustomizationChange = (checked: boolean) => {
    setHasCustomization(checked);
    onCustomizationChange(checked);
  };

  const handleStylingOptionChange = (value: string) => {
    setStylingOption(value);
    onStylingOptionChange(parseInt(value));
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Additional Service Options</h3>
        <p className="text-sm text-gray-500">Select any additional services you require</p>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between border rounded-md p-3">
          <div>
            <Label className="text-base font-medium">Wig Installation</Label>
            <p className="text-sm text-gray-500">Professional wig installation service</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-medium">R300</span>
            <input
              type="checkbox"
              checked={hasWigInstallation}
              onChange={(e) => handleWigInstallationChange(e.target.checked)}
              className="h-5 w-5 rounded border-gray-300 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="flex items-center justify-between border rounded-md p-3">
          <div>
            <Label className="text-base font-medium">Wig Treatment</Label>
            <p className="text-sm text-gray-500">Specialized wig treatment for longevity</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-medium">R400</span>
            <input
              type="checkbox"
              checked={hasWigTreatment}
              onChange={(e) => handleWigTreatmentChange(e.target.checked)}
              className="h-5 w-5 rounded border-gray-300 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="flex items-center justify-between border rounded-md p-3">
          <div>
            <Label className="text-base font-medium">Customization</Label>
            <p className="text-sm text-gray-500">Custom adjustments to fit your preferences</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-medium">R180</span>
            <input
              type="checkbox"
              checked={hasCustomization}
              onChange={(e) => handleCustomizationChange(e.target.checked)}
              className="h-5 w-5 rounded border-gray-300 focus:ring-indigo-500"
            />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <Label className="text-base font-medium">Styling Options</Label>
        <RadioGroup 
          value={stylingOption || ""} 
          onValueChange={handleStylingOptionChange}
          className="grid grid-cols-3 gap-2"
        >
          <div>
            <RadioGroupItem
              value="180"
              id="styling-basic"
              className="peer sr-only"
            />
            <Label
              htmlFor="styling-basic"
              className={cn(
                "flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 hover:border-gray-300 peer-data-[state=checked]:border-[#EA6683] [&:has([data-state=checked])]:border-[#EA6683] cursor-pointer text-center",
                stylingOption === "180" ? "border-[#EA6683]" : ""
              )}
            >
              <span className="text-sm font-medium">Basic</span>
              <span className="mt-1 font-bold">R180</span>
            </Label>
          </div>
          
          <div>
            <RadioGroupItem
              value="240"
              id="styling-standard"
              className="peer sr-only"
            />
            <Label
              htmlFor="styling-standard"
              className={cn(
                "flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 hover:border-gray-300 peer-data-[state=checked]:border-[#EA6683] [&:has([data-state=checked])]:border-[#EA6683] cursor-pointer text-center",
                stylingOption === "240" ? "border-[#EA6683]" : ""
              )}
            >
              <span className="text-sm font-medium">Standard</span>
              <span className="mt-1 font-bold">R240</span>
            </Label>
          </div>
          
          <div>
            <RadioGroupItem
              value="300"
              id="styling-premium"
              className="peer sr-only"
            />
            <Label
              htmlFor="styling-premium"
              className={cn(
                "flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 hover:border-gray-300 peer-data-[state=checked]:border-[#EA6683] [&:has([data-state=checked])]:border-[#EA6683] cursor-pointer text-center",
                stylingOption === "300" ? "border-[#EA6683]" : ""
              )}
            >
              <span className="text-sm font-medium">Premium</span>
              <span className="mt-1 font-bold">R300</span>
            </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}