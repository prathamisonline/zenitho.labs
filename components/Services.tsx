import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { SERVICES } from '../constants';

// Define color schemes for each service using solid, professional colors
const colorSchemes = [
  {
    bg: 'bg-blue-600',
    border: 'border-gray-200 hover:border-blue-300',
    hover: 'hover:shadow-blue-100',
    check: 'bg-blue-600',
    link: 'hover:text-blue-600'
  },
  {
    bg: 'bg-indigo-600',
    border: 'border-gray-200 hover:border-indigo-300',
    hover: 'hover:shadow-indigo-100',
    check: 'bg-indigo-600',
    link: 'hover:text-indigo-600'
  },
  {
    bg: 'bg-teal-600',
    border: 'border-gray-200 hover:border-teal-300',
    hover: 'hover:shadow-teal-100',
    check: 'bg-teal-600',
    link: 'hover:text-teal-600'
  },
  {
    bg: 'bg-emerald-600',
    border: 'border-gray-200 hover:border-emerald-300',
    hover: 'hover:shadow-emerald-100',
    check: 'bg-emerald-600',
    link: 'hover:text-emerald-600'
  },
  {
    bg: 'bg-orange-600',
    border: 'border-gray-200 hover:border-orange-300',
    hover: 'hover:shadow-orange-100',
    check: 'bg-orange-600',
    link: 'hover:text-orange-600'
  },
  {
    bg: 'bg-rose-600',
    border: 'border-gray-200 hover:border-rose-300',
    hover: 'hover:shadow-rose-100',
    check: 'bg-rose-600',
    link: 'hover:text-rose-600'
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-3xl">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm border-2 border-blue-100 rounded-full px-4 py-1.5 bg-blue-50">Expertise</span>
            <h2 className="mt-6 text-5xl font-black text-black tracking-tight">What We Do: <span className="text-blue-600">Your Complete Digital Partner</span></h2>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl leading-relaxed">
              We're not just developers—we're your end-to-end product team. From the first vision map to scaling past your first million users, we handle everything in between.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const colors = colorSchemes[index % colorSchemes.length];
            return (
              <div
                key={service.id}
                className={`group relative flex flex-col bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 ${colors.border}`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${colors.bg} group-hover:scale-105 transition-transform duration-300`}>
                  <service.icon size={28} className="text-white" strokeWidth={2} />
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed text-sm">{service.description}</p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <div className={`w-5 h-5 mr-3 flex-shrink-0 rounded-full flex items-center justify-center ${colors.check}`}>
                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                      </div>
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Link */}
                <a
                  href="#contact"
                  className={`inline-flex items-center text-gray-900 font-semibold transition-all w-fit group/link ${colors.link}`}
                >
                  {service.ctaText}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;