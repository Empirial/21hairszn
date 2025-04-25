
import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

export const SocialMediaLinks: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#EA6683] mb-8">Follow Us</h2>
        <div className="flex justify-center space-x-8">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#EA6683] hover:text-[#ff6f91] transform hover:scale-110 transition-all"
          >
            <Facebook size={32} />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#EA6683] hover:text-[#ff6f91] transform hover:scale-110 transition-all"
          >
            <Instagram size={32} />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#EA6683] hover:text-[#ff6f91] transform hover:scale-110 transition-all"
          >
            <Twitter size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};
