import { Award, ShieldAlert, Cpu, Truck, Clock, Handshake } from "lucide-react";

export default function WhyChooseSection() {
  const points = [
    {
      title: "Quality Validation",
      desc: "Our products undergo strict testing at our internal labs and leading NABL-accredited short-circuit testing facilities.",
      icon: Award,
      color: "text-brand-primary",
      bgColor: "bg-brand-primary/10",
      borderColor: "group-hover:border-brand-primary/40",
    },
    {
      title: "Engineering Excellence",
      desc: "We utilize advanced pipe-in-pipe and strip-in-pipe concentric technology for high current dissipation capacity.",
      icon: Cpu,
      color: "text-brand-primary",
      bgColor: "bg-brand-primary/10",
      borderColor: "group-hover:border-brand-primary/40",
    },
    {
      title: "Advanced Manufacturing",
      desc: "Operating 2 modern facilities in Maharashtra with automated copper molecular electroplating and raw compound mixing machinery.",
      icon: ShieldAlert,
      color: "text-brand-primary",
      bgColor: "bg-brand-primary/10",
      borderColor: "group-hover:border-brand-primary/40",
    },
    {
      title: "Timely Deliveries",
      desc: "Heavy-volume stocking, automated material handling, and solid logistics support ensure zero delays for EPC schedules.",
      icon: Truck,
      color: "text-brand-primary",
      bgColor: "bg-brand-primary/10",
      borderColor: "group-hover:border-brand-primary/40",
    },
    {
      title: "Technical Support",
      desc: "Our engineering department offers dedicated support including custom grounding layout calculations and design files.",
      icon: Clock,
      color: "text-brand-primary",
      bgColor: "bg-brand-primary/10",
      borderColor: "group-hover:border-brand-primary/40",
    },
    {
      title: "Customer Satisfaction",
      desc: "Complete end-to-end advisory services including soil testing, specialized earthing designs, and on-site support.",
      icon: Handshake,
      color: "text-brand-primary",
      bgColor: "bg-brand-primary/10",
      borderColor: "group-hover:border-brand-primary/40",
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-brand-bg scroll-mt-20 border-t border-brand-neutral/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-display text-xs font-black uppercase tracking-widest text-brand-primary">
            Corporate Credentials
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-dark tracking-tight mt-2">
            Why EPCs Trust ARE Group
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto mt-4 rounded"></div>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((pt, index) => {
            const Icon = pt.icon;
            return (
              <div
                key={index}
                className={`group bg-white p-8 rounded-2xl border border-brand-neutral/20 shadow-sm hover:shadow-xl transition-all duration-300 ${pt.borderColor} transform hover:-translate-y-1`}
              >
                {/* Icon Container */}
                <div className={`w-14 h-14 ${pt.bgColor} ${pt.color} rounded-2xl flex items-center justify-center mb-6 border border-brand-neutral/20 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-display font-bold text-lg text-brand-dark group-hover:text-brand-primary transition-colors duration-300">
                  {pt.title}
                </h3>
                
                <p className="font-sans text-xs text-brand-neutral mt-3 leading-relaxed">
                  {pt.desc}
                </p>

                {/* Micro tech pattern on card bottom */}
                <div className="w-0 group-hover:w-full h-1 bg-brand-primary transition-all duration-500 mt-6 rounded"></div>
              </div>
            );
          })}
        </div>

        {/* Dynamic quote trigger box */}
        <div className="mt-16 bg-brand-dark rounded-3xl p-8 lg:p-12 relative overflow-hidden shadow-xl border border-brand-neutral/30">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center lg:text-left">
              <h3 className="font-display font-bold text-xl lg:text-2xl text-white">
                Require customized earthing layouts or soil resistivity analyses?
              </h3>
              <p className="font-sans text-xs lg:text-sm text-white/80 max-w-2xl">
                Our in-house design engineering department will calculate thermal sizing and design ground grids for your specific geographical terrain.
              </p>
            </div>
            
            <a
              href="#contact"
              className="bg-brand-primary hover:bg-brand-primary-hover text-white font-sans font-bold text-sm px-6 py-3.5 rounded-xl transition-colors shrink-0 uppercase tracking-wider shadow-lg"
            >
              Consult an Engineer
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
