import React from 'react';
import { MapPin, Mail, Phone, Linkedin, Twitter } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get to know the team behind TharUrja and our journey to revolutionize renewable energy.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Founder Profile */}
            <div className="col-span-1">
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
                <img 
                  src="images/profile.jpg" 
                  alt="Manohar Solanki" 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Manohar Solanki</h3>
                  <p className="text-green-600 mb-4">Founder & CEO</p>
                  <p className="text-gray-600 mb-4">
                    Engineer and entrepreneur with a passion for renewable energy and AI technology. 
                    Manohar founded EcoSync Energy with a vision to transform rural India through sustainable energy solutions.
                  </p>
                  <div className="flex space-x-3">
                    <a href="https://www.linkedin.com/in/mr-manohar-solanki/" className="text-gray-500 hover:text-green-600 transition-colors duration-300" target="_blank">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="https://x.com/Manohar939" className="text-gray-500 hover:text-green-600 transition-colors duration-300" target='_blank'>
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-green-600 transition-colors duration-300" target='_blank'>
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Story */}
            <div className="col-span-2">
              <div className="bg-gray-50 rounded-lg p-8 shadow-lg h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
                <div className="space-y-6 text-gray-600">
                  <p>
                    TharUrja was born from a simple observation: Rajasthan has abundant sunlight but unreliable energy access. 
                    Founded in 2023 by Manohar Solanki, our journey began in Balesar, a small village near Jodhpur, Rajasthan.
                  </p>
                  <p>
                    Having grown up experiencing the challenges of unreliable power in rural India, Manohar envisioned a solution that would not only harness the region's abundant natural resources but also create a smarter way to manage energy consumption.
                  </p>
                  <p>
                    After completing his engineering degree and working in the renewable energy sector for several years, Manohar returned to his hometown with a bold vision: to create an integrated energy system that combines solar power generation with AI-driven optimization.
                  </p>
                  <p>
                    Today, TharUrja is rapidly growing, with pilot projects throughout Rajasthan and ambitious plans to expand across India. Our team combines expertise in renewable energy, artificial intelligence, and rural development to create solutions that are both technologically advanced and culturally appropriate for the communities we serve.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Our Location</h4>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-green-600 mt-1 mr-3" />
                    <p className="text-gray-600">
                      TharUrja Headquarters<br />
                      Balesar, Jodhpur<br />
                      Rajasthan, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">Our Journey</h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200"></div>
              
              {/* Timeline Items */}
              <div className="space-y-16">
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-6 h-6 rounded-full bg-green-500 border-4 border-white shadow"></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="md:text-right pr-8">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">2023</h4>
                      <p className="text-gray-600">Founded TharUrja with a vision to transform rural energy access through renewable sources and AI technology.</p>
                    </div>
                    <div className="pl-8">
                      <img src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Foundation" className="rounded-lg shadow-md w-full h-40 object-cover" />
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-6 h-6 rounded-full bg-green-500 border-4 border-white shadow"></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="md:text-right order-2 md:order-1 pr-8">
                      <img src="https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Pilot Project" className="rounded-lg shadow-md w-full h-40 object-cover" />
                    </div>
                    <div className="order-1 md:order-2 pl-8">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">2024</h4>
                      <p className="text-gray-600">Launched first pilot project in Balesar village, providing solar power to 50 homes with our TharUrja smart management system.</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-6 h-6 rounded-full bg-green-500 border-4 border-white shadow"></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="md:text-right pr-8">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">2025</h4>
                      <p className="text-gray-600">Expanding across Rajasthan with plans to power 10,000 homes and businesses through our renewable energy network.</p>
                    </div>
                    <div className="pl-8">
                      <img src="https://images.pexels.com/photos/9799706/pexels-photo-9799706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Expansion" className="rounded-lg shadow-md w-full h-40 object-cover" />
                    </div>
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

export default AboutUs;