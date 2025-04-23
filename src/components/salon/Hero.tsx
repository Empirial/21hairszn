import React from "react";
import { Button } from "./Button";
import { Navbar } from "./Navbar";

interface HeroProps {
  backgroundImage: string;
  title: string;
  description: string;
  logoImage: string;
}

export const Hero: React.FC<HeroProps> = ({
  backgroundImage,
  title,
  description,
  logoImage,
}) => {
  return (
    <header className="relative">
      <img
        src={backgroundImage}
        alt=""
        className="w-full h-[800px] object-cover"
      />
      <div className="absolute flex flex-col justify-between inset-0">
        <Navbar logo={logoImage} />

        <div className="flex flex-col items-center text-center px-4 pb-16">
          <h1 className="text-white text-5xl font-bold">{title}</h1>
          <p className="text-white text-lg font-normal max-w-[600px] mt-4">
            {description}
          </p>
          <Button variant="primary" size="lg" className="mt-4">
            Book Your Appointment Now!
          </Button>
        </div>
      </div>
    </header>
  );
};
