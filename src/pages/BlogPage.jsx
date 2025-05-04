import React from "react";
import { Helmet } from "react-helmet-async";

const BlogPage = () => {
  return (
    <>
      <Helmet>
        <title> Blogs - TripleR</title>
      </Helmet>
      <div className="px-6 py-8 max-w-7xl mx-auto ">
        <div className="mt-24"></div>
        <h2 className="text-4xl font-bold text-green-800">Blog Page</h2>
      </div>
    </>
  );
};

export default BlogPage;
