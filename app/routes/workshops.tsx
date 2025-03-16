import type { MetaFunction } from "@remix-run/node";
import { Brain, Users, Lightbulb, Target } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "AI Enablement Workshops - AI Thought Leader" },
    { name: "description", content: "Comprehensive AI workshops for teams and organizations" },
  ];
};

export default function Workshops() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1>AI Enablement Workshops</h1>
      
      <div className="prose max-w-none mb-12">
        <p className="text-xl text-gray-600 mb-8">
          Transform your team's AI capabilities with hands-on workshops designed for practical implementation and real-world success.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <Brain className="w-8 h-8 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">AI Fundamentals</h3>
          <p className="text-gray-600">
            Core concepts, current capabilities, and practical applications of AI in software development.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <Users className="w-8 h-8 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Team Integration</h3>
          <p className="text-gray-600">
            Strategies for incorporating AI tools into your existing development workflow.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <Lightbulb className="w-8 h-8 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Best Practices</h3>
          <p className="text-gray-600">
            Industry-proven approaches to AI implementation and ethical considerations.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <Target className="w-8 h-8 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Practical Applications</h3>
          <p className="text-gray-600">
            Real-world case studies and hands-on exercises with popular AI tools.
          </p>
        </div>
      </div>

      <section className="bg-blue-50 p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-semibold mb-4">Workshop Format</h2>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">1</span>
            <div>
              <h4 className="font-semibold">Interactive Sessions</h4>
              <p className="text-gray-600">4-hour hands-on workshops with real-time coding and implementation</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">2</span>
            <div>
              <h4 className="font-semibold">Small Groups</h4>
              <p className="text-gray-600">Maximum 15 participants to ensure personalized attention</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">3</span>
            <div>
              <h4 className="font-semibold">Follow-up Support</h4>
              <p className="text-gray-600">30 days of post-workshop support and resources</p>
            </div>
          </li>
        </ul>
      </section>

      <div className="text-center">
        <a href="mailto:contact@example.com" className="btn btn-primary inline-block">
          Book a Workshop
        </a>
      </div>
    </div>
  );
}