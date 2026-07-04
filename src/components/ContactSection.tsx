import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, PhoneCall, ShieldCheck, ChevronRight, HelpCircle } from "lucide-react";

interface ContactSectionProps {
  inquiryProduct: string | null;
  onClearInquiryProduct: () => void;
}

// Map categories to products in data.ts
const PRODUCT_CATEGORIES = {
  "Copper & Solid Ground Rods": [
    "Copper Bonded Steel Earth Rods",
    "Solid Copper Ground Rods"
  ],
  "Chemical Earthing Electrodes": [
    "Chemical Earthing Electrodes"
  ],
  "Lightning Protection Systems": [
    "Early Streamer Emission (ESE) Lightning Arrester",
    "Conventional Spike Lightning Arrester"
  ],
  "Accessories & Conductors": [
    "Earthing Strips & Flats",
    "Heavy Duty Earth Pit Covers",
    "Earthing Clamps & Connectors",
    "Exothermic Welding System"
  ],
  "Other / Custom Solutions": [
    "Custom Manufactured Earthing Solution",
    "General Machinery / Metal Inquiry"
  ]
};

const REQUIREMENT_TYPES = [
  "Request Quote",
  "Bulk Purchase",
  "Product Inquiry",
  "Export Inquiry",
  "Dealer Inquiry",
  "Technical Support",
  "Partnership",
  "Other"
];

const ESTIMATED_QUANTITIES = [
  "Less than 100",
  "100–500",
  "500–1000",
  "1000+",
  "Custom Quantity"
];

const INDUSTRIES = [
  "Construction",
  "Oil & Gas",
  "Petrochemical",
  "Power Plant",
  "Water Treatment",
  "Infrastructure",
  "Manufacturing",
  "Other"
];

export default function ContactSection({ inquiryProduct, onClearInquiryProduct }: ContactSectionProps) {
  // Main form fields state
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    city: "",
    additionalRequirement: ""
  });

  // Category and Product selection
  const [selectedCategory, setSelectedCategory] = useState<string>("Copper & Solid Ground Rods");
  const [selectedProduct, setSelectedProduct] = useState<string>("Copper Bonded Steel Earth Rods");

  // Selection state for chips
  const [requirementType, setRequirementType] = useState<string>("Request Quote");
  const [estimatedQuantity, setEstimatedQuantity] = useState<string>("100–500");
  const [industry, setIndustry] = useState<string>("Infrastructure");

  // Custom text fields if "Other" is selected
  const [customQuantity, setCustomQuantity] = useState<string>("");
  const [customIndustry, setCustomIndustry] = useState<string>("");
  const [customRequirementType, setCustomRequirementType] = useState<string>("");

  // UI state
  const [honeypot, setHoneypot] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [whatsappLink, setWhatsappLink] = useState("");

  // Handle incoming quick quote navigation from the Product Details triggers
  useEffect(() => {
    if (inquiryProduct) {
      // Find which category this product belongs to
      let foundCategory = "Copper & Solid Ground Rods";
      let foundProduct = "Copper Bonded Steel Earth Rods";

      for (const [cat, products] of Object.entries(PRODUCT_CATEGORIES)) {
        const match = products.find(
          (p) => p.toLowerCase() === inquiryProduct.toLowerCase() || p.toLowerCase().includes(inquiryProduct.toLowerCase())
        );
        if (match) {
          foundCategory = cat;
          foundProduct = match;
          break;
        }
      }

      setSelectedCategory(foundCategory);
      setSelectedProduct(foundProduct);
      setRequirementType("Request Quote");

      // Scroll to form smoothly
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }

      onClearInquiryProduct();
    }
  }, [inquiryProduct, onClearInquiryProduct]);

  // Update product selection when category changes to default to the first product of that category
  const handleCategoryChange = (categoryName: string) => {
    setSelectedCategory(categoryName);
    const productsList = PRODUCT_CATEGORIES[categoryName as keyof typeof PRODUCT_CATEGORIES] || [];
    if (productsList.length > 0) {
      setSelectedProduct(productsList[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot detection
    if (honeypot) {
      setIsSubmitted(true);
      return;
    }

    // Required fields verification
    if (
      !formData.name.trim() ||
      !formData.company.trim() ||
      !formData.phone.trim() ||
      !formData.email.trim() ||
      !formData.city.trim()
    ) {
      setError("Please complete all primary fields (Name, Company, Contact, Email, and City).");
      return;
    }

    // Email pattern validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setError("Please provide a valid corporate email address.");
      return;
    }

    // Phone validation
    const cleanPhone = formData.phone.replace(/\s+/g, "");
    if (cleanPhone.length < 8) {
      setError("Please enter a valid telephone number with country/area code.");
      return;
    }

    // Custom field validations
    if (requirementType === "Other" && !customRequirementType.trim()) {
      setError("Please specify your custom Requirement Type.");
      return;
    }
    if (estimatedQuantity === "Custom Quantity" && !customQuantity.trim()) {
      setError("Please specify your custom target Quantity.");
      return;
    }
    if (industry === "Other" && !customIndustry.trim()) {
      setError("Please specify your Industry sector.");
      return;
    }

    setError("");

    // Resolve accurate output values for the message template
    const finalRequirementType = requirementType === "Other" ? customRequirementType.trim() : requirementType;
    const finalQuantity = estimatedQuantity === "Custom Quantity" ? customQuantity.trim() : estimatedQuantity;
    const finalIndustry = industry === "Other" ? customIndustry.trim() : industry;

    // Structure message text according to user spec
    const rawMessage = `Hello ARE Group,

I would like to request a quotation.

Inquiry Details:

• Name: ${formData.name.trim()}
• Company: ${formData.company.trim()}
• Product Category: ${selectedCategory}
• Product: ${selectedProduct}
• Quantity: ${finalQuantity}
• Industry: ${finalIndustry}
• Requirement Type: ${finalRequirementType}
• City: ${formData.city.trim()}
• Email: ${formData.email.trim()}
• Phone: ${formData.phone.trim()}

${formData.additionalRequirement.trim() ? `Additional Requirement:\n${formData.additionalRequirement.trim()}\n` : ""}
Please contact me.`;

    // URL-encode message
    const encodedText = encodeURIComponent(rawMessage);
    // Company's official WhatsApp Number: +91 97731 51336 -> 919773151336
    const whatsappUrl = `https://wa.me/919773151336?text=${encodedText}`;

    setWhatsappLink(whatsappUrl);
    setIsSubmitted(true);

    // Save locally
    try {
      const savedInquiries = JSON.parse(localStorage.getItem("are_inquiries") || "[]");
      savedInquiries.push({
        ...formData,
        category: selectedCategory,
        product: selectedProduct,
        requirementType: finalRequirementType,
        quantity: finalQuantity,
        industry: finalIndustry,
        date: new Date().toISOString()
      });
      localStorage.setItem("are_inquiries", JSON.stringify(savedInquiries));
    } catch (err) {
      console.warn("Storage write omitted:", err);
    }

    // Redirect user smoothly using client navigation fallback
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 100);
  };

  return (
    <section id="contact" className="py-24 bg-brand-bg scroll-mt-20 border-t border-brand-neutral/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-display text-xs font-black uppercase tracking-widest text-[#C51D34]">
            Secure Business Quote
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-brand-dark tracking-tight mt-2">
            Establish Contact With Our Engineers
          </h2>
          <p className="font-sans text-sm sm:text-base text-brand-neutral mt-4 max-w-xl mx-auto">
            Fill out our smart B2B form to automatically generate a pre-filled WhatsApp proposal for direct sales priority.
          </p>
          <div className="w-20 h-1.5 bg-[#C51D34] mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Form and Contact info grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Coordinates & Quick Call Channels */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Global HQ Card */}
            <div className="bg-brand-dark text-white p-8 rounded-[24px] border border-white/10 shadow-2xl space-y-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#C51D34]/10 rounded-full blur-3xl group-hover:bg-[#C51D34]/15 transition-all"></div>
              
              <div className="space-y-2">
                <span className="font-mono text-[10px] text-[#C51D34] font-black uppercase tracking-widest bg-white/5 px-2.5 py-1 rounded-full border border-white/10">Global HQ &amp; Plant</span>
                <h3 className="font-display font-black text-2xl text-white">ARE Metal India Private Limited</h3>
                <p className="font-sans text-xs text-slate-400 font-light">ISO 9001:2015 Certified B2B Manufacturer &amp; Exporter</p>
              </div>

              {/* Physical details block */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4 text-xs sm:text-sm text-slate-300">
                  <div className="w-9 h-9 bg-white/5 rounded-xl flex items-center justify-center shrink-0 border border-white/10 text-[#C51D34]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <p className="leading-relaxed">
                    Gala No. 2, Royal Industrial Estate, Plot No. 12, Waliv Phata, Vasai East, Palghar - 401208, Maharashtra, India.
                  </p>
                </div>

                <div className="flex items-start space-x-4 text-xs sm:text-sm text-slate-300">
                  <div className="w-9 h-9 bg-white/5 rounded-xl flex items-center justify-center shrink-0 border border-white/10 text-[#C51D34]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-bold text-white tracking-wide">+91 97731 51336</p>
                    <p className="font-bold text-white tracking-wide">+91 98336 04245</p>
                    <p className="text-slate-400 text-[11px] font-mono mt-0.5">Mon - Sat: 9:00 AM to 7:00 PM IST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 text-xs sm:text-sm text-slate-300">
                  <div className="w-9 h-9 bg-white/5 rounded-xl flex items-center justify-center shrink-0 border border-white/10 text-[#C51D34]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-bold text-white hover:text-[#C51D34] transition-colors cursor-pointer">sales@aremetalindia.com</p>
                    <p className="font-bold text-white hover:text-[#C51D34] transition-colors cursor-pointer">aremetalindia@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Direct Buttons: Call & WhatsApp */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+919773151336"
                  className="flex-1 flex items-center justify-center space-x-2 bg-white/5 hover:bg-white/10 text-white border border-white/15 text-xs font-bold py-3.5 px-4 rounded-xl transition-all text-center shadow-md cursor-pointer hover:border-white/30"
                >
                  <PhoneCall className="w-4 h-4 text-[#C51D34]" />
                  <span>Call Office</span>
                </a>
                
                <a
                  href="https://wa.me/919773151336?text=Hello%20ARE%20Group%20Metal%20India%2C%20I%20am%20inquiring%20about%20your%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-3.5 px-4 rounded-xl transition-all text-center shadow-md cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Direct WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Embedded maps location */}
            <div className="rounded-[24px] overflow-hidden border border-brand-neutral/15 shadow-md h-64 bg-slate-100 relative group">
              <iframe
                title="ARE Metal India Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.5048259021235!2d72.8804968!3d19.3951593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDIzJzQyLjYiTiA3MsKwNTInNDkuOCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Column: High Fidelity B2B Smart Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-[24px] border border-brand-neutral/15 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06)] relative">
              <div className="mb-8 pb-6 border-b border-brand-neutral/10">
                <div className="flex items-center space-x-2.5">
                  <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="font-display text-[11px] font-black uppercase tracking-widest text-[#C51D34]">Instant Quote Generator</span>
                </div>
                <h3 className="font-display font-black text-2xl text-brand-dark mt-1.5">Submit B2B Technical Inquiry</h3>
                <p className="font-sans text-xs text-brand-neutral mt-2">
                  Our engineering division will review specifications, custom thicknesses, and target delivery timelines upon submission.
                </p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Visually hidden honeypot field for anti-spam protection */}
                  <div className="absolute opacity-0 -z-10 w-0 h-0 overflow-hidden pointer-events-none">
                    <label htmlFor="confirm_user_profile_are">Do not fill this field if you are human</label>
                    <input
                      id="confirm_user_profile_are"
                      type="text"
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>

                  {error && (
                    <div className="bg-rose-50 border border-rose-100 text-rose-600 font-sans text-xs p-4 rounded-xl font-bold flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-rose-600 rounded-full shrink-0"></span>
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Section 1: Contact Information */}
                  <div className="space-y-4">
                    <h4 className="font-display font-bold text-xs uppercase tracking-wider text-brand-dark border-l-2 border-[#C51D34] pl-2">
                      1. Personnel &amp; Company Details
                    </h4>

                    {/* Dual fields: Name & Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="font-sans text-[10px] font-extrabold text-brand-dark uppercase tracking-wider block">Your Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Anil Sharma"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 font-sans text-sm bg-brand-bg border border-slate-200/80 rounded-xl focus:outline-none focus:border-[#C51D34] focus:bg-white focus:ring-2 focus:ring-[#C51D34]/10 transition-all placeholder:text-slate-400"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-sans text-[10px] font-extrabold text-brand-dark uppercase tracking-wider block">Company / Business *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Tata Projects Ltd"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 font-sans text-sm bg-brand-bg border border-slate-200/80 rounded-xl focus:outline-none focus:border-[#C51D34] focus:bg-white focus:ring-2 focus:ring-[#C51D34]/10 transition-all placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    {/* Dual fields: Mobile & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="font-sans text-[10px] font-extrabold text-brand-dark uppercase tracking-wider block">Contact Mobile *</label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. +91 98XXX XXXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 font-sans text-sm bg-brand-bg border border-slate-200/80 rounded-xl focus:outline-none focus:border-[#C51D34] focus:bg-white focus:ring-2 focus:ring-[#C51D34]/10 transition-all placeholder:text-slate-400"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-sans text-[10px] font-extrabold text-brand-dark uppercase tracking-wider block">Corporate Email *</label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. a.sharma@tataprojects.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 font-sans text-sm bg-brand-bg border border-slate-200/80 rounded-xl focus:outline-none focus:border-[#C51D34] focus:bg-white focus:ring-2 focus:ring-[#C51D34]/10 transition-all placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    {/* City details */}
                    <div className="space-y-1.5">
                      <label className="font-sans text-[10px] font-extrabold text-brand-dark uppercase tracking-wider block">City / Dispatch Hub *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Mumbai, Maharashtra"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-3 font-sans text-sm bg-brand-bg border border-slate-200/80 rounded-xl focus:outline-none focus:border-[#C51D34] focus:bg-white focus:ring-2 focus:ring-[#C51D34]/10 transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* Section 2: Product Selection */}
                  <div className="space-y-4 pt-4 border-t border-slate-100">
                    <h4 className="font-display font-bold text-xs uppercase tracking-wider text-brand-dark border-l-2 border-[#C51D34] pl-2">
                      2. Product Specifications
                    </h4>

                    {/* Product Category selected */}
                    <div className="space-y-1.5">
                      <label className="font-sans text-[10px] font-extrabold text-brand-dark uppercase tracking-wider block">Product Category *</label>
                      <select
                        value={selectedCategory}
                        onChange={(e) => handleCategoryChange(e.target.value)}
                        className="w-full px-4 py-3 font-sans text-sm bg-brand-bg border border-slate-200/80 rounded-xl focus:outline-none focus:border-[#C51D34] focus:bg-white focus:ring-2 focus:ring-[#C51D34]/10 transition-all cursor-pointer"
                      >
                        {Object.keys(PRODUCT_CATEGORIES).map((catName) => (
                          <option key={catName} value={catName}>
                            {catName}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Product dynamic selection */}
                    <div className="space-y-1.5">
                      <label className="font-sans text-[10px] font-extrabold text-brand-dark uppercase tracking-wider block">Specific Product *</label>
                      <select
                        value={selectedProduct}
                        onChange={(e) => setSelectedProduct(e.target.value)}
                        className="w-full px-4 py-3 font-sans text-sm bg-brand-bg border border-slate-200/80 rounded-xl focus:outline-none focus:border-[#C51D34] focus:bg-white focus:ring-2 focus:ring-[#C51D34]/10 transition-all cursor-pointer"
                      >
                        {(PRODUCT_CATEGORIES[selectedCategory as keyof typeof PRODUCT_CATEGORIES] || []).map((prodName) => (
                          <option key={prodName} value={prodName}>
                            {prodName}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Section 3: Smart Chips */}
                  <div className="space-y-4 pt-4 border-t border-slate-100">
                    <h4 className="font-display font-bold text-xs uppercase tracking-wider text-brand-dark border-l-2 border-[#C51D34] pl-2">
                      3. Requirement &amp; Commercial Terms
                    </h4>

                    {/* Requirement Type Chips */}
                    <div className="space-y-2">
                      <label className="font-sans text-[10px] font-extrabold text-brand-dark uppercase tracking-wider block">
                        Requirement Type *
                      </label>
                      <div className="flex flex-wrap gap-1.5">
                        {REQUIREMENT_TYPES.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setRequirementType(type)}
                            className={`px-3 py-2 rounded-xl text-xs font-sans font-bold transition-all cursor-pointer border ${
                              requirementType === type
                                ? "bg-[#C51D34] text-white border-transparent shadow-sm"
                                : "bg-brand-bg text-brand-neutral border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>

                      {/* Custom requirement type field */}
                      {requirementType === "Other" && (
                        <div className="pt-1 animate-fadeIn">
                          <input
                            type="text"
                            required
                            placeholder="Please specify requirement type (e.g. Annual Rate Contract)"
                            value={customRequirementType}
                            onChange={(e) => setCustomRequirementType(e.target.value)}
                            className="w-full px-4 py-2.5 font-sans text-sm bg-brand-bg border border-slate-200 rounded-xl focus:outline-none focus:border-[#C51D34] focus:bg-white transition-all"
                          />
                        </div>
                      )}
                    </div>

                    {/* Estimated Quantity Chips */}
                    <div className="space-y-2">
                      <label className="font-sans text-[10px] font-extrabold text-brand-dark uppercase tracking-wider block">
                        Estimated Quantity *
                      </label>
                      <div className="flex flex-wrap gap-1.5">
                        {ESTIMATED_QUANTITIES.map((qty) => (
                          <button
                            key={qty}
                            type="button"
                            onClick={() => setEstimatedQuantity(qty)}
                            className={`px-3 py-2 rounded-xl text-xs font-sans font-bold transition-all cursor-pointer border ${
                              estimatedQuantity === qty
                                ? "bg-[#C51D34] text-white border-transparent shadow-sm"
                                : "bg-brand-bg text-brand-neutral border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                            }`}
                          >
                            {qty}
                          </button>
                        ))}
                      </div>

                      {/* Custom quantity field */}
                      {estimatedQuantity === "Custom Quantity" && (
                        <div className="pt-1 animate-fadeIn">
                          <input
                            type="text"
                            required
                            placeholder="Enter specific quantity (e.g. 2500 Pieces, 5 Tons)"
                            value={customQuantity}
                            onChange={(e) => setCustomQuantity(e.target.value)}
                            className="w-full px-4 py-2.5 font-sans text-sm bg-brand-bg border border-slate-200 rounded-xl focus:outline-none focus:border-[#C51D34] focus:bg-white transition-all"
                          />
                        </div>
                      )}
                    </div>

                    {/* Industry Sector Chips */}
                    <div className="space-y-2">
                      <label className="font-sans text-[10px] font-extrabold text-brand-dark uppercase tracking-wider block">
                        Industry / Domain *
                      </label>
                      <div className="flex flex-wrap gap-1.5">
                        {INDUSTRIES.map((ind) => (
                          <button
                            key={ind}
                            type="button"
                            onClick={() => setIndustry(ind)}
                            className={`px-3 py-2 rounded-xl text-xs font-sans font-bold transition-all cursor-pointer border ${
                              industry === ind
                                ? "bg-[#C51D34] text-white border-transparent shadow-sm"
                                : "bg-brand-bg text-brand-neutral border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                            }`}
                          >
                            {ind}
                          </button>
                        ))}
                      </div>

                      {/* Custom industry sector field */}
                      {industry === "Other" && (
                        <div className="pt-1 animate-fadeIn">
                          <input
                            type="text"
                            required
                            placeholder="Specify Industry (e.g. Marine Operations, Telecom)"
                            value={customIndustry}
                            onChange={(e) => setCustomIndustry(e.target.value)}
                            className="w-full px-4 py-2.5 font-sans text-sm bg-brand-bg border border-slate-200 rounded-xl focus:outline-none focus:border-[#C51D34] focus:bg-white transition-all"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Section 4: Textarea Optional */}
                  <div className="space-y-2 pt-4 border-t border-slate-100">
                    <label className="font-sans text-[10px] font-extrabold text-brand-dark uppercase tracking-wider block">
                      Additional Requirements &amp; Timeline Details (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Specify dimensions (e.g. 17.2mm x 3m), zinc thickness coating, soil resistivity, or quick shipment needs..."
                      value={formData.additionalRequirement}
                      onChange={(e) => setFormData({ ...formData, additionalRequirement: e.target.value })}
                      className="w-full px-4 py-3 font-sans text-sm bg-brand-bg border border-slate-200 rounded-xl focus:outline-none focus:border-[#C51D34] focus:bg-white focus:ring-2 focus:ring-[#C51D34]/10 transition-all resize-none placeholder:text-slate-400"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#C51D34] hover:bg-[#A31628] text-white font-sans font-black text-sm py-4 rounded-xl uppercase tracking-wider shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center space-x-2 transform hover:-translate-y-0.5"
                  >
                    <MessageSquare className="w-5 h-5 text-white animate-pulse" />
                    <span>Send Pre-Filled WhatsApp Inquiry</span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-16 space-y-6 animate-fadeIn">
                  <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto border border-emerald-100 shadow-inner">
                    <ShieldCheck className="w-12 h-12" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-display font-black text-2xl text-brand-dark">Quote Successfully Formatted!</h4>
                    <p className="font-sans text-sm text-brand-neutral max-w-md mx-auto leading-relaxed">
                      Thank you, <strong>{formData.name}</strong>. We have securely drafted your professional B2B inquiry for <strong>{selectedProduct}</strong>.
                    </p>
                  </div>

                  <div className="bg-brand-bg p-6 rounded-2xl border border-brand-neutral/15 max-w-md mx-auto text-left text-xs font-mono space-y-2.5 shadow-sm">
                    <div className="text-[#C51D34] font-bold uppercase tracking-wider text-[10px]">Commercial Blueprint Draft:</div>
                    <div className="h-px bg-slate-200 my-1"></div>
                    <div><span className="text-brand-neutral">CLIENT:</span> <span className="font-bold text-brand-dark">{formData.company}</span></div>
                    <div><span className="text-brand-neutral">PRODUCT:</span> <span className="font-bold text-brand-dark">{selectedProduct}</span></div>
                    <div><span className="text-brand-neutral">QTY:</span> <span className="font-bold text-brand-dark">{estimatedQuantity === "Custom Quantity" ? customQuantity : estimatedQuantity}</span></div>
                    <div><span className="text-brand-neutral">ROUTE:</span> <span className="font-bold text-emerald-600">WhatsApp Click-to-Chat</span></div>
                  </div>

                  <div className="pt-6 space-y-3 max-w-md mx-auto">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-black text-sm py-4 rounded-xl uppercase tracking-wider shadow-lg flex items-center justify-center space-x-2 cursor-pointer transform hover:-translate-y-0.5 transition-all"
                    >
                      <MessageSquare className="w-5 h-5 text-white" />
                      <span>Proceed to WhatsApp Chat</span>
                    </a>

                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          company: "",
                          phone: "",
                          email: "",
                          city: "",
                          additionalRequirement: ""
                        });
                        setRequirementType("Request Quote");
                        setEstimatedQuantity("100–500");
                        setIndustry("Infrastructure");
                      }}
                      className="w-full bg-slate-100 hover:bg-slate-200 text-brand-dark font-sans font-bold text-xs py-3 rounded-xl transition-all cursor-pointer"
                    >
                      Inquire Again / Refresh Form
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
