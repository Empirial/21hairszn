
import React from "react";

interface WigOptionsProps {
  withGlueless: boolean;
  setWithGlueless: (val: boolean) => void;
  gluelessPrice?: number;
  withColorCustomization: boolean;
  setWithColorCustomization: (val: boolean) => void;
  colorCustomizationPrice?: number;
  title: string;
}

const WigOptions: React.FC<WigOptionsProps> = ({
  withGlueless,
  setWithGlueless,
  gluelessPrice,
  withColorCustomization,
  setWithColorCustomization,
  colorCustomizationPrice,
  title
}) => (
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
);

export default WigOptions;
