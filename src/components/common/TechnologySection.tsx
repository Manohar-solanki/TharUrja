import React from 'react';
import { motion } from 'framer-motion';

interface TechnologySectionProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
  index: number;
}

const TechnologySection: React.FC<TechnologySectionProps> = ({
  title,
  description,
  image,
  reverse = false,
  index,
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`flex flex-col ${
        reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      } gap-8 items-center mb-20`}
    >
      <div className="md:w-1/2">
        <img 
          src={image} 
          alt={title} 
          className="rounded-lg shadow-lg w-full h-auto object-cover aspect-video"
        />
      </div>
      <div className="md:w-1/2">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">{title}</h3>
        <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default TechnologySection;