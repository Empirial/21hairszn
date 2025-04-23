
import React from "react";
import { useNavigate } from "react-router-dom";

interface Category {
  id: string;
  image: string;
  title: string;
  link: string;
}

interface CategoryShowcaseProps {
  title: string;
  categories: Category[];
}

export const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({
  title,
  categories,
}) => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#f7e6e6] py-16">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-[#ff6f91] text-3xl font-bold">{title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative rounded-lg overflow-hidden group cursor-pointer"
              onClick={() => navigate(category.link)}
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-50">
                <div className="text-center">
                  <h3 className="text-white text-2xl font-bold mb-2">{category.title}</h3>
                  <span className="inline-block bg-[#ff6f91] text-white py-2 px-4 rounded-full">
                    Shop Now
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
