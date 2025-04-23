import React from "react";
import { Hero } from "@/components/salon/Hero";
import { AboutSection } from "@/components/salon/AboutSection";
import { ServicesSection } from "@/components/salon/ServicesSection";
import { PromotionSection } from "@/components/salon/PromotionSection";
import { SecondaryHero } from "@/components/salon/SecondaryHero";
import { Footer } from "@/components/salon/Footer";
import { BookingSection } from "@/components/salon/BookingSection";
import { BookingFormData } from "@/components/salon/BookingForm";
import { toast } from "sonner";

const Index = () => {
  // Mock function to handle form submission
  const handleBookingSubmit = (formData: BookingFormData) => {
    console.log("Booking form submitted:", formData);
    // In a real application, you would send this data to your backend
    toast.success("Booking request submitted! We will contact you shortly.");
  };

  // Services data
  const services = [
    {
      id: "1",
      image: "https://placehold.co/600x400/eeeeee/eeeeee",
      title: "Luxury Extension Locs",
      primaryButtonText: "Shop Now",
      secondaryButtonText: "View More",
      primaryButtonAction: () => (window.location.href = "#shop"),
      secondaryButtonAction: () => (window.location.href = "#details"),
    },
    {
      id: "2",
      image: "https://placehold.co/600x400/cccccc/cccccc",
      title: "Luxury Wigs And Bundles",
      primaryButtonText: "Shop Now",
      secondaryButtonText: "View More",
      primaryButtonAction: () => (window.location.href = "#shop"),
      secondaryButtonAction: () => (window.location.href = "#details"),
    },
    {
      id: "3",
      image: "https://placehold.co/600x400/aaaaaa/aaaaaa",
      title: "Luxury Loc Styling & Haircare Services",
      primaryButtonText: "Book Now",
      secondaryButtonText: "View More",
      primaryButtonAction: () => (window.location.href = "#booking"),
      secondaryButtonAction: () => (window.location.href = "#details"),
    },
    {
      id: "4",
      image: "https://placehold.co/600x400/888888/888888",
      title: "Luxury Loc Wigs",
      primaryButtonText: "Shop Now",
      secondaryButtonText: "View More",
      primaryButtonAction: () => (window.location.href = "#shop"),
      secondaryButtonAction: () => (window.location.href = "#details"),
    },
  ];

  // Footer links
  const footerLinks = [
    {
      id: "1",
      text: "Privacy Policy",
      href: "/privacy",
    },
    {
      id: "2",
      text: "Terms of Use",
      href: "/terms",
    },
    {
      id: "3",
      text: "Cookie Settings",
      href: "#cookies",
    },
  ];

  return (
    <div className="bg-[#f7e6e6]">
      {/* Hero Section */}
      <Hero
        backgroundImage="https://placehold.co/1440x800/cccccc/cccccc"
        title="21 HAIR SZN"
        description="At 21HairSZN, we believe that your hair is your crown, and we're here to help you reign in style. Experience luxurious hair transformations that elevate your look and boost your confidence."
        logoImage="https://placehold.co/100x50/ffffff/ffffff"
      />

      {/* About Section */}
      <AboutSection
        title="Who's this Divaa?"
        description="Where hair meets Art. 21HairSzn stylists and artisans are dedicated to creating one-of-a-kind looks that reflect your unique personality & style. Don't be shy, get into it & explore our wide range of unique styles 💋"
      />

      {/* Services Section */}
      <ServicesSection
        title="Our Services"
        subtitle="Explore Our Different Services And Products."
        services={services}
      />

      {/* Promotion Section */}
      <PromotionSection
        title="Transform Your Hair, Transform Your Confidence."
        buttonText="Book Your Appointment Now!"
        onButtonClick={() => (window.location.href = "#booking")}
      />

      {/* Booking Section */}
      <BookingSection
        title="Book Your Appointment"
        description="Schedule your hair transformation today and experience the luxury of 21 Hair SZN."
        onSubmit={handleBookingSubmit}
      />

      {/* Secondary Hero Section */}
      <SecondaryHero
        backgroundImage="https://placehold.co/1440x800/eeeeee/eeeeee"
        title="21 HAIR SZN"
        description="At 21HairSZN, we believe that your hair is your crown, and we're here to help you reign in style. Experience luxurious hair transformations that elevate your look and boost your confidence."
        buttonText="Book Your Appointment Now!"
        onButtonClick={() => (window.location.href = "#booking")}
      />

      {/* Footer */}
      <Footer
        copyright="© 2023 21HairSZN. All rights reserved."
        links={footerLinks}
      />
    </div>
  );
};

export default Index;
