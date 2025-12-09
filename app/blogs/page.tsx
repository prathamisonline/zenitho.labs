import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function BlogsPage() {
    return (
        <div className="bg-white text-gray-900 font-sans selection:bg-accent selection:text-black min-h-screen flex flex-col justify-between">
            <Navbar />
            <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto w-full">
                <span className="text-accent font-bold tracking-wider uppercase text-sm border border-black rounded-full px-3 py-1 bg-black">Insights</span>
                <h1 className="text-5xl md:text-7xl font-black text-black mt-6 mb-8">The Blog</h1>
                <div className="grid md:grid-cols-2 gap-8 border-t border-gray-100 pt-8">
                    <div className="group cursor-pointer">
                        <div className="aspect-video bg-gray-100 rounded-2xl mb-6 flex items-center justify-center text-gray-400">Image Placeholder</div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:underline decoration-2 underline-offset-4">Why Vibe Coding is the Future of Product</h3>
                        <p className="text-gray-500">Dec 9, 2025 • 5 min read</p>
                    </div>
                    <div className="group cursor-pointer">
                        <div className="aspect-video bg-gray-100 rounded-2xl mb-6 flex items-center justify-center text-gray-400">Image Placeholder</div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:underline decoration-2 underline-offset-4">AI Agents vs. Traditional Automation</h3>
                        <p className="text-gray-500">Dec 2, 2025 • 8 min read</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
