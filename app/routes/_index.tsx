import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { ArrowRight, Brain, PenTool, Laptop, Users, Target, CheckCircle } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "AI Thought Leader - Software Engineer & AI Enablement Expert" },
    { name: "description", content: "Empowering teams with AI knowledge and implementation strategies" },
  ];
};

export default function Index() {
  const benefits = [
    "Practical, hands-on AI implementation strategies",
    "Custom-tailored workshops for your team's needs",
    "Real-world case studies and examples",
    "Ongoing support and resources",
  ];

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-gray-900">
              Best <span className="text-blue-600">AI Training</span> for<br />
              Development Teams
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Practical, hands-on AI workshops to boost productivity,
              enhance decision-making, and future-proof your development process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/workshops" 
                className="btn btn-primary text-lg px-8 py-3"
              >
                View AI Workshops
              </Link>
              <a 
                href="mailto:contact@example.com" 
                className="btn bg-white text-gray-700 border-2 border-gray-200 hover:bg-gray-50 text-lg px-8 py-3"
              >
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our AI Training?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <p className="text-lg text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Comprehensive AI Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <Brain className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">AI Workshops</h3>
              <p className="text-gray-600 mb-6">
                Hands-on training programs to help your team understand and implement AI solutions effectively.
              </p>
              <Link to="/workshops" className="text-blue-600 hover:text-blue-700 inline-flex items-center font-medium">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <Target className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Consulting</h3>
              <p className="text-gray-600 mb-6">
                Strategic guidance on AI implementation, tool selection, and best practices for your team.
              </p>
              <Link to="/about" className="text-blue-600 hover:text-blue-700 inline-flex items-center font-medium">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <PenTool className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Resources</h3>
              <p className="text-gray-600 mb-6">
                Access our library of articles, guides, and case studies on AI implementation.
              </p>
              <Link to="/blog" className="text-blue-600 hover:text-blue-700 inline-flex items-center font-medium">
                View resources <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Team's AI Capabilities?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join our next workshop and learn how to leverage AI effectively in your development process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/workshops" 
                className="btn bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-3"
              >
                View Workshop Details
              </Link>
              <a 
                href="mailto:contact@example.com"
                className="btn bg-blue-700 text-white hover:bg-blue-800 text-lg px-8 py-3"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}