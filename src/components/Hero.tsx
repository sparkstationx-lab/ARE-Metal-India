import { useState, useEffect } from "react";
import { ArrowRight, Download, ShieldCheck, Truck, Building2, Globe } from "lucide-react";

interface HeroProps {
  onNavigateToSection: (sectionId: string) => void;
  onOpenBrochure: () => void;
}

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1600",
  "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1600",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1600"
];

export default function Hero({ onNavigateToSection, onOpenBrochure }: HeroProps) {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-[95vh] bg-brand-dark pt-32 pb-20 flex items-center overflow-hidden"
    >
      {/* Background Image Slider with smooth crossfading */}
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES.map((src, idx) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentIdx ? "opacity-35" : "opacity-0"
            }`}
          >
            <img
              src={src}
              alt="ARE Metal India industrial operations"
              className="w-full h-full object-cover object-center transform scale-102 hover:scale-100 transition-transform duration-[5000ms]"
              loading={idx === 0 ? "eager" : "lazy"}
              fetchPriority={idx === 0 ? "high" : "low"}
            />
          </div>
        ))}
        
        {/* Subtle dark overlay to improve text contrast (45% opacity) */}
        <div className="absolute inset-0 bg-slate-950/45 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/30 to-transparent"></div>
        
        {/* Subtle high-tech grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:45px_45px]"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full text-center space-y-10">
        
        {/* Small Premium Badge */}
        <div className="inline-flex items-center space-x-2.5 bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2 rounded-full shadow-lg">
          <span className="w-2 h-2 bg-[#C51D34] rounded-full animate-pulse"></span>
          <span className="font-display font-extrabold text-[10px] sm:text-xs text-white uppercase tracking-widest">
            ISO 9001:2015 Certified B2B Manufacturer
          </span>
        </div>

        {/* Elegant Strong Headline */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-7xl text-white tracking-tight leading-tight">
            Global Earthing &amp; <br />
            <span className="text-[#C51D34]">Lightning Protection</span> Systems
          </h1>
          
          {/* Supporting sentence under 20 words constraint */}
          <p className="font-sans text-sm sm:text-lg lg:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed font-light">
            We manufacture premium maintenance-free earthing rods and lightning arresters for critical global infrastructure.
          </p>
        </div>

        {/* Action Call buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => onNavigateToSection("contact")}
            className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-[#C51D34] hover:bg-[#A31628] text-white font-sans font-bold text-sm sm:text-base px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer group"
          >
            <span>Request Quote</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-white/90" />
          </button>
          
          <button
            onClick={onOpenBrochure}
            className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 font-sans font-bold text-sm sm:text-base px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <Download className="w-4 h-4 text-[#C51D34]" />
            <span>Download Brochure</span>
          </button>
        </div>

        {/* High-fidelity Trust Indicators */}
        <div className="pt-8 border-t border-white/10 max-w-3xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div className="flex flex-col items-center space-y-1.5 p-2 group">
              <div className="w-10 h-10 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 text-white group-hover:bg-[#C51D34] group-hover:border-transparent transition-all">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="font-display font-black text-xs text-white tracking-wide uppercase">
                Quality Products
              </span>
              <span className="font-sans text-[10px] text-slate-400">
                CPRI &amp; ERDA Certified
              </span>
            </div>

            <div className="flex flex-col items-center space-y-1.5 p-2 group">
              <div className="w-10 h-10 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 text-white group-hover:bg-[#C51D34] group-hover:border-transparent transition-all">
                <Truck className="w-5 h-5" />
              </div>
              <span className="font-display font-black text-xs text-white tracking-wide uppercase">
                Fast Delivery
              </span>
              <span className="font-sans text-[10px] text-slate-400">
                Optimized Logistics
              </span>
            </div>

            <div className="flex flex-col items-center space-y-1.5 p-2 group">
              <div className="w-10 h-10 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 text-white group-hover:bg-[#C51D34] group-hover:border-transparent transition-all">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="font-display font-black text-xs text-white tracking-wide uppercase">
                Trusted Manufacturer
              </span>
              <span className="font-sans text-[10px] text-slate-400">
                ISO 9001:2015 Approved
              </span>
            </div>

            <div className="flex flex-col items-center space-y-1.5 p-2 group">
              <div className="w-10 h-10 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 text-white group-hover:bg-[#C51D34] group-hover:border-transparent transition-all">
                <Globe className="w-5 h-5" />
              </div>
              <span className="font-display font-black text-xs text-white tracking-wide uppercase">
                Export Quality
              </span>
              <span className="font-sans text-[10px] text-slate-400">
                Global Standards Conformity
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
