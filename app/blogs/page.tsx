'use client';

import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Construction } from 'lucide-react';

export default function BlogsPage() {
    return (
        <div className="bg-white text-gray-900 font-sans selection:bg-accent selection:text-black flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow flex flex-col items-center justify-center text-center px-4 pt-32 pb-20">

                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-8">
                    <Construction size={48} className="text-gray-400" />
                </div>

                <h1 className="text-5xl md:text-7xl font-black text-black mb-6"><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Coming Soon</span></h1>
                <p className="text-xl text-gray-500 max-w-xl mx-auto mb-12">
                    We're currently writing comprehensive guides on product development, AI automation, and growth strategies. Stay tuned!
                </p>

            </main>
            <Footer />
        </div>
    );
}
