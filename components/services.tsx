import { Grid2X2, Shield, UtensilsCrossed } from 'lucide-react';
import React from 'react'
import { Card } from './ui/card';

export default function Services() {

    const services = [
        {
        id: 1,
          title: "Residential Design",
          description: "Specializing in custom furniture, kitchen interiors, and living room furniture. We create bespoke pieces and client-based designs including wardrobes and complete kitchen solutions.",
          icon: <UtensilsCrossed className="w-8 h-8 text-primary" />,
        },
        {
            id: 2,
          title: "Commercial Design",
          description: "Comprehensive office solutions including setup, custom desk making, and workspace optimization for maximum efficiency and employee comfort.",
          icon: <Grid2X2 className="w-8 h-8 text-primary" />,
        },
        {
        id: 3,
          title: "Security Solutions",
          description: "State-of-the-art security installations including CCTV systems, access control, alarm systems, and fire safety solutions for both homes and offices.",
          icon: <Shield className="w-8 h-8 text-primary" />,
        },
      ];
  return (
    <section id='services' data-aos="fade-up" className="py-10 px-4 md:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="text-center space-y-4 mb-2">
      <div className="text-center mb-16">
  <div className="inline-block px-4 py-1 rounded-full bg-[#E6F0FF] mb-6">
    <span className="text-[#0066FF] text-sm font-medium">Our Services</span>
  </div>
  <h1 className="text-[#1A1A1A] text-4xl md:text-5xl font-bold mb-4">
    Expert Interior Design & Craftsmanship
  </h1>
  <p className="text-[#666666] text-lg max-w-3xl mx-auto">
    High-quality interior design, custom cabinetry, and space planning tailored to your style.
  </p>
</div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id} 
          >
            <Card className="p-6 h-full" data-aos="fade-up">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-primary/5 rounded-full">
                  {service.icon}
                </div>
                <h3 className="font-playfair text-2xl font-medium">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}