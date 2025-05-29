import React from 'react';

const CookiePolicy: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Cookie Policy</h1>
        <p className="mb-4"><strong>Last updated:</strong> April 5, 2025</p>

        <p className="mb-4">
          This Cookie Policy explains how TharUrja uses cookies and similar technologies to recognize you when you visit our website.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">What Are Cookies?</h2>
        <p className="mb-4">
          A cookie is a small data file placed on your device that allows us to recognize your browser and store certain information.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">Types of Cookies Used</h2>
        <ul className="list-disc ml-6 mb-4 space-y-2">
          <li><strong>Essential Cookies:</strong> Required for the website to function.</li>
          <li><strong>Performance & Analytics:</strong> Help us understand how visitors interact with the site.</li>
          <li><strong>Functionality Cookies:</strong> Remember choices you make to improve your experience.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-3">Managing Cookies</h2>
        <p className="mb-4">
          Most browsers allow you to control cookies through their settings preferences. However, disabling cookies may affect the functionality of the website.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">Consent</h2>
        <p>
          By continuing to use our website, you agree to the use of cookies as described in this policy.
        </p>
      </div>
    </div>
  );
};

export default CookiePolicy;