import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
        <p className="mb-4"><strong>Last updated:</strong> April 5, 2025</p>

        <p className="mb-4">
          These Terms of Service govern your use of the TharUrja website and all related services. By accessing this website, you accept these terms.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">Use License</h2>
        <p className="mb-4">
          Permission is granted to temporarily download one copy of the content for personal, non-commercial transitory viewing only.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">User Responsibilities</h2>
        <p className="mb-4">
          Users must not misuse the website, attempt to gain unauthorized access, or interfere with its performance.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">Disclaimer</h2>
        <p className="mb-4">
          The materials on TharUrja's website are provided on an "as is" basis. We make no warranties, expressed or implied, and hereby disclaim all warranties.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">Limitations</h2>
        <p>
          TharUrja shall not be liable for any damages arising out of the use or inability to use the website.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;