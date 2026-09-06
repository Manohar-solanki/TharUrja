import React, { useState, useRef } from 'react';
import { Download, ArrowRight, Users, Building, DollarSign, Check } from 'lucide-react';

const JoinUs: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!name || !email) {
      setError('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('subject', 'New TharUrja Newsletter Subscription');
      formData.append('access_key', 'e962bbd6-e60d-4b1c-bc94-2d5dee0809a0');
      formData.append('botcheck', '');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        setName('');
        setEmail('');
        if (formRef.current) formRef.current.reset();
      } else {
        setError(data.message || 'Something went wrong!');
      }
    } catch (err) {
      setError('Failed to submit form. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="join-us" className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>PARTNERSHIP & INVESTMENT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Join the TharUrja Movement
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-emerald-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-300 font-light">
            Whether you are a tech provider, capital partner, or clean energy advocate, join us in scaling sustainable microgrids.
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          
          {/* Partners */}
          <div className="bg-slate-950/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="h-14 w-14 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex items-center justify-center mb-6">
                <Building className="h-7 w-7 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Partners</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Integrate grid hardware, battery storage technology, or IoT telemetry with our TharUrja AI platform.
              </p>
              <ul className="space-y-3 mb-8 text-xs text-slate-300">
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-400" />
                  <span>Hardware & inverter integration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-400" />
                  <span>Substation distribution networks</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-400" />
                  <span>Academic & AI research alliances</span>
                </li>
              </ul>
            </div>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-between w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl text-amber-400 text-sm font-semibold transition-colors"
            >
              <span>Become a Partner</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Investors */}
          <div className="bg-slate-950/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="h-14 w-14 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-center mb-6">
                <DollarSign className="h-7 w-7 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Investors</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Fuel capital expansion in Western Rajasthan microgrids while yielding solid ESG environmental metrics.
              </p>
              <ul className="space-y-3 mb-8 text-xs text-slate-300">
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-400" />
                  <span>Seed & Series growth opportunities</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-400" />
                  <span>Asset-backed microgrid infrastructure</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-400" />
                  <span>Verified carbon credit yield</span>
                </li>
              </ul>
            </div>
            <a 
              href="#contact"
              className="inline-flex items-center justify-between w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl text-emerald-400 text-sm font-semibold transition-colors"
            >
              <span>Request Investor Deck</span>
              <Download className="h-4 w-4" />
            </a>
          </div>

          {/* Community */}
          <div className="bg-slate-950/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="h-14 w-14 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Community</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Join our regional ambassador network advocating clean solar and energy independence in rural India.
              </p>
              <ul className="space-y-3 mb-8 text-xs text-slate-300">
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-cyan-400" />
                  <span>Grassroots solar adoption drives</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-cyan-400" />
                  <span>Rural STEM & clean tech education</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-cyan-400" />
                  <span>Early pilot access for homeowners</span>
                </li>
              </ul>
            </div>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-between w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl text-cyan-400 text-sm font-semibold transition-colors"
            >
              <span>Join Community</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

        </div>

        {/* Newsletter Box */}
        <div className="max-w-4xl mx-auto bg-slate-900/90 rounded-3xl p-8 sm:p-10 border border-emerald-500/20 shadow-2xl">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Subscribe to TharUrja Dispatch</h3>
            <p className="text-slate-400 text-sm">
              Receive quarterly updates on microgrid expansion, tech releases, and project deployment across Rajasthan.
            </p>
          </div>

          {success && (
            <div className="text-center text-emerald-400 bg-emerald-950/40 border border-emerald-800 p-3 rounded-xl text-sm mb-6">
              ✓ Thank you for subscribing! We'll keep you updated with our latest news.
            </div>
          )}

          {error && (
            <div className="text-center text-red-400 bg-red-950/40 border border-red-800 p-3 rounded-xl text-sm mb-6">
              {error}
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input 
              type="text" 
              placeholder="Your Name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-1 px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-emerald-500"
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-emerald-500"
            />
            <button 
              type="submit"
              disabled={isSubmitting}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 text-sm flex items-center justify-center space-x-2"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default JoinUs;
