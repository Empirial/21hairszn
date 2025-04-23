
import React from "react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  image: string;
  title: string;
  description?: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  primaryButtonAction?: () => void;
  secondaryButtonAction?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonAction,
  secondaryButtonAction,
}) => {
  return (
    <div className="relative bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
      <img
        src={image}
        alt={title}
        className="w-full h-[250px] object-cover"
      />
      <div className="p-5">
        <h3 className="text-[#333] text-xl font-semibold mb-2">{title}</h3>
        {description && (
          <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        )}
        <div className="flex flex-col sm:flex-row gap-2">
          <Button 
            onClick={primaryButtonAction}
            className="bg-[#ff6f91] text-white hover:bg-[#ff6f91]/90 flex-1"
          >
            {primaryButtonText}
          </Button>
          <Button 
            variant="outline"
            onClick={secondaryButtonAction}
            className="border-[#ff6f91] text-[#ff6f91] hover:bg-[#ff6f91]/10 flex-1"
          >
            {secondaryButtonText}
          </Button>
        </div>
      </div>
    </div>
  );
};
