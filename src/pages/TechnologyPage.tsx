import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import TechnologySection from '../components/common/TechnologySection';
import FaqItem from '../components/common/FaqItem';
import { technologySections } from '../data/technologySections';
import { faqs } from '../data/faqs';

const TechnologyPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Our Technology | TharUrja';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative py-24 bg-solar-pattern bg-cover bg-center">
        <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Technology</h1>
            <p className="text-xl text-white">
              Innovative solutions for solar-powered cooling and carbon capture in arid regions
            </p>
          </div>
        </div>
      </div>

      {/* Technology Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="How Our Technology Works"
            subtitle="An integrated approach to sustainable cooling and carbon capture"
          />

          <div className="mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 max-w-4xl leading-relaxed"
            >
              TharUrja's technology centers on three integrated components: highly efficient solar power generation, innovative cooling systems adapted for arid environments, and carbon capture mechanisms that create a circular sustainability loop. Our systems are designed to operate in extreme conditions with minimal maintenance, making them ideal for rural areas with limited technical support.
            </motion.p>
          </div>

          {technologySections.map((section, index) => (
            <TechnologySection
              key={section.title}
              title={section.title}
              description={section.description}
              image={section.image}
              reverse={index % 2 !== 0}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Innovation Diagram */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="The TharUrja System"
            subtitle="How our integrated components work together"
            centered
          />

          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <img
                    src="https://images.pexels.com/photos/9875439/pexels-photo-9875439.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="TharUrja Integrated System"
                    className="rounded-lg shadow-md"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Complete Ecosystem</h3>
                  <p className="text-gray-600 mb-4">
                    Our system creates a complete ecosystem where each component enhances the others:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>Solar panels generate electricity for cooling and system operation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>Cooling units provide comfortable living conditions while using minimal energy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>Carbon capture modules convert CO2 into useful byproducts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>AI optimization ensures maximum efficiency in all conditions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>IoT sensors provide real-time monitoring and predictive maintenance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Common questions about our technology and approach"
            centered
          />

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FaqItem
                  question={faq.question}
                  answer={faq.answer}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyPage;