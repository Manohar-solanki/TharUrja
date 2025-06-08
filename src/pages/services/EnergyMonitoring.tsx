import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';

const EnergyMonitoring: React.FC = () => {
  const description = "Monitor your energy production and consumption in real-time with our cloud-connected monitoring tools. Stay informed and optimize your energy usage anytime, anywhere.";
  const features = [
    "Detailed analytics & reports",
    "Mobile and desktop access",
    "Alerts for anomalies",
    "Historical usage comparisons"
  ];

  return (
    <ServicePageTemplate
      title="Energy Monitoring"
      description={description}
      features={features}
      image="/images/energy-monitoring.jpg"
    />
  );
};

export default EnergyMonitoring;