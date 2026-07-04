import { FileText, Download, ShieldCheck, Mail, ArrowRight, ExternalLink } from "lucide-react";

interface DownloadItem {
  id: string;
  title: string;
  description: string;
  fileSize: string;
  fileFormat: string;
  category: string;
}

const DOWNLOAD_ITEMS: DownloadItem[] = [
  {
    id: "corp-brochure",
    title: "ARE Metal India Corporate Catalog",
    description: "Our comprehensive B2B master brochure featuring manufacturing plant machinery, raw materials, and quality credentials.",
    fileSize: "4.8 MB",
    fileFormat: "PDF",
    category: "Corporate Literature"
  },
  {
    id: "copper-rod-specs",
    title: "Copper Bonded Steel Rod Submittal Sheet",
    description: "Detailed dimension charts, copper thickness tolerances, molecular adhesion standards, and UL 467 testing profiles.",
    fileSize: "1.2 MB",
    fileFormat: "PDF",
    category: "Technical Datasheets"
  },
  {
    id: "electrode-catalog",
    title: "Chemical Earthing Systems Guide",
    description: "Installation blueprints, pipe-in-pipe backfill dimensions, and grounding resistance calculations according to IS 3043.",
    fileSize: "2.4 MB",
    fileFormat: "PDF",
    category: "Technical Datasheets"
  },
  {
    id: "lightning-protection",
    title: "ESE Air Terminal Technical Blueprint",
    description: "Radius protection tables, level of protection criteria (NFC 17-102), and complete wind resistance specifications.",
    fileSize: "3.1 MB",
    fileFormat: "PDF",
    category: "Installation Guides"
  }
];

interface DownloadSectionProps {
  onOpenBrochureRequest: () => void;
}

export default function DownloadSection({ onOpenBrochureRequest }: DownloadSectionProps) {
  return (
    <section id="downloads" className="py-24 bg-white scroll-mt-20 border-t border-brand-neutral/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-display text-xs font-black uppercase tracking-widest text-brand-primary">
            Engineering Library
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-dark tracking-tight mt-2">
            Technical Resources & Catalogs
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto mt-4 rounded"></div>
          <p className="font-sans text-xs text-brand-neutral mt-4 leading-relaxed max-w-lg mx-auto">
            Access certified drawings, dimensional submittals, and installation dossiers for your engineering design approvals.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {DOWNLOAD_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-brand-bg rounded-2xl p-6 md:p-8 border border-brand-neutral/15 hover:border-brand-primary/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div>
                {/* Meta details */}
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono text-[9px] font-bold text-brand-primary uppercase tracking-wider bg-orange-50 px-2 py-0.5 rounded-full border border-brand-primary/10">
                    {item.category}
                  </span>
                  <div className="flex items-center space-x-2 font-mono text-[10px] text-brand-neutral">
                    <span>{item.fileFormat}</span>
                    <span>•</span>
                    <span>{item.fileSize}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-base md:text-lg text-brand-dark group-hover:text-brand-primary transition-colors mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-xs text-brand-neutral leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Action Trigger */}
              <div className="mt-8 pt-4 border-t border-brand-neutral/10 flex items-center justify-between">
                <span className="font-sans text-[10px] text-brand-neutral font-medium">
                  ISO 9001:2015 Approved
                </span>
                <button
                  onClick={onOpenBrochureRequest}
                  className="font-sans font-bold text-xs text-brand-dark hover:text-brand-primary flex items-center space-x-1.5 transition-colors uppercase tracking-wider cursor-pointer"
                >
                  <span>Request File</span>
                  <Download className="w-4 h-4 text-brand-primary shrink-0 group-hover:translate-y-0.5 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Dynamic Warning Alert Box */}
        <div className="mt-12 bg-brand-dark rounded-3xl p-8 max-w-4xl mx-auto shadow-xl border border-brand-neutral/30 relative overflow-hidden text-center sm:text-left">
          <div className="absolute top-0 right-0 w-48 h-48 bg-brand-primary/5 rounded-full blur-2xl"></div>
          
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5">
              <span className="font-mono text-[9px] font-bold text-brand-primary uppercase tracking-wider">
                Custom Grounding Calculations
              </span>
              <h3 className="font-display font-bold text-lg text-white">
                Designing a custom grounding layout for a bid or tender?
              </h3>
              <p className="font-sans text-xs text-white/75 max-w-2xl leading-relaxed">
                Send your site soil resistivity values, target ground resistance (e.g., &lt;1Ω), and fault current parameters to our design team. We supply compliant CAD designs free of cost.
              </p>
            </div>
            
            <a
              href="#contact"
              className="bg-brand-primary hover:bg-brand-primary-hover text-white font-sans font-extrabold text-xs px-6 py-3.5 rounded-xl transition-colors uppercase tracking-widest shrink-0 whitespace-nowrap shadow-lg flex items-center space-x-1.5"
            >
              <span>Submit RFQ</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
