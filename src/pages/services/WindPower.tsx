import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';

const WindPower: React.FC = () => {
  const description = "Wind energy is one of the fastest-growing sources of renewable energy. At TharUrja, we design and implement wind power systems for both rural and urban applications.";
  const features = [
    "Custom wind turbine installation",
    "Site assessment & feasibility studies",
    "Hybrid solar-wind systems",
    "Smart grid integration"
  ];

  return (
    <ServicePageTemplate
      title="Wind Power Generation"
      description={description}
      features={features}
      image="/images/wind-power.jpg"
    />
  );
};

export default WindPower;