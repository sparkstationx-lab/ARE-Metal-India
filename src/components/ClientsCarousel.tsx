import { CLIENTS } from "../data";

export default function ClientsCarousel() {
  // Double the array for seamless infinite looping
  const doubleClients = [...CLIENTS, ...CLIENTS, ...CLIENTS];

  return (
    <section id="clients" className="py-16 bg-brand-dark border-t border-brand-neutral/20 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center relative z-10">
        <span className="font-display text-xs font-black uppercase tracking-widest text-brand-primary">
          Supply Footprint
        </span>
        <h3 className="font-display font-bold text-lg text-white mt-1">
          Powering Ground Systems For India's Megaprojects
        </h3>
      </div>

      {/* Infinite scrolling slider */}
      <div className="relative w-full overflow-hidden flex items-center z-10">
        
        {/* Gradients to fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-dark to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-dark to-transparent z-20 pointer-events-none"></div>

        {/* Marquee Ticker */}
        <div className="flex animate-marquee whitespace-nowrap space-x-8 md:space-x-12 py-4">
          {doubleClients.map((client, idx) => (
            <div
              key={idx}
              className="inline-flex flex-col items-center justify-center bg-white/5 border border-white/10 px-8 py-4 rounded-xl min-w-[180px] hover:bg-white/10 hover:border-brand-primary/40 transition-colors cursor-default shrink-0"
            >
              <div className="font-display font-black text-white tracking-wider text-sm md:text-base">
                {client.logo}
              </div>
              <span className="font-sans text-[9px] text-slate-300 font-semibold uppercase mt-1 tracking-widest">
                {client.industry}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Injected continuous CSS keyframes for the marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
