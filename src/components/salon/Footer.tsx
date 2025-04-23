import React from "react";

interface FooterLink {
  id: string;
  text: string;
  href: string;
}

interface FooterProps {
  copyright: string;
  links: FooterLink[];
}

export const Footer: React.FC<FooterProps> = ({ copyright, links }) => {
  return (
    <footer className="bg-[#f7e6e6] text-center py-6">
      <div className="container mx-auto px-4">
        <p className="text-[#333] text-sm font-normal">{copyright}</p>
        <div className="flex justify-center gap-x-4 mt-2">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="text-[#333] text-sm font-normal hover:text-[#ff6f91] transition-colors"
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
