
import React, { useState } from "react";
import { Button } from "./Button";

interface BookingFormProps {
  onSubmit: (formData: BookingFormData) => void;
  selectedProduct?: {
    title: string;
    color: string;
    length: string;
    price: number;
  };
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message: string;
  productDetails?: {
    title: string;
    color: string;
    length: string;
    price: number;
  };
}

export const BookingForm: React.FC<BookingFormProps> = ({ onSubmit, selectedProduct }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    email: "",
    phone: "",
    service: selectedProduct ? "luxury-loc-styling" : "",
    date: "",
    time: "",
    message: selectedProduct ? `I'm interested in booking for ${selectedProduct.title} in ${selectedProduct.color}, ${selectedProduct.length} length.` : "",
    productDetails: selectedProduct,
  });

  const [errors, setErrors] = useState<Partial<BookingFormData>>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when field is edited
    if (errors[name as keyof BookingFormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<BookingFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    if (!formData.date) {
      newErrors.date = "Date is required";
    }

    if (!formData.time) {
      newErrors.time = "Time is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 md:p-6 rounded-lg shadow-md">
      <h3 className="text-[#ff6f91] text-xl md:text-2xl font-bold mb-4">
        {selectedProduct ? `Book Your ${selectedProduct.title}` : "Book Your Appointment"}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="name" className="block text-[#333] mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md ${errors.name ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-[#333] mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md ${errors.email ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="phone" className="block text-[#333] mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md ${errors.phone ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        <div>
          <label htmlFor="service" className="block text-[#333] mb-1">
            Service
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md ${errors.service ? "border-red-500" : "border-gray-300"}`}
          >
            <option value="">Select a service</option>
            <option value="ocean-locs">Ocean Locs</option>
            <option value="jungle-locs">Jungle Locs</option>
            <option value="jumbo-distressed-locs">Jumbo Distressed Locs</option>
            <option value="distressed-locs">Distressed Locs</option>
            <option value="fringe-locs">Fringe Locs</option>
            <option value="bohemian-locs">Bohemian Locs</option>
            <option value="human-hair-bohemian-locs">Human Hair Bohemian Locs</option>
          </select>
          {errors.service && (
            <p className="text-red-500 text-sm mt-1">{errors.service}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="date" className="block text-[#333] mb-1">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md ${errors.date ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.date && (
            <p className="text-red-500 text-sm mt-1">{errors.date}</p>
          )}
        </div>

        <div>
          <label htmlFor="time" className="block text-[#333] mb-1">
            Time
          </label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md ${errors.time ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.time && (
            <p className="text-red-500 text-sm mt-1">{errors.time}</p>
          )}
        </div>
      </div>

      {selectedProduct && (
        <div className="mb-4 p-3 bg-[#f7e6e6] rounded-md">
          <h4 className="font-semibold text-[#333] mb-2">Selected Product Details:</h4>
          <div className="text-sm grid grid-cols-2 gap-2">
            <div>
              <span className="font-medium">Style:</span> {selectedProduct.title}
            </div>
            <div>
              <span className="font-medium">Color:</span> {selectedProduct.color}
            </div>
            <div>
              <span className="font-medium">Length:</span> {selectedProduct.length}
            </div>
            <div>
              <span className="font-medium">Price:</span> R{selectedProduct.price}
            </div>
          </div>
        </div>
      )}

      <div className="mb-4">
        <label htmlFor="message" className="block text-[#333] mb-1">
          Additional Information
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full p-2 border border-gray-300 rounded-md"
        ></textarea>
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full">
        {selectedProduct ? "Book Now" : "Book Appointment"}
      </Button>
      
      {selectedProduct && (
        <p className="text-sm text-center mt-3 text-gray-600">
          If you're done shopping, proceed to checkout your cart.
        </p>
      )}
    </form>
  );
};
