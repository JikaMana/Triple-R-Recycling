// src/pages/BlogDetail.jsx
import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { blogs } from "../data/blogs"; // your blog array
import { Helmet } from "react-helmet-async";
import BlogOne from "../components/blogs/BlogOne";
import BlogTwo from "../components/blogs/BlogTwo";
import BlogThree from "../components/blogs/BlogThree";

export default function BlogDetail() {
  const { id } = useParams();

  // function spacesRemover(str) {
  //   return str.replace(/\s+/g, "-");
  // }

  function spacesRemover(str) {
    // Remove non-alphanumeric characters except spaces and hyphens
    const cleanedStr = str.replace(/[^\w\s-]/g, "");
    // Replace spaces with hyphens
    return cleanedStr.replace(/\s+/g, "-");
  }
  const blog = blogs.find((b) => spacesRemover(b.title.toLowerCase()) === id);

  if (!blog) {
    alert("Blog Not Found");
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{blog.title} – Triple R</title>
        <meta name="description" content={blog.excerpt || blog.title} />
      </Helmet>

      <article className="prose prose-lg prose-green max-w-7xl mx-auto py-12 px-4 sm:px-8 lg:px-16">
        <div className="max-h-[55vh] overflow-hidden rounded-xl shadow-lg mt-12 mb-8">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-auto object-cover object-center"
            loading="lazy"
          />
        </div>
        {/* Metadata */}
        <header className="text-center mb-4 sm:mb-8 md:mb-12">
          <div className="text-base text-gray-600 md:flex justify-evenly">
            <span>By {blog.author}</span>
            <span className="mx-2">•</span>
            <span>{blog.date}</span>
            <span className="mx-2">•</span>
            <span>{blog.readTime}</span>
          </div>
          <span className="text-lg mt-2 uppercase text-green-600 font-semibold">
            {blog.category}
          </span>

          <h1 className="text-center  text-xl sm:text-3xl font-bold text-gray-900 leading-tight">
            {blog.title}
          </h1>
        </header>
        <section className="prose prose-green lg:prose-xl space-y-2 max-w-none">
          {blog.title ===
            "How AI and Robotics Are Revolutionizing Waste Sorting" && (
            <BlogOne />
          )}
          {blog.title ===
            "Blockchain in Waste Tracking: Transparent, Efficient, and Scalable" && (
            <BlogTwo />
          )}
          {blog.title ===
            "Why Waste Literacy Is Key to Community Engagement" && (
            <BlogThree />
          )}
        </section>
      </article>
    </>
  );
}
