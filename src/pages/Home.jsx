import Hero from '@/sections/Hero';
import CEOSection from '@/sections/CEOSection';
import AboutSection from '@/sections/AboutSection';
import BrandingSection from '@/sections/BrandingSection';
import ProductsSection from '@/sections/ProductsSection';
import ServicesSection from '@/sections/ServicesSection';
import WhyChooseUs from '@/sections/WhyChooseUs';
import BlogSection from '@/sections/BlogSection';
import ContactSection from '@/sections/ContactSection';
import { usePageTitle } from '@/hooks/usePageTitle';
import { company } from '@/data/company';

export default function Home() {
  usePageTitle(
    null,
    `${company.tagline}. 25+ years of premium cosmetic and pharmaceutical machinery manufacturing in Lahore, Pakistan.`
  );

  return (
    <>
      <Hero />
      <CEOSection />
      <AboutSection preview />
      <BrandingSection />
      <ProductsSection preview />
      <ServicesSection preview />
      <WhyChooseUs />
      <BlogSection preview />
      <ContactSection preview />
    </>
  );
}
