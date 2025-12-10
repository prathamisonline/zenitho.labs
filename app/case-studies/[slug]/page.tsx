'use client';

import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { CASE_STUDIES } from '../../../constants';
import { notFound, useParams } from 'next/navigation';
import { ArrowLeft, Check, Calendar, Users, BarChart, Server, Layers, Megaphone } from 'lucide-react';
import Link from 'next/link';
import CTA from '../../../components/CTA';

export default function CaseStudyDetail() {
    const params = useParams();
    const study = CASE_STUDIES.find(s => s.slug === params.slug);

    if (!study) {
        return <div className="min-h-screen flex items-center justify-center">Case Study Not Found</div>;
    }

    return (
        <div className="bg-white text-gray-900 font-sans selection:bg-accent selection:text-black">
            <Navbar />
            <div className="pt-32 pb-20">

                {/* Hero Header */}
                <div className="px-4 max-w-7xl mx-auto mb-12">
                    <Link href="/case-studies" className="inline-flex items-center gap-2 text-gray-500 hover:text-black font-medium mb-8 transition-colors">
                        <ArrowLeft size={16} /> Back to Case Studies
                    </Link>

                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-accent/20 text-black px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-accent/30">{study.industry}</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black text-black mb-8 leading-tight">{study.client}</h1>
                    <p className="text-2xl text-gray-500 leading-relaxed font-medium">{study.overview}</p>
                </div>

                {/* Main Image */}
                <div className="px-4 max-w-7xl mx-auto mb-20">
                    <div className="aspect-video bg-gray-100 rounded-[2rem] overflow-hidden shadow-2xl">
                        <img src={study.image} alt={study.client} className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* Content Grid */}
                <div className="px-4 max-w-7xl mx-auto grid gap-24">

                    {/* At a Glance */}
                    <div className="grid md:grid-cols-2 gap-12 p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100 mb-4">
                        <div>
                            <h3 className="text-lg font-black uppercase tracking-wider mb-6 flex items-center gap-3">
                                <Layers className="text-accent" /> Services
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {study.services.map(s => <span key={s} className="bg-white border text-sm font-bold px-4 py-2 rounded-lg shadow-sm">{s}</span>)}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-black uppercase tracking-wider mb-6 flex items-center gap-3">
                                <Users className="text-accent" /> User Personas
                            </h3>
                            <ul className="space-y-3">
                                {study.userPersonas?.map((p, i) => (
                                    <li key={i} className="text-gray-700 font-medium flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></span> {p}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Challenge & Solution */}
                    <div className="grid lg:grid-cols-2 gap-20 mb-4">
                        <div>
                            <h2 className="text-4xl font-black mb-8">The Challenge</h2>
                            <p className="text-xl text-gray-600 leading-relaxed mb-8">{study.challenge}</p>
                            <h4 className="font-bold text-sm uppercase tracking-wide text-gray-400 mb-6">Pain Points Solved</h4>
                            <ul className="space-y-4">
                                {study.painPointsSolved?.map((p, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-800 font-medium text-lg">
                                        <Check size={20} className="text-green-500 mt-1 flex-shrink-0" /> {p}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col h-full">
                            <h2 className="text-4xl font-black mb-8">The Solution</h2>
                            <p className="text-xl text-gray-600 leading-relaxed mb-4 flex-grow">{study.solution}</p>
                            {study.techStack && (
                                <div className="bg-black text-white p-8 rounded-3xl mt-auto shadow-2xl">
                                    <h4 className="font-bold text-accent mb-6 flex items-center gap-3 text-lg"><Server size={20} /> Tech Stack</h4>
                                    <div className="space-y-4 font-mono text-sm">
                                        {study.techStack.frontend && <div className="flex justify-between border-b border-white/10 pb-3"><span>Frontend</span> <span className="text-gray-300 text-right">{study.techStack.frontend}</span></div>}
                                        {study.techStack.backend && <div className="flex justify-between border-b border-white/10 pb-3"><span>Backend</span> <span className="text-gray-300 text-right">{study.techStack.backend}</span></div>}
                                        {study.techStack.integrations && <div className="flex justify-between border-b border-white/10 pb-3"><span>Integrations</span> <span className="text-gray-300 text-right">{study.techStack.integrations}</span></div>}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Market & Strategy */}
                    {study.marketSize && (
                        <div>
                            <h2 className="text-4xl font-black mb-12 text-center">Market Intelligence</h2>
                            <div className="grid md:grid-cols-3 gap-8 mb-8">
                                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-shadow text-center">
                                    <div className="text-blue-600 font-black text-2xl mb-4">TAM</div>
                                    <div className="text-4xl font-black text-gray-900 mb-3">{study.marketSize.tam.split(' ')[0]}</div>
                                    <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">Total Addressable Market</div>
                                </div>
                                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-shadow text-center">
                                    <div className="text-purple-600 font-black text-2xl mb-4">SAM</div>
                                    <div className="text-4xl font-black text-gray-900 mb-3">{study.marketSize.sam.split(' ')[0]}</div>
                                    <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">Serviceable Available Market</div>
                                </div>
                                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-shadow text-center">
                                    <div className="text-green-600 font-black text-2xl mb-4">SOM</div>
                                    <div className="text-4xl font-black text-gray-900 mb-3">{study.marketSize.som.split(' ')[0]}</div>
                                    <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">Serviceable Obtainable Market</div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Timeline & Resources */}
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-gray-50 p-10 rounded-[2.5rem]">
                            <h3 className="text-2xl font-black mb-6 flex items-center gap-3"><Calendar className="text-black" /> Timeline</h3>
                            <p className="text-gray-700 leading-relaxed text-lg font-medium">
                                {study.buildTimeline}
                            </p>
                        </div>
                        <div className="bg-gray-50 p-10 rounded-[2.5rem]">
                            <h3 className="text-2xl font-black mb-6 flex items-center gap-3"><Users className="text-black" /> Resources Strategy</h3>
                            <p className="text-gray-700 leading-relaxed text-lg font-medium">
                                {study.resourcesNeeded}
                            </p>
                        </div>
                    </div>

                    {/* Analytics & Growth */}
                    <div className="bg-gray-900 text-white p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-accent w-64 h-64 rounded-full blur-[100px] opacity-20"></div>
                        <div className="relative z-10 grid md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3"><BarChart className="text-accent" /> Analytics Setup</h3>
                                <p className="leading-relaxed mb-4 text-lg font-medium text-gray-700">{study.analyticsSetup}</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3"><Megaphone className="text-accent" /> Marketing & Growth</h3>
                                <p className="leading-relaxed mb-4 text-lg font-medium text-gray-700">{study.marketingEfforts}</p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial */}
                    <div className="text-center max-w-3xl mx-auto py-12">
                        <p className="text-3xl font-medium italic text-gray-800 mb-6">"{study.testimonial}"</p>
                        <div className="font-black text-lg">{study.testimonialAuthor}</div>
                    </div>

                </div>

                <div className="mt-20">
                    <CTA />
                </div>
            </div>
            <Footer />
        </div>
    );
}
