
import React from "react";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Search, Eye } from "lucide-react";

interface DiscoverItem {
  id: string;
  image: string;
  title: string;
  description?: string;
  link: string;
  label?: string;
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
  const isMobile = useIsMobile();

  return (
    <section className="bg-[#f7e6e6] py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-8 relative">
          <h2 className="text-[#ff6f91] text-2xl md:text-3xl font-bold">{title}</h2>
          {!!subtitle && (
            <p className="text-[#333] text-base md:text-lg font-normal mt-2">{subtitle}</p>
          )}
          <div className="absolute right-4 top-0">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative rounded-xl overflow-hidden group cursor-pointer bg-white shadow-lg hover:shadow-xl transition-all h-[400px]"
              onClick={() => navigate(item.link)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-transparent to-transparent px-6 py-6">
                <h3 className="text-white text-2xl font-bold mb-2">{item.title}</h3>
                {item.description && (
                  <p className="text-white text-sm mb-4">{item.description}</p>
                )}
                <div className="flex justify-between items-center">
                  {item.label && (
                    <span className="inline-block bg-white text-[#ff6f91] px-3 py-1 rounded-full text-xs font-semibold">
                      {item.label}
                    </span>
                  )}
                  <Button variant="secondary" size="sm" className="ml-auto flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
