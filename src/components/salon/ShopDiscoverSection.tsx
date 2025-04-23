
import React from "react";
import { useNavigate } from "react-router-dom";

interface DiscoverItem {
  id: string;
  image: string;
  title: string;
  description?: string;
  link: string;
  label?: string; // "Category" or "Service"
}

interface ShopDiscoverSectionProps {
  title: string;
  subtitle?: string;
  items: DiscoverItem[];
}

export const ShopDiscoverSection: React.FC<ShopDiscoverSectionProps> = ({
  title,
  subtitle,
  items,
}) => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#f7e6e6] py-16">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-[#ff6f91] text-3xl font-bold">{title}</h2>
          {!!subtitle && (
            <p className="text-[#333] text-lg font-normal mt-2">{subtitle}</p>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative rounded-lg overflow-hidden group cursor-pointer bg-white shadow hover:shadow-xl transition-all"
              onClick={() => navigate(item.link)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[230px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#ff6f91]/70 via-transparent to-transparent px-4 py-4 opacity-90 group-hover:opacity-100 transition-opacity">
                <h3 className="text-white text-xl font-bold drop-shadow">{item.title}</h3>
                {item.description && (
                  <p className="text-white text-sm mt-1">{item.description}</p>
                )}
                {item.label && (
                  <span className="mt-4 inline-block bg-[#fff] text-[#ff6f91] px-3 py-1 rounded-full text-xs font-semibold self-start">
                    {item.label}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
