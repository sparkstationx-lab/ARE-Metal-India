import { useState } from "react";
import { 
  Building2, 
  ShieldAlert, 
  Layers, 
  Cable, 
  Database, 
  Sun, 
  ChevronRight, 
  Flame, 
  Compass, 
  Calculator, 
  Hammer, 
  FileText, 
  Activity 
} from "lucide-react";

interface Industry {
  id: string;
  name: string;
  icon: any;
  description: string;
  requirements: string[];
  image: string;
}

interface Service {
  id: string;
  title: string;
  icon: any;
  summary: string;
  points: string[];
}

const INDUSTRIES: Industry[] = [
  {
    id: "power-substations",
    name: "Substations & Power Grids",
    icon: Cable,
    description: "High-voltage distribution networks demand ultra-low impedance grounding systems capable of safely dissipating massive fault currents.",
    requirements: ["Conforms to IEEE 80 / IS 3043", "Concentric dual Pipe-in-Pipe designs", "Heavy short-circuit withstand capacity (up to 50kA)"],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "solar-renewables",
    name: "Solar & Renewable Energy",
    icon: Sun,
    description: "Protecting thousands of photovoltaic trackers, inverters, and high-tech SCADA systems over hundreds of open, lightning-prone acres.",
    requirements: ["Wide-area ESE air terminal protection", "Eco-safe non-toxic grounding backfills", "Corrosion immunity in high-temperature soil"],
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "data-centers",
    name: "Data Centers & IT Parks",
    icon: Database,
    description: "Sensitive server racks and microprocessors require exceptionally clean, noise-free, stable ground references below 1 Ohm.",
    requirements: ["Stable resistance across dry seasons", "Solid copper high-conductivity links", "Zero electrical signal interference"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "oil-gas-refineries",
    name: "Oil, Gas & Petrochemicals",
    icon: Flame,
    description: "Explosive and highly flammable atmospheric environments mandate zero-compromise, redundant lightning interceptors.",
    requirements: ["NFC 17-102 ESE Lightning Arrester grids", "Spark-proof structural bonding clamps", "Sulfur-resistant solid copper rods"],
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "rail-metros",
    name: "High-Speed Rail & Metros",
    icon: Layers,
    description: "Heavy traction power systems and overhead lines require continuous, high-current dissipation to guarantee passenger safety.",
    requirements: ["Heavy-duty hot-dip galvanized GI flats", "Vibration-resistant bronze U-bolt couplers", "Anti-tamper FRP heavy duty access chambers"],
    image: "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "industrial-infra",
    name: "Heavy Industry & Warehouses",
    icon: Building2,
    description: "Expansive metal roofs and structural steel frames require direct lightning bypass paths to mitigate devastating fire and structural shock.",
    requirements: ["Conventional multi-point copper spikes", "Uniform copper bonded ground rings", "UL-listed high-strength down-leads"],
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600"
  }
];

const SERVICES: Service[] = [
  {
    id: "soil-testing",
    title: "Soil Resistivity Surveys & Analysis",
    icon: Compass,
    summary: "Precision field assessment using Wenner Four-Electrode methods to determine the dynamic soil resistivity layers of your site.",
    points: [
      "Dynamic multi-depth moisture profiling",
      "Corrosiveness & electrochemical soil reviews",
      "Full site geological soil reports"
    ]
  },
  {
    id: "ieee80-design",
    title: "IEEE 80 Ground Grid Calculations",
    icon: Calculator,
    summary: "Advanced layout calculations to establish safe step and touch voltage boundaries, tailored to substation and industrial designs.",
    points: [
      "Fault current split factor calculations",
      "Custom 2D/3D ground grid modeling",
      "Material sizing for maximum safety limits"
    ]
  },
  {
    id: "custom-fabrication",
    title: "Custom Metallurgy & Fabrication",
    icon: Hammer,
    summary: "Tailor-made structural copper-bonded products, special clamp sizes, and custom-threaded rods designed to fit bespoke specs.",
    points: [
      "OEM private labeling & brand options",
      "Custom copper electroplating thickness (up to 500 microns)",
      "High-volume, rapid-prototype industrial tooling"
    ]
  },
  {
    id: "dossier-testing",
    title: "Compliance & Laboratory Testing",
    icon: Activity,
    summary: "Rigorous quality audits including salt spray tests, molecular adhesion verification, and electrical resistance testing.",
    points: [
      "Traceable raw material heat codes",
      "Witness test options for major client EPCs",
      "NABL-aligned short-circuit compliance dossier"
    ]
  }
];

export default function IndustriesServicesSection() {
  const [activeTab, setActiveTab] = useState<"industries" | "services">("industries");
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

  return (
    <section id="solutions" className="py-24 bg-brand-bg scroll-mt-20 border-t border-brand-neutral/20 relative overflow-hidden">
      {/* Visual Accent Blurs */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-display text-xs font-black uppercase tracking-widest text-brand-primary">
            Sectors & Technical Capabilities
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-dark tracking-tight mt-2">
            Engineered For High-Stakes Environments
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto mt-4 rounded"></div>
          <p className="font-sans text-xs text-brand-neutral mt-4 leading-relaxed max-w-xl mx-auto">
            Discover the critical industrial sectors we protect and the technical engineering support we extend to global infrastructure projects.
          </p>

          {/* Elegant Toggle Tabs */}
          <div className="flex items-center justify-center mt-10">
            <div className="bg-white border border-brand-neutral/15 p-1.5 rounded-2xl shadow-sm inline-flex space-x-1">
              <button
                onClick={() => setActiveTab("industries")}
                className={`px-6 py-3 rounded-xl font-display font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === "industries"
                    ? "bg-brand-dark text-white shadow-md"
                    : "text-brand-neutral hover:text-brand-dark hover:bg-slate-50"
                }`}
              >
                Industries We Serve
              </button>
              <button
                onClick={() => setActiveTab("services")}
                className={`px-6 py-3 rounded-xl font-display font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === "services"
                    ? "bg-brand-dark text-white shadow-md"
                    : "text-brand-neutral hover:text-brand-dark hover:bg-slate-50"
                }`}
              >
                Engineering Services
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Display Content */}
        {activeTab === "industries" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((ind) => {
              const Icon = ind.icon;
              const isHovered = hoveredIndex === ind.id;
              return (
                <div
                  key={ind.id}
                  className="bg-white rounded-3xl overflow-hidden border border-brand-neutral/20 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                  onMouseEnter={() => setHoveredIndex(ind.id)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Image Header with Dark Mask */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={ind.image}
                      alt={ind.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent"></div>
                    
                    {/* Floating Icon Container */}
                    <div className="absolute bottom-4 left-4 w-10 h-10 bg-brand-primary text-white rounded-xl flex items-center justify-center border border-white/20 shadow-lg">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 md:p-8 space-y-4">
                    <h3 className="font-display font-extrabold text-base md:text-lg text-brand-dark group-hover:text-brand-primary transition-colors">
                      {ind.name}
                    </h3>
                    <p className="font-sans text-xs text-brand-neutral leading-relaxed">
                      {ind.description}
                    </p>

                    {/* Requirements / Standards bullet cards */}
                    <div className="bg-brand-bg rounded-2xl p-4 border border-brand-neutral/10 space-y-2">
                      <p className="font-display font-bold text-[10px] text-brand-dark uppercase tracking-wide">
                        Core Protection Criteria:
                      </p>
                      <ul className="space-y-1.5">
                        {ind.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start text-[11px] font-sans text-brand-neutral">
                            <span className="w-1.5 h-1.5 bg-brand-primary rounded-full shrink-0 mt-1.5 mr-2"></span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {SERVICES.map((serv) => {
              const Icon = serv.icon;
              return (
                <div
                  key={serv.id}
                  className="bg-white p-8 rounded-3xl border border-brand-neutral/20 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group flex flex-col justify-between"
                >
                  <div className="space-y-5">
                    {/* Icon Accent */}
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary border border-brand-neutral/15 group-hover:scale-115 transition-transform duration-300">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="font-display font-black text-lg md:text-xl text-brand-dark group-hover:text-brand-primary transition-colors">
                      {serv.title}
                    </h3>

                    <p className="font-sans text-xs md:text-sm text-brand-neutral leading-relaxed">
                      {serv.summary}
                    </p>

                    {/* Checkmarks */}
                    <ul className="space-y-2.5 pt-2">
                      {serv.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-center space-x-2 text-[11px] md:text-xs font-sans text-brand-neutral">
                          <ChevronRight className="w-4 h-4 text-brand-primary shrink-0" />
                          <span className="font-semibold text-brand-dark">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-5 border-t border-brand-neutral/10 flex items-center justify-between">
                    <span className="font-mono text-[9px] font-bold text-brand-neutral bg-slate-100 px-2 py-1 rounded">
                      TECHNICAL ASSISTANCE
                    </span>
                    <a
                      href="#contact"
                      className="font-sans font-extrabold text-[11px] text-brand-primary uppercase tracking-wider hover:underline flex items-center space-x-1"
                    >
                      <span>Inquire Now</span>
                      <span>&rarr;</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
