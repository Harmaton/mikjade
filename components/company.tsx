import { CheckCircle2 } from 'lucide-react';
import React from 'react'

export default function Company() {
  const values = [
    "Customer satisfaction",
    "High-quality",
    "Creativity",
    "Excellence",
    "Professionalism",
    "Innovation"
  ];
  
  return (
    <section data-aos="fade-up" className="py-14 px-4 md:px-8 mx-auto border rounded-md  bg-gray-50">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="space-y-4">
            <h2 className="font-playfair text-3xl font-semibold">Our Vision</h2>
            <p className="text-muted-foreground">
              To be outstanding, unique and leading one-stop for all cabinetry and services in Africa and beyond.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="font-playfair text-3xl font-semibold">Our Mission</h2>
            <p className="text-muted-foreground">
              Our focus and principles are creativity leveraging on advanced technology in our day-to-day operations 
              and employing appropriate and up to date interior style to achieve customer satisfaction.
            </p>
          </div>
        </div>
        <div>
          <h2 className="font-playfair text-3xl font-semibold">Our Values</h2>
          <div className="grid grid-cols-2 gap-4">
            {values.map((value, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
