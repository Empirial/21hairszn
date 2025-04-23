
import React from "react";
import { Button } from "@/components/ui/button";

interface PromotionSectionProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export const PromotionSection: React.FC<PromotionSectionProps> = ({
  title,
  subtitle,
  buttonText,
  onButtonClick,
}) => {
  return (
    <section className="bg-[#f7e6e6] py-16">
      <div className="container mx-auto px-4 md:px-12">
        <div className="bg-gradient-to-r from-[#ff6f91] to-[#ff9baa] rounded-lg p-8 md:p-16 text-center">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-3">{title}</h2>
          {subtitle && <p className="text-white text-lg mb-6">{subtitle}</p>}
          <Button
            variant="default"
            size="lg"
            onClick={onButtonClick}
            className="bg-white text-[#ff6f91] hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
};
