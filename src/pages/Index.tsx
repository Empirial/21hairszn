import React from "react";
import { useNavigate } from "react-router-dom";
import { Hero } from "@/components/salon/Hero";
import { AboutSection } from "@/components/salon/AboutSection";
import { PromotionSection } from "@/components/salon/PromotionSection";
import { Footer } from "@/components/salon/Footer";
import { BookingSection } from "@/components/salon/BookingSection";
import { BookingFormData } from "@/components/salon/BookingForm";
import { toast } from "sonner";
import { FeaturedProducts } from "@/components/salon/FeaturedProducts";
import { Testimonials } from "@/components/salon/Testimonials";
import { NewsletterSection } from "@/components/salon/NewsletterSection";
import { ShopDiscoverSection } from "@/components/salon/ShopDiscoverSection";

const Index = () => {
  const navigate = useNavigate();
  
  // Mock function to handle form submission
  const handleBookingSubmit = (formData: BookingFormData) => {
    console.log("Booking form submitted:", formData);
    // In a real application, you would send this data to your backend
    toast("Booking request submitted! We will contact you shortly.");
  };

  // Unified discover section data (categories + services)
  const discoverItems = [
    {
      id: "cat1",
      image: "https://placehold.co/600x600/f7e6e6/ff6f91",
      title: "Luxury Wigs",
      link: "/luxury-loc-wigs",
      label: "Category",
    },
    {
      id: "cat2",
      image: "https://placehold.co/600x600/f7e6e6/ff6f91",
      title: "Hair Extensions",
      link: "/luxury-loc-styling",
      label: "Category",
    },
    {
      id: "cat3",
      image: "https://placehold.co/600x600/f7e6e6/ff6f91",
      title: "Styling Services",
      link: "/luxury-loc-styling",
      label: "Category",
    },
    {
      id: "srv1",
      image: "https://placehold.co/600x400/f7e6e6/ff6f91",
      title: "Luxury Extension Locs",
      description: "Premium extension locs for a natural look.",
      link: "/luxury-loc-styling",
      label: "Service",
    },
    {
      id: "srv2",
      image: "https://placehold.co/600x400/f7e6e6/ff6f91",
      title: "Luxury Wigs And Bundles",
      description: "Perfect wig or bundle for a stunning makeover.",
      link: "/luxury-loc-wigs",
      label: "Service",
    },
    {
      id: "srv3",
      image: "https://placehold.co/600x400/f7e6e6/ff6f91",
      title: "Luxury Loc Styling & Haircare",
      description: "Professional styling & haircare services.",
      link: "/luxury-loc-styling",
      label: "Service",
    },
    {
      id: "srv4",
      image: "https://placehold.co/600x400/f7e6e6/ff6f91",
      title: "Luxury Loc Wigs",
      description: "Premium quality loc wigs for a gorgeous look.",
      link: "/luxury-loc-wigs",
      label: "Service",
    },
  ];

  // Only keep true products & combos in featured products
  const featuredProducts = [
    {
      id: "1",
      image: "https://placehold.co/600x600/f7e6e6/ff6f91",
      title: "Island Loc Wig",
      price: "5200",
      link: "/luxury-loc-wigs",
    },
    {
      id: "2",
      image: "https://placehold.co/600x600/f7e6e6/ff6f91",
      title: "Ocean Loc Wig",
      price: "5800",
      link: "/luxury-loc-wigs",
    },
    {
      id: "3",
      image: "https://placehold.co/600x600/f7e6e6/ff6f91",
      title: "Bohemian Loc Wig",
      price: "5500",
      link: "/luxury-loc-wigs",
    },
    {
      id: "4",
      image: "https://placehold.co/600x600/f7e6e6/ff6f91",
      title: "Distressed Loc Wig",
      price: "6000",
      link: "/luxury-loc-wigs",
    },
    // You can add combos here if available
  ];

  // Testimonials data
  const testimonials = [
    {
      id: "1",
      content: "The locs from 21HairSZN completely transformed my look. The quality and styling are absolutely amazing!",
      author: "Jessica K.",
      role: "Customer",
    },
    {
      id: "2",
      content: "I've never had such beautiful hair! The service and quality of the products exceeded all my expectations.",
      author: "Michelle T.",
      role: "Customer",
    },
    {
      id: "3",
      content: "My wig fits perfectly and looks completely natural. Everyone keeps asking if it's my real hair!",
      author: "Samantha P.",
      role: "Customer",
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
    {
      id: "4",
      text: "FAQ",
      href: "/faq",
    },
    {
      id: "5",
      text: "Contact Us",
      href: "#contact",
    },
  ];

  return (
    <div className="bg-[#fff]">
      {/* Hero Section */}
      <Hero
        backgroundImage="https://placehold.co/1440x800/f7e6e6/ff6f91"
        title="21 HAIR SZN"
        description="Premium Quality Hair Products & Services"
        logoImage="https://placehold.co/100x50/ffffff/ffffff"
      />

      {/* Shop & Discover Section: combined category + services */}
      <ShopDiscoverSection
        title="Discover Our Collection & Services"
        subtitle="Shop our categories and luxury hair services — all in one place."
        items={discoverItems}
      />

      {/* Featured Products Section with Carousel */}
      <FeaturedProducts
        title="Featured Wigs & Combos"
        subtitle="Popular products & combos just for you"
        products={featuredProducts}
      />

      {/* About Section */}
      <AboutSection
        title="Who's this Divaa?"
        description="Where hair meets Art. 21HairSzn stylists and artisans are dedicated to creating one-of-a-kind looks that reflect your unique personality & style. Don't be shy, get into it & explore our wide range of unique styles 💋"
      />

      {/* Testimonials Section */}
      <Testimonials 
        title="What Our Customers Say"
        testimonials={testimonials}
      />

      {/* Promotion Section */}
      <PromotionSection
        title="Transform Your Hair, Transform Your Confidence."
        subtitle="Get 10% off your first order with code: HAIRSZN10"
        buttonText="Shop Now"
        onButtonClick={() => navigate("/luxury-loc-wigs")}
      />

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Booking Section */}
      <BookingSection
        title="Book Your Appointment"
        description="Schedule your hair transformation today and experience the luxury of 21 Hair SZN."
        onSubmit={handleBookingSubmit}
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
