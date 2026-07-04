import { Target, Eye, ShieldCheck, Award, Globe } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-display text-xs font-black uppercase tracking-widest text-brand-primary">
            About ARE Group
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-dark tracking-tight mt-2">
            Pioneering Safe Grounding Solutions
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto mt-4 rounded"></div>
        </div>

        {/* Corporate Profile Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Factory Story */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-brand-neutral/15 aspect-square">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
                alt="ARE Quality Control Testing and Inspection"
                title="ARE Quality Control Testing and Inspection"
                loading="lazy"
                className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-500"
              />
              {/* Overlay styling */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent"></div>
            </div>
            
            {/* Overlay stats box */}
            <div className="absolute -bottom-6 -right-6 bg-brand-dark text-white p-6 rounded-2xl shadow-xl border border-brand-neutral/30 max-w-xs transform hover:scale-103 transition-transform duration-300">
              <span className="text-3xl font-display font-black text-[#C51D34]">100%</span>
              <p className="font-sans text-xs text-white font-bold mt-1 uppercase tracking-wider">In-house quality validation</p>
              <p className="font-sans text-[11px] text-slate-300 mt-1 leading-relaxed">
                Every single production batch undergoes mandatory electrical conductivity and dimensional audits prior to dispatch.
              </p>
            </div>
          </div>

          {/* Right Column: Reorganized Narrative & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-display font-black text-xl sm:text-2xl lg:text-3xl text-brand-dark tracking-tight leading-tight">
              A Trusted Engineering Partner to Infrastructure Leaders
            </h3>

            {/* Highlighted core statement */}
            <div className="border-l-4 border-[#C51D34] pl-4 py-1 bg-brand-bg rounded-r-xl">
              <p className="font-sans text-brand-dark font-extrabold text-sm sm:text-base leading-relaxed">
                ARE Metal India Private Limited stands at the absolute forefront of the earthing and lightning protection industry as an ISO 9001:2015 certified manufacturer and exporter.
              </p>
            </div>

            <p className="font-sans text-xs sm:text-sm text-brand-neutral leading-relaxed">
              We engineer electrical protection hardware built to counter severe power fluctuations, transient overvoltages, and environmental corrosion. By utilizing proprietary pipe-in-pipe chemical blending and advanced electrolytic electroplating, our systems significantly outperform industry lifespan expectations.
            </p>

            <p className="font-sans text-xs sm:text-sm text-brand-neutral leading-relaxed">
              From our state-of-the-art manufacturing plants, we support critical power transmission, chemical refineries, solar installations, industrial warehouses, high-speed rail lines, and massive commercial complexes globally.
            </p>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-brand-bg p-6 rounded-2xl border border-brand-neutral/15 hover:border-[#C51D34]/30 hover:bg-white hover:shadow-md transition-all duration-300 flex items-start space-x-4 group">
                <div className="p-3 bg-brand-primary/10 text-[#C51D34] rounded-xl shrink-0 group-hover:scale-110 transition-transform">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-black text-sm text-brand-dark uppercase tracking-wider">Our Mission</h4>
                  <p className="font-sans text-xs text-brand-neutral mt-1.5 leading-relaxed">
                    To deliver premium, maintenance-free grounding solutions that safeguard life, sensitive electronics, and structural assets across the globe.
                  </p>
                </div>
              </div>

              <div className="bg-brand-bg p-6 rounded-2xl border border-brand-neutral/15 hover:border-[#C51D34]/30 hover:bg-white hover:shadow-md transition-all duration-300 flex items-start space-x-4 group">
                <div className="p-3 bg-brand-primary/10 text-[#C51D34] rounded-xl shrink-0 group-hover:scale-110 transition-transform">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-black text-sm text-brand-dark uppercase tracking-wider">Our Vision</h4>
                  <p className="font-sans text-xs text-brand-neutral mt-1.5 leading-relaxed">
                    To set the global benchmark for safety and metallurgical excellence, bringing sustainable and reliable earthing systems to every high-voltage node.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Bento Company Highlights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-16 border-t border-brand-neutral/10">
          
          <div className="bg-brand-bg p-8 rounded-3xl border border-brand-neutral/15 hover:border-[#C51D34]/30 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#C51D34] group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-base text-brand-dark">
                ISO 9001:2015 Approved
              </h4>
              <p className="font-sans text-xs text-brand-neutral leading-relaxed">
                Our operations conform strictly to internationally audited quality management systems, assuring complete raw material traceability from ingot to electroplating.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-brand-neutral/10">
              <span className="font-mono text-[10px] text-[#C51D34] font-bold tracking-wider uppercase">Quality Standard</span>
            </div>
          </div>

          <div className="bg-brand-bg p-8 rounded-3xl border border-brand-neutral/15 hover:border-[#C51D34]/30 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#C51D34] group-hover:scale-105 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-base text-brand-dark">
                NABL &amp; CPRI Tested
              </h4>
              <p className="font-sans text-xs text-brand-neutral leading-relaxed">
                All flagship copper-bonded steel rods and chemical electrodes undergo extensive third-party testing to safely endure lightning faults up to 50kA.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-brand-neutral/10">
              <span className="font-mono text-[10px] text-[#C51D34] font-bold tracking-wider uppercase">Performance Audit</span>
            </div>
          </div>

          <div className="bg-brand-bg p-8 rounded-3xl border border-brand-neutral/15 hover:border-[#C51D34]/30 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#C51D34] group-hover:scale-105 transition-transform">
                <Globe className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-base text-brand-dark">
                Global Export Footprint
              </h4>
              <p className="font-sans text-xs text-brand-neutral leading-relaxed">
                We safely export heavy grounding shipments to prominent power distribution networks, refineries, and infrastructure builders across multiple continents.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-brand-neutral/10">
              <span className="font-mono text-[10px] text-[#C51D34] font-bold tracking-wider uppercase">Logistical Range</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
