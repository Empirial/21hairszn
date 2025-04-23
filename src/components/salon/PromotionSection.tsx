import React from "react";
import { Button } from "./Button";

interface PromotionSectionProps {
  title: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export const PromotionSection: React.FC<PromotionSectionProps> = ({
  title,
  buttonText,
  onButtonClick,
}) => {
  return (
    <section className="bg-[#f7e6e6] text-center py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-[#ff6f91] text-[32px] font-bold">{title}</h2>
        <Button
          variant="primary"
          size="lg"
          className="mt-4"
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </div>
    </section>
  );
};
