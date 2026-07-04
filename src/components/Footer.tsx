import { Phone, Mail, MapPin, ShieldCheck, ArrowUp } from "lucide-react";
import { PRODUCTS } from "../data";

interface FooterProps {
  onNavigateToSection: (sectionId: string) => void;
  onSelectProduct: (productId: string) => void;
}

export default function Footer({ onNavigateToSection, onSelectProduct }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="main-footer" className="bg-brand-dark text-slate-300 border-t border-brand-neutral/20 relative pt-20 pb-8 z-10">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          
          {/* Column 1: Brand & Registrations */}
          <div className="md:col-span-4 space-y-6">
            <div 
              className="flex items-center space-x-3 cursor-pointer"
              onClick={handleScrollTop}
            >
              <div className="relative flex items-center justify-center w-10 h-10 bg-brand-primary rounded-xl shadow-lg border border-brand-primary/30">
                <span className="font-display font-extrabold text-lg text-white tracking-wider">A</span>
                <div className="absolute bottom-0 w-full h-0.5 bg-white"></div>
              </div>
              <div>
                <span className="font-display font-black text-base tracking-wider text-white">ARE GROUP</span>
                <p className="text-[9px] text-slate-400 font-mono tracking-widest uppercase">Metal India Private Limited</p>
              </div>
            </div>

            <p className="font-sans text-xs text-slate-400 leading-relaxed">
              Leading global manufacturer and exporter of heavy-duty earthing materials and early streamer emission terminals. Engineering certified protection since 2021.
            </p>

            <div className="flex items-center space-x-3 bg-white/5 p-4 rounded-xl border border-white/10">
              <ShieldCheck className="w-5 h-5 text-brand-primary" />
              <div className="font-mono text-[10px] text-slate-300">
                <p className="font-bold">ISO 9001:2015 REGISTERED</p>
                <p className="text-slate-500">Reg No: QMS-21-ARE-9031</p>
              </div>
            </div>
          </div>

          {/* Column 2: Products Quick Select */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Product Categories
            </h4>
            <div className="flex flex-col space-y-2.5 text-xs font-sans text-slate-400">
              {PRODUCTS.slice(0, 5).map((prod) => (
                <button
                  key={prod.id}
                  onClick={() => onSelectProduct(prod.id)}
                  className="text-left hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {prod.title}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Corporate Links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Company
            </h4>
            <div className="flex flex-col space-y-2.5 text-xs font-sans text-slate-400">
              <button onClick={() => onNavigateToSection("about")} className="text-left hover:text-white transition-colors cursor-pointer">
                About Our Profile
              </button>
              <button onClick={() => onNavigateToSection("solutions")} className="text-left hover:text-white transition-colors cursor-pointer">
                Industries &amp; Services
              </button>
              <button onClick={() => onNavigateToSection("certificates")} className="text-left hover:text-white transition-colors cursor-pointer">
                Quality Certifications
              </button>
              <button onClick={() => onNavigateToSection("downloads")} className="text-left hover:text-white transition-colors cursor-pointer">
                Technical Downloads
              </button>
            </div>
          </div>

          {/* Column 4: Contact Coordinate Summary */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Works &amp; Sales Office
            </h4>
            <div className="space-y-3.5 text-xs font-sans leading-relaxed text-slate-400">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                <span>Gala No. 2, Royal Industrial Estate, Plot No. 12, Waliv Phata, Vasai East, Palghar - 401208, Maharashtra, India.</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-brand-primary" />
                <span>+91 97731 51336 / +91 98336 04245</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-brand-primary" />
                <span>sales@aremetalindia.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Legal, copyrights & return to top */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs font-mono text-slate-400">
          <div className="text-center md:text-left space-y-1">
            <p>&copy; {currentYear} ARE Metal India Private Limited. All Rights Reserved.</p>
            <p className="text-slate-500">Compliance codes: IS 3043 | BS 7430 | IEC 62305 | UL 467</p>
          </div>

          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <button
              onClick={handleScrollTop}
              className="flex items-center space-x-1.5 hover:text-white transition-colors group cursor-pointer"
            >
              <span>Scroll Top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform text-brand-primary" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
