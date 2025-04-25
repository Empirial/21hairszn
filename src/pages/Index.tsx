import React from "react";
import { useNavigate } from "react-router-dom";
import { Hero } from "@/components/salon/Hero";
import { AboutSection } from "@/components/salon/AboutSection";
import { PromotionSection } from "@/components/salon/PromotionSection";
import { Footer } from "@/components/salon/Footer";
import { FeaturedProducts } from "@/components/salon/FeaturedProducts";
import { Testimonials } from "@/components/salon/Testimonials";
import { ShopDiscoverSection } from "@/components/salon/ShopDiscoverSection";
import { SocialMediaLinks } from "@/components/salon/SocialMediaLinks";

const Index = () => {
  const navigate = useNavigate();
  
  // Unified discover section data (only services, removed categories)
  const discoverItems = [
    {
      id: "srv1",
      image: "/lovable-uploads/a8fd5c2e-2b46-4813-ae7b-7317de03d75b.png",
      title: "Luxury Extension Locs",
      description: "Premium extension locs for a natural look.",
      link: "/luxury-extension-locs",
      label: "Service",
    },
    {
      id: "srv2",
      image: "/lovable-uploads/73c5ceff-55ae-4730-b52f-0e38455eeb5f.png",
      title: "Luxury Wigs And Bundles",
      description: "Perfect wig or bundle for a stunning makeover.",
      link: "/luxury-loc-wigs",
      label: "Service",
    },
    {
      id: "srv3",
      image: "/lovable-uploads/d588347f-80d0-40be-af92-b56d763ec32d.png",
      title: "Luxury Loc Styling & Haircare",
      description: "Professional styling & haircare services.",
      link: "/luxury-loc-styling",
      label: "Service",
    },
    {
      id: "srv4",
      image: "/lovable-uploads/e439fc75-8530-4ee9-b13d-63b79594ad96.png",
      title: "Luxury Loc Wigs",
      description: "Premium quality loc wigs for a gorgeous look.",
      link: "/luxury-loc-wigs",
      label: "Service",
    }
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
      <Hero
        backgroundImage="/lovable-uploads/d588347f-80d0-40be-af92-b56d763ec32d.png"
        title="21 HAIR SZN"
        description="Premium Quality Hair Products & Services"
        logoImage="/lovable-uploads/7aeec13b-93a5-42de-a333-6945090ecfae.png"
      />

      <ShopDiscoverSection
        title="Discover Our Collection & Services"
        subtitle="Shop our luxury hair services — all in one place."
        items={discoverItems}
      />

      <AboutSection
        title="Who's this Divaa?"
        description="Where hair meets Art. 21HairSzn stylists and artisans are dedicated to creating one-of-a-kind looks that reflect your unique personality & style. Don't be shy, get into it & explore our wide range of unique styles 💋"
        centerAligned={true}
        hideImage={true}
      />

      <Testimonials 
        title="What Our Customers Say"
        testimonials={testimonials}
      />

      <PromotionSection
        title="Transform Your Hair, Transform Your Confidence."
        subtitle="Get 10% off your first order with code: HAIRSZN10"
        buttonText="Shop Now"
        onButtonClick={() => navigate("/luxury-loc-wigs")}
      />

      <SocialMediaLinks />

      <Footer
        copyright="© 2023 21HairSZN. All rights reserved."
        links={footerLinks}
      />
    </div>
  );
};

export default Index;
