import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        <p className="mb-4"><strong>Last updated:</strong> April 5, 2025</p>

        <p className="mb-4">
          At TharUrja, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">Information We Collect</h2>
        <p className="mb-4">
          We may collect personal identification information, such as name, email address, phone number, and company details when voluntarily submitted by users via forms on the site.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">How We Use Your Information</h2>
        <p className="mb-4">
          We use collected information to respond to inquiries, improve our services, send periodic emails, and customize user experience.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">Third Parties</h2>
        <p className="mb-4">
          We do not sell, trade, or otherwise transfer personally identifiable information to outside parties without your consent.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">Data Security</h2>
        <p>
          We implement appropriate security measures to protect against unauthorized access to or alteration of your personal information.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;