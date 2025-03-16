import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 mb-4 md:mb-0">
            © {new Date().getFullYear()} AI Thought Leader. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="https://twitter.com" className="text-gray-600 hover:text-blue-500">
              <Twitter size={20} />
            </a>
            <a href="https://linkedin.com" className="text-gray-600 hover:text-blue-700">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com" className="text-gray-600 hover:text-gray-900">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}