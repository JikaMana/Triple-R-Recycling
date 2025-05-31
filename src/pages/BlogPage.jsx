// src/pages/BlogPage.jsx
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { blogs } from "../data/blogs";
import { Link } from "react-router-dom";
import { slugify } from "../utils/slugify";

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Blog Posts – Triple R</title>
        <meta
          name="description"
          content="Read the latest on plastic recycling, sustainability, and community impact from Triple R."
        />
      </Helmet>

      <main className="py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Popular Blog Posts
          </h2>
        </header>

        {blogs.length === 0 ? (
          <p className="text-center text-gray-600">No posts available yet.</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <article
                key={blog.id}
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
        )}
      </main>
    </>
  );
};

export default BlogPage;
