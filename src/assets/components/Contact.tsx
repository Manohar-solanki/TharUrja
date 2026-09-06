import React, { useState } from 'react';
import { MapPin, Mail, Phone, Send, CheckCircle, AlertCircle, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: 'New Inquiry from TharUrja Website',
    access_key: 'e962bbd6-e60d-4b1c-bc94-2d5dee0809a0',
    botcheck: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setFormSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          subject: 'New Inquiry from TharUrja Website',
          access_key: 'e962bbd6-e60d-4b1c-bc94-2d5dee0809a0',
          botcheck: ''
        });
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Failed to submit form. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Contact Our Engineering Team
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-300 font-light">
            Have questions about microgrid feasibility, partner integration, or solar adoption? We are here to help.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-slate-950/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-800 shadow-2xl space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">TharUrja HQ</h3>
              <p className="text-slate-400 text-sm">Reach out via phone, email, or visit our office in Rajasthan.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-emerald-400 flex-shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Our Address</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    TharUrja Headquarters<br />
                    Balesar, Jodhpur District<br />
                    Rajasthan, India — 342001
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl text-cyan-400 flex-shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Email Us</h4>
                  <p className="text-slate-300 text-sm space-y-1">
                    <a href="mailto:info@tharurja.com" className="hover:text-emerald-400 transition-colors block">
                      info@tharurja.com
                    </a>
                    <a href="mailto:support@tharurja.com" className="hover:text-emerald-400 transition-colors block">
                      support@tharurja.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-amber-400 flex-shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Call Us Directly</h4>
                  <p className="text-slate-300 text-sm space-y-1 font-mono">
                    <a href="tel:+919352512176" className="hover:text-emerald-400 transition-colors block">
                      +91 9352512176
                    </a>
                    <a href="tel:+919358622176" className="hover:text-emerald-400 transition-colors block">
                      +91 9358622176
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="h-48 rounded-2xl overflow-hidden border border-slate-800 shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3574.755530467201!2d72.9826143150423!3d26.38705508337137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c3de29772c5%3A0xdfd8f1215d2c8e5f!2sBalesar%2C%20Rajasthan%20342001!5e0!3m2!1sen!2sin!4v1717931442603!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form Card (NO animate-pulse) */}
          <div className="lg:col-span-7 bg-slate-950/80 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Send an Online Inquiry</h3>

            {formSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="h-20 w-20 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="h-10 w-10 text-emerald-400" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Message Delivered!</h4>
                <p className="text-slate-300 text-sm max-w-md mb-6">
                  Thank you for reaching out. Our engineering representative will respond within 24 hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 text-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl focus:outline-none focus:border-emerald-500 text-white text-sm transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl focus:outline-none focus:border-emerald-500 text-white text-sm transition-colors"
                      placeholder="name@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl focus:outline-none focus:border-emerald-500 text-white text-sm transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Message / Request Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl focus:outline-none focus:border-emerald-500 text-white text-sm transition-colors"
                    placeholder="Tell us about your project or inquiry..."
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
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-emerald-900/40 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center space-x-2 text-sm">
                      <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v0a8 8 0 018 8h-2a6 6 0 00-6-6 6 6 0 00-6 6h-2z"></path>
                      </svg>
                      <span>Transmitting...</span>
                    </span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;