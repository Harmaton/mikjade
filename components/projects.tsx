"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const categories = [
  {
    id: 1,
    title: "Kitchen Makeovers",
    description: "Clean lines and uncluttered spaces define these contemporary interiors",
    images: [
      "/kitchen1.jpg",
      "/kitchen2.jpg",
      "/kitchen4.jpg",
    ],
  },
  {
    id: 2,
    title: "Cabinetry",
    description: "Light, airy spaces with natural materials and minimal decoration",
    images: [
      "/cabinet1.jpg",
      "/cabinet2.jpg",
      "/kitchen4.jpg",
    ],
  },
  // Add more categories as needed
]

function ImageSlider({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  // Automatic slide advancement every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 3000)
    return () => clearInterval(interval)
  }, [images])

  return (
    <div className="relative group aspect-[4/3]">
      {/* Current Image */}
      <div className="relative h-full w-full">
        <Image
          src={images[currentIndex] || "/placeholder.svg"}
          alt="Interior design"
          fill
          className="object-cover transition-opacity duration-500"
        />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-5 h-5 text-gray-800" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label="Next image"
      >
        <ChevronRight className="w-5 h-5 text-gray-800" />
      </button>

      {/* Dot Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-white w-4" : "bg-white/60 hover:bg-white/80"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <div className="w-full px-4 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-[#E6F0FF] mb-6">
            <span className="text-[#0066FF] text-sm font-medium">Interior Design Portfolio</span>
          </div>
          <h1 className="text-[#1A1A1A] text-4xl md:text-5xl font-bold mb-4">Discover Our Design Categories</h1>
          <p className="text-[#666666] text-lg max-w-3xl mx-auto">
            Explore our carefully curated collection of interior design projects, each showcasing unique styles and
            innovative solutions.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group/card relative rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-shadow duration-300 hover:shadow-[0_4px_25px_rgba(0,0,0,0.12)]"
            >
              <ImageSlider images={category.images} />
              <div className="p-6">
                <div className="inline-block px-3 py-1 rounded-full bg-[#E6F0FF] mb-4">
                  <span className="text-[#0066FF] text-sm font-medium">Interior Design</span>
                </div>
                <h2 className="text-[#1A1A1A] text-2xl font-bold mb-2">{category.title}</h2>
                <p className="text-[#666666]">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

