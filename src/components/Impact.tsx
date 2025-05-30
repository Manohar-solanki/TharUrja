import React from 'react';
import { TrendingUp, Users, Leaf } from 'lucide-react';

const Impact: React.FC = () => {
  return (
    <section id="impact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">🌍 Our Aspirational Impact</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            TharUrja aims to make a meaningful difference for our planet and communities. Here’s the vision we are working toward as we move from ideation to implementation:
          </p>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* Carbon Reduction */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="h-16 w-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
              <Leaf className="h-8 w-8 text-green-500" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">12,500</h3>
            <p className="text-lg text-gray-600 mb-4">Tons of CO₂ Reduction Potential</p>
            <div className="w-full bg-gray-200 h-2 rounded-full mb-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
            <p className="text-sm text-gray-500">Projected to reduce carbon emissions by 2025 with our innovative solar-powered cooling and carbon capture technologies.</p>
          </div>

          {/* Jobs Created */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="h-16 w-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">250+</h3>
            <p className="text-lg text-gray-600 mb-4">Future Rural Jobs</p>
            <div className="w-full bg-gray-200 h-2 rounded-full mb-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '60%' }}></div>
            </div>
            <p className="text-sm text-gray-500">Anticipated creation of sustainable jobs, with a focus on underserved communities in desert and rural regions.</p>
          </div>

          {/* Economic Growth */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="h-16 w-16 mx-auto bg-yellow-100 rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="h-8 w-8 text-yellow-500" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">₹140M</h3>
            <p className="text-lg text-gray-600 mb-4">Potential Economic Impact</p>
            <div className="w-full bg-gray-200 h-2 rounded-full mb-2">
              <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '85%' }}></div>
            </div>
            <p className="text-sm text-gray-500">Aiming to drive local economic growth, with a commitment to reinvesting resources into community development and green infrastructure.</p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">Voices from Our Community</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white rounded-lg shadow-lg p-8 relative">
              <div className="absolute -top-5 left-8 h-10 w-10 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div className="pt-4">
                <p className="text-gray-600 italic mb-6">
                  "TharUrja's solar initiative has transformed our village. We now have reliable power for our homes and businesses, and many young people have found employment with the project."
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Priya Sharma</h4>
                    <p className="text-gray-500">Village Head, Balesar</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 relative">
              <div className="absolute -top-5 left-8 h-10 w-10 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div className="pt-4">
                <p className="text-gray-600 italic mb-6">
                  "The TharUrja system in our office building has reduced our energy costs by 32% while maintaining optimal comfort. The AI technology is truly revolutionary in how it adapts to our usage patterns."
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Raj Patel</h4>
                    <p className="text-gray-500">Business Owner, Jodhpur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
