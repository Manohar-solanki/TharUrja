import React from 'react';
import { Sun, ShieldAlert, Cpu, Flame, Sparkles, Layers } from 'lucide-react';

export const WhatWeDo: React.FC = () => {
  const products = [
    {
      title: 'Solar Glass Grade Silica',
      subtitle: '99%+ SiO2 Purity',
      description: 'Ultra-pure silica sand extracted and beneficiated from Jaisalmer desert deposits to meet stringent low-iron specifications required for solar photovoltaic glass manufacturing.',
      icon: <Sun className="w-8 h-8 text-[#D4A017]" />,
      badge: '99%+ SiO2 Purity',
    },
    {
      title: 'Industrial Ceramics',
      subtitle: 'High-Temperature Applications',
      description: 'Refractory raw materials and high-purity silicates refined from uncharacterized desert sand for heavy industrial, furnace lining, and ceramic manufacturing applications.',
      icon: <Flame className="w-8 h-8 text-[#FF6B00]" />,
      badge: 'Refractory Grade',
    },
    {
      title: 'Construction Composites',
      subtitle: 'Eco-Friendly Cement Alternatives',
      description: 'Engineered sand composites and supplementary cementitious materials (SCM) offering high compressive strength while reducing reliance on river sand and Portland cement.',
      icon: <Layers className="w-8 h-8 text-[#F5DEB3]" />,
      badge: 'Eco-Cementitious',
    },
    {
      title: 'Sand Battery Thermal Storage',
      subtitle: 'Grid-Scale Energy Storage',
      description: 'Long-duration thermal energy storage (LDES) utilizing high thermal capacity Thar sand to store excess solar heat up to 600°C for industrial steam and power generation.',
      icon: <Cpu className="w-8 h-8 text-[#D4A017]" />,
      badge: 'Up to 600°C Thermal Storage',
    },
  ];

  return (
    <section id="what-we-do" className="py-24 bg-[#1A1A1A] text-white relative">
      {/* Glow highlight */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#D4A017]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#D4A017]/10 border border-[#D4A017]/30 text-[#D4A017] text-xs font-mono mb-4 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Industrial Products</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            What We Produce
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4A017] to-[#FF6B00] mx-auto rounded-full mb-6" />
          <p className="text-lg text-[#F5DEB3]/80 font-light">
            Unlocking value from 200,000 km² of untapped Thar Desert sand to supply strategic clean-tech and industrial manufacturing sectors.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((item, index) => (
            <div
              key={index}
              className="group bg-[#242424] rounded-3xl p-8 border border-slate-800 hover:border-[#D4A017] transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-[#D4A017]/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 bg-[#1A1A1A] border border-slate-800 rounded-2xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-[#D4A017]/10 border border-[#D4A017]/30 text-[#D4A017]">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#D4A017] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm font-semibold text-[#FF6B00] mb-4">
                  {item.subtitle}
                </p>
                <p className="text-slate-300 text-sm leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-[#F5DEB3]/70">
                <span>Thar Desert Silica Matrix</span>
                <span className="group-hover:translate-x-1 transition-transform text-[#D4A017] font-semibold">
                  Learn Specs →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatWeDo;
