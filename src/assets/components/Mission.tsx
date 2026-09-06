import React from 'react';
import { Sun, Wind, Cpu, Leaf, Shield, CheckCircle2 } from 'lucide-react';

const Mission: React.FC = () => {
  return (
    <section id="mission" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-4">
            <Leaf className="w-3.5 h-3.5" />
            <span>OUR CORE PURPOSE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Pioneering Clean Power & Intelligence
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-300 leading-relaxed font-light">
            We transform how energy is harvested in extreme desert environments and intelligently dispatched to local communities and smart grids.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          
          {/* Renewable Generation */}
          <div className="bg-slate-950/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-800 hover:border-amber-500/40 transition-all duration-500 shadow-2xl group">
            <div className="h-16 w-16 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Sun className="h-8 w-8 text-amber-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Renewable Energy Generation</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              We harness the Thar Desert's infinite solar potential and high-velocity wind corridors. Our solar farms and wind turbines are engineered for high ambient temperatures and peak seasonal yield.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm">Solar farms optimized for 300+ annual sunny days in Rajasthan</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm">High-efficiency wind turbines in natural desert wind corridors</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm">Zero-emission clean electricity for rural & industrial hubs</span>
              </div>
            </div>
          </div>

          {/* AI Optimization */}
          <div className="bg-slate-950/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-800 hover:border-emerald-500/40 transition-all duration-500 shadow-2xl group">
            <div className="h-16 w-16 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Cpu className="h-8 w-8 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Grid Optimization</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Our TharUrja AI platform continuously balances load dispatch, predicts weather-driven supply shifts, and optimizes power usage across microgrids to minimize transmission loss.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm">Predictive machine learning algorithms for supply & demand forecasting</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm">Automated microgrid smart switching to avoid brownouts</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm">Real-time IoT telemetry for commercial and residential consumers</span>
              </div>
            </div>
          </div>

        </div>

        {/* Advantage Banner */}
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 rounded-3xl border border-emerald-500/20 p-8 sm:p-10 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">The TharUrja Advantage</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-4 border border-emerald-500/30">
                <Leaf className="h-8 w-8 text-emerald-400" />
              </div>
              <div className="text-4xl font-extrabold text-white font-mono mb-1">30%</div>
              <p className="text-slate-400 text-sm">Carbon Footprint Reduction</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="h-16 w-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-4 border border-cyan-500/30">
                <Sun className="h-8 w-8 text-cyan-400" />
              </div>
              <div className="text-4xl font-extrabold text-white font-mono mb-1">100%</div>
              <p className="text-slate-400 text-sm">Renewable Energy Matrix</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="h-16 w-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-4 border border-amber-500/30">
                <Cpu className="h-8 w-8 text-amber-400" />
              </div>
              <div className="text-4xl font-extrabold text-white font-mono mb-1">25%</div>
              <p className="text-slate-400 text-sm">Average Cost Savings</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Mission;