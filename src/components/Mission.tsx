import React from 'react';
import { Sun, Wind, Cpu, Leaf } from 'lucide-react';

const Mission: React.FC = () => {
  return (
    <section id="mission" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to transform how energy is produced and consumed through a dual approach of renewable generation and intelligent optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Renewable Energy Generation */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="p-8">
              <div className="h-16 w-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <Sun className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Renewable Energy Generation</h3>
              <p className="text-gray-600 mb-6">
                We harness the infinite power of the sun and wind to generate clean, sustainable energy. Our solar farms and wind turbines are strategically located in optimal environments to maximize output while minimizing environmental impact.
              </p>
              <div className="flex flex-col space-y-4">
                <div className="flex items-start">
                  <Sun className="h-5 w-5 text-yellow-500 mt-1 mr-3" />
                  <p className="text-gray-600">Solar farms in desert regions with 300+ sunny days</p>
                </div>
                <div className="flex items-start">
                  <Wind className="h-5 w-5 text-blue-500 mt-1 mr-3" />
                  <p className="text-gray-600">Wind turbines in high-velocity wind corridors</p>
                </div>
                <div className="flex items-start">
                  <Leaf className="h-5 w-5 text-green-500 mt-1 mr-3" />
                  <p className="text-gray-600">Zero-emission energy production</p>
                </div>
              </div>
            </div>
          </div>

          {/* AI-Powered Optimization */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="p-8">
              <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Cpu className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered Optimization</h3>
              <p className="text-gray-600 mb-6">
                Our TharUrja AI technology optimizes energy consumption in homes and businesses, reducing waste and maximizing efficiency. By intelligently managing when and how energy is used, we create a smarter, more sustainable energy ecosystem.
              </p>
              <div className="flex flex-col space-y-4">
                <div className="flex items-start">
                  <Cpu className="h-5 w-5 text-green-500 mt-1 mr-3" />
                  <p className="text-gray-600">Machine learning algorithms predict usage patterns</p>
                </div>
                <div className="flex items-start">
                  <Cpu className="h-5 w-5 text-green-500 mt-1 mr-3" />
                  <p className="text-gray-600">Smart device integration for automated efficiency</p>
                </div>
                <div className="flex items-start">
                  <Cpu className="h-5 w-5 text-green-500 mt-1 mr-3" />
                  <p className="text-gray-600">Real-time adjustments based on grid demand</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Infographic */}
        <div className="mt-20 bg-white rounded-lg shadow-lg p-8 max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">The TharUrja Advantage</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-10 w-10 text-green-500" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">30%</h4>
              <p className="text-gray-600">Carbon Footprint Reduction</p>
            </div>
            <div className="text-center">
              <div className="h-20 w-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-10 w-10 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2V6M12 18V22M6 12H2M22 12H18M19.07 4.93L16.24 7.76M19.07 19.07L16.24 16.24M4.93 19.07L7.76 16.24M4.93 4.93L7.76 7.76" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">100%</h4>
              <p className="text-gray-600">Renewable Energy Sources</p>
            </div>
            <div className="text-center">
              <div className="h-20 w-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-10 w-10 text-yellow-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 1V23M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">25%</h4>
              <p className="text-gray-600">Energy Cost Savings</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;