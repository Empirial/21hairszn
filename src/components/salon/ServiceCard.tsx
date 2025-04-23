import React from "react";
import { Button } from "./Button";

interface ServiceCardProps {
  image: string;
  title: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  primaryButtonAction?: () => void;
  secondaryButtonAction?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonAction,
  secondaryButtonAction,
}) => {
  return (
    <div className="relative">
      <img
        src={image}
        alt={title}
        className="w-full h-[400px] object-cover rounded-[8px]"
      />
      <div className="absolute bg-black bg-opacity-50 flex flex-col justify-end p-4 rounded-lg inset-0">
        <h3 className="text-white text-xl font-semibold">{title}</h3>
        <div className="flex gap-x-2 mt-2">
          <Button variant="primary" size="sm" onClick={primaryButtonAction}>
            {primaryButtonText}
          </Button>
          <Button variant="secondary" size="sm" onClick={secondaryButtonAction}>
            {secondaryButtonText}
          </Button>
        </div>
      </div>
    </div>
  );
};
