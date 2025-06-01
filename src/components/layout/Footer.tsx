import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { navItems } from '../../data/navItems';
import { socialLinks } from '../../data/socialLinks';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const renderSocialIcon = (icon: string) => {
    switch (icon) {
      case 'twitter':
        return <Twitter size={18} />;
      case 'linkedin':
        return <Linkedin size={18} />;
      case 'instagram':
        return <Instagram size={18} />;
      case 'youtube':
        return <Youtube size={18} />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold text-white mb-4">
              <img src="/logo.png" alt="Logo" className="h-10 w-10 mr-2" />
              <span>TharUrja</span>
            </div>
            <p className="text-gray-400 mb-4">
              Cooling the Thar Desert, Capturing Carbon, Empowering Rural Lives.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-primary-600 w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label={link.platform}
                >
                  {renderSocialIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>Jaipur, Rajasthan, India</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:info@tharurja.com" className="hover:text-green-400 transition-colors duration-200">
                  info@tharurja.com
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-green-400 transition-colors duration-200">
                  +91 9876543210
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates on our technology and projects.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {currentYear} TharUrja. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;