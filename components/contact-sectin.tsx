import { Mail, Phone } from "lucide-react";
import ConsultationForm from "./contactus";

export default function ContactSection() {
  return (
    <section data-aos="fade-up" id="contact" className="py-16 bg-gray-100 border rounded-md">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-black">Contact Us</h2>
        <p className="text-center font-semibold mb-2">Book a consultation or visit us today!</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <ConsultationForm />
          </div>
          <div className="space-y-6">
            <div className="relative w-full pb-[56.25%]">
              <iframe 
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCahAIYkR03Oo4M5ZTtjXVzKq1Lx-SfjEE&q=1%C2%B019'04.6%22S+36%C2%B051'56.1%22E"
                className="absolute top-0 left-0 w-full h-full"
                style={{ border: 0 }} 
                loading="lazy"
              ></iframe>
            </div>
            <div className="flex items-center space-x-2 justify-center">
              <Phone className="w-5 h-5 text-blue-900" />
              <a href="tel:+254726629335" className="text-blue-900 hover:underline">
                +254 726 629 335
              </a>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Mail className="w-5 h-5" />
              <a href="mailto:contact@mikjadeventures.co.ke" className="text-blue-900 hover:underline">
                info@mikjadeventures.co.ke
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
