import React from "react";
import { BookingForm, BookingFormData } from "./BookingForm";

interface BookingSectionProps {
  title: string;
  description: string;
  onSubmit: (formData: BookingFormData) => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  title,
  description,
  onSubmit,
}) => {
  return (
    <section className="bg-[#f7e6e6] py-16" id="booking">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-[#ff6f91] text-[32px] font-bold">{title}</h2>
            <p className="text-[#333] text-lg mt-2">{description}</p>
          </div>

          <BookingForm onSubmit={onSubmit} />
        </div>
      </div>
    </section>
  );
};
