import type { MetaFunction } from "@remix-run/node";
import { Github, ExternalLink } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Projects - AI Implementation Examples" },
    { name: "description", content: "Showcase of AI-powered projects and implementations" },
  ];
};

const projects = [
  {
    title: "AI Code Assistant",
    description: "A VS Code extension that provides AI-powered code suggestions and refactoring.",
    image: "https://images.unsplash.com/photo-1676277791608-ac54ea59257c?auto=format&fit=crop&q=80&w=800",
    tags: ["TypeScript", "OpenAI", "VS Code API"],
    github: "https://github.com",
    demo: "https://marketplace.visualstudio.com",
  },
  {
    title: "Team AI Dashboard",
    description: "Analytics dashboard for tracking AI tool usage and effectiveness in development teams.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
  {
    title: "AI Workshop Platform",
    description: "Interactive platform for delivering AI workshops and tracking participant progress.",
    image: "https://images.unsplash.com/photo-1655720033654-a4239dd42d10?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "Supabase", "Tailwind"],
    github: "https://github.com",
    demo: "https://workshops.example.com",
  },
];

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1>Projects</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  className="flex items-center text-gray-600 hover:text-gray-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5 mr-1" />
                  Code
                </a>
                <a
                  href={project.demo}
                  className="flex items-center text-gray-600 hover:text-gray-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5 mr-1" />
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}