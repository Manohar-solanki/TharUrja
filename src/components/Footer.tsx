import React from 'react';
import { Linkedin, Twitter, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111111] text-white border-t border-slate-800 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between pb-8 border-b border-slate-800">
          
          {/* Brand */}
          <div className="md:col-span-6 flex flex-col items-start space-y-3">
            <div className="flex items-center space-x-3">
              <img src="/images/logo.png" alt="TharUrja" className="h-9 w-9 object-contain rounded-full bg-[#1A1A1A] p-1 border border-[#D4A017]/40" />
              <span className="font-extrabold text-2xl font-mono tracking-tight text-white">
                Thar<span className="text-[#D4A017]">Urja</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs max-w-md font-light leading-relaxed">
              India's first Thar Desert sand industrialization company. Converting Jaisalmer silica sand into solar glass raw materials, ceramics, construction composites, and thermal sand battery storage.
            </p>
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#D4A017] bg-[#1A1A1A] px-3 py-1 rounded-full border border-[#D4A017]/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Startup India Registered | BHASKAR ID: IN-0525-9212UD</span>
            </div>
          </div>

          {/* Social & Contact info */}
          <div className="md:col-span-6 flex flex-col md:items-end space-y-3 text-xs text-slate-400">
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/mr-manohar-solanki/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4A017] transition-colors flex items-center space-x-1"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://x.com/Manohar939"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4A017] transition-colors flex items-center space-x-1"
              >
                <Twitter className="w-4 h-4" />
                <span>X (Twitter)</span>
              </a>
            </div>
            <p className="text-slate-400">HQ: Jodhpur, Rajasthan, India — 342001</p>
            <p className="text-slate-500 font-mono">Founded by Manohar Kumar (LPU 2026)</p>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} TharUrja. All rights reserved. From Desert Sand to Industrial Power.</p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <a href="#home" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#home" className="hover:text-slate-300">Terms of Supply</a>
            <a href="#home" className="hover:text-slate-300">Startup India Certification</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;