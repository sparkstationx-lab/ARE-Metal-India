import { CheckCircle2, ShieldCheck, Hammer, Activity, Wrench, Settings } from "lucide-react";

export default function ManufacturingSection() {
  const capabilities = [
    {
      title: "Automated Electrolytic Bonding",
      desc: "Uniform copper molecular deposition controlled by precision computerized plating feeds to maintain the exact 254-micron minimum thickness.",
    },
    {
      title: "Pipe-in-Pipe Concentric Fitment",
      desc: "Pneumatic insertion presses that guarantee concentricity and solid structural fusion between the inner flat and outer copper/GI casings.",
    },
    {
      title: "Crystalline Compound Blending",
      desc: "Heavy-duty industrial mixers that formulate our signature conductive compound to lock stable resistance ratios irrespective of seasonal rain cycles.",
    },
    {
      title: "NABL Short-Circuit Audits",
      desc: "Our internal high-current testing lab subjects random batch rods to massive simulated fault currents of up to 50kA.",
    }
  ];

  const machinery = [
    {
      name: "Automated Copper Plating Line",
      type: "Surface Processing",
      spec: "60,000 Rods/Month capacity with precise 254µ automated calibration",
      icon: Settings,
    },
    {
      name: "High-Pressure Hydraulic Straighteners",
      type: "Mechanical Sizing",
      spec: "Maintains zero curvature variation across 3-meter length profiles",
      icon: Hammer,
    },
    {
      name: "Concentric Pneumatic Tube Presses",
      type: "Electrode Fabrication",
      spec: "Concentric core pressure alignment for pipe-in-pipe grounding models",
      icon: Wrench,
    },
    {
      name: "Micro-ohm Resistance Bridges & Testing",
      type: "Quality Auditing",
      spec: "NABL-traceable diagnostic sensors reading down to 0.001 mΩ accuracy",
      icon: Activity,
    },
  ];

  return (
    <section id="manufacturing" className="py-24 bg-brand-bg scroll-mt-20 border-t border-b border-brand-neutral/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-display text-xs font-black uppercase tracking-widest text-brand-primary">
            Manufacturing Prowess
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-dark tracking-tight mt-2">
            State-Of-The-Art Fabrication Infrastructure
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto mt-4 rounded"></div>
        </div>

        {/* Capabilities Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Core Production Values */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-display font-extrabold text-2xl text-brand-dark tracking-tight">
              Industrial Precision: From Raw Metal to High-Performance Shielding
            </h3>
            <p className="font-sans text-brand-neutral leading-relaxed text-sm">
              We operate two advanced production lines located in the industrial hubs of Maharashtra, covering over 15,000 sq.ft of manufacturing space. Our processes are strictly aligned with global standards, ensuring that every batch of copper bonded ground rods and chemical electrodes has perfect structural concentricity and zero structural faults.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {capabilities.map((cap, index) => (
                <div key={index} className="flex space-x-3 items-start bg-white p-5 rounded-2xl border border-brand-neutral/20 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-bold text-sm text-brand-dark">{cap.title}</h4>
                    <p className="font-sans text-[11px] text-brand-neutral mt-1 leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Factory Stats Badge */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-brand-neutral/20 aspect-video mb-6">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800"
                alt="ARE Production Line Operators"
                title="ARE Production Line Operators - Waliv Phata, Vasai East"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent"></div>
            </div>

            <div className="bg-brand-dark text-white p-6 rounded-2xl border border-brand-neutral/30 flex items-center space-x-4">
              <div className="w-12 h-12 bg-brand-primary/10 border border-brand-primary/20 rounded-xl flex items-center justify-center text-brand-primary shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm">Zero Failure Guarantee</h4>
                <p className="font-sans text-[11px] text-slate-300 mt-0.5">Tested for severe acid soil conditions, coastal salinity, and lightning impulses up to 100kA.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Plant & Machinery Grid */}
        <div className="pt-12 border-t border-brand-neutral/20">
          <div className="mb-8">
            <span className="font-display text-xs font-bold uppercase tracking-widest text-brand-primary">Plant Machinery Assets</span>
            <h3 className="font-display font-bold text-xl text-brand-dark mt-1">High-Precision Machinery Inventory</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {machinery.map((mach, index) => {
              const Icon = mach.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-2xl border border-brand-neutral/20 shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-10 h-10 bg-brand-primary/10 text-brand-primary rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-sans text-[10px] text-brand-neutral font-bold uppercase tracking-widest">{mach.type}</span>
                  <h4 className="font-display font-bold text-sm text-brand-dark mt-1 group-hover:text-brand-primary transition-colors">{mach.name}</h4>
                  <p className="font-sans text-[11px] text-brand-neutral mt-2 leading-relaxed">{mach.spec}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
