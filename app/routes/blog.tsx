import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Blog - AI Thought Leadership & Insights" },
    { name: "description", content: "Insights and articles about AI implementation and best practices" },
  ];
};

const posts = [
  {
    id: 1,
    title: "The Future of AI in Software Development",
    excerpt: "Exploring how AI is transforming the way we build and maintain software...",
    date: "2024-03-15",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Implementing AI Responsibly in Your Team",
    excerpt: "Best practices for introducing AI tools to your development workflow...",
    date: "2024-03-10",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1655720033654-a4239dd42d10?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "AI Tools Every Developer Should Know",
    excerpt: "A curated list of AI-powered tools that can enhance your productivity...",
    date: "2024-03-05",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1676277791608-ac54ea59257c?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1>Blog & Insights</h1>
      
      <div className="space-y-12">
        {posts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full md:w-48 object-cover"
                  src={post.image}
                  alt=""
                />
              </div>
              <div className="p-8">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                  <span className="mx-1">·</span>
                  <span>{post.readTime}</span>
                </div>
                <Link to={`/blog/${post.id}`} className="block">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-gray-600">
                  {post.excerpt}
                </p>
                <div className="mt-4">
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}