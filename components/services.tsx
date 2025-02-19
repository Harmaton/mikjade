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
    <section id='services' className="py-10 px-4 md:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="text-center space-y-4 mb-2">
        <h2 className="font-playfair text-4xl font-semibold mb-4">Our Services</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Comprehensive interior solutions tailored to your needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id} 
          >
            <Card className="p-6 h-full">
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