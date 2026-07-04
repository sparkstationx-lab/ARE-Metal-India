import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ShieldCheck, PhoneCall, Globe2 } from "lucide-react";
import { PRODUCTS } from "../data";

interface HeaderProps {
  onNavigateToSection: (sectionId: string) => void;
  onSelectProduct: (productId: string) => void;
}

export default function Header({ onNavigateToSection, onSelectProduct }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Solutions", id: "solutions" },
    { label: "Products", id: "products", isDropdown: true },
    { label: "Machinery", id: "manufacturing" },
    { label: "Certificates", id: "certificates" },
    { label: "Downloads", id: "downloads" },
  ];

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
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-3 border-b border-slate-100"
          : "bg-white/90 backdrop-blur-md shadow-sm py-4 border-b border-slate-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand section */}
          <div 
            id="brand-logo" 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleNavItemClick("home")}
          >
            <div className="relative flex items-center justify-center w-11 h-11 bg-brand-primary rounded-xl shadow-lg border border-brand-primary-hover/30 overflow-hidden shrink-0">
              <div className="absolute inset-0 bg-white/15 mix-blend-overlay"></div>
              <span className="font-display font-extrabold text-xl text-white tracking-wider">A</span>
              <div className="absolute bottom-0 w-full h-1 bg-white/40"></div>
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-display font-black text-lg tracking-wider text-brand-dark">ARE GROUP</span>
                <span className="text-[10px] bg-brand-primary text-white font-bold px-1.5 py-0.5 rounded uppercase">INDIA</span>
              </div>
              <p className="text-[10px] text-brand-neutral font-mono tracking-widest uppercase">Metal India Private Limited</p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.id} className="relative group">
                {item.isDropdown ? (
                  <div>
                    <button
                      id="nav-dropdown-btn"
                      onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                      className="flex items-center space-x-1 font-sans font-semibold text-sm text-brand-text hover:text-brand-primary transition-colors py-2 cursor-pointer"
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 text-brand-neutral" />
                    </button>
                    
                    {/* Products mega dropdown */}
                    <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-[480px] bg-white border border-slate-200 rounded-2xl shadow-2xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 grid grid-cols-2 gap-2 z-50">
                      <div className="col-span-2 pb-2 mb-2 border-b border-slate-100">
                        <span className="font-display text-xs font-bold uppercase tracking-widest text-brand-primary">Our Product Range</span>
                      </div>
                      {PRODUCTS.map((prod) => (
                        <button
                          key={prod.id}
                          onClick={() => handleProductItemClick(prod.id)}
                          className="flex flex-col items-start p-2.5 rounded-xl text-left hover:bg-brand-bg transition-colors cursor-pointer group/item"
                        >
                          <span className="font-sans font-semibold text-sm text-brand-text group-hover/item:text-brand-primary transition-colors line-clamp-1">{prod.title}</span>
                          <span className="font-sans text-xs text-brand-neutral line-clamp-1 mt-0.5">{prod.shortDescription}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavItemClick(item.id)}
                    className="font-sans font-semibold text-sm text-brand-text hover:text-brand-primary transition-colors py-2 cursor-pointer"
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 font-mono text-[10px] text-brand-neutral border-r border-slate-200 pr-4">
              <Globe2 className="w-3.5 h-3.5 text-brand-primary" />
              <span className="tracking-wider">EXPORT QUALITY</span>
            </div>
            <button
              id="header-cta-btn"
              onClick={() => handleNavItemClick("contact")}
              className="relative flex items-center space-x-2 bg-brand-primary hover:bg-brand-primary-hover text-white font-sans font-semibold text-sm px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 overflow-hidden cursor-pointer group"
            >
              <div className="absolute inset-0 bg-white/10 mix-blend-overlay w-0 group-hover:w-full transition-all duration-300"></div>
              <ShieldCheck className="w-4 h-4 text-white" />
              <span>Contact Us</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <button
              onClick={() => handleNavItemClick("contact")}
              className="p-2 bg-brand-primary/10 rounded-xl text-brand-primary hover:bg-brand-primary/20 transition-colors"
              title="Quick Contact"
            >
              <PhoneCall className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-brand-dark hover:text-brand-primary bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div id="mobile-drawer" className="lg:hidden fixed inset-0 top-[69px] bg-white z-40 border-t border-slate-100 p-6 flex flex-col justify-between overflow-y-auto shadow-xl">
          <div className="space-y-4">
            <span className="font-display text-xs font-bold tracking-widest text-brand-primary uppercase">Menu Navigation</span>
            <div className="grid grid-cols-1 gap-2">
              {navItems.map((item) => (
                <div key={item.id} className="border-b border-slate-100 pb-2">
                  {item.isDropdown ? (
                    <div>
                      <div className="font-sans font-bold text-base text-brand-text py-2">
                        {item.label}
                      </div>
                      <div className="pl-4 grid grid-cols-1 gap-1.5 mt-1 border-l-2 border-slate-200">
                        {PRODUCTS.map((prod) => (
                          <button
                            key={prod.id}
                            onClick={() => handleProductItemClick(prod.id)}
                            className="text-left py-1.5 font-sans font-semibold text-sm text-brand-neutral hover:text-brand-primary transition-colors"
                          >
                            • {prod.title}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleNavItemClick(item.id)}
                      className="w-full text-left font-sans font-bold text-base text-brand-text hover:text-brand-primary transition-colors py-2"
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 space-y-4 border-t border-slate-100 pt-6">
            <div className="flex items-center space-x-3 text-brand-neutral">
              <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="font-mono text-xs">ISO 9001:2015 REGISTERED</span>
            </div>
            <button
              onClick={() => handleNavItemClick("contact")}
              className="w-full bg-brand-primary hover:bg-brand-primary-hover text-white py-3 rounded-xl font-sans font-bold text-center flex items-center justify-center space-x-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Get Free Technical Quote</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
