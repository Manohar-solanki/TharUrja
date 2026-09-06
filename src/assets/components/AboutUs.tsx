import React from 'react';
import { MapPin, Mail, Phone, Linkedin, Twitter, Sparkles, Award } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 text-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ORIGIN & LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            About TharUrja
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-400 font-light">
            Born in Balesar near Jodhpur, TharUrja combines local ground insight with advanced AI technology to electrify rural India cleanly.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Founder Profile */}
            <div className="lg:col-span-4 flex">
              <div className="bg-slate-900/90 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col justify-between w-full">
                <div>
                  <div className="relative h-72 w-full bg-slate-800">
                    <img 
                      src="/images/profile.png" 
                      alt="Manohar Kumar" 
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">Manohar Solanki</h3>
                    <p className="text-emerald-400 font-semibold text-sm mb-4">Founder & CEO</p>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      Engineer and tech innovator dedicated to unlocking renewable microgrids in Western Rajasthan. Manohar founded TharUrja to bring reliable clean energy to every village and farm.
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">Connect with Founder</span>
                  <div className="flex space-x-3">
                    <a 
                      href="https://www.linkedin.com/in/mr-manohar-solanki/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-800 hover:bg-emerald-500/20 hover:text-emerald-400 text-slate-300 rounded-xl transition-colors"
                      title="LinkedIn"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a 
                      href="https://x.com/Manohar939" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-800 hover:bg-cyan-500/20 hover:text-cyan-400 text-slate-300 rounded-xl transition-colors"
                      title="X (Twitter)"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Story */}
            <div className="lg:col-span-8 flex">
              <div className="bg-slate-900/90 rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl flex flex-col justify-between w-full">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Our Journey & Vision</h3>
                  <div className="space-y-4 text-slate-300 text-base leading-relaxed font-light">
                    <p>
                      TharUrja was founded on a clear realization: Rajasthan receives some of the highest solar irradiance in Asia, yet rural communities historically suffered frequent power outages.
                    </p>
                    <p>
                      Growing up in Balesar near Jodhpur, founder Manohar Solanki witnessed firsthand how energy instability hindered local schooling, farming, and business growth. After completing engineering studies and gaining clean-tech expertise, he set out to bridge this gap.
                    </p>
                    <p>
                      Instead of relying solely on traditional grid extensions, TharUrja pairs solar & wind generation directly with AI-assisted smart dispatch. This ensures energy is generated cleanly, stored efficiently, and delivered when consumers need it most.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800 flex items-start space-x-4">
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-emerald-400 flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base">TharUrja Headquarters</h4>
                    <p className="text-slate-400 text-sm">
                      Balesar, Jodhpur District, Rajasthan, India — 342001
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Milestone Timeline */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-white mb-12 text-center">Growth Milestones</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="bg-slate-900/80 p-6 rounded-3xl border border-slate-800 relative">
                <div className="text-3xl font-extrabold text-emerald-400 font-mono mb-2">2023</div>
                <h4 className="text-lg font-bold text-white mb-2">Foundation in Balesar</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Established TharUrja to engineer rural microgrids and deployment algorithms tailored for Thar desert conditions.
                </p>
              </div>

              <div className="bg-slate-900/80 p-6 rounded-3xl border border-slate-800 relative">
                <div className="text-3xl font-extrabold text-cyan-400 font-mono mb-2">2024</div>
                <h4 className="text-lg font-bold text-white mb-2">Pilot Smart Grid Launch</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Deployed first smart microgrid powering 50+ homes and agricultural units in Balesar with zero battery downtime.
                </p>
              </div>

              <div className="bg-slate-900/80 p-6 rounded-3xl border border-slate-800 relative">
                <div className="text-3xl font-extrabold text-amber-400 font-mono mb-2">2025+</div>
                <h4 className="text-lg font-bold text-white mb-2">Statewide Expansion</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Expanding capacity across Rajasthan to serve over 10,000 homes, schools, and commercial facilities.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutUs;