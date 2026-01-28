// File: ./components/home/trust-bar.tsx
import { Truck, Shield, Clock, Award, Headphones } from "lucide-react";

const trustItems = [
  { icon: Award, text: "45 Years of Expertise" },
  { icon: Truck, text: "Free Shipping $99+" },
  { icon: Shield, text: "30-Day Money Back" },
  { icon: Clock, text: "Same Day Shipping" },
  { icon: Headphones, text: "Expert Support" },
];

export function TrustBar() {
  return (
    <div className="bg-gray-50 border-y">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <item.icon className="w-5 h-5 text-primary" />
              <span className="font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

