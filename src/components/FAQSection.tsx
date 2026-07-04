import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What certifications do ARE Metal India products hold?",
    answer: "ARE Metal India is an ISO 9001:2015 certified manufacturer. Our earthing electrodes, copper-bonded ground rods, and early streamer emission (ESE) terminals are fully tested and certified by premier engineering laboratories like CPRI (Central Power Research Institute) and ERDA. Our hardware complies with international standards including UL 467, IEC 62305, BS 7430, and NFC 17-102."
  },
  {
    question: "Where is the industrial manufacturing facility located?",
    answer: "Our main production plant and corporate headquarters are located at Gala No. 2, Royal Industrial Estate, Plot No. 12, Waliv Phata, Vasai East, Palghar - 401208, Maharashtra, India. We handle all metal casting, pipe-in-pipe chemical filling, electrolytic electroplating, and quality inspections in-house to maintain strict quality standards."
  },
  {
    question: "What is the standard copper plating thickness for your copper bonded ground rods?",
    answer: "Our premium copper bonded steel ground rods feature a uniform, molecularly electroplated copper layer with a minimum thickness of 254 microns (10 mils) in strict compliance with UL 467 specifications. This guarantees a lifetime exceeding 30 years even in highly corrosive soils, as the copper layer does not peel or crack."
  },
  {
    question: "Does ARE Metal India provide custom grounding design and engineering calculations?",
    answer: "Yes, our dedicated engineering division provides comprehensive technical support for large-scale EPC contractors. This includes analyzing site soil resistivity data, performing safe grounding layout calculations, creating technical product drawings, and offering installation consulting to ensure compliance with IS 3043 and BS 7430."
  },
  {
    question: "How can we request a B2B quotation, bulk pricing, or engineering catalogs?",
    answer: "You can submit an RFQ directly using our on-page technical inquiry form, email our sales division at sales@aremetalindia.com or aremetalindia@gmail.com, or speak immediately with a coordinator by calling +91 97731 51336 or +91 98336 04245 (available Mon - Sat: 9:00 AM to 7:00 PM IST)."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white scroll-mt-20 border-t border-brand-neutral/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-display text-xs font-black uppercase tracking-widest text-brand-primary">
            Answering Your Questions
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-dark tracking-tight mt-2">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto mt-4 rounded"></div>
          <p className="font-sans text-xs text-brand-neutral mt-4 leading-relaxed">
            Review key technical details about our B2B manufacturing standards, specifications, and project consulting.
          </p>
        </div>

        {/* Accordion FAQ Grid */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-brand-neutral/15 rounded-2xl overflow-hidden bg-brand-bg hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none focus:ring-2 focus:ring-brand-primary/50 cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-btn-${idx}`}
                >
                  <span className="flex items-start space-x-3.5 pr-4">
                    <HelpCircle className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                    <span className="font-display font-bold text-sm md:text-base text-brand-dark leading-snug">
                      {item.question}
                    </span>
                  </span>
                  <span className={`p-1.5 rounded-lg bg-white border border-brand-neutral/10 text-brand-dark transition-transform duration-300 ${isOpen ? "rotate-180 text-brand-primary" : ""}`}>
                    <ChevronDown className="w-4 h-4 shrink-0" />
                  </span>
                </button>

                <div
                  id={`faq-answer-${idx}`}
                  role="region"
                  aria-labelledby={`faq-btn-${idx}`}
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-60 border-t border-brand-neutral/10 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
                >
                  <div className="p-5 md:p-6 bg-white font-sans text-xs md:text-sm text-brand-neutral leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
