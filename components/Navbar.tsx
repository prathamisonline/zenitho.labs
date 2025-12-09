import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavbarProps {
  onOpenContact: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Methodology', href: '#culture' }, // Process used id="culture" previously, I should probably check Process.tsx id. It was "culture".
    { name: 'Work', href: '#portfolio' },
    { name: 'Team', href: '#team' },
    { name: 'Playground', href: '#interactive' },
  ];

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav
          className={`pointer-events-auto w-full max-w-4xl transition-all duration-300 rounded-full px-6 py-3 flex items-center justify-between ${scrolled || isOpen
              ? 'bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100'
              : 'bg-white/70 backdrop-blur-md border border-white/50'
            }`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="bg-black p-1.5 rounded-full text-white group-hover:rotate-12 transition-transform duration-300">
              <Sparkles size={16} fill="#ccf381" className="text-accent" />
            </div>
            <span className="font-black text-lg tracking-tight text-black">
              Zenitho<span className="text-gray-400 font-normal">Labs</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-black rounded-full hover:bg-gray-50 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onOpenContact}
              className="bg-black hover:bg-gray-800 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all transform hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-black bg-gray-100 rounded-full"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-white pt-32 px-6 md:hidden"
        >
          <div className="flex flex-col space-y-6 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-black text-black hover:text-gray-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenContact();
              }}
              className="bg-black text-white px-8 py-5 rounded-full font-bold text-xl mt-8 shadow-xl"
            >
              Let's Talk
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;