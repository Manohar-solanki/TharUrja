import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';

const TharUrjaAI: React.FC = () => {
  const description = "Our proprietary AI platform optimizes energy generation, storage, and consumption in real-time, making your energy system smarter and more efficient.";
  const features = [
    "Real-time performance tracking",
    "Predictive maintenance alerts",
    "Load balancing and optimization",
    "Cloud-based dashboard access"
  ];

  return (
    <ServicePageTemplate
      title="TharUrja AI Platform"
      description={description}
      features={features}
      image="/images/ai-platform.jpg"
    />
  );
};

export default TharUrjaAI;