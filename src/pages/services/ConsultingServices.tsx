import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';

const ConsultingServices: React.FC = () => {
  const description = "Whether you're a business or government entity, our expert consultants help you evaluate, plan, and deploy sustainable energy projects tailored to your needs.";
  const features = [
    "Feasibility studies",
    "Regulatory compliance",
    "Project financing options",
    "Turnkey project execution"
  ];

  return (
    <ServicePageTemplate
      title="Consulting Services"
      description={description}
      features={features}
      image="/images/consulting-services.jpg"
    />
  );
};

export default ConsultingServices;