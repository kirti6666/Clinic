import HeroSection from "@/components/home/HeroSection";
import DoctorsServicesSection from "@/components/home/DoctorsServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import GallerySection from "@/components/home/GallerySection";
import EnquirySection from "@/components/home/EnquirySection";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div id="about">
        <DoctorsServicesSection />
      </div>
      <TestimonialsSection />
      <GallerySection />
      <EnquirySection />
      <ContactSection />
    </>
  );
}
