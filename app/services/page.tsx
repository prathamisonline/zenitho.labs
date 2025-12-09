import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Services from '../../components/Services';
import Process from '../../components/Process'; // Including Process as it complements Services

export default function ServicesPage() {
    return (
        <div className="bg-white text-gray-900 font-sans selection:bg-accent selection:text-black">
            <Navbar />
            <div className="min-h-screen pt-20">
                <div className="px-4 py-16 max-w-7xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-black text-black mb-6">Our Services</h1>
                    <p className="text-xl text-gray-500 max-w-2xl">Expertise honed by shipping real products.</p>
                </div>
                <Services />
                <Process />
            </div>
            <Footer />
        </div>
    );
}
