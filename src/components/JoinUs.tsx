import React, { useState, useRef } from 'react';
import { Download, ArrowRight, Users, Building, DollarSign } from 'lucide-react';

const JoinUs: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!name || !email) {
      setError('Please fill in all required fields.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('subject', 'New Newsletter Subscription');
      formData.append('access_key', 'e962bbd6-e60d-4b1c-bc94-2d5dee0809a0'); // Replace with your key
      formData.append('botcheck', '');

      const response = await fetch('https://api.web3forms.com/submit ', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        if (formRef.current) formRef.current.reset();
      } else {
        setError(data.message || 'Something went wrong!');
      }
    } catch (err) {
      setError('Failed to submit form. Please check your connection.');
    }
  };

  return (
    <section id="join-us" className="py-20 bg-gradient-to-br from-green-700 to-green-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Mission</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Together, we can accelerate the transition to a sustainable energy future. Discover how you can be part of the TharUrja revolution.
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* Partners */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="h-14 w-14 bg-yellow-500 bg-opacity-20 rounded-full flex items-center justify-center mb-6">
              <Building className="h-7 w-7 text-yellow-300" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Partners</h3>
            <p className="mb-6 opacity-90">
              Join our network of technology partners, utilities, and implementation specialists to expand the reach of renewable energy solutions.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-300 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Technology integration
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-300 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Distribution networks
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-300 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Research collaboration
              </li>
            </ul>
            <a href="#contact" className="inline-flex items-center font-medium hover:underline">
              Become a Partner
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          {/* Investors */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="h-14 w-14 bg-yellow-500 bg-opacity-20 rounded-full flex items-center justify-center mb-6">
              <DollarSign className="h-7 w-7 text-yellow-300" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Investors</h3>
            <p className="mb-6 opacity-90">
              Support the growth of TharUrja with capital that generates both financial returns and positive environmental impact.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-300 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Seed funding opportunities
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-300 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Growth capital investment
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-300 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Impact investment options
              </li>
            </ul>
            <button className="inline-flex items-center font-medium hover:underline">
              Download Pitch Deck
              <Download className="ml-2 h-4 w-4" />
            </button>
          </div>

          {/* Volunteers */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="h-14 w-14 bg-yellow-500 bg-opacity-20 rounded-full flex items-center justify-center mb-6">
              <Users className="h-7 w-7 text-yellow-300" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Community</h3>
            <p className="mb-6 opacity-90">
              Join our growing community of volunteers, advocates, and early adopters helping to spread renewable energy solutions.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-300 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Community outreach
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-300 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Education initiatives
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-300 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Early adoption programs
              </li>
            </ul>
            <a href="#contact" className="inline-flex items-center font-medium hover:underline">
              Get Involved
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Sign Up Form */}
        <div className="max-w-3xl mx-auto bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8 border border-white border-opacity-20">
          <h3 className="text-2xl font-bold mb-6 text-center">Stay Updated</h3>
          <p className="text-center mb-8 opacity-90">
            Subscribe to our newsletter to receive updates on our progress, upcoming projects, and investment opportunities.
          </p>

          {success && (
            <div className="text-center text-green-400 mb-6">
              Thank you for subscribing! We'll keep you updated with our latest news. 
            </div>
          )}

          {error && (
            <div className="text-center text-red-400 mb-6">{error}</div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
            <input 
              type="text" 
              placeholder="Name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-1 px-4 py-3 rounded-md bg-white bg-opacity-20 border border-white border-opacity-20 focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-white placeholder-opacity-60"
            />
            <input 
              type="email" 
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-md bg-white bg-opacity-20 border border-white border-opacity-20 focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-white placeholder-opacity-60"
            />
            <button 
              type="submit" 
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium px-6 py-3 rounded-md transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
