import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/30 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
          Ready to <span className="text-accent italic">transform</span><br /> your business?
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
          Join innovative teams that have accelerated their growth with Zenitho Labs. Your success story starts with a simple chat.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="https://calendly.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-10 py-5 bg-accent text-black font-bold text-lg rounded-full hover:bg-white hover:scale-105 transition-all shadow-xl"
          >
            <Calendar size={20} />
            Book a Free Strategy Call
          </a>
          <a
            href="#portfolio"
            className="flex items-center justify-center gap-3 px-10 py-5 bg-white/10 border border-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-full hover:bg-white/20 transition-all"
          >
            View Our Work <ArrowRight size={20} />
          </a>
        </div>

        <p className="mt-8 text-sm text-gray-500 uppercase tracking-widest font-bold">
          No commitment • Free Consultation
        </p>
      </div>
    </section>
  );
};

export default CTA;