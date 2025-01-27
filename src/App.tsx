import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import ComplianceGuard from './ComplianceGuard';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-stone-50">
        {/* Navigation */}
        <nav className="container mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gray-800">BrightPath</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/compliance-guard"
                className="text-amber-600 hover:underline"
              >
                ComplianceGuard
              </Link>
              <button
                onClick={() => alert('Start Your Trial Now clicked!')}
                className="bg-amber-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-amber-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                Start Your Trial Now
              </button>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/compliance-guard" element={<ComplianceGuard />} />
          <Route path="/" element={<Home />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-6">
            <p>&copy; 2024 BrightPath. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
