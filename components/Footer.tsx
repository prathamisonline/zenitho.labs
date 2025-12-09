import React from 'react';
import { Sparkles, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          {/* Brand */}
          <div className="max-w-xs">
            <a href="#" className="flex items-center gap-2 mb-6 group">
              <div className="bg-black p-2 rounded-full text-white">
                <Sparkles size={20} fill="#ccf381" className="text-accent" />
              </div>
              <span className="font-black text-2xl tracking-tight">
                Zenitho Labs
              </span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 font-medium">
              We build digital experiences that drive growth, automate boring tasks, and look damn good doing it.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-gray-50 rounded-full hover:bg-black hover:text-white transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="p-3 bg-gray-50 rounded-full hover:bg-black hover:text-white transition-colors"><Twitter size={18} /></a>
              <a href="#" className="p-3 bg-gray-50 rounded-full hover:bg-black hover:text-white transition-colors"><Facebook size={18} /></a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24 w-full md:w-auto">
            <div>
              <h4 className="font-black mb-6 text-sm uppercase tracking-wider">Services</h4>
              <ul className="space-y-4 text-sm font-medium text-gray-500">
                <li><a href="#" className="hover:text-black transition-colors">Web Design</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Development</a></li>
                <li><a href="#" className="hover:text-black transition-colors">AI Automation</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Branding</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black mb-6 text-sm uppercase tracking-wider">Company</h4>
              <ul className="space-y-4 text-sm font-medium text-gray-500">
                <li><a href="#portfolio" className="hover:text-black transition-colors">Work</a></li>
                <li><a href="#culture" className="hover:text-black transition-colors">Culture</a></li>
                <li><a href="#pricing" className="hover:text-black transition-colors">Pricing</a></li>
                <li><a href="#contact" className="hover:text-black transition-colors">Contact</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-black mb-6 text-sm uppercase tracking-wider">Get in touch</h4>
              <p className="text-xl font-bold mb-2 hover:text-accent cursor-pointer transition-colors">sales@zenitholabs.com</p>
              <p className="text-gray-400 text-sm font-medium">San Francisco, CA</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-gray-100 text-xs font-bold text-gray-400 uppercase tracking-wider">
          <p>© 2025 Zenitho Labs. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-black">Privacy Policy</a>
            <a href="#" className="hover:text-black">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;