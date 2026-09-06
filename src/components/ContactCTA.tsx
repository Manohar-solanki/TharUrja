import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Handshake, Building, Mail, User } from 'lucide-react';

export const ContactCTA: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    purpose: 'Glass Manufacturer Supply',
    email: '',
    message: '',
    access_key: 'e962bbd6-e60d-4b1c-bc94-2d5dee0809a0',
    subject: 'New Partner Inquiry for TharUrja Sand Industrialization',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    if (!formData.name || !formData.email || !formData.organization) {
      setError('Please complete all required fields.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setFormSubmitted(true);
        setFormData({
          name: '',
          organization: '',
          purpose: 'Glass Manufacturer Supply',
          email: '',
          message: '',
          access_key: 'e962bbd6-e60d-4b1c-bc94-2d5dee0809a0',
          subject: 'New Partner Inquiry for TharUrja Sand Industrialization',
        });
      } else {
        setError(data.message || 'Submission failed. Please try again.');
      }
    } catch (err) {
      setError('Unable to send inquiry. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#111111] text-white relative overflow-hidden">
      {/* Golden Desert Landscape Background Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20 bg-cover bg-center pointer-events-none mix-blend-luminosity"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1001435/pexels-photo-1001435.jpeg?auto=compress&cs=tinysrgb&w=1600")',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/90 to-[#111111]/70 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#D4A017]/10 border border-[#D4A017]/30 text-[#D4A017] text-xs font-mono mb-4 uppercase tracking-widest">
            <Handshake className="w-3.5 h-3.5" />
            <span>Industrial Alliances</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Partner With Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4A017] to-[#FF6B00] mx-auto rounded-full mb-6" />
          <p className="text-lg text-[#F5DEB3]/80 font-light">
            Connecting licensed Thar Desert miners, solar glass manufacturers, ceramics producers, and venture investors.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-3xl mx-auto bg-[#1A1A1A]/95 backdrop-blur-xl rounded-3xl border border-[#D4A017]/30 p-8 sm:p-12 shadow-2xl">
          {formSubmitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="h-20 w-20 bg-[#D4A017]/10 border border-[#D4A017]/30 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="h-10 w-10 text-[#D4A017]" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">Partnership Request Received!</h4>
              <p className="text-slate-300 text-sm max-w-md mb-6">
                Thank you for your interest in TharUrja. Our industrial partnerships team will contact your organization shortly.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="bg-[#D4A017] hover:bg-[#FF6B00] text-[#1A1A1A] font-extrabold py-3 px-6 rounded-xl transition-all duration-300 text-sm"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono font-semibold text-[#F5DEB3] uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#242424] border border-slate-800 rounded-xl focus:outline-none focus:border-[#D4A017] text-white text-sm transition-colors"
                      placeholder="e.g. Rahul Sharma"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="organization" className="block text-xs font-mono font-semibold text-[#F5DEB3] uppercase tracking-wider mb-2">
                    Organization / Company *
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#242424] border border-slate-800 rounded-xl focus:outline-none focus:border-[#D4A017] text-white text-sm transition-colors"
                    placeholder="e.g. Rajasthan Solar Glass Industries"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="purpose" className="block text-xs font-mono font-semibold text-[#F5DEB3] uppercase tracking-wider mb-2">
                    Partnership Purpose *
                  </label>
                  <select
                    id="purpose"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#242424] border border-slate-800 rounded-xl focus:outline-none focus:border-[#D4A017] text-white text-sm transition-colors"
                  >
                    <option value="Glass Manufacturer Supply">Glass Manufacturer Silica Supply</option>
                    <option value="Licensed Miner Block Agreement">Licensed Sand Mining Partnership</option>
                    <option value="Industrial Ceramics Supply">Refractory & Ceramics Supply</option>
                    <option value="Sand Battery Joint Venture">Sand Thermal Storage Venture</option>
                    <option value="Venture Investor / ESG Fund">Investor / ESG Capital Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono font-semibold text-[#F5DEB3] uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#242424] border border-slate-800 rounded-xl focus:outline-none focus:border-[#D4A017] text-white text-sm transition-colors"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono font-semibold text-[#F5DEB3] uppercase tracking-wider mb-2">
                  Additional Details / Specification Requirements
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-[#242424] border border-slate-800 rounded-xl focus:outline-none focus:border-[#D4A017] text-white text-sm transition-colors"
                  placeholder="Mention target volume (tonnage), required SiO2 purity, or specific pilot requirements..."
                ></textarea>
              </div>

              {error && (
                <div className="flex items-center space-x-2 text-red-400 bg-red-950/40 border border-red-800 p-3 rounded-xl text-xs">
                  <AlertCircle className="h-4 w-4 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#D4A017] to-[#FF6B00] hover:from-[#FF6B00] hover:to-[#D4A017] text-[#1A1A1A] font-extrabold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-xl shadow-[#D4A017]/20 disabled:opacity-50 text-base"
              >
                {isSubmitting ? (
                  <span>Submitting Inquiry...</span>
                ) : (
                  <>
                    <span>Submit Partnership Inquiry</span>
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default ContactCTA;
