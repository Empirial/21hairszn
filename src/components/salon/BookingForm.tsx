import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { StylingServiceOptions } from "./StylingServiceOptions";

export type BookingFormData = {
  name: string;
  email: string;
  phone: string;
  date: Date;
  time: string;
  product: string;
  productDetails: string;
  notes: string;
  price: number;
  wigInstallation: boolean;
  wigTreatment: boolean;
  customization: boolean;
  stylingPrice: number;
}

interface BookingFormProps {
  onSubmit: (data: BookingFormData) => void;
  selectedProduct: {
    title: string;
    color: string;
    length: string;
    price: number;
  };
}

export function BookingForm({ onSubmit, selectedProduct }: BookingFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState<Date | undefined>();
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");
  const [wigInstallation, setWigInstallation] = useState(false);
  const [wigTreatment, setWigTreatment] = useState(false);
  const [customization, setCustomization] = useState(false);
  const [stylingPrice, setStylingPrice] = useState(0);

  const availableTimes = [
    "09:00 AM", "10:00 AM", "11:00 AM", 
    "12:00 PM", "01:00 PM", "02:00 PM", 
    "03:00 PM", "04:00 PM", "05:00 PM"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !phone || !date || !time) {
      alert("Please fill out all required fields");
      return;
    }
    
    // Calculate total price with added services
    let totalPrice = selectedProduct.price;
    if (wigInstallation) totalPrice += 300;
    if (wigTreatment) totalPrice += 400;
    if (customization) totalPrice += 180;
    totalPrice += stylingPrice;
    
    const productDetails = `${selectedProduct.title}, ${selectedProduct.color}, ${selectedProduct.length}`;
    
    onSubmit({
      name,
      email,
      phone,
      date,
      time,
      product: selectedProduct.title,
      productDetails,
      notes,
      price: totalPrice,
      wigInstallation,
      wigTreatment,
      customization,
      stylingPrice
    });
  };

  const handleStylingOptionChange = (value: number) => {
    setStylingPrice(value);
  };

  const handleWigInstallationChange = (value: boolean) => {
    setWigInstallation(value);
  };

  const handleWigTreatmentChange = (value: boolean) => {
    setWigTreatment(value);
  };

  const handleCustomizationChange = (value: boolean) => {
    setCustomization(value);
  };

  // Calculate total price with additions
  const totalPrice = selectedProduct.price + 
    (wigInstallation ? 300 : 0) + 
    (wigTreatment ? 400 : 0) + 
    (customization ? 180 : 0) + 
    stylingPrice;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-center">Book Your Appointment</h2>
        <p className="text-center text-gray-500">Fill in your details to schedule your service</p>
      </div>
      
      <div className="p-4 bg-gray-50 rounded-md mb-4">
        <h3 className="font-semibold mb-2">Selected Style</h3>
        <div className="flex justify-between">
          <div>
            <p className="font-medium">{selectedProduct.title}</p>
            <p className="text-sm text-gray-600">{selectedProduct.color}, {selectedProduct.length}</p>
          </div>
          <p className="font-bold">R{selectedProduct.price}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="date">Date *</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Select a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  disabled={(date) => {
                    const now = new Date();
                    return date < now;
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="time">Time *</Label>
            <Select value={time} onValueChange={setTime}>
              <SelectTrigger>
                <SelectValue placeholder="Select a time" />
              </SelectTrigger>
              <SelectContent>
                {availableTimes.map((t) => (
                  <SelectItem key={t} value={t}>
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="pt-4 border-t">
          <StylingServiceOptions 
            onStylingOptionChange={handleStylingOptionChange}
            onWigInstallationChange={handleWigInstallationChange}
            onWigTreatmentChange={handleWigTreatmentChange}
            onCustomizationChange={handleCustomizationChange}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="notes">Additional Notes</Label>
          <Textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Any special requests or information we should know"
            rows={3}
          />
        </div>
      </div>
      
      <div className="pt-4 border-t">
        <div className="flex justify-between items-center font-medium">
          <span>Base Price:</span>
          <span>R{selectedProduct.price}</span>
        </div>
        
        {wigInstallation && (
          <div className="flex justify-between items-center">
            <span>Wig Installation:</span>
            <span>R300</span>
          </div>
        )}
        
        {wigTreatment && (
          <div className="flex justify-between items-center">
            <span>Wig Treatment:</span>
            <span>R400</span>
          </div>
        )}
        
        {customization && (
          <div className="flex justify-between items-center">
            <span>Customization:</span>
            <span>R180</span>
          </div>
        )}
        
        {stylingPrice > 0 && (
          <div className="flex justify-between items-center">
            <span>Styling:</span>
            <span>R{stylingPrice}</span>
          </div>
        )}
        
        <div className="flex justify-between items-center font-bold text-lg mt-2 pt-2 border-t">
          <span>Total:</span>
          <span>R{totalPrice}</span>
        </div>
      </div>
      
      <Button type="submit" className="w-full bg-[#EA6683] hover:bg-[#EA6683]/90">
        Book Appointment
      </Button>
    </form>
  );
}