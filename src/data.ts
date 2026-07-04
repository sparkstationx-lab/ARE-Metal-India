import { Product, Certificate, Client, GalleryItem, TimelineEvent, Statistic, CoreValue } from "./types";

export const STATISTICS: Statistic[] = [
  { label: "Manufacturing Facilities", value: "2", suffix: "+" },
  { label: "Annual Production Capacity", value: "5,000", suffix: " Tons" },
  { label: "Global Corporate Clients", value: "150", suffix: "+" },
  { label: "Years of Engineering Excellence", value: "10", suffix: "+" },
  { label: "Countries Exported To", value: "12", suffix: "+" },
  { label: "Completed Projects", value: "500", suffix: "+" },
];

export const CORE_VALUES: CoreValue[] = [
  {
    title: "Uncompromising Quality",
    description: "Every copper rod and electrode undergoes rigorous NABL-accredited and in-house testing to meet IS and IEC standards.",
    iconName: "Award",
  },
  {
    title: "Engineering Innovation",
    description: "Pioneering technology like chemical pipe-in-pipe designs and early streamer emission elements for optimal fault dissipation.",
    iconName: "Cpu",
  },
  {
    title: "Global Compliance",
    description: "Products manufactured in strict compliance with international standards including UL, CE, RoHS, and ISO 9001:2015.",
    iconName: "Globe",
  },
  {
    title: "Reliable Logistics & Delivery",
    description: "Streamlined large-scale manufacturing guarantees on-time delivery for complex EPC projects and global exports.",
    iconName: "Truck",
  },
  {
    title: "Technical Advisory Support",
    description: "Our dedicated engineering team provides soil resistivity analysis, custom earthing layout designs, and installation guidance.",
    iconName: "Users",
  },
  {
    title: "Sustainable Manufacturing",
    description: "We employ eco-friendly raw material processing and non-toxic compound formulations to safeguard groundwater.",
    iconName: "Leaf",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "copper-bonded-earth-rods",
    title: "Copper Bonded Steel Earth Rods",
    shortDescription: "Molecularly bonded steel-core ground rods with uniform 254-micron electrolytic copper plating.",
    longDescription: "ARE Copper Bonded Steel Earth Rods are designed to offer the ultimate combination of high tensile strength and superior corrosion resistance. Engineered using high-grade low-carbon steel cores and molecularly electroplated with 99.9% pure electrolytic copper to a thickness of 254 microns (10 mils). This ensures the copper layer does not slip, crack, or peel when driven into hard rocky terrains.",
    image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80&w=800",
    specifications: [
      { label: "Core Material", value: "High-Tensile Low Carbon Steel (BS 970 / IS 2062)" },
      { label: "Copper Thickness", value: "Minimum 254 Microns (UL 467 Compliance)" },
      { label: "Copper Purity", value: "99.9% Electrolytic Copper" },
      { label: "Standard Diameters", value: "14.2mm, 16mm, 17.2mm, 19mm, 25mm" },
      { label: "Standard Lengths", value: "1.2m, 1.5m, 1.8m, 2.0m, 2.4m, 3.0m" },
      { label: "Tensile Strength", value: "600 N/mm² (High resistance to bending)" },
    ],
    keyFeatures: [
      { id: "cb-kf-1", text: "Molecularly bonded copper resists peel or crack during deep driving" },
      { id: "cb-kf-2", text: "Highly cost-effective alternative to solid copper rods with comparable electrical properties" },
      { id: "cb-kf-3", text: "Exceptional life expectancy of up to 30 years in highly aggressive soils" },
      { id: "cb-kf-4", text: "Threaded ends permit coupling for deep vertical installations" }
    ].map(item => item.text),
    applications: [
      "Substations & Transmission Towers",
      "Power Generation Plants",
      "Telecommunication Monopoles",
      "Industrial Manufacturing Sites",
      "Lightning Protection Down-Conductors",
      "Data Centers & Server Rooms",
    ],
  },
  {
    id: "chemical-earthing-electrode",
    title: "Chemical Earthing Electrodes",
    shortDescription: "Heavy-duty Pipe-in-Pipe and Strip-in-Pipe technology filled with crystalline conductive compound.",
    longDescription: "ARE Chemical Earthing Electrodes represent a revolutionary approach to maintenance-free grounding. They are fabricated using high-strength galvanized steel or copper tubes with dual pipe-in-pipe or strip-in-pipe architecture. The annular space is tightly packed with our in-house developed, non-corrosive crystalline mineral compound, securing permanent, low-impedance ground reference even under dry soil conditions.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
    specifications: [
      { label: "Electrode Material", value: "Hot-Dip Galvanized GI (IS 2629) or Pure Copper" },
      { label: "Electrode Design", value: "Pipe-in-Pipe / Strip-in-Pipe concentric technology" },
      { label: "Internal Filler", value: "Crystalline High-Conductivity Curing Mineral Compound" },
      { label: "Electrode Diameters", value: "48mm, 50mm, 80mm, 100mm" },
      { label: "Electrode Lengths", value: "2.0 Meter, 3.0 Meter" },
      { label: "Current Carry Capacity", value: "Upto 50 KA depending on soil resistivity" },
    ],
    keyFeatures: [
      { id: "ce-kf-1", text: "Maintenance-free design; eliminates the need for manual salt & charcoal watering" },
      { id: "ce-kf-2", text: "Highly consistent resistance value across extreme seasonal temperature fluctuations" },
      { id: "ce-kf-3", text: "Thick hot-dip galvanizing protects against premature oxidation" },
      { id: "ce-kf-4", text: "Safe for environment; compound does not wash out or contaminate water tables" }
    ].map(item => item.text),
    applications: [
      "CNC Machinery & Precision Instrument Labs",
      "High-Voltage Distribution Sub-stations",
      "Solar Power Farms & Wind Turbines",
      "Refineries, Chemicals & Fertilizer Plants",
      "Hospital ICU & Diagnostics Equipment Grounding",
      "Commercial Complex & Tech Parks",
    ],
  },
  {
    id: "solid-copper-earth-rods",
    title: "Solid Copper Ground Rods",
    shortDescription: "Grade-C101 pure electrical solid copper rods designed for high-corrosive, acid-sulfate soil types.",
    longDescription: "For regions with aggressive chemical compositions, marine atmosphere, or extreme electrical fault potentials, ARE Solid Copper Rods deliver unmatched grounding performance. Manufactured from high-conductivity, oxygen-free solid C101 electrical grade copper bars. Threads are rolled to maintain grain flow and strength, allowing continuous couplings.",
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&q=80&w=800",
    specifications: [
      { label: "Material Composition", value: "99.9% Oxygen-Free Solid Copper (BS EN 13601)" },
      { label: "Diameter Options", value: "15mm, 16mm, 20mm, 25mm" },
      { label: "Lengths Available", value: "1.2m, 1.5m, 2.0m, 3.0m" },
      { label: "Thread Details", value: "M16 or M20 metric threads rolled on both ends" },
      { label: "Electrical Conductivity", value: "100% IACS (International Annealed Copper Standard)" },
    ],
    keyFeatures: [
      { id: "sc-kf-1", text: "100% immunity to rusting in acidic, marshy, or high-salinity soils" },
      { id: "sc-kf-2", text: "Maximum current density capacity for heavy fault protection" },
      { id: "sc-kf-3", text: "Threaded couplers allow deep vertical stacking to reach low water-tables" },
      { id: "sc-kf-4", text: "Extended functional lifetime exceeding 50 years under standard conditions" }
    ].map(item => item.text),
    applications: [
      "Offshore Wind Platforms & Ports",
      "Oil & Gas Coastal Terminal Facilities",
      "Nuclear Power Station Safety Systems",
      "Heavy Railway Traction Systems",
      "Critical Telecom Switched Networks",
    ],
  },
  {
    id: "ese-lightning-arrester",
    title: "Early Streamer Emission (ESE) Lightning Arrester",
    shortDescription: "Advanced digital-tech terminal offering up to 107-meter radius protection area for structures.",
    longDescription: "Protect expansive assets with our state-of-the-art ESE Lightning Air Terminals. Engineered with a built-in ion generation unit that triggers an upward leader stream well ahead of traditional rod terminals. This expands the safety zone radius dynamically, protecting multiple buildings or wide open industrial plants with a single point installation.",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=800",
    specifications: [
      { label: "Standard Compliance", value: "NFC 17-102 (Latest Edition), UNE 21186" },
      { label: "Chassis Material", value: "Grade 316 Stainless Steel (Highly weather resistant)" },
      { label: "Protection Radius", value: "Up to 107 Meters (Level IV Protection Profile)" },
      { label: "Efficiency (Δt)", value: "30μs, 45μs, 60μs selectable models" },
      { label: "Testing Profile", value: "Successfully tested at high voltage laboratories for 100kA (10/350μs)" },
    ],
    keyFeatures: [
      { id: "ese-kf-1", text: "Proactive ionization technology intercepts lightning earlier than conventional spikes" },
      { id: "ese-kf-2", text: "Does not require external batteries or line power; runs on atmospheric electric fields" },
      { id: "ese-kf-3", text: "Single point installation lowers structural down-conductor cabling costs" },
      { id: "ese-kf-4", text: "Extremely lightweight and fully compatible with counter modules for event tracking" }
    ].map(item => item.text),
    applications: [
      "Large Manufacturing Warehouses & Yards",
      "High-rise Residential towers & Skyscraper developments",
      "Petrochemical Refineries & Storage Silos",
      "Academic Campuses, Stadiums & Theme parks",
      "Military Defense Bases & Ammo Depots",
    ],
  },
  {
    id: "conventional-lightning-arrester",
    title: "Conventional Spike Lightning Arrester",
    shortDescription: "Solid copper and GI multi-point air terminals for direct structural lighting protection.",
    longDescription: "A timeless, reliable safeguard. ARE Conventional Air Terminals feature solid copper or hot-dip galvanized steel spikes. The multi-point head structure maximizes the localized discharge rate, routing hazardous energy smoothly into the down-conductors, avoiding devastating fire risk and structural crumbling.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    specifications: [
      { label: "Material Composition", value: "Solid Copper (BS 2874) or Hot-Dip Galvanized Mild Steel" },
      { label: "Design Options", value: "Single Spike, 3-Prong Spike, 5-Prong Multi-Spike Heads" },
      { label: "Base Threads", value: "5/8 inch or 3/4 inch standard threads" },
      { label: "Spike Diameter", value: "12mm, 15mm, 16mm, 20mm" },
      { label: "Mast Base Elevation", value: "0.5m, 1.0m, 1.5m, 2.0m height options" },
    ],
    keyFeatures: [
      { id: "conv-kf-1", text: "Solid copper offers superior electrical conductivity and thermal capacity" },
      { id: "conv-kf-2", text: "Heavy duty copper-alloy base plate provides seamless union to copper tapes" },
      { id: "conv-kf-3", text: "Robust mechanical design withstands heavy monsoon winds and storms" },
      { id: "conv-kf-4", text: "Conforms to IS 3043, BS 6651, and IEC 62305 lightning code standards" }
    ].map(item => item.text),
    applications: [
      "Commercial Buildings & Housing societies",
      "Water Supply Towers & Overhead Reservoirs",
      "Industrial Plant Chimneys & Boiler Houses",
      "Telecom Tower tops & Antennas",
    ],
  },
  {
    id: "earthing-strips-flats",
    title: "Earthing Strips & Flats",
    shortDescription: "Premium structural grounding conductors available in hot-dip galvanized steel, copper, and aluminum.",
    longDescription: "ARE Earthing Strips are essential for distributing fault currents evenly. Available in copper, hot-dip galvanized iron (GI), or high-purity aluminum. Each batch is cold-drawn and hot-dip processed with strict quality checks to guarantee uniform cross-sectional surface areas for maximum thermal efficiency during fault currents.",
    image: "https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&q=80&w=800",
    specifications: [
      { label: "Materials", value: "99.9% Electrolytic Copper, GI (IS 4759), or Aluminum (6061 Grade)" },
      { label: "GI Zinc Coating", value: "Minimum 80-120 Microns (Standard thickness for extreme longevity)" },
      { label: "Standard Sizes", value: "25x3mm, 25x6mm, 32x6mm, 40x6mm, 50x6mm, 75x10mm" },
      { label: "Standard Packing", value: "Supplied in straight bars (5m) or custom continuous coils" },
      { label: "Conductivity", value: "Excellent current-carrying capacity matching respective IS standard tables" },
    ],
    keyFeatures: [
      { id: "es-kf-1", text: "Zero burrs or rough edges, preventing mechanical damage to installation clamps" },
      { id: "es-kf-2", text: "Extremely ductile; permits easy bending and manipulation around structural corners" },
      { id: "es-kf-3", text: "Heavy Zinc layer prevents galvanic electrochemical reactions in soil interfaces" },
      { id: "es-kf-4", text: "Tested to withstand high heat dissipation rates without material warping" }
    ].map(item => item.text),
    applications: [
      "Substation Primary Ground Ring Grids",
      "Factory Floor Machinery Grounding Networks",
      "Structural Lightning Down-Conductors",
      "Generator & Transformer Neutral Grounding Flats",
    ],
  },
  {
    id: "earth-pit-covers",
    title: "Heavy Duty Earth Pit Covers",
    shortDescription: "Concrete and FRP polyplastic access chambers designed to withstand 5 to 15 tons load.",
    longDescription: "Keep your earthing joints dry, organized, and easily accessible for routine testing. ARE Earth Pit Covers are fabricated with advanced industrial fiber-reinforced plastic (FRP) polymers or concrete cast blocks. Featuring anti-slip surface texturing, heavy load bearing ratings, and chemical resistant compositions.",
    image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80&w=800",
    specifications: [
      { label: "Material Profiles", value: "High-Strength FRP Polyplastic Composite / Reinforced Concrete Cast" },
      { label: "Load Bear Capacity", value: "Light duty (5 Tons), Heavy-duty (15 Tons vehicular traffic)" },
      { label: "Dimensions (Top)", value: "250mm x 250mm, 300mm x 300mm, 350mm x 350mm" },
      { label: "Pit Cover Depth", value: "150mm, 200mm, 250mm deep access chambers" },
      { label: "Visual Color", value: "Standard Green/Grey with embossed 'EARTH' warning sign" },
    ],
    keyFeatures: [
      { id: "ep-kf-1", text: "High chemical tolerance to soil acids, petroleum hydrocarbons, and road salts" },
      { id: "ep-kf-2", text: "Lightweight FRP design is easy to lift for inspection compared to concrete blocks" },
      { id: "ep-kf-3", text: "Anti-slip cover texturing ensures pedestrian safety in walkways" },
      { id: "ep-kf-4", text: "Locks securely with twin bolt mechanisms to prevent tampering or vandalism" }
    ].map(item => item.text),
    applications: [
      "Urban Roadside Earthing Access Chambers",
      "Substation Inspection pits",
      "Airport Runways & Port terminals (High Load zones)",
      "Commercial Parking Lots & Mechanical Workshops",
    ],
  },
  {
    id: "earth-clamps-accessories",
    title: "Earthing Clamps & Connectors",
    shortDescription: "High-conductivity bronze and brass U-bolts, couplers, tape clamps, and disconnecting links.",
    longDescription: "The integrity of any earthing network lies in its junctions. ARE precision-machines its clamps from high-tensile brass, phosphorus-bronze, or cast copper. Providing strong metal-to-metal contact with zero threat of loosening from vibration or thermal contraction.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
    specifications: [
      { label: "Material Composition", value: "Naval Brass, Gunmetal Bronze, Hot-Forged Cast Copper" },
      { label: "Clamp Type Configurations", value: "U-Bolt Rod to Tape, G-Clamps, Square Tape Clamps, Couplers" },
      { label: "Bolt Hardware", value: "High-grade Stainless Steel bolts to prevent oxidation" },
      { label: "Coupler Designs", value: "Hexagonal or Round internal threaded couplings" },
    ],
    keyFeatures: [
      { id: "ec-kf-1", text: "High mechanical clamp force maintains tight connections across decades" },
      { id: "ec-kf-2", text: "Superb electrical contact resistance, avoiding local hot-spots" },
      { id: "ec-kf-3", text: "Highly resistant to galvanic corrosion under damp underground situations" },
      { id: "ec-kf-4", text: "Standard sizes readily fit any standard tape and rod dimension combos" }
    ].map(item => item.text),
    applications: [
      "Rods-to-tape electrical intersections",
      "Cable tray bonding linkages",
      "Grounding busbars and disconnecting bars",
      "Substation steel structure connections",
    ],
  },
  {
    id: "exothermic-welding-powder-moulds",
    title: "Exothermic Welding System",
    shortDescription: "Highly reliable copper-oxide powder, graphite moulds, and ignition starting materials.",
    longDescription: "Achieve molecularly fused, lifetime connection blocks. ARE Exothermic Welding products utilize top-grade copper oxide and aluminum powders to produce a superheated molten metal puddle inside precision-crafted graphite moulds. This forms a permanent, molecularly welded bond that will never corrode or increase contact resistance over time.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
    specifications: [
      { label: "Weld Material", value: "Premium Copper-Oxide & Aluminum thermite composition" },
      { label: "Mould Material", value: "High-Density, High-Temperature Graphite (averaging 50+ welds per mould)" },
      { label: "Joint Configurations", value: "Bar-to-Bar, Bar-to-Rod, Cable-to-Rod, Cable-to-Cable (Tee, Cross, Parallel)" },
      { label: "Standard Powder Weights", value: "45g, 65g, 90g, 115g, 150g, 200g cartridges" },
    ],
    keyFeatures: [
      { id: "ew-kf-1", text: "Connections are permanent and molecular; cannot loosen or corrode" },
      { id: "ew-kf-2", text: "Carries current equal to or exceeding that of the conductors joined" },
      { id: "ew-kf-3", text: "Easily inspected visually; doesn't require complex electronic testers" },
      { id: "ew-kf-4", text: "Fast setup and execution; requires no external power or gas tanks" }
    ].map(item => item.text),
    applications: [
      "Main substation underground mesh intersections",
      "High-power transmission line joints",
      "Cathodic protection pipelines linkages",
      "Railway signaling and power tracks links",
    ],
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: "iso-9001-2015",
    title: "ISO 9001:2015 Certification",
    issuer: "Intertek / Quality Systems Registrar",
    number: "QMS-21-ARE-9031",
    date: "Certified since 2020 (Valid through 2027)",
    description: "Confirms our Quality Management System across Design, Fabrication, Testing, and Supply of Earthing Materials & Lightning Air Terminals.",
  },
  {
    id: "ce-compliance",
    title: "CE Conformity Certificate",
    issuer: "European Certification Bureau",
    number: "CE-EC-ARE-8041",
    date: "Renewed 2025",
    description: "Certifies that ARE ESE Lightning Arresters comply with basic European health, safety, and environmental protection legislation.",
  },
  {
    id: "rohs-compliant",
    title: "RoHS Compliance Certificate",
    issuer: "SGS Laboratory Group",
    number: "RoHS-SG-ARE-1102",
    date: "Certified 2025",
    description: "Verifies that our earthing accessories and molecular welding compounds are entirely free of toxic heavy lead, mercury, or cadmium.",
  },
  {
    id: "nabl-test-report",
    title: "NABL Laboratory Test Approval",
    issuer: "National Accreditation Board for Testing Laboratories",
    number: "NABL-TR-50212",
    date: "Tested 2025",
    description: "Official short-circuit withstand and soil-resistivity reduction test certificates executed on ARE chemical earthing electrodes.",
  }
];

export const TIMELINE: TimelineEvent[] = [
  {
    year: "2020",
    title: "Foundation of ARE Group",
    description: "Established ARE Metal India Private Limited in Vasai East, Palghar, with a single manufacturing press and deep commitment to quality.",
  },
  {
    year: "2021",
    title: "ISO 9001 and first exports",
    description: "Secured ISO 9001:2015 status. Dispatched first overseas shipping container containing copper-bonded ground rods to Middle East partners.",
  },
  {
    year: "2023",
    title: "Advanced ESE & NABL Testing",
    description: "Inaugurated our second state-of-the-art facility for automated chemical powder blending, and launched our certified ESE Lightning Terminals.",
  },
  {
    year: "2025",
    title: "Global Supply Leader",
    description: "Partnered with premier Indian EPC firms like L&T, Tata Projects, and BHEL, with certified exports expanding across EU, APAC, and Africa.",
  }
];

export const GALLERY: GalleryItem[] = [
  { id: "gal-1", title: "Automated Copper Plating Bath", category: "manufacturing", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" },
  { id: "gal-2", title: "Pipe-in-Pipe Electrode Assembly", category: "manufacturing", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800" },
  { id: "gal-3", title: "Copper Bonded Steel Earth Rod Inspection", category: "products", image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80&w=800" },
  { id: "gal-4", title: "Lightning Arrester High-Voltage Lab Testing", category: "testing", image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800" },
  { id: "gal-5", title: "Chemical Compound Packaging Unit", category: "warehouse", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" },
  { id: "gal-6", title: "Export Consignment Dispatch", category: "warehouse", image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800" },
];

export const CLIENTS: Client[] = [
  { name: "L&T Construction", logo: "L&T", industry: "Infrastructure" },
  { name: "Tata Projects", logo: "TATA", industry: "Power & EPC" },
  { name: "BHEL Bharat Heavy Electricals", logo: "BHEL", industry: "Power Plants" },
  { name: "Reliance Power", logo: "Reliance", industry: "Power Generation" },
  { name: "Adani Transmission", logo: "Adani", industry: "Grid Infrastructure" },
  { name: "Siemens India", logo: "Siemens", industry: "Industrial Engineering" },
  { name: "Sterling & Wilson", logo: "S&W", industry: "Solar Projects" },
  { name: "KEC International", logo: "KEC", industry: "Transmission Lines" }
];
