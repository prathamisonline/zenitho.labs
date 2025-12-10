'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { CASE_STUDIES } from '../../constants';
import Link from 'next/link';
import { ArrowRight, Filter } from 'lucide-react';
import CTA from '../../components/CTA';

export default function CaseStudiesPage() {
    const [filter, setFilter] = useState('All Projects');

    const categories = ['All Projects', 'Web Development', 'E-commerce', 'AI Automation', 'Fintech', 'SaaS', 'Blockchain'];

    const filteredStudies = filter === 'All Projects'
        ? CASE_STUDIES
        : CASE_STUDIES.filter(study =>
            study.industry.includes(filter) ||
            study.services.some(s => s.includes(filter))
        );

    return (
        <div className="bg-white text-gray-900 font-sans selection:bg-accent selection:text-black">
            <Navbar />
            <div className="min-h-screen pt-32 pb-20">

                {/* Header */}
                <div className="px-4 max-w-7xl mx-auto mb-16 text-center">
                    <span className="text-black font-bold tracking-wider uppercase text-sm border border-black rounded-full px-3 py-1 bg-white mb-6 inline-block">Case Studies</span>
                    <h1 className="text-5xl md:text-7xl font-black text-black mb-6">Real Projects. Real Results. <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Real Impact.</span></h1>
                    <p className="text-xl text-gray-500 max-w-3xl mx-auto">Explore how we've partnered with ambitious teams to transform visions into thriving digital products. Each case study showcases our end-to-end approach—from strategic analysis to successful deployment and growth.</p>
                </div>

                {/* Filter */}
                <div className="px-4 max-w-7xl mx-auto mb-16">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-bold transition-all border ${filter === cat
                                    ? 'bg-black text-white border-black'
                                    : 'bg-white text-gray-600 border-gray-200 hover:border-black'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="px-4 max-w-7xl mx-auto grid gap-16">
                    {filteredStudies.map((study, idx) => (
                        <div key={study.id} className="group grid lg:grid-cols-2 gap-8 items-center bg-gray-50 rounded-[3rem] p-8 md:p-12 transition-all hover:bg-white border border-gray-100 hover:border-black/10 hover:shadow-2xl">
                            <div className="order-2 lg:order-1">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="text-xs font-bold uppercase tracking-wider bg-white px-3 py-1 rounded-full border border-gray-200 text-gray-500">{study.industry}</span>
                                </div>
                                <h2 className="text-4xl font-black text-black mb-4">{study.client}</h2>
                                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                    {study.solution}
                                </p>

                                <div className="space-y-4 mb-8">
                                    <div>
                                        <h4 className="font-bold text-sm uppercase tracking-wide text-gray-400 mb-2">Services Provided</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {study.services.map(s => (
                                                <span key={s} className="bg-black/5 text-black px-3 py-1 rounded-md text-sm font-medium">{s}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-center">
                                    <Link
                                        href={`/case-studies/${study.slug}`}
                                        className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-lg hover:shadow-xl"
                                    >
                                        View Full Case Study <ArrowRight size={18} />
                                    </Link>

                                    {idx === 0 && (
                                        <a href="https://calendly.com/" target="_blank" className="font-bold underline underline-offset-4 decoration-2">Book an appointment</a>
                                    )}
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-200 relative group-hover:scale-[1.02] transition-transform duration-500 shadow-lg">
                                    <img src={study.image} alt={study.client} className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-32">
                    <CTA />
                </div>

                {/* Client Types */}
                <div className="mt-24 px-4 max-w-7xl mx-auto text-center">
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest leading-loose">
                        Solopreneurs launching their first digital product • Small businesses digitizing operations • Product managers shipping faster • Physical asset owners building online presence • Startups racing to market
                    </p>
                </div>

            </div>
            <Footer />
        </div>
    );
}
