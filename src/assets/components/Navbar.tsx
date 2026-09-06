import React, { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck, ArrowUpRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section for underline indicator
      const sections = ['home', 'sand-animation', 'what-we-do', 'process', 'why-us', 'founder', 'timeline', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { label: 'Vision', href: '#home', id: 'home' },
    { label: 'Transformation', href: '#sand-animation', id: 'sand-animation' },
    { label: 'Products', href: '#what-we-do', id: 'what-we-do' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'Why TharUrja', href: '#why-us', id: 'why-us' },
    { label: 'Founder', href: '#founder', id: 'founder' },
    { label: 'Roadmap', href: '#timeline', id: 'timeline' },
    { label: 'Partner', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-t border-[#D4A017]/30 ${
        isScrolled
          ? 'bg-[#1A1A1A]/85 backdrop-blur-xl border-b border-[#D4A017]/20 py-2 shadow-2xl'
          : 'bg-gradient-to-b from-[#1A1A1A]/90 via-[#1A1A1A]/40 to-transparent py-3.5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Brand */}
          <div
            className="flex items-center space-x-2.5 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#D4A017] to-[#FF6B00] rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
              <img
                src="/images/logo.png"
                alt="TharUrja"
                className="relative h-8 w-8 object-contain rounded-full bg-[#1A1A1A] p-0.5 border border-[#D4A017]/60"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-tight text-white group-hover:text-[#D4A017] transition-colors font-mono">
                Thar<span className="text-[#D4A017]">Urja</span>
              </span>
              <span className="text-[8px] text-[#F5DEB3]/70 -mt-1 tracking-widest uppercase font-mono font-medium">
                Sand Industrialization
              </span>
            </div>
          </div>

          {/* Compact Desktop Navigation with Golden Underline Indicator */}
          <nav className="hidden xl:flex items-center space-x-1 bg-[#242424]/70 backdrop-blur-md px-3 py-1 rounded-full border border-slate-800/80">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative font-medium text-xs px-3 py-1 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'text-[#D4A017] font-semibold'
                      : 'text-slate-300 hover:text-[#D4A017] hover:bg-[#D4A017]/10'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#D4A017] rounded-full shadow-[0_0_8px_#D4A017]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Badge */}
          <div className="hidden lg:flex items-center space-x-2.5">
            <div className="flex items-center space-x-1.5 bg-[#D4A017]/10 border border-[#D4A017]/30 text-[#D4A017] px-2.5 py-1 rounded-full text-[11px] font-mono">
              <ShieldCheck className="w-3 h-3" />
              <span>IN-0525-9212UD</span>
            </div>
            <a
              href="#contact"
              className="bg-gradient-to-r from-[#D4A017] to-[#FF6B00] hover:from-[#FF6B00] hover:to-[#D4A017] text-[#1A1A1A] font-extrabold text-xs px-3.5 py-1.5 rounded-full transition-all duration-300 flex items-center space-x-1 shadow-md shadow-[#D4A017]/10"
            >
              <span>Partner Us</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-1.5 rounded-lg bg-[#242424] border border-slate-800 text-slate-200 hover:text-[#D4A017] focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="xl:hidden bg-[#1A1A1A]/95 backdrop-blur-2xl border-b border-[#D4A017]/20 px-4 pt-3 pb-5 space-y-1.5 shadow-2xl">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`block px-4 py-2 rounded-xl text-xs font-medium transition-colors ${
                activeSection === item.id
                  ? 'text-[#D4A017] bg-[#D4A017]/10 border-l-2 border-[#D4A017]'
                  : 'text-slate-200 hover:text-[#D4A017] hover:bg-[#242424]'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-[#D4A017] to-[#FF6B00] text-[#1A1A1A] font-bold py-2.5 px-4 rounded-xl text-xs"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Partner With Us</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;