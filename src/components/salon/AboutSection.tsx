import React from "react";

interface AboutSectionProps {
  title: string;
  description: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  description,
}) => {
  return (
    <section className="bg-[#f7e6e6] text-center py-12" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-[#ff6f91] text-[32px] font-bold">{title}</h2>
        <p className="text-[#333] text-lg font-normal max-w-[800px] mt-4 mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
};
