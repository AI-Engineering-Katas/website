import { Link, useLocation } from "@remix-run/react";
import { Brain, Home, Laptop, PenTool, User } from "lucide-react";
import { clsx } from "clsx";

export default function Navigation() {
  const location = useLocation();
  
  const links = [
    { to: "/", label: "Home", icon: Home },
    { to: "/workshops", label: "AI Workshops", icon: Brain },
    { to: "/blog", label: "Blog", icon: PenTool },
    { to: "/projects", label: "Projects", icon: Laptop },
    { to: "/about", label: "About", icon: User },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-blue-600" />
            <span className="font-bold text-xl text-gray-900">AI Leader</span>
          </Link>
          
          <div className="hidden md:flex space-x-1">
            {links.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className={clsx(
                  "flex items-center space-x-1 px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  location.pathname === to
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                )}
              >
                <Icon size={16} />
                <span>{label}</span>
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="mailto:contact@example.com"
              className="btn btn-primary"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}