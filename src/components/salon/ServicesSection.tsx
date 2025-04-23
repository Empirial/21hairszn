import React from "react";
import { ServiceCard } from "./ServiceCard";

interface Service {
  id: string;
  image: string;
  title: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  primaryButtonAction?: () => void;
  secondaryButtonAction?: () => void;
}

interface ServicesSectionProps {
  title: string;
  subtitle: string;
  services: Service[];
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  title,
  subtitle,
  services,
}) => {
  return (
    <section className="bg-white py-12" id="services">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-[#ff6f91] text-[32px] font-bold">{title}</h2>
          <p className="text-[#333] text-lg font-normal mt-2">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 px-4 max-sm:grid-cols-1">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              image={service.image}
              title={service.title}
              primaryButtonText={service.primaryButtonText}
              secondaryButtonText={service.secondaryButtonText}
              primaryButtonAction={service.primaryButtonAction}
              secondaryButtonAction={service.secondaryButtonAction}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
