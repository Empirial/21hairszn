
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface Product {
  id: string;
  image: string;
  title: string;
  price: string;
  link: string;
}

interface FeaturedProductsProps {
  title: string;
  subtitle: string;
  products: Product[];
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  title,
  subtitle,
  products,
}) => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-16" id="featured-products">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-[#ff6f91] text-3xl font-bold">{title}</h2>
          <p className="text-[#333] text-lg font-normal mt-2">{subtitle}</p>
        </div>

        <div className="px-4 md:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {products.map((product) => (
                <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/4">
                  <div className="p-1">
                    <Card className="border border-[#f7e6e6] shadow-sm hover:shadow-md transition-shadow overflow-hidden rounded-lg">
                      <CardContent className="p-0">
                        <div className="relative overflow-hidden group">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <button
                            onClick={() => navigate(product.link)}
                            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#ff6f91] text-white py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          >
                            Quick View
                          </button>
                        </div>
                      </CardContent>

                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex left-0" />
            <CarouselNext className="hidden md:flex right-0" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
