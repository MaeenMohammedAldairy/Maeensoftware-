import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp, X, MoreHorizontal, Moon, Sun } from 'lucide-react';

// Helper icon for close state (Simulated X with rotation)
const PlusIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const FloatingWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-center">
      
      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className={`p-3 bg-white text-gray-600 rounded-full shadow-lg border border-gray-100 hover:text-primary transition-all duration-300 transform ${
          showTopBtn ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
        }`}
      >
        <ArrowUp size={20} />
      </button>

      {/* Expanded Menu */}
      <div className={`flex flex-col gap-3 transition-all duration-300 ${isOpen ? 'translate-y-0 opacity-100 visible' : 'translate-y-10 opacity-0 invisible'}`}>
        
        <a 
          href="https://wa.me/777187184" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          title="تواصل عبر واتساب"
        >
          <MessageCircle size={24} />
        </a>

        {/* Placeholder for Dark Mode Toggle (Global State needed for real impl) */}
        <button 
          className="w-12 h-12 bg-neutral text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          title="الوضع الليلي"
        >
          <Moon size={20} />
        </button>

      </div>

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 ${
           isOpen ? 'bg-red-500 text-white rotate-45' : 'bg-primary text-white hover:scale-105'
        }`}
      >
        {isOpen ? <PlusIcon size={28} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
};

export default FloatingWidget;