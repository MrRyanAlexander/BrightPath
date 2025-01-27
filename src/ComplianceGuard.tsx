import React from 'react';

const ComplianceGuard = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">ComplianceGuard</h1>
      <p className="text-xl text-gray-600 mb-4">
        Your dedicated compliance expert that ensures every document meets FEMA standards before submission.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Real-time document validation</li>
        <li>Automated error detection</li>
        <li>FEMA regulation updates</li>
        <li>Smart form completion</li>
      </ul>
      <p className="text-gray-600">
        ComplianceGuard is designed to streamline your compliance process, ensuring that you meet all necessary requirements efficiently.
      </p>
    </div>
  );
};

export default ComplianceGuard; 