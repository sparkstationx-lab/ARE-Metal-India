import { useState, useEffect } from "react";
import { ArrowRight, FileText, CheckCircle2, Factory, X } from "lucide-react";
import { PRODUCTS } from "../data";
import { Product } from "../types";

interface ProductSectionProps {
  selectedProductId: string | null;
  onCloseProductModal: () => void;
  onProductInquiry: (productName: string) => void;
}

const RELATED_MAP: Record<string, string[]> = {
  "copper-bonded-earth-rods": ["chemical-earthing-electrode", "solid-copper-earth-rods"],
  "chemical-earthing-electrode": ["copper-bonded-earth-rods", "earth-pit-covers"],
  "solid-copper-earth-rods": ["copper-bonded-earth-rods", "earthing-strips-flats"],
  "ese-lightning-arrester": ["conventional-lightning-arrester", "earthing-strips-flats"],
  "conventional-lightning-arrester": ["ese-lightning-arrester", "earthing-strips-flats"],
  "earthing-strips-flats": ["earth-clamps-accessories", "copper-bonded-earth-rods"],
  "earth-pit-covers": ["chemical-earthing-electrode", "earth-clamps-accessories"],
  "earth-clamps-accessories": ["earthing-strips-flats", "copper-bonded-earth-rods"],
};

export default function ProductSection({
  selectedProductId,
  onCloseProductModal,
  onProductInquiry,
}: ProductSectionProps) {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  // Derive related products
  const relatedProducts = activeProduct
    ? (RELATED_MAP[activeProduct.id] || []).map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean) as Product[]
    : [];

  useEffect(() => {
    if (selectedProductId) {
      const prod = PRODUCTS.find((p) => p.id === selectedProductId);
      if (prod) {
        setActiveProduct(prod);
      }
    } else {
      setActiveProduct(null);
    }
  }, [selectedProductId]);

  const handleOpenDetails = (prod: Product) => {
    setActiveProduct(prod);
  };

  const handleCloseDetails = () => {
    setActiveProduct(null);
    onCloseProductModal();
  };

  const handleInquire = (productTitle: string) => {
    handleCloseDetails();
    onProductInquiry(productTitle);
  };

  return (
    <section id="products" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-display text-xs font-black uppercase tracking-widest text-brand-primary">
            Product Catalog
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-dark tracking-tight mt-2">
            Engineering Excellence in Every Category
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto mt-4 rounded"></div>
          <p className="font-sans text-xs text-brand-neutral uppercase font-bold tracking-widest mt-4">
            Tested to IS 3043 • BS 7430 • IEC 62305 • UL 467 Compliance Standards
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-2xl border border-brand-neutral/20 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
            >
              <div>
                {/* Product Image Panel */}
                <div className="relative h-48 overflow-hidden bg-brand-bg">
                  <img
                    src={prod.image}
                    alt={prod.title}
                    title={prod.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  {/* Technology Tag overlay */}
                  <span className="absolute bottom-4 left-4 bg-brand-dark/95 text-white font-mono text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded border border-brand-neutral/30">
                    APPROVED SPEC
                  </span>
                </div>

                {/* Content Panel */}
                <div className="p-6">
                  <h3 className="font-display font-extrabold text-lg text-brand-dark group-hover:text-brand-primary transition-colors duration-300">
                    {prod.title}
                  </h3>
                  <p className="font-sans text-xs text-brand-neutral mt-2 line-clamp-2 leading-relaxed">
                    {prod.shortDescription}
                  </p>

                  {/* Micro Specs List */}
                  <div className="mt-4 pt-4 border-t border-brand-neutral/10 space-y-1.5">
                    {prod.specifications.slice(0, 3).map((spec, sIdx) => (
                      <div key={sIdx} className="flex justify-between text-[11px] font-sans">
                        <span className="text-brand-neutral/70 font-medium">{spec.label}</span>
                        <span className="text-brand-dark font-bold max-w-[160px] truncate">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => handleOpenDetails(prod)}
                  className="w-full flex items-center justify-center space-x-2 bg-brand-bg hover:bg-brand-primary text-brand-dark hover:text-white border border-brand-neutral/25 font-sans font-bold text-xs py-3 rounded-xl transition-all duration-300 cursor-pointer group/btn shadow-sm"
                >
                  <span>Technical Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Product Detail Specifications Overlay Modal */}
      {activeProduct && (
        <div id="product-modal" className="fixed inset-0 bg-slate-950/85 z-50 flex items-center justify-center p-4 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-brand-neutral/20 flex flex-col relative animate-fade-in">
            
            {/* Modal sticky close */}
            <button
              onClick={handleCloseDetails}
              className="absolute top-4 right-4 z-10 bg-slate-900/10 hover:bg-slate-900/20 text-brand-dark p-2.5 rounded-full transition-colors cursor-pointer"
              title="Close Specifications"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Split layout inside modal */}
            <div className="grid grid-cols-1 md:grid-cols-12">
              
              {/* Product Visual Profile */}
              <div className="md:col-span-5 bg-brand-bg relative min-h-[250px] md:min-h-full">
                <img
                  src={activeProduct.image}
                  alt={activeProduct.title}
                  className="w-full h-full object-cover absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                
                {/* Visual Stamp */}
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="font-mono text-[9px] text-brand-primary font-bold uppercase tracking-widest">Premium Catalog</span>
                  <h3 className="font-display font-black text-xl leading-tight">{activeProduct.title}</h3>
                </div>
              </div>

              {/* Product Detailed Spec sheets */}
              <div className="md:col-span-7 p-6 md:p-8 space-y-6">
                <div>
                  <span className="text-brand-primary font-mono text-[10px] font-black uppercase tracking-widest">Engineering Report</span>
                  <h4 className="font-display font-extrabold text-2xl text-brand-dark mt-1">{activeProduct.title}</h4>
                  <p className="font-sans text-xs text-brand-neutral mt-3 leading-relaxed">
                    {activeProduct.longDescription}
                  </p>
                </div>

                {/* Key Technical Parameter Sheets */}
                <div className="space-y-2 bg-brand-bg p-4 rounded-2xl border border-brand-neutral/20">
                  <h5 className="font-display font-bold text-xs text-brand-dark flex items-center space-x-1.5 border-b border-brand-neutral/10 pb-2">
                    <FileText className="w-3.5 h-3.5 text-brand-primary" />
                    <span>Technical Parameter Specifications</span>
                  </h5>
                  <div className="grid grid-cols-1 gap-1.5 pt-1">
                    {activeProduct.specifications.map((spec, sIdx) => (
                      <div key={sIdx} className="flex justify-between text-xs font-sans py-0.5 border-b border-brand-neutral/10 last:border-0 pb-1.5 last:pb-0">
                        <span className="text-brand-neutral font-medium">{spec.label}</span>
                        <span className="text-brand-dark font-bold text-right">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dual Column: Key features and Applications */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h5 className="font-display font-bold text-xs text-brand-dark uppercase tracking-wide">Key Features</h5>
                    <ul className="space-y-1.5">
                      {activeProduct.keyFeatures.map((kf, kfIdx) => (
                        <li key={kfIdx} className="flex items-start space-x-2 text-[11px] text-brand-neutral font-sans">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{kf}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h5 className="font-display font-bold text-xs text-brand-dark uppercase tracking-wide">Primary Applications</h5>
                    <ul className="space-y-1.5">
                      {activeProduct.applications.map((app, appIdx) => (
                        <li key={appIdx} className="flex items-start space-x-2 text-[11px] text-brand-neutral font-sans">
                          <Factory className="w-3.5 h-3.5 text-brand-primary shrink-0 mt-0.5" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Related Products Section */}
                <div className="pt-4 border-t border-brand-neutral/10">
                  <h5 className="font-display font-bold text-xs text-brand-dark uppercase tracking-wide mb-3">
                    Related Protection Equipment
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {relatedProducts.map((related) => (
                      <button
                        key={related.id}
                        onClick={() => handleOpenDetails(related)}
                        className="flex items-center space-x-3 p-2.5 rounded-xl border border-brand-neutral/15 hover:border-brand-primary/40 bg-brand-bg hover:bg-white text-left transition-all group/rel cursor-pointer"
                        aria-label={`View details for ${related.title}`}
                      >
                        <img
                          src={related.image}
                          alt={related.title}
                          className="w-10 h-10 object-cover rounded-lg shrink-0"
                          loading="lazy"
                        />
                        <div className="min-w-0">
                          <p className="font-display font-bold text-[11px] text-brand-dark truncate group-hover/rel:text-brand-primary transition-colors">
                            {related.title}
                          </p>
                          <p className="font-sans text-[10px] text-brand-neutral truncate">
                            {related.shortDescription}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Modal Footer Actions */}
                <div className="pt-4 border-t border-brand-neutral/20 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => handleInquire(activeProduct.title)}
                    className="w-full sm:w-auto bg-brand-primary hover:bg-brand-primary-hover text-white font-sans font-extrabold text-xs px-6 py-3.5 rounded-xl uppercase tracking-wider shadow-lg shrink-0 cursor-pointer text-center"
                  >
                    Send RFQ Inquiry
                  </button>
                  <p className="text-[10px] text-brand-neutral font-mono text-center sm:text-left">
                    Tested in compliance with UL 467 &amp; NFC 17-102. Fully backed by our technical layout support.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
