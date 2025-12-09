import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-3xl">
            <span className="text-black font-bold tracking-wider uppercase text-sm border border-black rounded-full px-3 py-1 bg-white">Expertise</span>
            <h2 className="mt-6 text-5xl font-black text-black tracking-tight">What We Do: Your Complete Digital Partner</h2>
            <p className="mt-6 text-xl text-gray-500 max-w-2xl">
              We're not just developers—we're your end-to-end product team. From the first vision map to scaling past your first million users, we handle everything in between.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col bg-white rounded-[2rem] p-10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <service.icon size={32} className="text-black" strokeWidth={1.5} />
              </div>

              <h3 className="text-2xl font-black text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-500 mb-8 flex-grow leading-relaxed">{service.description}</p>

              <ul className="space-y-4 mb-10">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm font-medium text-gray-700">
                    <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0 bg-black rounded-full p-1" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="inline-flex items-center text-black font-bold border-b-2 border-black/10 hover:border-black transition-all pb-1 w-fit group-hover:gap-2"
              >
                {service.ctaText}
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;