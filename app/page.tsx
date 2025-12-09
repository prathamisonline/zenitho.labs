'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Process';
import Portfolio from '../components/Portfolio';
import Team from '../components/Team';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import InteractiveProducts from '../components/InteractiveProducts';
import Partners from '../components/Partners';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <div className="bg-white text-gray-900 font-sans selection:bg-accent selection:text-black">
      <Navbar onOpenContact={openContact} />
      <Hero onOpenContact={openContact} />
      <Services />
      <Process />
      <Portfolio />
      <Team />
      <Stats />
      <Testimonials />
      <InteractiveProducts />
      <Partners />
      <CTA />
      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </div>
  );
}
