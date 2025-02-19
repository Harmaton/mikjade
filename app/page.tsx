import Aboutus from "@/components/aboutus";
import Company from "@/components/company";
import ContactSection from "@/components/contact-sectin";
import Footer from "@/components/footer";
import { Navbar } from "@/components/header";
import { ImagesSliderHero } from "@/components/hero-section-slider";
import Projects from "@/components/projects";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import { WhatsAppFloatingButton } from "@/components/wapp";

export default function Home() {
  return (
    <main className="mx-auto space-y-4">
      <Navbar />
      <ImagesSliderHero />
      <Services />
      <Projects />
      <Company />
      <Testimonials />
      <Aboutus />
      <ContactSection />
      <WhatsAppFloatingButton />
      <Footer />
    </main>
  );
}
