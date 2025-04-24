
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import type { CartItem } from "@/components/LocProductCard";

export default function Checkout() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    notes: ""
  });

  useEffect(() => {
    // In a real app, you'd get this from a global state or context
    // For this demo, we'll simulate retrieving cart items
    const items = JSON.parse(localStorage.getItem('cartItems') || '[]');
    setCartItems(items);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRemoveItem = (index: number) => {
    const newCart = cartItems.filter((_, idx) => idx !== index);
    setCartItems(newCart);
    localStorage.setItem('cartItems', JSON.stringify(newCart));
    toast.success("Item removed from cart");
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);
  const tax = subtotal * 0.15; // 15% tax
  const shipping = subtotal > 0 ? 100 : 0; // R100 shipping fee if cart not empty
  const total = subtotal + tax + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (cartItems.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    // Basic validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.address) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Process checkout
    toast.success("Order placed successfully!");
    // Clear cart
    setCartItems([]);
    localStorage.setItem('cartItems', JSON.stringify([]));
    
    // Redirect to homepage after 2s
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <Button 
            variant="outline" 
            className="flex items-center gap-1"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </Button>
          <h1 className="text-3xl font-bold text-center flex-1 pr-24">Checkout</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout form section - 2 cols */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-6 text-[#6E59A5]">Shipping Information</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input 
                      id="fullName" 
                      name="fullName" 
                      value={formData.fullName}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="postalCode">Postal Code *</Label>
                    <Input 
                      id="postalCode" 
                      name="postalCode" 
                      value={formData.postalCode}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address *</Label>
                  <Input 
                    id="address" 
                    name="address" 
                    value={formData.address}
                    onChange={handleChange}
                    required 
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City *</Label>
                    <Input 
                      id="city" 
                      name="city" 
                      value={formData.city}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Order Notes</Label>
                  <Textarea 
                    id="notes" 
                    name="notes" 
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Special instructions for your order"
                    className="h-20"
                  />
                </div>
              </form>
            </Card>

            <div className="mt-8">
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-4 text-[#6E59A5]">Payment Method</h2>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <input type="radio" name="payment" id="cash" checked className="h-4 w-4" />
                    <Label htmlFor="cash">Cash on Delivery</Label>
                  </div>
                  <p className="text-sm text-gray-500">
                    Pay with cash when your order is delivered.
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Order summary section - 1 col */}
          <div>
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-6 text-[#6E59A5]">Order Summary</h2>
              
              {cartItems.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  Your cart is empty
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item, idx) => (
                    <div key={idx} className="flex gap-3 border-b pb-3">
                      <img src={item.img} alt={item.title} className="w-16 h-16 rounded object-cover" />
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-sm text-gray-600">
                          {item.color}, {item.length}
                        </p>
                        {item.fibre && <span className="text-xs text-[#6a8e21] block">+ Fibre</span>}
                        {item.glueless && <span className="text-xs text-[#6a8e21] block">+ Glueless</span>}
                        {item.colorCustomized && <span className="text-xs text-[#6a8e21] block">+ Custom Color</span>}
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">R{item.price}</p>
                        <button 
                          onClick={() => handleRemoveItem(idx)}
                          className="text-xs text-red-500 hover:text-red-700"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                  
                  <div className="pt-4 space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>R{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax (15%)</span>
                      <span>R{tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>R{shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg pt-2 border-t">
                      <span>Total</span>
                      <span>R{total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              )}
              
              <Button 
                onClick={handleSubmit}
                className="w-full mt-6 bg-[#EA6683] hover:bg-[#EA6683]/90"
                disabled={cartItems.length === 0}
              >
                Place Order
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
