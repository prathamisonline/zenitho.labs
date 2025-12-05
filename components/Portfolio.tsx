import React from 'react';
import { ArrowUpRight, Star } from 'lucide-react';
import { CASE_STUDIES } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-3xl">
            <span className="text-black font-bold tracking-wider uppercase text-sm border border-black rounded-full px-3 py-1">Selected Work</span>
            <h2 className="mt-6 text-5xl md:text-6xl font-black text-black tracking-tight">Stuff we made.</h2>
            <p className="mt-6 text-xl text-gray-500 max-w-xl">
              A collection of digital products that drive results and look good doing it.
            </p>
          </div>
          <a href="#contact" className="hidden md:flex items-center gap-2 font-bold text-lg hover:underline decoration-2 underline-offset-4">
            See all projects <ArrowUpRight size={20} />
          </a>
        </div>

        <div className="grid gap-x-8 gap-y-16 lg:grid-cols-2">
          {CASE_STUDIES.map((study, index) => (
            <div key={study.id} className={`group ${index === 2 ? 'lg:col-span-2' : ''}`}>
              <div className="relative overflow-hidden rounded-3xl bg-gray-100 aspect-[4/3] mb-8 border border-gray-100">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10"></div>
                <img 
                  src={study.image} 
                  alt={study.client} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider z-20 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                  View Case Study
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-3xl font-bold text-black mb-2">{study.client}</h3>
                    <p className="text-gray-500 text-lg leading-relaxed max-w-xl">{study.solution}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-2">
                  {study.results.slice(0, 2).map((result, i) => (
                    <span key={i} className="px-4 py-2 bg-gray-50 rounded-lg text-sm font-medium border border-gray-100">
                      {result}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center md:hidden">
          <button className="px-8 py-4 border-2 border-black rounded-full font-bold text-black hover:bg-black hover:text-white transition-colors">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;