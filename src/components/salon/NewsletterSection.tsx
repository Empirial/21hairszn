
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const NewsletterSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast("Thank you for subscribing to our newsletter!");
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 md:px-12">
        <div className="bg-[#ff6f91] rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 items-center gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-lg">
                Subscribe to our newsletter for exclusive offers, hair care tips, and updates on new products.
              </p>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="Your email address"
                  required
                  className="flex-grow bg-white border-0"
                />
                <Button 
                  type="submit" 
                  className="bg-white text-[#ff6f91] hover:bg-gray-100"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
