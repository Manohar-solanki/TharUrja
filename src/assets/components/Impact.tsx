import React from 'react';
import { TrendingUp, Users, Leaf, Quote, Award, HeartHandshake } from 'lucide-react';

const Impact: React.FC = () => {
  return (
    <section id="impact" className="py-24 bg-slate-900 text-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-4">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>MEASURABLE OUTCOMES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Our Environmental & Social Impact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-300 font-light">
            Empowering rural communities in Western Rajasthan while driving decarbonization and green employment.
          </p>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          
          {/* CO2 Reduction */}
          <div className="bg-slate-950/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 shadow-2xl text-center">
            <div className="h-16 w-16 mx-auto bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-center mb-6">
              <Leaf className="h-8 w-8 text-emerald-400" />
            </div>
            <h3 className="text-5xl font-extrabold text-white font-mono mb-2">12,500</h3>
            <p className="text-base font-semibold text-slate-300 mb-6">Tons CO₂ Avoided</p>
            <div className="w-full bg-slate-800 h-2.5 rounded-full mb-3 overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full" style={{ width: '75%' }}></div>
            </div>
            <p className="text-xs text-slate-400">75% toward 2025 Rajasthan carbon reduction target</p>
          </div>

          {/* Rural Employment */}
          <div className="bg-slate-950/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 shadow-2xl text-center">
            <div className="h-16 w-16 mx-auto bg-cyan-500/10 border border-cyan-500/20 rounded-2xl flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-cyan-400" />
            </div>
            <h3 className="text-5xl font-extrabold text-white font-mono mb-2">250+</h3>
            <p className="text-base font-semibold text-slate-300 mb-6">Green Rural Jobs Created</p>
            <div className="w-full bg-slate-800 h-2.5 rounded-full mb-3 overflow-hidden">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full" style={{ width: '60%' }}></div>
            </div>
            <p className="text-xs text-slate-400">60% localized tech positions in Balesar region</p>
          </div>

          {/* Economic Impact */}
          <div className="bg-slate-950/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 shadow-2xl text-center">
            <div className="h-16 w-16 mx-auto bg-amber-500/10 border border-amber-500/20 rounded-2xl flex items-center justify-center mb-6">
              <TrendingUp className="h-8 w-8 text-amber-400" />
            </div>
            <h3 className="text-5xl font-extrabold text-white font-mono mb-2">₹140M</h3>
            <p className="text-base font-semibold text-slate-300 mb-6">Regional Economic Value</p>
            <div className="w-full bg-slate-800 h-2.5 rounded-full mb-3 overflow-hidden">
              <div className="bg-gradient-to-r from-amber-500 to-yellow-400 h-full rounded-full" style={{ width: '85%' }}></div>
            </div>
            <p className="text-xs text-slate-400">85% reinvested in rural clean tech infrastructure</p>
          </div>

        </div>

        {/* Testimonials */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Voices from Our Community</h3>
            <p className="text-slate-400 text-sm">Real stories from villagers and climate researchers powered by TharUrja.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-slate-950/90 rounded-3xl p-8 border border-slate-800 relative">
              <Quote className="h-8 w-8 text-emerald-500/30 mb-4" />
              <p className="text-slate-300 italic text-base leading-relaxed mb-6">
                "TharUrja's solar initiative has transformed our village near Balesar. We now have 24/7 reliable power for our homes and agricultural pumps, and young adults are finding skilled tech work locally."
              </p>
              <div className="flex items-center space-x-4 border-t border-slate-800/80 pt-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center font-bold text-slate-950">
                  B
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Bablu</h4>
                  <p className="text-xs text-emerald-400">Climate Tech Influencer, Balesar</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-950/90 rounded-3xl p-8 border border-slate-800 relative">
              <Quote className="h-8 w-8 text-cyan-500/30 mb-4" />
              <p className="text-slate-300 italic text-base leading-relaxed mb-6">
                "The TharUrja AI integration reduced energy expenses in our office facility by 32% while optimizing HVAC comfort during desert peak heat. The automated grid forecasting is truly state-of-the-art."
              </p>
              <div className="flex items-center space-x-4 border-t border-slate-800/80 pt-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-bold text-slate-950">
                  A
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Anil</h4>
                  <p className="text-xs text-cyan-400">Climate Science Scholar, Jodhpur</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Impact;
