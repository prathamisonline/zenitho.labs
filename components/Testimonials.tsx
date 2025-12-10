import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-black font-bold tracking-wider uppercase text-sm border border-black rounded-full px-3 py-1 bg-white">Testimonials</span>
          <h2 className="mt-6 text-4xl font-black text-black">What <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Our Partners</span> Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
              <div className="flex text-accent mb-6">
                {[...Array(t.rating)].map((_, i) => <Star key={i} size={20} fill="#ccf381" className="stroke-black" />)}
              </div>
              <p className="text-gray-800 relative z-10 font-medium leading-relaxed mb-8 text-lg">"{t.quote}"</p>
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-100 group-hover:ring-accent transition-all" />
                <div>
                  <h4 className="font-bold text-black text-sm">{t.name}</h4>
                  <p className="text-xs text-gray-500 font-medium">{t.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;