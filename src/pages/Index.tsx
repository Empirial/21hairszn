import React from "react";
import { useNavigate } from "react-router-dom";
import { Hero } from "@/components/salon/Hero";
import { AboutSection } from "@/components/salon/AboutSection";
import { PromotionSection } from "@/components/salon/PromotionSection";
import { Footer } from "@/components/salon/Footer";
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
        logoImage="/lovable-uploads/2cab34ab-00dc-465c-a606-fedf0fb284c3.png"
      />

      <AboutSection
        title="Who's this Divaa?"
        description="Where hair meets Art. 21HairSzn stylists and artisans are dedicated to creating one-of-a-kind looks that reflect your unique personality & style. Don't be shy, get into it & explore our wide range of unique styles 💋"
        centerAligned={true}
        hideImage={true}
      />

      <ShopDiscoverSection
        title="Discover Our Collection & Services"
        subtitle="Shop our luxury hair services — all in one place."
        items={discoverItems}
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
