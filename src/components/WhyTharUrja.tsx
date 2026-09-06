import React from 'react';
import { BarChart3, AlertCircle, CheckCircle2, TrendingUp, Compass } from 'lucide-react';

export const WhyTharUrja: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-[#1A1A1A] text-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#D4A017]/10 border border-[#D4A017]/30 text-[#D4A017] text-xs font-mono mb-4 uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5" />
            <span>Market Opportunity</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Why TharUrja?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4A017] to-[#FF6B00] mx-auto rounded-full mb-6" />
          <p className="text-lg text-[#F5DEB3]/80 font-light">
            Bridging the massive gap between raw desert sand potential and India's accelerating demand for solar-grade silica.
          </p>
        </div>

        {/* 3 Stat Counters Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          <div className="bg-[#242424] p-8 rounded-3xl border border-slate-800 text-center hover:border-[#D4A017] transition-all shadow-xl">
            <div className="text-5xl sm:text-6xl font-black text-[#D4A017] font-mono mb-2">
              200,000<span className="text-2xl text-[#FF6B00]"> km²</span>
            </div>
            <div className="text-sm font-semibold text-white uppercase tracking-wider mb-1">
              Thar Desert Area
            </div>
            <p className="text-xs text-slate-400">Untapped reserves of silica-rich sand in Rajasthan</p>
          </div>

          <div className="bg-[#242424] p-8 rounded-3xl border border-slate-800 text-center hover:border-[#FF6B00] transition-all shadow-xl">
            <div className="text-5xl sm:text-6xl font-black text-[#FF6B00] font-mono mb-2">
              ₹17B<span className="text-2xl text-[#D4A017]">+</span>
            </div>
            <div className="text-sm font-semibold text-white uppercase tracking-wider mb-1">
              Global Silica Market
            </div>
            <p className="text-xs text-slate-400">Driven by solar glass and green construction surge</p>
          </div>

          <div className="bg-[#242424] p-8 rounded-3xl border border-slate-800 text-center hover:border-[#D4A017] transition-all shadow-xl">
            <div className="text-5xl sm:text-6xl font-black text-[#F5DEB3] font-mono mb-2">
              40%<span className="text-2xl text-[#FF6B00]"> CAGR</span>
            </div>
            <div className="text-sm font-semibold text-white uppercase tracking-wider mb-1">
              Industrial Silica Growth
            </div>
            <p className="text-xs text-slate-400">Annual demand expansion across domestic manufacturing</p>
          </div>
        </div>

        {/* 2-Column Layout: The Gap vs Our Edge */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Left: The Gap */}
          <div className="bg-[#201818] border border-red-900/30 rounded-3xl p-8 shadow-xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-red-500/10 rounded-2xl text-red-400">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">The Industry Gap</h3>
                <p className="text-xs text-red-300 font-mono">Current Status Quo in India</p>
              </div>
            </div>

            <ul className="space-y-4 text-sm text-slate-300 font-light">
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                <span>India imports high-purity solar glass silica sand despite possessing vast Thar desert reserves.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                <span>Traditional miners sell raw, uncharacterized sand at low margins without value-addition beneficiation.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                <span>Lack of AI/ML spectroscopic grading results in inconsistent iron content and quality rejection.</span>
              </li>
            </ul>
          </div>

          {/* Right: Our Edge */}
          <div className="bg-[#18221c] border border-emerald-900/30 rounded-3xl p-8 shadow-xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-[#D4A017]/10 rounded-2xl text-[#D4A017]">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Our TharUrja Edge</h3>
                <p className="text-xs text-[#D4A017] font-mono">Tech-Enabled Beneficiation</p>
              </div>
            </div>

            <ul className="space-y-4 text-sm text-slate-300 font-light">
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-[#D4A017] mt-2 flex-shrink-0" />
                <span>First-mover proprietary dataset on Thar Desert silica composition and geographic XRF mapping.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-[#D4A017] mt-2 flex-shrink-0" />
                <span>Computer vision + magnetic separation pipeline delivering consistent 99%+ SiO2 purity.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-[#D4A017] mt-2 flex-shrink-0" />
                <span>IoT quality monitoring SaaS providing B2B manufacturers real-time batch certification.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyTharUrja;
