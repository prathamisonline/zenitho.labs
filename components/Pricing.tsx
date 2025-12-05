import React from 'react';
import { Check, X, ArrowRight } from 'lucide-react';
import { PRICING_PACKAGES } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-black font-bold tracking-wider uppercase text-sm border border-black rounded-full px-3 py-1">Pricing</span>
          <h2 className="mt-6 text-5xl font-black text-black tracking-tight">Invest in growth.</h2>
          <p className="mt-6 text-xl text-gray-500">
            Simple, transparent pricing. No hidden fees, just pure value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {PRICING_PACKAGES.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`relative bg-white rounded-[2rem] p-6 border flex flex-col h-full transition-transform duration-300 hover:-translate-y-2 ${
                pkg.popular 
                  ? 'border-black shadow-2xl scale-105 z-10' 
                  : 'border-gray-200 hover:border-gray-300 shadow-sm'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent text-black px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wide border border-black">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900">{pkg.name}</h3>
                <div className="flex items-baseline gap-1 mt-4 mb-2">
                  <span className="text-3xl font-black text-black">{pkg.price}</span>
                </div>
                <p className="text-xs text-gray-500 font-medium bg-gray-50 inline-block px-2 py-1 rounded">
                  {pkg.timeline} turnaround
                </p>
              </div>

              <div className="flex-grow space-y-4 mb-8">
                {pkg.included.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="bg-black/5 p-0.5 rounded-full mt-0.5">
                      <Check className="w-3 h-3 text-black" strokeWidth={3} />
                    </div>
                    <span className="text-sm text-gray-600 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <a 
                href="#contact" 
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm transition-all ${
                  pkg.popular
                    ? 'bg-black text-white hover:bg-gray-800 shadow-lg'
                    : 'bg-white border-2 border-black text-black hover:bg-black hover:text-white'
                }`}
              >
                Get Started <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gray-50 rounded-[2.5rem] p-12 text-center border border-gray-100">
            <h3 className="text-2xl font-black mb-4">Need something custom?</h3>
            <p className="text-gray-500 mb-8 max-w-xl mx-auto">
              We know one size doesn't fit all. Let's chat about your specific requirements and build a package that works for you.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-colors shadow-sm border border-gray-200">
              Request Custom Quote <ArrowRight size={18} />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;