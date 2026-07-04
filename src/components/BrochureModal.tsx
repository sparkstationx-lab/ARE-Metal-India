import React, { useState } from "react";
import { X, Download, ShieldCheck, Mail, Building, Phone, User } from "lucide-react";

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BrochureModal({ isOpen, onClose }: BrochureModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.company) {
      setError("Please complete all fields to access the technical catalog.");
      return;
    }
    setError("");
    setIsSubmitted(true);

    // Mock download trigger
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"; // dummy path
      link.download = "ARE_Metal_India_Technical_Brochure.pdf";
      document.body.appendChild(link);
      // in production this would trigger real PDF
      document.body.removeChild(link);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-slate-950/85 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full border border-slate-100 overflow-hidden relative">
        
        {/* Header Ribbon */}
        <div className="bg-brand-dark p-6 text-white text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary mx-auto mb-3 border border-brand-primary/20">
            <Download className="w-5 h-5" />
          </div>
          <span className="font-mono text-[9px] text-brand-primary font-bold uppercase tracking-widest">Engineering Dossier</span>
          <h3 className="font-display font-black text-xl mt-1">Download Technical Brochure</h3>
          <p className="font-sans text-[11px] text-slate-300 mt-2">Get exact drawings, thickness specifications, and chemical testing reports instantly.</p>
        </div>

        {/* Modal Content */}
        <div className="p-6 md:p-8">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="bg-rose-50 border border-rose-100 text-rose-600 font-sans text-xs p-3 rounded-xl">
                  {error}
                </div>
              )}

              {/* Name Field */}
              <div className="space-y-1">
                <label className="font-sans text-[11px] font-bold text-brand-dark uppercase tracking-wider block">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-brand-neutral" />
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 font-sans text-sm bg-brand-bg border border-slate-200 rounded-xl focus:outline-none focus:border-brand-primary focus:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Corporate Email */}
              <div className="space-y-1">
                <label className="font-sans text-[11px] font-bold text-brand-dark uppercase tracking-wider block">Corporate Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-brand-neutral" />
                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 font-sans text-sm bg-brand-bg border border-slate-200 rounded-xl focus:outline-none focus:border-brand-primary focus:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Corporate Mobile */}
              <div className="space-y-1">
                <label className="font-sans text-[11px] font-bold text-brand-dark uppercase tracking-wider block">Mobile Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-4 h-4 text-brand-neutral" />
                  <input
                    type="tel"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 font-sans text-sm bg-brand-bg border border-slate-200 rounded-xl focus:outline-none focus:border-brand-primary focus:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Company Name */}
              <div className="space-y-1">
                <label className="font-sans text-[11px] font-bold text-brand-dark uppercase tracking-wider block">Company Name</label>
                <div className="relative">
                  <Building className="absolute left-3 top-3 w-4 h-4 text-brand-neutral" />
                  <input
                    type="text"
                    required
                    placeholder="Infrastructure Private Limited"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 font-sans text-sm bg-brand-bg border border-slate-200 rounded-xl focus:outline-none focus:border-brand-primary focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-primary hover:bg-brand-primary-hover text-white font-sans font-extrabold text-xs py-3.5 rounded-xl uppercase tracking-wider transition-colors shadow-lg cursor-pointer flex items-center justify-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Tech Spec Sheet</span>
              </button>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto border border-emerald-100">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h4 className="font-display font-black text-lg text-brand-dark">Request Logged Successfully!</h4>
              <p className="font-sans text-xs text-brand-neutral leading-relaxed max-w-xs mx-auto">
                Thank you, <strong>{formData.name}</strong>. Your corporate request has been logged. The technical catalog download is starting in your browser.
              </p>
              
              <div className="pt-4">
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: "", email: "", phone: "", company: "" });
                    onClose();
                  }}
                  className="bg-brand-dark hover:bg-brand-dark/90 text-white font-sans font-bold text-xs px-6 py-2.5 rounded-xl transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
