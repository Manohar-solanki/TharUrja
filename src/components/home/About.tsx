import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const About: React.FC = () => {
  return (
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
            <img
              src="https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Thar Desert landscape"
              className="rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Transforming Desert Challenges into Opportunities
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At TharUrja, we believe that the harsh conditions of the Thar Desert present not just challenges, but unique opportunities for innovation. Our mission is to harness the abundant solar energy in arid regions while addressing critical needs for cooling and carbon reduction.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Founded by Manohar, a young engineer from Rajasthan with firsthand experience of desert living conditions, our startup combines cutting-edge technology with deep local understanding to create solutions that are affordable, sustainable, and transformative for rural communities.
            </p>
            <Link to="/about">
              <Button variant="primary">
                Our Story
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;