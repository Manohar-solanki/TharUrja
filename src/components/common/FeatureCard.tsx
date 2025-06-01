import React from 'react';
import { Sun, Leaf, Home, Cpu, XIcon as Icon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  const renderIcon = (iconName: string) => {
    const iconProps = { size: 40, className: 'text-primary-600' };
    
    switch (iconName) {
      case 'sun':
        return <Sun {...iconProps} />;
      case 'leaf':
        return <Leaf {...iconProps} />;
      case 'home':
        return <Home {...iconProps} />;
      case 'cpu':
        return <Cpu {...iconProps} />;
      default:
        return <Sun {...iconProps} />;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="mb-4">
        {renderIcon(icon)}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;