import ModernCarStyleBanner from "@/components/Banner/Banner";
import FeaturesSection from "@/components/FeaturesSection/FeaturesSection";
import PhoneCatalogSection from "@/components/PhoneCatalogSection/PhoneCatalogSection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";


export default function Home() {
  return (
    <div>
      <ModernCarStyleBanner />
      <ServicesSection />
      <FeaturesSection />
      <PhoneCatalogSection />
      <TestimonialsSection />
    </div>
  );
}
