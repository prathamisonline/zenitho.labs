import React from 'react';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <section id="culture" className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl opacity-60 translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 mb-24">
          <div className="lg:w-1/3">
            <span className="text-black font-bold tracking-wider uppercase text-sm border border-black rounded-full px-3 py-1 bg-white">Methodology</span>
            <h2 className="mt-8 text-5xl font-black text-black tracking-tight leading-[1.1]">
              Vision to Scale.
            </h2>
            <p className="mt-6 text-xl text-gray-500">
              One team. One mission. Your success. We guide you through the entire lifecycle of a digital product.
            </p>

            <div className="flex flex-col gap-3 mt-8">
              {/* Decorative list or just removing the culture icons since they don't fit 'Flow Visualization' perfectly */}
              <div className="text-sm font-bold text-black border-l-2 border-accent pl-4">
                End-to-End Execution
              </div>
              <div className="text-sm font-bold text-black border-l-2 border-accent pl-4">
                Data-Driven Strategy
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 grid gap-6 sm:grid-cols-2">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.id} className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-black/20 hover:shadow-xl transition-all duration-300 group">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-black group-hover:bg-accent transition-colors duration-300">
                    <step.icon size={24} strokeWidth={2.5} />
                  </div>
                  <span className="text-4xl font-black text-gray-100 group-hover:text-gray-200 transition-colors">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{step.description}</p>
                <div className="mt-4 pt-4 border-t border-gray-50 text-xs font-bold uppercase tracking-wider text-gray-400">
                  {step.timeline}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;