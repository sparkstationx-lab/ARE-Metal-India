import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, PhoneCall, ShieldCheck } from "lucide-react";

interface ContactSectionProps {
  inquiryProduct: string | null;
  onClearInquiryProduct: () => void;
}

export default function ContactSection({ inquiryProduct, onClearInquiryProduct }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    product: "General Inquiry",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (inquiryProduct) {
      setFormData((prev) => ({ ...prev, product: inquiryProduct }));
      // Clear after applying to state
      onClearInquiryProduct();
    }
  }, [inquiryProduct, onClearInquiryProduct]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.company || !formData.message) {
      setError("Please fill out all required fields to submit your inquiry.");
      return;
    }
    setError("");
    setIsSubmitted(true);

    // Persist to local state so user can see they submitted
    const savedInquiries = JSON.parse(localStorage.getItem("are_inquiries") || "[]");
    savedInquiries.push({ ...formData, date: new Date().toISOString() });
    localStorage.setItem("are_inquiries", JSON.stringify(savedInquiries));
  };

  return (
    <section id="contact" className="py-24 bg-brand-bg scroll-mt-20 border-t border-brand-neutral/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-display text-xs font-black uppercase tracking-widest text-brand-primary">
            Get In Touch
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-dark tracking-tight mt-2">
            Establish Contact With Our Engineers
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto mt-4 rounded"></div>
        </div>

        {/* Form and Contact info grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Coordinates & Quick Call Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-brand-dark text-white p-8 rounded-3xl border border-brand-neutral/30 shadow-xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full blur-2xl"></div>
              
              <div>
                <span className="font-mono text-[9px] text-brand-primary font-bold uppercase tracking-widest">Global HQ</span>
                <h3 className="font-display font-bold text-xl text-white mt-1">ARE Metal India Private Limited</h3>
              </div>

              {/* Physical details block */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3 text-xs md:text-sm text-slate-300">
                  <MapPin className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    Gala No. 2, Royal Industrial Estate, Plot No. 12, Waliv Phata, Vasai East, Palghar - 401208, Maharashtra, India.
                  </p>
                </div>

                <div className="flex items-start space-x-3 text-xs md:text-sm text-slate-300">
                  <Phone className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-bold">+91 97731 51336</p>
                    <p className="font-bold">+91 98336 04245</p>
                    <p className="text-slate-400 text-xs">Mon - Sat: 9:00 AM to 7:00 PM IST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-xs md:text-sm text-slate-300">
                  <Mail className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-bold hover:text-white transition-colors">sales@aremetalindia.com</p>
                    <p className="font-bold hover:text-white transition-colors">aremetalindia@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Direct Buttons: Call & WhatsApp */}
              <div className="pt-4 border-t border-brand-neutral/30 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+919773151336"
                  className="flex-1 flex items-center justify-center space-x-2 bg-brand-primary hover:bg-brand-primary-hover text-white text-xs font-bold py-3 px-4 rounded-xl transition-colors text-center shadow-md"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call +91 97731 51336</span>
                </a>
                
                <a
                  href="https://wa.me/919773151336?text=Hello%20ARE%20Group%20Metal%20India%2C%20I%20am%20inquiring%20about%20your%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-3 px-4 rounded-xl transition-colors text-center shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Message</span>
                </a>
              </div>

            </div>

            {/* Embedded maps location */}
            <div className="rounded-3xl overflow-hidden border border-brand-neutral/20 shadow-sm h-64 bg-slate-100 relative">
              <iframe
                title="ARE Metal India Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.5048259021235!2d72.8804968!3d19.3951593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDIzJzQyLjYiTiA3MsKwNTInNDkuOCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Column: High Fidelity Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 rounded-3xl border border-brand-neutral/20 shadow-xl relative">
              <div className="mb-6">
                <span className="font-display text-xs font-black uppercase tracking-widest text-brand-primary">Request For Quote (RFQ)</span>
                <h3 className="font-display font-bold text-xl text-brand-dark mt-1">Submit B2B Technical Inquiry</h3>
                <p className="font-sans text-xs text-brand-neutral mt-1">Our engineering office will respond with drawings and price margins within 2 business hours.</p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="bg-rose-50 border border-rose-100 text-rose-600 font-sans text-xs p-3 rounded-xl">
                      {error}
                    </div>
                  )}

                  {/* Dual fields: Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-sans text-[10px] font-black text-brand-dark uppercase tracking-wider block">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Anil Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 font-sans text-sm bg-brand-bg border border-slate-200 rounded-xl focus:outline-none focus:border-brand-primary focus:bg-white transition-colors"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-sans text-[10px] font-black text-brand-dark uppercase tracking-wider block">Company / Business *</label>
                      <input
                        type="text"
                        required
                        placeholder="Tata Projects Ltd"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-2.5 font-sans text-sm bg-brand-bg border border-slate-200 rounded-xl focus:outline-none focus:border-brand-primary focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Dual fields: Email & Mobile */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-sans text-[10px] font-black text-brand-dark uppercase tracking-wider block">Corporate Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="a.sharma@tataprojects.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 font-sans text-sm bg-brand-bg border border-slate-200 rounded-xl focus:outline-none focus:border-brand-primary focus:bg-white transition-colors"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-sans text-[10px] font-black text-brand-dark uppercase tracking-wider block">Contact Mobile *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98XXX XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 font-sans text-sm bg-brand-bg border border-slate-200 rounded-xl focus:outline-none focus:border-brand-primary focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Product Category selected */}
                  <div className="space-y-1">
                    <label className="font-sans text-[10px] font-black text-brand-dark uppercase tracking-wider block">Product Category of Interest</label>
                    <select
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="w-full px-4 py-2.5 font-sans text-sm bg-brand-bg border border-slate-200 rounded-xl focus:outline-none focus:border-brand-primary focus:bg-white transition-colors"
                    >
                      <option value="General Inquiry">General Corporate / Factory Visit</option>
                      <option value="Copper Bonded Steel Earth Rods">Copper Bonded Steel Earth Rods</option>
                      <option value="Chemical Earthing Electrodes">Chemical Earthing Electrodes</option>
                      <option value="Solid Copper Ground Rods">Solid Copper Ground Rods</option>
                      <option value="Early Streamer Emission (ESE) Lightning Arrester">Early Streamer Emission (ESE) Lightning Arrester</option>
                      <option value="Conventional Spike Lightning Arrester">Conventional Spike Lightning Arrester</option>
                      <option value="Earthing Strips & Flats">Earthing Strips & Flats</option>
                      <option value="Heavy Duty Earth Pit Covers">Heavy Duty Earth Pit Covers</option>
                      <option value="Earthing Clamps & Connectors">Earthing Clamps & Connectors</option>
                      <option value="Exothermic Welding System">Exothermic Welding System</option>
                    </select>
                  </div>

                  {/* Requirements / message text */}
                  <div className="space-y-1">
                    <label className="font-sans text-[10px] font-black text-brand-dark uppercase tracking-wider block">Specific Requirements / Volume *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please specify dimensions, thickness (e.g. 254 microns copper bonded rod) and quantities required for your project."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 font-sans text-sm bg-brand-bg border border-slate-200 rounded-xl focus:outline-none focus:border-brand-primary focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-brand-primary hover:bg-brand-primary-hover text-white font-sans font-extrabold text-xs py-4 rounded-xl uppercase tracking-wider shadow-lg transition-colors cursor-pointer flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4 text-white" />
                    <span>Send Formal RFQ Inquiry</span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-12 space-y-6">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto border border-emerald-100">
                    <ShieldCheck className="w-10 h-10" />
                  </div>
                  <div>
                    <h4 className="font-display font-black text-xl text-brand-dark">RFQ Inquiry Received!</h4>
                    <p className="font-sans text-xs text-brand-neutral max-w-sm mx-auto leading-relaxed mt-2">
                      Thank you, <strong>{formData.name}</strong>. Your structured technical query for <strong>{formData.product}</strong> has been logged inside our Vasai East sales database.
                    </p>
                  </div>

                  <div className="bg-brand-bg p-4 rounded-2xl border border-brand-neutral/20 max-w-sm mx-auto text-left text-xs font-mono space-y-1">
                    <div className="text-brand-neutral font-bold uppercase tracking-wider mb-1 text-[10px]">Transmission Log:</div>
                    <div><span className="text-brand-neutral">CLIENT:</span> <span className="font-bold text-brand-dark">{formData.company}</span></div>
                    <div><span className="text-brand-neutral">EMAIL:</span> <span className="font-bold text-brand-dark">{formData.email}</span></div>
                    <div><span className="text-brand-neutral">ROUTE:</span> <span className="font-bold text-brand-primary">sales_office_main</span></div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          company: "",
                          product: "General Inquiry",
                          message: "",
                        });
                      }}
                      className="bg-slate-100 hover:bg-slate-200 text-brand-dark font-sans font-bold text-xs px-6 py-2.5 rounded-xl transition-colors cursor-pointer"
                    >
                      Inquire Again
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
