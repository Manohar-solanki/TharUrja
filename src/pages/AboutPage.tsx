import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import TeamMemberCard from '../components/common/TeamMemberCard';
import { team } from '../data/team';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | TharUrja';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative py-24 bg-desert-pattern bg-cover bg-center">
        <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About TharUrja</h1>
            <p className="text-xl text-white">
              Our journey to transform desert living through sustainable technology
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                TharUrja was born from the personal experience of our founder, Manohar, who grew up in a small village in Rajasthan where extreme heat and limited electricity were daily realities. During his engineering studies, he began developing ideas for solar-powered cooling systems that could work in remote areas.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The vision expanded when he met researchers working on carbon capture technology that could be integrated with solar systems. Realizing that these technologies could simultaneously address both climate change and quality of life in arid regions, TharUrja was established in early 2024.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we're a growing team of engineers, environmental scientists, and community development experts united by the belief that technological innovation should serve those most vulnerable to climate change.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <img
                src="https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Rural village in Rajasthan"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Mission & Values"
            subtitle="Driving principles that guide our work and innovation"
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
              <h3 className="text-xl font-semibold mb-3 text-green-600">Accessibility</h3>
              <p className="text-gray-600">
                We believe sustainable technology should be accessible to all communities, regardless of economic status. Our solutions are designed with affordability and simplicity at their core.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-3 text-green-600">Sustainability</h3>
              <p className="text-gray-600">
                Every aspect of our technology is designed with environmental sustainability in mind, from materials sourcing to end-of-life considerations, creating truly regenerative systems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-3 text-green-600">Innovation</h3>
              <p className="text-gray-600">
                We continuously push the boundaries of what's possible, integrating cutting-edge research in solar power, thermal engineering, and carbon capture to create novel solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Meet Our Team"
            subtitle="The passionate experts behind TharUrja's vision and technology"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TeamMemberCard
                  name={member.name}
                  role={member.role}
                  bio={member.bio}
                  image={member.image}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;