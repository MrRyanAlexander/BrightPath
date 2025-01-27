import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  CheckCircle,
  ChevronRight,
  Clock,
  FileCheck,
  LineChart,
  MapPin,
  Shield,
  User,
} from 'lucide-react';

function Home() {
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);
  
  const testimonials = [
    {
      message: "We want your testimonial here! Share your experience with BrightPath.",
      name: "Jane Doe",
      location: "City of Dreams",
      stakeholder: "City Client",
      role: "City Manager"
    },
    {
      message: "We want your testimonial here! Tell us how BrightPath helped your recovery process.",
      name: "John Doe",
      location: "Houston, TX",
      stakeholder: "State Client",
      role: "State Manager"
    },
    {
      message: "We want your testimonial here! Let us know how we can help you succeed.",
      name: "Sally Jane",
      location: "Panama City, FL",
      stakeholder: "Fink Recovery",
      role: "Operations Director"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  React.useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-amber-50 to-stone-100 overflow-hidden">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Your Gateway to Smarter FEMA Compliance
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Streamline disaster debris management with a solution built to save time, cut costs, and empower recovery efforts.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <button className="bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-700 transition-colors inline-flex items-center justify-center">
                Start Your Free Trial
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <button className="bg-white text-amber-600 border-2 border-amber-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-50 transition-colors">
                Watch Demo
              </button>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <Clock className="h-6 w-6 text-amber-600" />
                  <span className="font-semibold text-gray-800">Quick Setup</span>
                </div>
                <p className="text-gray-600">Get started in minutes with our intuitive onboarding process</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <FileCheck className="h-6 w-6 text-amber-600" />
                  <span className="font-semibold text-gray-800">FEMA Compliant</span>
                </div>
                <p className="text-gray-600">Automated validation ensures all submissions meet requirements</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <LineChart className="h-6 w-6 text-amber-600" />
                  <span className="font-semibold text-gray-800">Real-time Insights</span>
                </div>
                <p className="text-gray-600">Track progress and optimize operations with live analytics</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">What Our Clients Say</h2>
        <div className="max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-stone-50 p-8 rounded-2xl shadow-lg mb-6">
              <p className="text-xl text-gray-600 mb-6 italic">"{testimonial.message}"</p>
              <div className="flex items-center">
                <div className="bg-amber-100 rounded-full p-3">
                  <User className="h-6 w-6 text-amber-600" />
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                  <p className="text-gray-500">{testimonial.stakeholder}</p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* AI Agents Section */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Your Recovery Team</h2>
            <p className="text-xl text-gray-600">Our AI-powered agents work together to streamline your recovery process.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ProductCard
              icon={<FileCheck className="h-16 w-16 text-amber-600" />}
              title="ComplianceGuard"
              subtitle="Reporting & Compliance Validator"
              description="Your dedicated compliance expert that ensures every document meets FEMA standards before submission."
              features={[
                "Real-time document validation",
                "Automated error detection",
                "FEMA regulation updates",
                "Smart form completion"
              ]}
            />
            <ProductCard
              icon={<LineChart className="h-16 w-16 text-amber-600" />}
              title="RecoveryLens"
              subtitle="Analytics & Performance Insights"
              description="Your data analyst that transforms complex operational data into clear, actionable recommendations."
              features={[
                "Cost optimization analysis",
                "Performance benchmarking",
                "Predictive analytics",
                "Custom reporting dashboards"
              ]}
            />
            <ProductCard
              icon={<Bot className="h-16 w-16 text-amber-600" />}
              title="PathFinder"
              subtitle="Recovery Q&A Assistant"
              description="Your 24/7 recovery expert that provides instant answers to your most pressing questions."
              features={[
                "24/7 instant responses",
                "FEMA policy guidance",
                "Process clarification",
                "Best practice recommendations"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Closing Section with Image */}
      <section className="relative py-20 bg-gradient-to-br from-amber-900 to-amber-800">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="Sunset over rebuilding community"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-8">Transform Your Recovery Process Today</h2>
            <p className="text-xl mb-12">
              Join the growing number of organizations using BrightPath to streamline their disaster recovery operations.
            </p>
            <button className="bg-white text-amber-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-50 transition-colors inline-flex items-center">
              Start Your Free Trial
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

function ProductCard({ icon, title, subtitle, description, features }) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">
        <div className="mb-6 p-4 bg-amber-50 rounded-xl inline-block">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-2 text-gray-900">{title}</h3>
        <p className="text-amber-600 font-medium mb-4">{subtitle}</p>
        <p className="text-gray-600 mb-8 flex-grow">{description}</p>
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-3">
              <div className="p-1 bg-green-100 rounded-full flex-shrink-0">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        <button className="mt-8 w-full bg-amber-50 text-amber-700 px-6 py-3 rounded-lg font-semibold hover:bg-amber-100 transition-colors">
          Learn More
        </button>
      </div>
    );
  }
  
export default Home; 