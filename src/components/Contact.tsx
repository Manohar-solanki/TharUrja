import React, { useState } from 'react';
import { MapPin, Mail, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: 'New Contact Form Submission from TharUrja',
    access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Replace this with your actual key
    botcheck: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit ', {
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
          subject: 'New Contact Form Submission from TharUrja',
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
    <section id="contact" className="py-20 bg-gradient-to-br from-green-50 via-white to-cyan-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Contact Us</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Have questions or want to learn more about TharUrja? We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-100 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start group">
                <div className="h-14 w-14 bg-green-100 rounded-full flex items-center justify-center mr-5 transition-transform transform group-hover:scale-110">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Our Location</h4>
                  <p className="text-gray-600">
                    TharUrja Headquarters<br />
                    Balesar, Jodhpur<br />
                    Rajasthan, India - 342001
                  </p>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="h-14 w-14 bg-green-100 rounded-full flex items-center justify-center mr-5 transition-transform transform group-hover:scale-110">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                  <p className="text-gray-600">
                    <a href="mailto:info@tharurja.com" className="hover:text-green-600 transition-colors">
                      info@tharurja.com
                    </a><br />
                    <a href="mailto:support@tharurja.com" className="hover:text-green-600 transition-colors">
                      support@tharurja.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="h-14 w-14 bg-green-100 rounded-full flex items-center justify-center mr-5 transition-transform transform group-hover:scale-110">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                  <p className="text-gray-600">
                    <a href="tel:+919876543210" className="hover:text-green-600 transition-colors">
                      +91 9352512176
                    </a><br />
                    <a href="tel:+919123456789" className="hover:text-green-600 transition-colors">
                      +91 9358622176
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="mt-8 h-64 rounded-xl overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3574.755530467201!2d72.9826143150423!3d26.38705508337137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c3de29772c5%3A0xdfd8f1215d2c8e5f!2sBalesar%2C%20Rajasthan%20342001!5e0!3m2!1sen!2sin!4v1717931442603!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl shadow-xl p-8 border border-green-200 animate-pulse hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send a Message</h3>

            {formSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mb-6 shadow-md">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Thank You!</h4>
                <p className="text-gray-600 text-lg max-w-md">
                  Your message has been successfully sent. We will get back to you shortly!
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-6 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    placeholder="+91 12345 67890"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                {error && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg">
                    <AlertCircle className="h-5 w-5" />
                    <p className="text-sm">{error}</p>
                  </div>
                )}

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
