import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ShieldCheck, PhoneCall, Globe2, Download } from "lucide-react";
import { PRODUCTS } from "../data";

interface HeaderProps {
  onNavigateToSection: (sectionId: string) => void;
  onSelectProduct: (productId: string) => void;
  onOpenBrochure?: () => void;
}

export default function Header({ onNavigateToSection, onSelectProduct, onOpenBrochure }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Solutions", id: "solutions" },
    { label: "Products", id: "products", isDropdown: true },
    { label: "Machinery", id: "manufacturing" },
    { label: "Certificates", id: "certificates" },
    { label: "Downloads", id: "downloads" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 160; // Offset for header + floating spacing
      
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    handleScrollSpy(); // Initial run
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  const handleNavItemClick = (id: string) => {
    setIsMobileMenuOpen(false);
    setIsProductsDropdownOpen(false);
    onNavigateToSection(id);
  };

  const handleProductItemClick = (productId: string) => {
    setIsMobileMenuOpen(false);
    setIsProductsDropdownOpen(false);
    onSelectProduct(productId);
  };

  return (
    <div
      className={`fixed left-4 right-4 md:left-6 md:right-6 lg:left-8 lg:right-8 z-50 max-w-7xl mx-auto transition-all duration-500 ease-out ${
        isScrolled
          ? "top-3 py-2 bg-white/90 border-slate-200/60 shadow-xl"
          : "top-5 py-4 bg-white/75 border-white/20 shadow-lg"
      } backdrop-blur-md rounded-2xl lg:rounded-3xl border`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand section */}
          <div 
            id="brand-logo" 
            className="flex items-center space-x-3 cursor-pointer shrink-0"
            onClick={() => handleNavItemClick("home")}
          >
            <div className="relative flex items-center justify-center w-10 h-10 bg-[#C51D34] rounded-xl shadow-md border border-[#A31628]/30 overflow-hidden shrink-0">
              <div className="absolute inset-0 bg-white/15 mix-blend-overlay"></div>
              <span className="font-display font-extrabold text-lg text-white tracking-wider">A</span>
              <div className="absolute bottom-0 w-full h-1 bg-white/40"></div>
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-display font-black text-sm md:text-base tracking-wider text-brand-dark">ARE GROUP</span>
                <span className="text-[9px] bg-[#C51D34] text-white font-bold px-1 py-0.5 rounded uppercase">INDIA</span>
              </div>
              <p className="text-[9px] text-brand-neutral font-mono tracking-widest uppercase">Metal India Private Limited</p>
            </div>
          </div>

          {/* Desktop Nav Items with Animated Underlines */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.id} className="relative group">
                {item.isDropdown ? (
                  <div className="relative">
                    <button
                      id="nav-dropdown-btn"
                      onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                      className="flex items-center space-x-1 font-display font-extrabold text-xs uppercase tracking-wider py-2 cursor-pointer transition-colors text-brand-text hover:text-[#C51D34]"
                    >
                      <span className="relative py-1">
                        {item.label}
                        <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#C51D34] transition-transform duration-300 origin-left ${
                          activeSection === "products" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        }`} />
                      </span>
                      <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 text-brand-neutral" />
                    </button>
                    
                    {/* Products mega dropdown */}
                    <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-[480px] bg-white border border-slate-100 rounded-2xl shadow-2xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 grid grid-cols-2 gap-2 z-50">
                      <div className="col-span-2 pb-2 mb-2 border-b border-slate-100">
                        <span className="font-display text-[10px] font-black uppercase tracking-widest text-[#C51D34]">Our Product Range</span>
                      </div>
                      {PRODUCTS.map((prod) => (
                        <button
                          key={prod.id}
                          onClick={() => handleProductItemClick(prod.id)}
                          className="flex flex-col items-start p-2.5 rounded-xl text-left hover:bg-brand-bg transition-colors cursor-pointer group/item text-xs"
                        >
                          <span className="font-sans font-bold text-xs text-brand-text group-hover/item:text-[#C51D34] transition-colors line-clamp-1">{prod.title}</span>
                          <span className="font-sans text-[10px] text-brand-neutral line-clamp-1 mt-0.5">{prod.shortDescription}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavItemClick(item.id)}
                    className={`font-display font-extrabold text-xs uppercase tracking-wider py-2 cursor-pointer transition-colors ${
                      activeSection === item.id 
                        ? "text-[#C51D34]" 
                        : "text-brand-text hover:text-[#C51D34]"
                    }`}
                  >
                    <span className="relative py-1">
                      {item.label}
                      <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#C51D34] transition-transform duration-300 origin-left ${
                        activeSection === item.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`} />
                    </span>
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="hidden lg:flex items-center space-x-3 shrink-0">
            {/* Optional Download Brochure outlines button */}
            {onOpenBrochure && (
              <button
                onClick={onOpenBrochure}
                className="flex items-center space-x-1.5 border border-brand-neutral/20 hover:border-[#C51D34]/30 hover:bg-slate-50 text-brand-text font-sans font-bold text-xs px-4 py-2.5 rounded-xl transition-all duration-300 cursor-pointer shadow-sm"
              >
                <Download className="w-3.5 h-3.5 text-[#C51D34]" />
                <span>Brochure</span>
              </button>
            )}

            <button
              id="header-cta-btn"
              onClick={() => handleNavItemClick("contact")}
              className="relative flex items-center space-x-1.5 bg-[#C51D34] hover:bg-[#A31628] text-white font-sans font-bold text-xs px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 overflow-hidden cursor-pointer group"
            >
              <div className="absolute inset-0 bg-white/10 mix-blend-overlay w-0 group-hover:w-full transition-all duration-300"></div>
              <ShieldCheck className="w-4 h-4 text-white" />
              <span>Request Quote</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2 shrink-0">
            <button
              onClick={() => handleNavItemClick("contact")}
              className="p-2.5 bg-[#C51D34]/10 rounded-xl text-[#C51D34] hover:bg-[#C51D34]/20 transition-colors cursor-pointer"
              title="Quick Contact"
            >
              <PhoneCall className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 text-brand-dark hover:text-[#C51D34] bg-slate-100 hover:bg-slate-200 rounded-xl transition-all cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Glassmorphic Dropdown Menu - fully responsive & stays inside floating design bounds */}
      {isMobileMenuOpen && (
        <div id="mobile-drawer" className="lg:hidden mt-4 mx-2 p-5 bg-white rounded-2xl border border-slate-100 shadow-2xl space-y-4 max-h-[70vh] overflow-y-auto">
          <div className="space-y-3">
            <span className="font-display text-[10px] font-black tracking-widest text-[#C51D34] uppercase">Menu Navigation</span>
            <div className="grid grid-cols-1 gap-1">
              {navItems.map((item) => (
                <div key={item.id} className="border-b border-slate-100/60 pb-1.5 last:border-0">
                  {item.isDropdown ? (
                    <div>
                      <div className="font-display font-extrabold text-sm text-brand-dark py-1">
                        {item.label}
                      </div>
                      <div className="pl-3.5 grid grid-cols-1 gap-1.5 mt-1 border-l-2 border-slate-100">
                        {PRODUCTS.map((prod) => (
                          <button
                            key={prod.id}
                            onClick={() => handleProductItemClick(prod.id)}
                            className="text-left py-1 font-sans font-bold text-xs text-brand-neutral hover:text-[#C51D34] transition-colors"
                          >
                            • {prod.title}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleNavItemClick(item.id)}
                      className={`w-full text-left font-display font-extrabold text-sm py-1.5 transition-colors ${
                        activeSection === item.id ? "text-[#C51D34]" : "text-brand-text hover:text-[#C51D34]"
                      }`}
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3 pt-3 border-t border-slate-100">
            <div className="flex items-center space-x-2 text-brand-neutral">
              <div className="w-2 h-2 bg-[#C51D34] rounded-full animate-pulse"></div>
              <span className="font-mono text-[9px] font-bold uppercase tracking-wider">ISO 9001:2015 REGISTERED</span>
            </div>
            
            {onOpenBrochure && (
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBrochure();
                }}
                className="w-full border border-brand-neutral/20 hover:bg-slate-50 text-brand-dark py-2.5 rounded-xl font-sans font-bold text-xs flex items-center justify-center space-x-1.5 transition-all cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-[#C51D34]" />
                <span>Download Brochure</span>
              </button>
            )}

            <button
              onClick={() => handleNavItemClick("contact")}
              className="w-full bg-[#C51D34] hover:bg-[#A31628] text-white py-3 rounded-xl font-sans font-bold text-xs text-center flex items-center justify-center space-x-1.5 shadow-md"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Get Free Technical Quote</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
