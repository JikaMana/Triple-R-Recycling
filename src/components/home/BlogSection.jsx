import React from "react";
import { previewBlogs } from "../../data/blogs";
import { Link } from "react-router-dom";
import { slugify } from "../../utils/slugify";

export function BlogSection() {
  function spacesRemover(str) {
    return str.replace(/\s+/g, "-");
  }
  return (
    <section className="max-w-6xl mx-auto bg-gray-100 px-4 sm:px-6 lg:px-8 py-8 my-8">
      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
          Latest Insights
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {previewBlogs.map((blog, index) => (
          <article
            key={index}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="aspect-[3/2] overflow-hidden rounded-t-lg">
              <img
                src={blog.image}
                alt={blog.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 flex flex-col">
              <span className="text-sm font-semibold text-green-700 mb-2">
                {blog.category}
              </span>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {blog.title}
              </h3>

              <div className="text-sm text-gray-600 mb-4">
                <span>By {blog.author}</span>
                <span className="mx-2">•</span>
                <span>{blog.date}</span>
              </div>

              <div className="mt-auto flex items-center justify-between text-sm text-gray-500">
                <span>{blog.readTime}</span>
                <Link
                  to={`/blog/${slugify(blog.title)}`}
                  aria-label={`Read full post: ${blog.title}`}
                  className="text-green-700 hover:text-green-800 transition-colors whitespace-nowrap"
                >
                  Read more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default BlogSection;
