import React, { useState, useEffect } from 'react';
import { Sun, Wind, Battery, Zap, ShieldCheck, Activity, ChevronRight, BarChart2 } from 'lucide-react';

export const LiveGridWidget: React.FC = () => {
  const [solarOutput, setSolarOutput] = useState<number>(845);
  const [windOutput, setWindOutput] = useState<number>(620);
  const [efficiency, setEfficiency] = useState<number>(98.4);
  const [systemLoad, setSystemLoad] = useState<number>(72);
  const [calcRoofSize, setCalcRoofSize] = useState<number>(500); // sq ft
  
  // Simulated live fluctuating numbers
  useEffect(() => {
    const interval = setInterval(() => {
      setSolarOutput((prev) => +(prev + (Math.random() * 4 - 2)).toFixed(1));
      setWindOutput((prev) => +(prev + (Math.random() * 6 - 3)).toFixed(1));
      setEfficiency((prev) => +(98 + Math.random() * 0.8).toFixed(1));
      setSystemLoad((prev) => Math.min(95, Math.max(50, Math.floor(prev + (Math.random() * 6 - 3)))));
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const estMonthlyGen = Math.round((calcRoofSize * 0.45 * 30));
  const estMonthlySavings = Math.round(estMonthlyGen * 7.5); // INR

  return (
    <section className="py-16 bg-slate-950 relative overflow-hidden border-y border-emerald-500/10">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-4">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span>THARURJA AI GRID TELEMETRY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Real-Time Grid Performance & Calculator
          </h2>
          <p className="mt-3 text-slate-400 text-lg">
            Monitor real-time renewable energy production in Thar Desert and calculate your facility's solar potential.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Live Telemetry Panel */}
          <div className="lg:col-span-7 bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                  <BarChart2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base">Jodhpur-Balesar Smart Grid</h3>
                  <p className="text-xs text-slate-400">Live Telemetry Feed (Updated Every 2s)</p>
                </div>
              </div>
              <span className="flex items-center text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping mr-1.5"></span>
                ACTIVE
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-4 text-center">
                <div className="flex justify-center text-amber-400 mb-2">
                  <Sun className="w-5 h-5" />
                </div>
                <div className="text-2xl font-extrabold text-white font-mono">{solarOutput}</div>
                <div className="text-xs text-slate-400 mt-1">Solar Output (kW)</div>
              </div>

              <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-4 text-center">
                <div className="flex justify-center text-cyan-400 mb-2">
                  <Wind className="w-5 h-5" />
                </div>
                <div className="text-2xl font-extrabold text-white font-mono">{windOutput}</div>
                <div className="text-xs text-slate-400 mt-1">Wind Output (kW)</div>
              </div>

              <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-4 text-center">
                <div className="flex justify-center text-emerald-400 mb-2">
                  <Zap className="w-5 h-5" />
                </div>
                <div className="text-2xl font-extrabold text-white font-mono">{efficiency}%</div>
                <div className="text-xs text-slate-400 mt-1">AI Efficiency</div>
              </div>

              <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-4 text-center">
                <div className="flex justify-center text-purple-400 mb-2">
                  <Battery className="w-5 h-5" />
                </div>
                <div className="text-2xl font-extrabold text-white font-mono">{systemLoad}%</div>
                <div className="text-xs text-slate-400 mt-1">Grid Load</div>
              </div>
            </div>

            {/* Load bar */}
            <div className="bg-slate-950/60 rounded-xl p-4 border border-slate-800">
              <div className="flex justify-between text-xs text-slate-400 mb-2 font-medium">
                <span>AI Automated Load Dispatch</span>
                <span className="text-emerald-400">Optimized Distribution</span>
              </div>
              <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 transition-all duration-700 rounded-full"
                  style={{ width: `${systemLoad}%` }}
                />
              </div>
            </div>
          </div>

          {/* Interactive Calculator */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-emerald-950/40 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center space-x-2 text-emerald-400 font-semibold text-sm mb-4">
              <ShieldCheck className="w-4 h-4" />
              <span>TharUrja ROI Predictor</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Calculate Solar Savings</h3>
            <p className="text-xs text-slate-300 mb-6">
              Estimate your monthly clean power generation and electricity cost savings in Rajasthan.
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <div className="flex justify-between text-xs font-medium text-slate-300 mb-2">
                  <span>Rooftop / Land Area:</span>
                  <span className="text-emerald-400 font-mono font-bold">{calcRoofSize} sq ft</span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="5000"
                  step="100"
                  value={calcRoofSize}
                  onChange={(e) => setCalcRoofSize(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 text-center">
                  <div className="text-xs text-slate-400 mb-1">Est. Generation</div>
                  <div className="text-lg font-bold text-emerald-400 font-mono">{estMonthlyGen} kWh</div>
                  <div className="text-[10px] text-slate-500">per month</div>
                </div>
                <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 text-center">
                  <div className="text-xs text-slate-400 mb-1">Est. Savings</div>
                  <div className="text-lg font-bold text-amber-400 font-mono">₹{estMonthlySavings.toLocaleString()}</div>
                  <div className="text-[10px] text-slate-500">per month</div>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 text-sm shadow-lg shadow-emerald-900/40"
            >
              <span>Get Custom Feasibility Quote</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveGridWidget;
