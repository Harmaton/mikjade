'use client'

import Slider from "react-slick"
import TestimonialCard from "./testimonial-card"
import TestimonialsStyles from "./testimonial-styles"

// Import slick carousel styles
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const testimonials = [
  {
    id: 1,
    name: "James Mwangi",
    role: "Interior Designer, Nairobi",
    content: "The craftsmanship and attention to detail in their cabinetry transformed my clients' spaces beautifully.",
  },
  {
    id: 2,
    name: "Aisha Ahmed",
    role: "Homeowner, Mombasa",
    content: "I love my new kitchen cabinets! The design is both stylish and functional. Highly recommended!",
  },
  {
    id: 3,
    name: "David Otieno",
    role: "Architect, Kisumu",
    content: "Their interior design expertise added a unique touch to my projects. The quality is outstanding.",
  },
  {
    id: 4,
    name: "Lucy Njoroge",
    role: "Real Estate Developer, Nakuru",
    content: "Working with them on cabinetry for multiple apartments was seamless. Elegant designs and durable materials.",
  },
];


export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <section className="py-12 bg-gray-50">
      
      <div className="container mx-auto px-4">
        
         {/* Header Section */}
         <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-[#E6F0FF] mb-6">
            <span className="text-[#0066FF] text-sm font-medium">Testimonials</span>
          </div>
          <h1 className="text-[#1A1A1A] text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h1>
          <p className="text-[#666666] text-lg max-w-3xl mx-auto">
            Dont take our word for it, Hear from our satisfied clients who have experienced our services.
          </p>
        </div>

        <Slider {...settings} className="testimonial-slider">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </Slider>
      </div>
      <TestimonialsStyles />
    </section>
  )
}

