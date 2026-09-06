import React from 'react';
import { Pickaxe, Magnet, Cpu, Factory, Truck, ChevronRight } from 'lucide-react';

export const TheProcess: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Raw Jaisalmer Sand Sourcing',
      detail: 'Licensed Miners',
      description: 'Sourcing raw silica sand directly from licensed mining blocks across Jaisalmer and Western Rajasthan.',
      icon: <Pickaxe className="w-6 h-6 text-[#D4A017]" />,
    },
    {
      number: '02',
      title: 'Magnetic Separation',
      detail: 'Iron Oxide Removal',
      description: 'High-intensity magnetic belt separators strip heavy iron oxides and metallic impurities to elevate silica purity.',
      icon: <Magnet className="w-6 h-6 text-[#FF6B00]" />,
    },
    {
      number: '03',
      title: 'AI / ML Quality Grading',
      detail: 'XRF Data + Computer Vision',
      description: 'Proprietary ML model analyzes XRF spectrometry readings and high-speed camera optical data to grade particle purity.',
      icon: <Cpu className="w-6 h-6 text-[#D4A017]" />,
    },
    {
      number: '04',
      title: 'Industrial Grade Output',
      detail: 'Solar Glass, Ceramics & Construction',
      description: 'Refined 99%+ SiO2 output packaged for photovoltaic glass, refractory ceramics, and sand battery storage.',
      icon: <Factory className="w-6 h-6 text-[#F5DEB3]" />,
    },
    {
      number: '05',
      title: 'B2B Supply Chain',
      detail: 'Direct Manufacturer Delivery',
      description: 'Bulk logistics distribution directly to solar glass manufacturers, cement plants, and industrial foundries.',
      icon: <Truck className="w-6 h-6 text-[#FF6B00]" />,
    },
  ];

  return (
    <section id="process" className="py-24 bg-[#111111] text-white relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FF6B00] text-xs font-mono mb-4 uppercase tracking-widest">
            <Cpu className="w-3.5 h-3.5" />
            <span>Industrial Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            The Sand-to-Silicon Process
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B00] to-[#D4A017] mx-auto rounded-full mb-6" />
          <p className="text-lg text-slate-300 font-light">
            How TharUrja converts uncharacterized desert sand into high-value industrial raw materials.
          </p>
        </div>

        {/* Desktop Pipeline (Step Cards with Connecting Lines) */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] rounded-2xl p-6 border border-slate-800 hover:border-[#D4A017] transition-all duration-300 shadow-xl flex flex-col justify-between relative group"
            >
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                  <ChevronRight className="w-6 h-6 text-[#D4A017] animate-pulse" />
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-black text-[#D4A017] opacity-60">
                    {step.number}
                  </span>
                  <div className="p-2.5 bg-[#242424] rounded-xl group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-base font-bold text-white mb-1 group-hover:text-[#D4A017] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs font-semibold text-[#FF6B00] mb-3 font-mono">
                  {step.detail}
                </p>
                <p className="text-slate-400 text-xs leading-relaxed font-light">
                  {step.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 text-[10px] font-mono text-[#F5DEB3]/60 uppercase">
                Phase {index + 1}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TheProcess;
