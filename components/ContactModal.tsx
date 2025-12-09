import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { useFormState, useFormStatus } from 'react-dom';
import { submitProjectForm } from '../app/actions';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [state, formAction] = useFormState(submitProjectForm, { success: false, message: null });

  useEffect(() => {
    if (state.success) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [state.success, onClose]);

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

        <form className="space-y-4" action={formAction}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-1 ml-1 text-gray-500">Name</label>
              <input name="name" required type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:border-black focus:bg-white outline-none transition-all font-medium" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-1 ml-1 text-gray-500">Phone</label>
              <input name="phone" type="tel" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:border-black focus:bg-white outline-none transition-all font-medium" placeholder="+1 (555) 000-0000" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-1 ml-1 text-gray-500">Email</label>
            <input name="email" required type="email" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:border-black focus:bg-white outline-none transition-all font-medium" placeholder="jane@company.com" />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-1 ml-1 text-gray-500">I'm interested in...</label>
            <div className="relative">
              <select name="interest" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:border-black focus:bg-white outline-none transition-all font-medium appearance-none cursor-pointer">
                <option value="Web Development">Web Development</option>
                <option value="AI Automation">AI Automation</option>
                <option value="Full Transformation">Full Transformation</option>
                <option value="Other">Other</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-1 ml-1 text-gray-500">Project Details</label>
            <textarea name="projectDetails" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:border-black focus:bg-white outline-none transition-all font-medium h-32 resize-none" placeholder="Tell us about your goals..."></textarea>
          </div>

          {state.message && (
            <div className={`text-center text-sm font-bold p-3 rounded-xl ${state.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {state.message}
            </div>
          )}

          <SubmitButton />
        </form>
      </div>
    </div>
  );
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="w-full bg-black text-white font-bold py-4 rounded-xl hover:bg-gray-800 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-lg text-lg disabled:opacity-70 disabled:cursor-not-allowed">
      {pending ? 'Sending...' : 'Send Request'}
    </button>
  );
}

export default ContactModal;