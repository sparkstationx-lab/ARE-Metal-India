import { ShieldCheck, Award, FileCheck2, Globe, HeartHandshake } from "lucide-react";
import { CERTIFICATES } from "../data";

export default function CertificatesSection() {
  const iconMap: Record<string, any> = {
    "iso-9001-2015": Award,
    "ce-compliance": Globe,
    "rohs-compliant": HeartHandshake,
    "nabl-test-report": FileCheck2,
  };

  return (
    <section id="certificates" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-display text-xs font-black uppercase tracking-widest text-brand-primary">
            Quality Certifications
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-dark tracking-tight mt-2">
            Rigorous Global Compliance Standards
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto mt-4 rounded"></div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATES.map((cert) => {
            const IconComponent = iconMap[cert.id] || ShieldCheck;
            return (
              <div
                key={cert.id}
                className="bg-white p-6 rounded-2xl border border-brand-neutral/20 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  {/* Decorative Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[9px] bg-brand-neutral/10 text-brand-neutral font-bold px-2 py-0.5 rounded uppercase">
                      VERIFIED
                    </span>
                  </div>

                  {/* Certificate Titles */}
                  <h3 className="font-display font-bold text-base text-brand-dark group-hover:text-brand-primary transition-colors line-clamp-1" title={cert.title}>
                    {cert.title}
                  </h3>
                  <p className="font-sans text-[11px] text-brand-primary font-bold mt-1">
                    {cert.issuer}
                  </p>
                  
                  <p className="font-sans text-[11px] text-brand-neutral mt-3 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Verification ID / Date footer */}
                <div className="mt-6 pt-4 border-t border-brand-neutral/20 font-mono text-[9px] text-brand-neutral/80 space-y-1">
                  <div className="flex justify-between">
                    <span>REG NO:</span>
                    <span className="font-bold text-brand-dark">{cert.number}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>DATE:</span>
                    <span className="font-bold text-brand-dark">{cert.date}</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Direct Link to NABL Reports notice */}
        <div className="mt-12 bg-brand-bg rounded-2xl p-6 border border-brand-neutral/20 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="flex items-center space-x-3 text-left">
            <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full shrink-0"></div>
            <p className="font-sans text-xs text-brand-neutral">
              Need a copy of our third-party <strong>NABL Short-Circuit Test Reports</strong> or <strong>Salt Spray Testing certificates</strong>? Our sales division can dispatch detailed laboratory dossiers on demand.
            </p>
          </div>
          <a
            href="#contact"
            className="text-brand-primary font-sans text-xs font-bold shrink-0 hover:underline flex items-center space-x-1 uppercase"
          >
            <span>Request Test Dossier</span>
            <span>&rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
}
