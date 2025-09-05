import React, { useState } from 'react';
import { Sun, Wind, Zap, Home, AreaChart, Factory, Cpu, X } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal

  const tabs = [
    {
      title: 'Energy Generation',
      icon: <Sun className="h-5 w-5" />,
      content: {
        title: 'Renewable Energy Generation',
        description:
          'Our solar farms and wind turbines generate clean, renewable energy that\'s fed into the power grid or stored for local use.',
        steps: [
          {
            icon: <Sun className="h-6 w-6 text-yellow-500" />,
            title: 'Solar Collection',
            description: 'Advanced photovoltaic panels capture sunlight and convert it to electricity.',
          },
          {
            icon: <Wind className="h-6 w-6 text-blue-500" />,
            title: 'Wind Harvesting',
            description: 'Strategic wind turbines capture kinetic energy and transform it into electrical power.',
          },
          {
            icon: <Zap className="h-6 w-6 text-purple-500" />,
            title: 'Grid Integration',
            description: 'Clean energy is fed into the existing power grid or stored in battery systems.',
          },
        ],
        image:
          'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
    },
    {
      title: 'AI Optimization',
      icon: <AreaChart className="h-5 w-5" />,
      content: {
        title: 'EcoSync AI Technology',
        description:
          'Our proprietary AI analyzes usage patterns and optimizes energy consumption in real-time across connected devices and systems.',
        steps: [
          {
            icon: <AreaChart className="h-6 w-6 text-green-500" />,
            title: 'Data Analysis',
            description: 'AI collects and analyzes energy usage data from connected devices and systems.',
          },
          {
            icon: <Cpu className="h-6 w-6 text-indigo-500" />,
            title: 'Pattern Recognition',
            description: 'Machine learning identifies usage patterns and opportunities for optimization.',
          },
          {
            icon: <Zap className="h-6 w-6 text-amber-500" />,
            title: 'Smart Adjustments',
            description: 'Connected devices automatically adjust consumption based on AI recommendations.',
          },
        ],
        image:
          'https://images.pexels.com/photos/7354/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
    },
    {
      title: 'Ecosystem Map',
      icon: <Factory className="h-5 w-5" />,
      content: {
        title: 'Complete Energy Ecosystem',
        description:
          'Our integrated approach connects renewable generation with intelligent consumption to create a closed-loop, sustainable energy ecosystem.',
        steps: [
          {
            icon: <Sun className="h-6 w-6 text-yellow-500" />,
            title: 'Generation',
            description: 'Solar and wind farms produce clean, renewable energy.',
          },
          {
            icon: <Zap className="h-6 w-6 text-blue-500" />,
            title: 'Distribution',
            description: 'Smart grid technology efficiently distributes power where and when it\'s needed.',
          },
          {
            icon: <Home className="h-6 w-6 text-green-500" />,
            title: 'Consumption',
            description: 'AI-optimized homes and businesses use energy intelligently and efficiently.',
          },
        ],
        image:
          'https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our integrated approach combines renewable energy generation with AI-powered optimization to create a sustainable energy ecosystem.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-10">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center px-6 py-3 mx-2 mb-2 rounded-full transition-all duration-300 ${
                activeTab === index
                  ? 'bg-green-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <img
                src={tabs[activeTab].content.image}
                alt={tabs[activeTab].content.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{tabs[activeTab].content.title}</h3>
              <p className="text-gray-600 mb-6">{tabs[activeTab].content.description}</p>

              <div className="space-y-6">
                {tabs[activeTab].content.steps.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-12 w-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Visualization Button */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition-all duration-300"
          >
            Explore Interactive Demo
          </button>
        </div>

        {/* Video Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
            <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-full overflow-auto">
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-2 right-2 z-10 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-900 transition"
                aria-label="Close modal"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Video Player */}
              <div className="aspect-w-16 aspect-h-9">
                <video
                  src="videos/demo.mp4"
                  controls
                  autoPlay
                  className="w-full h-auto rounded-t-lg"
                  style={{ maxHeight: '80vh' }}
                  onEnded={() => setIsModalOpen(false)} // Optional: close when video ends
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HowItWorks;
