// File: ./components/home/why-choose-us.tsx
import { Award, Users, Wrench, Phone, Shield, Truck } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "45 Years of Expertise",
    description: "Since 1978, we've been the nation's leading scanner-only dealer.",
  },
  {
    icon: Wrench,
    title: "Custom Programming",
    description: "We'll program your scanner with frequencies for your exact area.",
  },
  {
    icon: Phone,
    title: "Real Expert Support",
    description: "Call us and talk to a real person who knows scanners inside and out.",
  },
  {
    icon: Shield,
    title: "30-Day Guarantee",
    description: "Not satisfied? Return it within 30 days for a full refund.",
  },
  {
    icon: Truck,
    title: "Same Day Shipping",
    description: "Order by 3pm EST and we'll ship your order the same day.",
  },
  {
    icon: Users,
    title: "100,000+ Customers",
    description: "Join the community of scanner enthusiasts who trust us.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Why Choose Scanner Master?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            We're not just a store - we're scanner enthusiasts who've been helping customers for over four decades.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">{reason.title}</h3>
                <p className="text-white/70 text-sm">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

