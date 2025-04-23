
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  id: string;
  content: string;
  author: string;
  role: string;
}

interface TestimonialsProps {
  title: string;
  testimonials: Testimonial[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({
  title,
  testimonials,
}) => {
  return (
    <section className="bg-[#f7e6e6] py-16" id="testimonials">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-[#ff6f91] text-3xl font-bold">{title}</h2>
        </div>

        <div className="px-4 md:px-12">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="border border-[#f7e6e6] shadow-sm rounded-lg bg-white h-full">
                      <CardContent className="p-6 flex flex-col justify-between h-full">
                        <div className="mb-4">
                          <div className="flex gap-1 mb-4">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <svg
                                key={star}
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="#ff6f91"
                                stroke="#ff6f91"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                              </svg>
                            ))}
                          </div>
                          <p className="text-gray-600 italic text-lg">"{testimonial.content}"</p>
                        </div>
                        <div>
                          <p className="font-bold text-[#333]">{testimonial.author}</p>
                          <p className="text-gray-500">{testimonial.role}</p>
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
