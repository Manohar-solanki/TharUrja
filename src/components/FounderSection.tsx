import React from 'react';
import { Linkedin, Twitter, ShieldCheck, MapPin, Award, GraduationCap } from 'lucide-react';

export const FounderSection: React.FC = () => {
  return (
    <section id="founder" className="py-24 bg-[#111111] text-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl mx-auto bg-[#1A1A1A] rounded-3xl border border-[#D4A017]/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Top Gold Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D4A017] via-[#FF6B00] to-[#D4A017]" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Founder Image */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden border-2 border-[#D4A017]/50 shadow-xl group">
                <img
                  src="/images/profile.png"
                  alt="Manohar Kumar"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-60" />
              </div>

              <div className="mt-4 flex items-center space-x-2 text-xs font-mono text-[#D4A017]">
                <MapPin className="w-3.5 h-3.5" />
                <span>Jodhpur, Rajasthan, India</span>
              </div>
            </div>

            {/* Founder Bio */}
            <div className="md:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#D4A017]/10 border border-[#D4A017]/30 text-[#D4A017] text-xs font-mono mb-4 w-fit">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Startup India Registered</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
                Manohar Kumar
              </h2>
              <p className="text-[#FF6B00] font-semibold text-sm mb-4">
                Founder & CEO
              </p>

              <blockquote className="border-l-2 border-[#D4A017] pl-4 italic text-base text-slate-200 mb-6 font-light">
                "Building India's first tech-enabled desert materials company from Jodhpur."
              </blockquote>

              <div className="space-y-3 text-xs text-slate-300 font-light mb-6">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="w-4 h-4 text-[#D4A017]" />
                  <span>B.Tech Computer Science & Engineering (ML Specialization), LPU 2026</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-[#FF6B00]" />
                  <span>BHASKAR ID: <strong className="font-mono text-[#D4A017]">IN-0525-9212UD</strong> | Green Tech / Clean Tech Sector</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4 pt-4 border-t border-slate-800">
                <a
                  href="https://www.linkedin.com/in/mr-manohar-solanki/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-xs text-slate-300 hover:text-[#D4A017] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href="https://x.com/Manohar939"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-xs text-slate-300 hover:text-[#D4A017] transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                  <span>@Manohar939</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FounderSection;
