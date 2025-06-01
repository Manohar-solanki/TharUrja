import React from 'react';
import { Check, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface RoadmapItemProps {
  year: string;
  title: string;
  description: string;
  complete: boolean;
  index: number;
}

const RoadmapItem: React.FC<RoadmapItemProps> = ({
  year,
  title,
  description,
  complete,
  index,
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex"
    >
      <div className="flex flex-col items-center mr-4">
        <div 
          className={`rounded-full w-10 h-10 flex items-center justify-center ${
            complete ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'
          }`}
        >
          {complete ? <Check size={20} /> : <Clock size={20} />}
        </div>
        {index !== 6 && (
          <div className={`w-1 h-full ${complete ? 'bg-green-400' : 'bg-gray-300'}`} />
        )}
      </div>
      <div className="pb-8">
        <span className="inline-block bg-primary-100 text-primary-800 text-sm font-medium py-1 px-3 rounded-full mb-2">
          {year}
        </span>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default RoadmapItem;