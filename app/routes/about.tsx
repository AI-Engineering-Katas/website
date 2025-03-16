import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Brain, Code, Users, Award } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "About - AI Thought Leader & Software Engineer" },
    { name: "description", content: "Learn about my journey and expertise in AI enablement" },
  ];
};

export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <img
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
        />
        <h1 className="mb-4">About Me</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Software engineer and AI enablement expert with a passion for helping teams leverage artificial intelligence effectively.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <Brain className="w-8 h-8 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">AI Expertise</h3>
          <p className="text-gray-600">
            Specialized in implementing AI solutions and training teams to leverage AI tools effectively in their development workflow.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <Code className="w-8 h-8 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Technical Background</h3>
          <p className="text-gray-600">
            15+ years of software engineering experience across various technologies and industries.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <Users className="w-8 h-8 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Workshop Leader</h3>
          <p className="text-gray-600">
            Conducted over 50 workshops helping teams integrate AI into their development processes.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <Award className="w-8 h-8 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Industry Recognition</h3>
          <p className="text-gray-600">
            Regular speaker at tech conferences and contributor to leading AI publications.
          </p>
        </div>
      </div>

      <section className="bg-blue-50 p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-semibold mb-4">My Approach</h2>
        <p className="text-gray-600 mb-6">
          I believe in making AI accessible and practical for development teams. My workshops and consulting focus on real-world applications, ethical considerations, and sustainable implementation strategies.
        </p>
        <Link to="/workshops" className="btn btn-primary inline-block">
          Learn about my workshops
        </Link>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-6">
          Interested in working together? I'm always open to new opportunities and collaborations.
        </p>
        <a
          href="mailto:contact@example.com"
          className="btn btn-primary inline-block"
        >
          Contact Me
        </a>
      </section>
    </div>
  );
}