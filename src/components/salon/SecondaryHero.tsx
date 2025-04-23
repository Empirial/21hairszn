import React from "react";
import { Button } from "./Button";

interface SecondaryHeroProps {
  backgroundImage: string;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export const SecondaryHero: React.FC<SecondaryHeroProps> = ({
  backgroundImage,
  title,
  description,
  buttonText,
  onButtonClick,
}) => {
  return (
    <section className="bg-[#f7e6e6] py-12">
      <div className="relative">
        <img
          src={backgroundImage}
          alt=""
          className="w-full h-[800px] object-cover"
        />
        <div className="absolute flex flex-col justify-center items-center inset-0">
          <h2 className="text-white text-5xl font-bold">{title}</h2>
          <p className="text-white text-lg font-normal max-w-[600px] text-center mt-4">
            {description}
          </p>
          <Button
            variant="primary"
            size="lg"
            className="mt-4"
            onClick={onButtonClick}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
};
