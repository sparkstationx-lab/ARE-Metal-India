import { useState } from "react";
import { GALLERY } from "../data";
import { GalleryItem } from "../types";
import { X, ZoomIn, Eye } from "lucide-react";

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const categories = [
    { label: "All Facilities", value: "all" },
    { label: "Manufacturing", value: "manufacturing" },
    { label: "Products", value: "products" },
    { label: "Quality Testing", value: "testing" },
    { label: "Logistics & Hub", value: "warehouse" },
  ];

  const filteredItems = selectedCategory === "all"
    ? GALLERY
    : GALLERY.filter((item) => item.category === selectedCategory);

  const handleOpenLightbox = (item: GalleryItem) => {
    setActiveImage(item);
  };

  const handleCloseLightbox = () => {
    setActiveImage(null);
  };

  return (
    <section id="gallery" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-display text-xs font-black uppercase tracking-widest text-brand-primary">
            Visual Showcase
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-dark tracking-tight mt-2">
            Inside Our Manufacturing Facilities
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto mt-4 rounded"></div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`font-sans font-bold text-xs px-5 py-2.5 rounded-full border transition-all duration-300 cursor-pointer ${
                selectedCategory === cat.value
                  ? "bg-brand-primary text-white border-brand-primary shadow-md"
                  : "bg-brand-bg text-brand-neutral border-slate-200 hover:bg-slate-100 hover:text-brand-dark"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(item)}
              className="group relative rounded-2xl overflow-hidden aspect-video bg-brand-bg border border-slate-100 shadow-sm cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Glassmorphic Overlay on hover */}
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                <div className="flex justify-end">
                  <div className="p-2 bg-white/15 backdrop-blur rounded-full text-white">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <span className="font-mono text-[9px] text-brand-primary font-bold uppercase tracking-widest">
                    {item.category}
                  </span>
                  <h4 className="font-display font-bold text-sm text-white mt-1">
                    {item.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="fixed inset-0 bg-slate-950/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <button
            onClick={handleCloseLightbox}
            className="absolute top-6 right-6 bg-white/10 hover:bg-white/25 text-white p-3 rounded-full transition-colors cursor-pointer"
            title="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full flex flex-col space-y-4 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black max-h-[75vh]">
              <img
                src={activeImage.image}
                alt={activeImage.title}
                className="max-w-full max-h-[75vh] object-contain"
              />
            </div>
            <div className="text-center text-white space-y-1">
              <span className="font-mono text-[10px] text-brand-primary font-bold uppercase tracking-widest">
                {activeImage.category}
              </span>
              <h3 className="font-display font-extrabold text-lg">
                {activeImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
