import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CTA from '../../components/CTA';

export default function ContactPage() {
    return (
        <div className="bg-white text-gray-900 font-sans selection:bg-accent selection:text-black">
            <Navbar />
            <div className="min-h-screen pt-20">
                <CTA />
                {/* Could add a specific form component here later */}
            </div>
            <Footer />
        </div>
    );
}
