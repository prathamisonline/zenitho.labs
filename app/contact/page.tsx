'use client';

export const dynamic = 'force-dynamic';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Mail, Phone, Calendar, ArrowRight, Loader2 } from 'lucide-react';
import { useFormState, useFormStatus } from 'react-dom';
import { submitProjectForm } from '../actions';

function ContactSubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button
            type="submit"
            disabled={pending}
            className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
        >
            {pending ? (
                <>
                    <Loader2 size={20} className="animate-spin" /> Sending...
                </>
            ) : (
                "Start the Conversation"
            )}
        </button>
    );
}

export default function ContactPage() {
    const [state, formAction] = useFormState(submitProjectForm, { success: false, message: null });

    return (
        <div className="bg-white text-gray-900 font-sans selection:bg-accent selection:text-black">
            <Navbar />
            <div className="min-h-screen pt-32 pb-20">

                {/* Header */}
                <div className="px-4 max-w-7xl mx-auto mb-16 text-center">
                    <span className="text-blue-600 font-bold tracking-wider uppercase text-sm border-2 border-blue-100 rounded-full px-4 py-1.5 bg-blue-50 mb-6 inline-block">Contact Us</span>
                    <h1 className="text-5xl md:text-7xl font-black text-black mb-6">Let's Build Something <span className="text-blue-600">Amazing Together</span></h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Whether you're a solopreneur with a brilliant idea or a company ready to scale, we'd love to hear from you.
                    </p>
                </div>

                <div className="px-4 max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

                        {/* Contact Options */}
                        <div className="space-y-6">
                            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                <div className="space-y-6">
                                    <div className="flex items-start gap-5">
                                        <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1 text-gray-900">Email Us</h3>
                                            <a href="mailto:sales@zenitholabs.com" className="text-gray-600 hover:text-blue-600 transition-colors text-base">sales@zenitholabs.com</a>
                                        </div>
                                    </div>

                                    <div className="h-px bg-gray-200"></div>

                                    <div className="flex items-start gap-5">
                                        <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1 text-gray-900">Call Us</h3>
                                            <a href="tel:+919680018108" className="text-gray-600 hover:text-blue-600 transition-colors text-base">+91-9680018108</a>
                                        </div>
                                    </div>

                                    <div className="h-px bg-gray-200"></div>

                                    <div className="flex items-start gap-5">
                                        <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                                            <Calendar size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1 text-gray-900">Book a Discovery Call</h3>
                                            <p className="text-gray-600 text-sm mb-3">30-minute free consultation to discuss your project.</p>
                                            <a href="https://calendly.com/" target="_blank" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all">Schedule now <ArrowRight size={16} /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-900 text-white p-8 rounded-2xl border border-slate-800">
                                <h3 className="font-bold text-xl mb-3 text-white">Our Services</h3>
                                <p className="text-slate-300 mb-6 leading-relaxed">Check out our detailed workflows and see how we can bring your vision to life with speed and precision.</p>
                                <a href="/services" className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:gap-3 transition-all">Explore Services <ArrowRight size={16} /></a>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-white p-8 md:p-12 rounded-2xl border-2 border-gray-200 shadow-lg">
                            {state.success ? (
                                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                                        <ArrowRight size={40} className="-rotate-45" />
                                    </div>
                                    <h3 className="text-3xl font-black mb-4">Message Sent!</h3>
                                    <p className="text-gray-500 max-w-sm">{state.message}</p>
                                    <a href="/contact" className="mt-8 font-bold text-sm underline text-gray-400 hover:text-black">Send another message</a>
                                </div>
                            ) : (
                                <form action={formAction} className="space-y-6">
                                    {state.message && !state.success && (
                                        <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-bold">
                                            {state.message}
                                        </div>
                                    )}
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Name*</label>
                                        <input required name="name" type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-black transition-colors" placeholder="Your name" />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Email*</label>
                                        <input required name="email" type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-black transition-colors" placeholder="name@company.com" />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Company/Project Name</label>
                                        <input name="company" type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-black transition-colors" placeholder="Project name" />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Which service are you interested in?*</label>
                                        <select required name="interest" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-black transition-colors appearance-none">
                                            <option value="">Select a service...</option>
                                            <option value="web-dev">Web Development</option>
                                            <option value="shopify">Shopify Development</option>
                                            <option value="ai-automation">AI Automation Agents</option>
                                            <option value="documentation">Product Documentation</option>
                                            <option value="profitability">Profitability Analysis</option>
                                            <option value="growth">Growth & Marketing</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Tell us about your project*</label>
                                        <textarea required name="projectDetails" rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-black transition-colors resize-none" placeholder="What are you looking to build?"></textarea>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">What's your timeline?</label>
                                        <input name="timeline" type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-black transition-colors" placeholder="e.g. 1-2 months" />
                                    </div>

                                    <div className="pt-4">
                                        <ContactSubmitButton />
                                        <p className="text-center text-xs text-gray-400 mt-4">
                                            Response Promise: We'll get back to you within 24 hours with next steps.
                                        </p>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}
