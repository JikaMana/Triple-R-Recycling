import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 – Page Not Found | Triple R</title>
        <meta
          name="description"
          content="The page you’re looking for doesn’t exist. Return home or explore our services."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="text-center space-y-6">
          {/* Illustration */}
          <svg
            className="mx-auto w-48 h-48 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 240 240"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="120" cy="120" r="110" strokeWidth="4" />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dy="0.35em"
              className="font-bold text-6xl"
            >
              404
            </text>
          </svg>

          {/* Heading & Copy */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Oops, page not found
          </h1>
          <p className="text-gray-600 max-w-md mx-auto">
            The resource you’re looking for might have been removed, had its
            name changed, or is temporarily unavailable.
          </p>

          {/* Call to Action */}
          <div className="space-x-4">
            <Link
              to="/"
              className="inline-block bg-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-800 transition"
            >
              Go Home
            </Link>
            <Link
              to="/contact"
              className="inline-block text-green-700 px-6 py-3 rounded-full font-medium hover:text-green-800 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
