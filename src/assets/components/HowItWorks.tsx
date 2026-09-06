import React, { useState } from 'react';
import { Sun, Wind, Zap, Home, AreaChart, Factory, Cpu, X, Play } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tabs = [
    {
      title: 'Energy Generation',
      icon: <Sun className="h-4 w-4" />,
      content: {
        title: 'Renewable Generation Infrastructure',
        description:
          'High-performance photovoltaic arrays and desert wind corridors capture raw energy and feed it directly into micro-substations.',
        steps: [
          {
            icon: <Sun className="h-5 w-5 text-amber-400" />,
            title: 'Photovoltaic Capture',
            description: 'Bi-facial solar panels maximize light conversion even in high-heat desert environments.',
          },
          {
            icon: <Wind className="h-5 w-5 text-cyan-400" />,
            title: 'Kinetic Wind Harvesting',
            description: 'Strategic wind turbines generate supplemental power during evening wind corridor spikes.',
          },
          {
            icon: <Zap className="h-5 w-5 text-emerald-400" />,
            title: 'Substation Integration',
            description: 'Generated electricity is conditioned and fed to regional grids or battery banks.',
          },
        ],
        image:
          'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
    },
    {
      title: 'AI Optimization',
      icon: <AreaChart className="h-4 w-4" />,
      content: {
        title: 'TharUrja AI Ecosystem',
        description:
          'Neural network algorithms continuously predict weather shifts and automate load dispatch across microgrids in real-time.',
        steps: [
          {
            icon: <AreaChart className="h-5 w-5 text-emerald-400" />,
            title: 'Predictive Telemetry',
            description: 'IoT sensors aggregate solar irradiance, battery state-of-charge, and consumption nodes.',
          },
          {
            icon: <Cpu className="h-5 w-5 text-purple-400" />,
            title: 'Neural Pattern Recognition',
            description: 'Machine learning forecasts peak demand periods and optimizes battery discharge cycles.',
          },
          {
            icon: <Zap className="h-5 w-5 text-amber-400" />,
            title: 'Automated Micro-Dispatch',
            description: 'Smart switches automatically balance supply, preventing grid overloads.',
          },
        ],
        image:
          'https://images.pexels.com/photos/7354/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
    },
    {
      title: 'Ecosystem Map',
      icon: <Factory className="h-4 w-4" />,
      content: {
        title: 'Closed-Loop Sustainable Network',
        description:
          'By combining renewable generation, storage, and intelligent consumption, TharUrja creates a self-healing energy ecosystem.',
        steps: [
          {
            icon: <Sun className="h-5 w-5 text-amber-400" />,
            title: 'Clean Generation',
            description: 'Desert solar and wind farms produce 100% green power.',
          },
          {
            icon: <Zap className="h-5 w-5 text-cyan-400" />,
            title: 'Smart Distribution',
            description: 'AI routing guarantees electricity supply where demand is highest.',
          },
          {
            icon: <Home className="h-5 w-5 text-emerald-400" />,
            title: 'Optimized End Users',
            description: 'Homes, farms, and businesses operate at peak energy cost efficiency.',
          },
        ],
        image:
          'https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-950 text-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>ARCHITECTURE OVERVIEW</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            How TharUrja Operates
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-emerald-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-400 font-light">
            Integrating renewable generation, battery storage, and AI-driven load balance in a unified platform.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === index
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-900/50'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.title}</span>
            </button>
          ))}
        </div>

        {/* Active Tab Showcase */}
        <div className="max-w-6xl mx-auto bg-slate-900/90 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Image */}
            <div className="lg:col-span-6 relative min-h-[300px] lg:min-h-[450px]">
              <img
                src={tabs[activeTab].content.image}
                alt={tabs[activeTab].content.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-900" />
            </div>

            {/* Content */}
            <div className="lg:col-span-6 p-8 lg:p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                {tabs[activeTab].content.title}
              </h3>
              <p className="text-slate-300 text-base leading-relaxed mb-8">
                {tabs[activeTab].content.description}
              </p>

              <div className="space-y-6">
                {tabs[activeTab].content.steps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-3 bg-slate-950 border border-slate-800 rounded-2xl flex-shrink-0">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-white mb-1">{step.title}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Modal Trigger */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 border border-emerald-500/30 text-emerald-400 hover:text-white font-semibold py-3.5 px-7 rounded-full transition-all duration-300 shadow-xl"
          >
            <Play className="w-4 h-4 text-emerald-400 fill-emerald-400" />
            <span>Watch Video Technical Walkthrough</span>
          </button>
        </div>

        {/* Video Demo Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4">
            <div className="relative bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-10 bg-slate-950/80 text-white rounded-full p-2 border border-slate-700 hover:bg-slate-800 transition"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="p-4 sm:p-6">
                <h4 className="text-lg font-bold text-white mb-4">TharUrja Interactive Video Demo</h4>
                <div className="relative rounded-2xl overflow-hidden bg-black aspect-video">
                  <video
                    src="videos/demo.mp4"
                    controls
                    autoPlay
                    className="w-full h-full object-cover"
                    onEnded={() => setIsModalOpen(false)}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default HowItWorks;
