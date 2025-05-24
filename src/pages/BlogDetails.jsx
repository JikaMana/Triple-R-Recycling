// src/pages/BlogDetail.jsx
import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { blogs } from "../data/blogs"; // your blog array
import { Helmet } from "react-helmet-async";

export default function BlogDetail() {
  const { id } = useParams();

  function spacesRemover(str) {
    return str.replace(/\s+/g, "-");
  }
  const blog = blogs.find((b) => spacesRemover(b.title.toLowerCase()) === id);

  if (!blog) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{blog.title} – Triple R</title>
        <meta name="description" content={blog.excerpt || blog.title} />
      </Helmet>

      <article className="prose prose-lg prose-green max-w-7xl mx-auto py-12 px-4 sm:px-8 lg:px-16">
        <div className="overflow-hidden rounded-xl shadow-lg mt-12 mb-8">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
        {/* Metadata */}
        <header className="text-center mb-4 sm:mb-8 md:mb-12">
          <span className="text-sm uppercase text-green-600 font-semibold">
            {blog.category}
          </span>

          <h1 className="text-center text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            {blog.title}
          </h1>
          <div className="mt-4 text-sm text-gray-600">
            <span>By {blog.author}</span>
            <span className="mx-2">•</span>
            <span>{blog.date}</span>
            <span className="mx-2">•</span>
            <span>{blog.readTime}</span>
          </div>
        </header>
        <section className="prose prose-green lg:prose-xl space-y-2 max-w-none">
          <p>
            At <strong>Triple R Recycling</strong>, understanding the symbols on
            plastic packaging means unlocking the story of each material’s
            journey. These symbols— whether it's <strong>PET (1)</strong>,{" "}
            <strong>HDPE (2)</strong>, or <strong>PVC (3)</strong>—guide us in
            sorting, processing, and transforming waste into valuable resources.
          </p>

          <h2>Decoding the Numbers</h2>
          <p>
            Each triangle and number etched into plastic isn't just a
            symbol—it's a blueprint. PET (1) bottles are lightweight and often
            used for beverages; HDPE (2) is the tough plastic in detergent
            bottles; and PVC (3), found in pipes, poses recycling challenges due
            to chemical additives.
          </p>

          <h2>Sorting & Processing</h2>
          <p>
            Our process starts with precise sorting. Manual labor plays a key
            role, supported by advanced optical scanners that identify polymers
            based on their reflective properties. Purity is critical—each
            plastic type must be isolated to ensure the quality of the final
            recycled product.
          </p>
          <p>
            Once sorted, plastics are compressed into massive 300kg bales. These
            bales represent the beginning of a new life for materials that might
            otherwise sit in a landfill for centuries.
          </p>

          <blockquote>
            “Recycling isn’t just about waste management—it's about resource
            optimization.”
          </blockquote>

          <h2>The Path to Reinvention</h2>
          <p>
            After sorting, plastic enters the transformation phase. The
            materials are shredded, thoroughly washed to remove contaminants,
            and then melted into resin pellets. These pellets become the
            foundation for a new generation of products—durable, efficient, and
            environmentally sound.
          </p>
          <p>
            You might be sitting on a bench made from yesterday’s milk jugs or
            using a planter crafted from repurposed shampoo bottles. This is the
            circular economy in action, and it’s changing the way we think about
            waste.
          </p>

          <h3>Technology & Innovation</h3>
          <p>
            Triple R invests in modern recycling machinery and AI-powered
            sorting systems to reduce human error and improve throughput. From
            smart sensors to energy-efficient melters, we constantly evolve to
            meet the growing demand for sustainable practices.
          </p>

          <h3>Education & Community</h3>
          <p>
            Our mission extends beyond our facility walls. We host workshops,
            partner with schools, and launch neighborhood cleanups—all to raise
            awareness about the power of responsible recycling.
          </p>

          <h3>Join the Movement</h3>
          <p>
            Every recycled item counts. Want to make a difference today?{" "}
            <a href="/contact" className="text-green-700 hover:underline">
              Schedule a pickup
            </a>{" "}
            or drop your sorted plastics at one of our community bins.
          </p>
          <p>
            Together, we can turn waste into opportunity—and build a cleaner,
            greener tomorrow.
          </p>
        </section>
      </article>
    </>
  );
}
