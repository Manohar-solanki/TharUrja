import React from 'react';
import { Calendar, CheckCircle2, Rocket, Layers, Cpu } from 'lucide-react';

export const VisionTimeline: React.FC = () => {
  const roadmap = [
    {
      phase: 'Phase 1',
      year: '2026',
      title: 'Sand Characterization & Pilot Feasibility',
      icon: <Layers className="w-5 h-5 text-[#D4A017]" />,
      color: '#D4A017',
      bullets: [
        'Comprehensive Thar Desert geological sand characterization & XRF spectral mapping.',
        'Lab-scale magnetic separation testing achieving 99%+ SiO2 solar glass purity.',
        'Initial pilot supply MoU agreements signed with regional industrial manufacturers.',
      ],
    },
    {
      phase: 'Phase 2',
      year: '2027',
      title: 'Processing Unit Setup & Solar Glass Supply',
      icon: <Rocket className="w-5 h-5 text-[#FF6B00]" />,
      color: '#FF6B00',
      bullets: [
        'Commercial beneficiation plant setup in Jodhpur-Jaisalmer industrial corridor.',
        'Commercial-grade solar glass silica supply contracts with domestic PV glass makers.',
        'Integration of computer vision optical sorters into high-throughput conveyor lines.',
      ],
    },
    {
      phase: 'Phase 3',
      year: '2028+',
      title: 'Sand Battery Storage & IoT Quality SaaS Platform',
      icon: <Cpu className="w-5 h-5 text-[#F5DEB3]" />,
      color: '#F5DEB3',
      bullets: [
        'Deployment of long-duration thermal sand battery storage systems for solar thermal plants.',
        'Launch of B2B digital materials trading & IoT quality monitoring SaaS platform.',
        'Expansion into eco-friendly construction composite materials across North India.',
      ],
    },
  ];

  return (
    <section id="timeline" className="py-24 bg-[#1A1A1A] text-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#D4A017]/10 border border-[#D4A017]/30 text-[#D4A017] text-xs font-mono mb-4 uppercase tracking-widest">
            <Calendar className="w-3.5 h-3.5" />
            <span>Strategic Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Vision Timeline
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4A017] to-[#FF6B00] mx-auto rounded-full mb-6" />
          <p className="text-lg text-[#F5DEB3]/80 font-light">
            Our phased scaling model from R&D sand characterization to commercial solar glass supply and thermal battery deployment.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#D4A017] via-[#FF6B00] to-slate-800 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {roadmap.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Badge Dot */}
                  <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 z-20 hidden sm:flex h-10 w-10 rounded-full bg-[#1A1A1A] border-2 border-[#D4A017] items-center justify-center shadow-lg">
                    {item.icon}
                  </div>

                  {/* Card Container */}
                  <div className="w-full sm:w-1/2 px-0 sm:px-8">
                    <div className="bg-[#242424] rounded-3xl p-8 border border-slate-800 hover:border-[#D4A017] transition-all duration-300 shadow-xl">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#D4A017]/10 text-[#D4A017]">
                          {item.phase}
                        </span>
                        <span className="text-2xl font-black font-mono text-white">
                          {item.year}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-4">
                        {item.title}
                      </h3>

                      <ul className="space-y-2.5 text-xs text-slate-300 font-light">
                        {item.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start space-x-2">
                            <CheckCircle2 className="w-4 h-4 text-[#D4A017] flex-shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default VisionTimeline;
