import { useState } from "react";
import { Analytics } from '@vercel/analytics/react';
import SEOManager from "./components/SEOManager";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ClientsCarousel from "./components/ClientsCarousel";
import AboutSection from "./components/AboutSection";
import WhyChooseSection from "./components/WhyChooseSection";
import IndustriesServicesSection from "./components/IndustriesServicesSection";
import ProductSection from "./components/ProductSection";
import ManufacturingSection from "./components/ManufacturingSection";
import CertificatesSection from "./components/CertificatesSection";
import GallerySection from "./components/GallerySection";
import FAQSection from "./components/FAQSection";
import DownloadSection from "./components/DownloadSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import BrochureModal from "./components/BrochureModal";

export default function App() {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [inquiryProduct, setInquiryProduct] = useState<string | null>(null);

  const handleNavigateToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSelectProduct = (productId: string | null) => {
    setSelectedProductId(productId);
    if (productId) {
      handleNavigateToSection("products");
    }
  };

  const handleCloseProductModal = () => {
    setSelectedProductId(null);
  };

  const handleOpenBrochure = () => {
    setIsBrochureOpen(true);
  };

  const handleCloseBrochure = () => {
    setIsBrochureOpen(false);
  };

  const handleProductInquiryTrigger = (productName: string) => {
    setInquiryProduct(productName);
    setTimeout(() => {
      handleNavigateToSection("contact");
    }, 100);
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text flex flex-col justify-between selection:bg-brand-primary selection:text-white">
      {/* SEO Dynamic Manager */}
      <SEOManager
        selectedProductId={selectedProductId}
        onSelectProduct={handleSelectProduct}
      />

      {/* Header */}
      <Header
        onNavigateToSection={handleNavigateToSection}
        onSelectProduct={handleSelectProduct}
        onOpenBrochure={handleOpenBrochure}
      />

      {/* Hero Block */}
      <Hero
        onNavigateToSection={handleNavigateToSection}
        onOpenBrochure={handleOpenBrochure}
      />

      {/* Auto-scrolling Client logos marquee */}
      <ClientsCarousel />

      <main className="flex-grow">
        {/* About Section (Mission, Vision, Timeline) */}
        <AboutSection />

        {/* Credentials Grid (6 B2B cards) */}
        <WhyChooseSection />

        {/* Industries we serve & support services */}
        <IndustriesServicesSection />

        {/* Comprehensive Product Cards & spec sheets */}
        <ProductSection
          selectedProductId={selectedProductId}
          onCloseProductModal={handleCloseProductModal}
          onProductInquiry={handleProductInquiryTrigger}
        />

        {/* Manufacturing capabilities & Machinery grid */}
        <ManufacturingSection />

        {/* Quality Certificates hover grid */}
        <CertificatesSection />

        {/* Filterable Facility masonry gallery & Lightbox */}
        <GallerySection />

        {/* Downloads & Technical specification sheets */}
        <DownloadSection onOpenBrochureRequest={handleOpenBrochure} />

        {/* Interactive B2B FAQ Section */}
        <FAQSection />

        {/* B2B Inquiry form & Live maps */}
        <ContactSection
          inquiryProduct={inquiryProduct}
          onClearInquiryProduct={() => setInquiryProduct(null)}
        />
      </main>

      {/* Corporate Multi-Column Footer */}
      <Footer
        onNavigateToSection={handleNavigateToSection}
        onSelectProduct={handleSelectProduct}
      />

      {/* Brochure Request form modal */}
      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={handleCloseBrochure}
      />

      {/* Vercel Web Analytics */}
      <Analytics />
    </div>
  );
}
