import React from 'react';
import { X } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      <div className="relative bg-white rounded-[2rem] p-8 w-full max-w-lg shadow-2xl animate-fade-in overflow-hidden">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X size={20} />
        </button>
        
        <div className="mb-6">
          <span className="inline-block px-3 py-1 bg-accent rounded-full text-xs font-bold mb-3 uppercase tracking-wider">Let's Connect</span>
          <h2 className="text-3xl font-black text-black leading-tight">Start your project</h2>
          <p className="text-gray-500 mt-2">Fill out the form below and we'll get back to you within 24 hours.</p>
        </div>
        
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Thanks! We will be in touch.'); onClose(); }}>
          <div className="grid grid-cols-2 gap-4">
             <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-1 ml-1 text-gray-500">Name</label>
              <input required type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:border-black focus:bg-white outline-none transition-all font-medium" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-1 ml-1 text-gray-500">Phone</label>
              <input type="tel" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:border-black focus:bg-white outline-none transition-all font-medium" placeholder="+1 (555) 000-0000" />
            </div>
          </div>
         
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-1 ml-1 text-gray-500">Email</label>
            <input required type="email" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:border-black focus:bg-white outline-none transition-all font-medium" placeholder="jane@company.com" />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-1 ml-1 text-gray-500">I'm interested in...</label>
            <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:border-black focus:bg-white outline-none transition-all font-medium appearance-none cursor-pointer">
              <option>Web Development</option>
              <option>AI Automation</option>
              <option>Full Transformation</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-1 ml-1 text-gray-500">Project Details</label>
            <textarea className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:border-black focus:bg-white outline-none transition-all font-medium h-32 resize-none" placeholder="Tell us about your goals..."></textarea>
          </div>
          <button type="submit" className="w-full bg-black text-white font-bold py-4 rounded-xl hover:bg-gray-800 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-lg text-lg">
            Send Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;