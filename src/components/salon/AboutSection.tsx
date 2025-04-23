
import React from "react";

interface AboutSectionProps {
  title: string;
  description: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ title, description }) => {
  return (
    <section className="bg-white py-16" id="about">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img 
              src="https://placehold.co/600x600/f7e6e6/ff6f91" 
              alt="About 21HairSZN" 
              className="rounded-lg shadow-md w-full"
            />
          </div>
          <div>
            <h2 className="text-[#ff6f91] text-3xl font-bold mb-6">{title}</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">{description}</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#f7e6e6] p-4 rounded-lg text-center">
                <span className="block text-3xl font-bold text-[#ff6f91] mb-2">100%</span>
                <span className="text-gray-700">Quality Products</span>
              </div>
              <div className="bg-[#f7e6e6] p-4 rounded-lg text-center">
                <span className="block text-3xl font-bold text-[#ff6f91] mb-2">5+</span>
                <span className="text-gray-700">Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
