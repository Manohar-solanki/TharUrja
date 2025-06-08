import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';

const SmartHome: React.FC = () => {
  const description = "Integrate your home with smart energy management systems powered by TharUrja. Control and monitor your solar and wind systems remotely via mobile apps.";
  const features = [
    "Remote control of appliances",
    "Automated energy-saving routines",
    "Live energy usage dashboard",
    "Seamless app integration"
  ];

  return (
    <ServicePageTemplate
      title="Smart Home Integration"
      description={description}
      features={features}
      image="/images/smart-home.jpg"
    />
  );
};

export default SmartHome;