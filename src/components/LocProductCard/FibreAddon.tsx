
import React from "react";

interface FibreAddonProps {
  isWig: boolean;
  fibreIncluded: boolean;
  withFibre: boolean;
  setWithFibre: (val: boolean) => void;
  fibrePrice?: number;
  title: string;
}

const FibreAddon: React.FC<FibreAddonProps> = ({
  isWig,
  fibreIncluded,
  withFibre,
  setWithFibre,
  fibrePrice,
  title
}) => {
  if (isWig) return null;
  return (
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
  );
};

export default FibreAddon;
