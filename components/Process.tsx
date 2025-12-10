import React from 'react';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <section id="culture" className="py-32 bg-gray-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <span className="text-black font-bold tracking-wider uppercase text-sm border border-black rounded-full px-3 py-1 bg-white">Methodology</span>
          <h2 className="mt-8 text-5xl md:text-6xl font-black text-black tracking-tight leading-[1.1]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Vision to Scale.</span>
          </h2>
          <p className="mt-6 text-xl text-gray-500 max-w-2xl mx-auto">
            One team. One mission. Your success. We guide you through the entire lifecycle of a digital product.
          </p>
        </div>

        {/* Vertical Timeline Journey */}
        <div className="relative">
          {/* Central Vertical Path */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-200 via-pink-200 to-purple-200 hidden md:block transform -translate-x-1/2"></div>

          {/* Timeline Steps */}
          <div className="space-y-16 md:space-y-24">
            {PROCESS_STEPS.map((step, index) => {
              const isLeft = index % 2 === 0;
              const colors = [
                { bg: 'from-purple-600 to-pink-500', dot: 'bg-purple-500', accent: 'border-purple-300', text: 'text-purple-600' },
                { bg: 'from-lime-400 to-green-500', dot: 'bg-lime-500', accent: 'border-lime-300', text: 'text-lime-600' },
                { bg: 'from-pink-500 to-fuchsia-500', dot: 'bg-pink-500', accent: 'border-pink-300', text: 'text-pink-600' },
                { bg: 'from-green-500 to-emerald-500', dot: 'bg-green-500', accent: 'border-green-300', text: 'text-green-600' },
                { bg: 'from-fuchsia-500 to-purple-600', dot: 'bg-fuchsia-500', accent: 'border-fuchsia-300', text: 'text-fuchsia-600' },
                { bg: 'from-teal-500 to-cyan-500', dot: 'bg-teal-500', accent: 'border-teal-300', text: 'text-teal-600' },
              ];
              const color = colors[index % colors.length];

              return (
                <div key={step.id} className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group border-l-4 ${color.accent}`}>
                      {/* Icon and Title Row */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                          <step.icon size={24} className="text-white" strokeWidth={2} />
                        </div>
                        <div className="flex-1">
                          <div className={`inline-block px-3 py-1 ${color.text} bg-gray-50 rounded-full text-xs font-bold uppercase tracking-wider mb-2`}>
                            {step.timeline}
                          </div>
                          <h3 className="text-2xl font-black text-gray-900">{step.title}</h3>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot and Connector */}
                  <div className="hidden md:flex items-center justify-center w-2/12 flex-shrink-0">
                    <div className="relative">
                      {/* Connecting Line */}
                      <div className={`absolute ${isLeft ? 'left-1/2' : 'right-1/2'} top-1/2 h-0.5 w-16 ${color.accent}`}></div>

                      {/* Central Dot */}
                      <div className={`relative w-8 h-8 rounded-full ${color.dot} shadow-lg ring-4 ring-white flex items-center justify-center`}>
                        <span className="text-white font-bold text-sm">{step.number}</span>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="hidden md:block w-5/12"></div>

                  {/* Mobile Number Badge */}
                  <div className={`md:hidden absolute -left-4 top-8 w-10 h-10 rounded-full bg-gradient-to-br ${color.bg} shadow-lg flex items-center justify-center`}>
                    <span className="text-white font-bold text-sm">{step.number}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Badge */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-bold rounded-full shadow-xl">
              <span>End-to-End Execution</span>
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span>Data-Driven Strategy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;