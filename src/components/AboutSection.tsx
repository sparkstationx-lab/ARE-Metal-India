import { ShieldCheck, Target, Eye, Compass, Calendar } from "lucide-react";
import { TIMELINE } from "../data";

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
            Pioneering Safe Grounding Solutions Worldwide
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto mt-4 rounded"></div>
        </div>

        {/* Corporate Profile Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Visual Factory Story */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-brand-neutral/20 aspect-square">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
                alt="ARE Automated Testing and Assembly Laboratory"
                className="w-full h-full object-cover"
              />
              {/* Overlay styling */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent"></div>
            </div>
            
            {/* Overlay stats box */}
            <div className="absolute -bottom-6 -right-6 bg-brand-dark text-white p-6 rounded-2xl shadow-xl border border-brand-neutral/30 max-w-xs">
              <span className="text-3xl font-display font-black text-brand-primary">100%</span>
              <p className="font-sans text-xs text-white/90 font-bold mt-1 uppercase tracking-wider">In-house quality validation</p>
              <p className="font-sans text-[11px] text-white/75 mt-1">Every production batch undergoes mandatory electrical conductivity and dimensional audits.</p>
            </div>
          </div>

          {/* Right Column: Detailed narrative & core corporate stance */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-display font-bold text-2xl text-brand-dark tracking-tight">
              A Trusted Engineering Partner to Infrastructure Leaders
            </h3>
            <p className="font-sans text-brand-text leading-relaxed">
              ARE Metal India Private Limited stands at the forefront of the earthing and lightning protection industry. As an ISO 9001:2015 certified manufacturer and exporter, we design and produce electrical protection hardware built to counter severe power fluctuations, transient overvoltages, and environmental corrosion.
            </p>
            <p className="font-sans text-brand-neutral leading-relaxed text-sm">
              From our state-of-the-art manufacturing plants, we support critical power transmission, chemical refineries, industrial warehouses, high-speed rail lines, and massive commercial complexes. We combine state-of-the-art pipe-in-pipe chemical blending and electrolytic electroplating technologies to deliver solutions that outperform industry lifespan expectations.
            </p>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="bg-white p-6 rounded-2xl border border-brand-neutral/20 shadow-sm flex items-start space-x-4">
                <div className="p-3 bg-brand-primary/10 rounded-xl text-brand-primary shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-brand-dark">Our Mission</h4>
                  <p className="font-sans text-xs text-brand-neutral mt-1 leading-relaxed">
                    To deliver premium, safe, and maintenance-free electrical protection systems that safeguard life, equipment, and structural integrity across the globe.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-brand-neutral/20 shadow-sm flex items-start space-x-4">
                <div className="p-3 bg-brand-primary/10 rounded-xl text-brand-primary shrink-0">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-brand-dark">Our Vision</h4>
                  <p className="font-sans text-xs text-brand-neutral mt-1 leading-relaxed">
                    To be recognized globally as the absolute benchmark for engineering innovation, environmental sustainability, and product durability in earthing systems.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Corporate Milestone Timeline */}
        <div id="timeline" className="border-t border-brand-neutral/20 pt-16">
          <div className="text-center mb-12">
            <span className="font-display text-xs font-black uppercase tracking-widest text-brand-primary">Our Journey</span>
            <h3 className="font-display font-black text-2xl text-brand-dark tracking-tight mt-1">Chronicles of Expansion</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            
            {/* Line background */}
            <div className="hidden md:block absolute top-[28px] left-[5%] right-[5%] h-0.5 bg-brand-neutral/30 z-0"></div>

            {TIMELINE.map((event, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left bg-white md:bg-transparent p-6 md:p-0 rounded-2xl border border-brand-neutral/20 md:border-0 shadow-sm md:shadow-none">
                {/* Year Badge */}
                <div className="flex items-center justify-center w-12 h-12 bg-brand-dark text-brand-primary font-display font-extrabold text-sm rounded-full shadow-lg border-4 border-white mb-4">
                  {event.year}
                </div>
                <h4 className="font-display font-bold text-base text-brand-dark line-clamp-1">{event.title}</h4>
                <p className="font-sans text-xs text-brand-neutral mt-2 leading-relaxed">
                  {event.description}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
