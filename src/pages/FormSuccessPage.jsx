import React from "react";
import { CheckCircle } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

const FormSuccessPage = () => {
  const location = useLocation();
  const type = new URLSearchParams(location.search).get("type");

  const message =
    type === "pickup"
      ? "Your pickup request has been successfully submitted!"
      : "Thank you for reaching out. We’ve received your message!";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <CheckCircle size={80} className="text-green-600 mb-6" />
      <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
        Submission Successful
      </h1>
      <p className="text-gray-600 text-lg max-w-md mb-6">{message}</p>
      {type === "pickup" ? (
        <Link
          to="/#how-it-works"
          className="px-6 py-3 bg-green-700 hover:bg-green-800 text-white rounded-md text-sm font-medium transition"
        >
          Back to Home
        </Link>
      ) : (
        <Link
          to="/"
          className="px-6 py-3 bg-green-700 hover:bg-green-800 text-white rounded-md text-sm font-medium transition"
        >
          Back to Contact
        </Link>
      )}
    </div>
  );
};

export default FormSuccessPage;
