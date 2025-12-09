import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Share2 } from 'lucide-react';

export default function AffiliatePage() {
    return (
        <div className="bg-white text-gray-900 font-sans selection:bg-accent selection:text-black min-h-screen flex flex-col justify-between">
            <Navbar />
            <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto w-full text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-black rounded-full text-accent mb-8">
                    <Share2 size={32} />
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-black mb-6">Partner With Us</h1>
                <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-12">
                    Earn commissions by referring ambitious businesses to Zenitho Labs.
                    Join our affiliate program and grow with us.
                </p>
                <button className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all">
                    Join Program (Coming Soon)
                </button>
            </div>
            <Footer />
        </div>
    );
}
