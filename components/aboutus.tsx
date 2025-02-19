import Image from "next/image"
import { Building2, Shield, Trophy } from "lucide-react"

export default function AboutUs() {
  return (
    <section data-aos="fade-up" className="py-12 md:py-24 px-4 md:px-8 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="w-full md:w-1/2 relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/mkjlogo.png"
              alt="About Mikjade Ventures"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="font-playfair text-4xl font-semibold">About Us</h2>
            <p className="text-muted-foreground">
              With over 10 years of experience, Mikjade Ventures Limited has built a strong reputation for excellence in
              interior design and home solutions. Our portfolio includes clients from across the country and beyond,
              testament to our commitment to the highest standards of professionalism.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-4 p-6 border border-blue-500 text-blue-500  bg-background rounded-xl shadow-md">
            <Trophy className="h-12 w-12  mx-auto" />
            <h3 className="font-medium text-xl">10+ Years Experience</h3>
          </div>
          <div className="space-y-4 p-6 bg-background border-blue-500 text-blue-500  rounded-xl shadow-md">
            <Building2 className="h-12 w-12 mx-auto" />
            <h3 className="font-medium text-xl">Nationwide Service</h3>
          </div>
          <div className="space-y-4 p-6 bg-background border-blue-500 text-blue-500  rounded-xl shadow-md">
            <Shield className="h-12 w-12 mx-auto" />
            <h3 className="font-medium text-xl">Professional Team</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

