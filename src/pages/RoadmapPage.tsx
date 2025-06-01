import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import RoadmapItem from '../components/common/RoadmapItem';
import { roadmap } from '../data/roadmap';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';

const RoadmapPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Our Roadmap | TharUrja';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative py-24 bg-desert-pattern bg-cover bg-center">
        <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Roadmap</h1>
            <p className="text-xl text-white">
              The journey ahead as we develop and deploy our technology
            </p>
          </div>
        </div>
      </div>

      {/* Roadmap Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Development Timeline"
            subtitle="Our step-by-step plan from concept to full-scale deployment"
          />

          <div className="max-w-3xl mx-auto">
            {roadmap.map((item, index) => (
              <RoadmapItem
                key={item.title}
                year={item.year}
                title={item.title}
                description={item.description}
                complete={item.complete}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Current Phase */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Current Phase: Concept Development</h2>
              
              <p className="text-lg text-gray-600 mb-6">
                We are currently in the concept development phase, finalizing technical specifications and designing prototypes for our solar-powered cooling and carbon capture systems.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Key Milestones in this Phase:</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Complete technical research and feasibility studies</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Secure initial seed funding for prototype development</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-amber-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Finalize design specifications for first prototype (In Progress)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-amber-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Establish partnerships with component suppliers (In Progress)</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-primary-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Next Up: Prototype Testing</h3>
                <p className="text-gray-600">
                  By Q3 2024, we aim to complete our first working prototype and begin rigorous testing in controlled environments to validate performance metrics and efficiency.
                </p>
              </div>
              
              <div className="flex justify-center">
                <Link to="/contact">
                  <Button variant="primary">
                    Partner With Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision for the Future */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Vision for the Future"
            subtitle="Where we're headed beyond our current roadmap"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Expanding Reach</h3>
              <p className="text-gray-600">
                By 2027, we aim to expand our deployment to other arid regions across India and potentially into international markets facing similar challenges, including parts of Africa and the Middle East.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Advanced AI Integration</h3>
              <p className="text-gray-600">
                Future versions of our technology will include more sophisticated AI that can predict local climate patterns, optimize energy usage across community networks, and provide actionable insights for climate resilience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Research Hub</h3>
              <p className="text-gray-600">
                We envision establishing a desert technology research center in Rajasthan that brings together global experts to continue developing innovative solutions for arid region challenges.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoadmapPage;