import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Send } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState({ text: '', type: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ text: '', type: '' });

    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('subject', 'New Newsletter Subscription');
      formData.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY'); // Replace with your actual key
      formData.append('botcheck', '');

      const response = await fetch('https://api.web3forms.com/submit',  {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setMessage({ text: 'Thank you for subscribing!', type: 'success' });
        setEmail('');
      } else {
        setMessage({ text: data.message || 'Something went wrong.', type: 'error' });
      }
    } catch (error) {
      setMessage({ text: 'Failed to submit form.', type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <img src="/images/logo.png" alt="TharUrja Logo" className="h-10 w-10 mr-2" />
              <span className="font-bold text-xl">TharUrja</span>
            </div>
            <p className="text-gray-400 mb-6">
              Harnessing the power of sun and wind, optimized by AI, to create a sustainable energy future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/tharurja/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300"> 
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Mission', 'How It Works', 'Impact', 'Join Us', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Solutions */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Solutions</h3>
            <ul className="space-y-2">
              {[
                { name: 'Solar Energy Solutions', path: '/src/pages/services/SolarEnergy' },
                { name: 'Wind Power Generation', path: '/services/windPower' },
                { name: 'TharUrja AI Platform', path: '/services/tharurjaAI' },
                { name: 'Smart Home Integration', path: '/services/smartHome' },
                { name: 'Energy Monitoring', path: '/services/energyMonitoring' },
                { name: 'Consulting Services', path: '/services/consultingServices' },
              ].map((service) => (
                <li key={service.name}>
                  <a
                    href={service.path}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to receive updates on our latest news and innovations.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-gray-500"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v0a8 8 0 018 8h-2a6 6 0 00-6-6 6 6 0 00-6 6h-2z"></path>
                  </svg>
                ) : (
                  <>
                    Subscribe <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>
              {message.text && (
                <div
                  className={`text-sm p-2 rounded ${
                    message.type === 'success'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {message.text}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-950 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} TharUrja. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="/privacypolicy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="/termsofservice" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="/cookiepolicy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;