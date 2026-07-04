import { ShieldCheck, ArrowRight, Download, Award, ShieldAlert, Cpu } from "lucide-react";
import { STATISTICS } from "../data";

interface HeroProps {
  onNavigateToSection: (sectionId: string) => void;
  onOpenBrochure: () => void;
}

export default function Hero({ onNavigateToSection, onOpenBrochure }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-brand-dark pt-32 pb-16 flex items-center overflow-hidden"
    >
      {/* Background Image with advanced industrial gradient overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1600"
          alt="ARE Industrial Manufacturing Facility"
          title="ARE Industrial Manufacturing Facility - Sativali, Vasai East"
          fetchPriority="high"
          className="w-full h-full object-cover opacity-20 object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Trust Tags */}
            <div className="inline-flex flex-wrap items-center gap-2 bg-white/10 backdrop-blur border border-white/10 p-1.5 rounded-full">
              <span className="bg-brand-primary text-white font-sans text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">
                ISO 9001:2015
              </span>
              <span className="flex items-center space-x-1 text-slate-200 font-sans text-xs px-2">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-primary" />
                <span className="font-semibold">CE & RoHS Certified Exporter</span>
              </span>
            </div>

            {/* Powerful Headline */}
            <div className="space-y-4">
              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none">
                Global Standard <br />
                <span className="text-brand-primary">
                  Earthing Systems
                </span> <br />
                &amp; Protection
              </h1>
              <p className="font-sans text-lg text-slate-300 max-w-2xl leading-relaxed">
                ARE Metal India Private Limited manufactures high-end, maintenance-free chemical grounding electrodes, copper-bonded ground rods, and early streamer emission terminals engineered to dissipate ultimate fault currents safely.
              </p>
            </div>

            {/* Highlights Bar */}
            <div className="grid grid-cols-3 gap-4 border-t border-b border-white/10 py-4 max-w-xl">
              <div className="flex items-center space-x-2">
                <div className="p-1.5 bg-brand-primary/10 rounded text-brand-primary">
                  <Award className="w-4 h-4" />
                </div>
                <span className="font-sans font-medium text-xs text-slate-300">NABL Approved Testing</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="p-1.5 bg-brand-primary/10 rounded text-brand-primary">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <span className="font-sans font-medium text-xs text-slate-300">50kA Fault Capacity</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="p-1.5 bg-brand-primary/10 rounded text-brand-primary">
                  <Cpu className="w-4 h-4" />
                </div>
                <span className="font-sans font-medium text-xs text-slate-300">Pipe-in-Pipe Tech</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigateToSection("contact")}
                className="flex items-center space-x-2 bg-brand-primary hover:bg-brand-primary-hover text-white font-sans font-semibold text-base px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer group"
              >
                <span>Request Technical Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={onOpenBrochure}
                className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white border border-white/10 font-sans font-semibold text-base px-6 py-4 rounded-xl transition-all duration-300 cursor-pointer"
              >
                <Download className="w-4 h-4 text-brand-primary" />
                <span>Download Brochure</span>
              </button>
            </div>

            {/* Client Footprint Badge */}
            <p className="text-xs text-slate-500 font-mono tracking-widest uppercase">
              Trusted by Top EPC Contractors: L&amp;T, TATA PROJECTS, BHEL, &amp; ADANI
            </p>
          </div>

          {/* Hero Right: Floating Industrial Statistics Panel */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-2xl"></div>
              
              <div className="mb-6">
                <span className="font-display text-xs font-black tracking-widest text-brand-primary uppercase">ARE Group At A Glance</span>
                <h3 className="font-display font-bold text-xl text-white mt-1">Engineering Scale</h3>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {STATISTICS.map((stat, idx) => (
                  <div key={idx} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                    <p className="font-sans text-xs text-slate-400 font-medium leading-tight">{stat.label}</p>
                    <div className="flex items-baseline mt-1">
                      <span className="font-display font-black text-3xl text-white tracking-tight">{stat.value}</span>
                      {stat.suffix && <span className="font-sans font-bold text-sm text-brand-primary ml-0.5">{stat.suffix}</span>}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mini trust stamp inside stats box */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center space-x-3 text-[11px] text-slate-400">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="font-mono">ONLINE CATALOG SYNCHRONIZED — 100% RELIABILITY</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
