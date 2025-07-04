import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    // Log FormData contents
    for (let [key, value] of data.entries()) {
      console.log(`${key}: ${value}`);
    }

    try {
      const response = await fetch(
        "https://formsubmit.co/triplerrecycling7@gmail.com",
        {
          method: "POST",
          body: data,
        }
      );

      if (response.ok) {
        // Success
        setIsSubmitted(true);
        // window.location.href =
        //   "https://triplerrecyclingltd.netlify.app/success?type=contact";
      } else {
        console.log("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.log("Error submitting form: " + error.message);
    }
  };
  return (
    <>
      <Helmet>
        <title>Contact Us - TripleR</title>
        <meta
          name="description"
          content="Get in touch with Triple R Recycling for sustainable waste solutions. We'd love to hear from you."
        />
        <meta
          name="keywords"
          content="Triple R, contact, recycling, waste management, sustainability"
        />
        <meta property="og:title" content="Contact Triple R Recycling" />
        <meta
          property="og:description"
          content="Connect with Triple R Recycling to support sustainability and eco-friendly solutions."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="max-w-[1280px] mx-auto p-6 sm:p-10">
        <div className="mt-24">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center text-green-900">
            Get in Touch
          </h2>

          <div className="flex flex-col lg:flex-row border-2 border-green-800 rounded-xl overflow-hidden shadow-md">
            {/* Contact Form */}
            <form
              // action="https://formsubmit.co/el/mutabi"
              // method="POST"
              onSubmit={handleSubmit}
              className="w-full lg:w-1/2 p-6 sm:p-10 space-y-6 border-b-2 lg:border-b-0 lg:border-r-2"
            >
              <input
                type="hidden"
                name="_next"
                value="https://triplerrecyclingltd.netlify.app/success?type=contact"
              />
              <input type="hidden" name="_captcha" value="false" />

              <div>
                <label
                  htmlFor="name"
                  className="block font-medium text-green-900 mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full rounded-md border border-gray-300 shadow-sm p-3 focus:ring-green-600 focus:border-green-600"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-medium text-green-900 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  className="w-full rounded-md border border-gray-300 shadow-sm p-3 focus:ring-green-600 focus:border-green-600"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-medium text-green-900 mb-1"
                >
                  Your Message
                </label>
                <textarea
                  rows="5"
                  name="message"
                  placeholder="Type your question, complaint or feedback here..."
                  className="w-full rounded-md border border-gray-300 shadow-sm p-3 focus:ring-green-600 focus:border-green-600"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-900 text-white font-medium py-3 cursor-pointer rounded-md hover:bg-green-800 transition-all"
              >
                Send Message
              </button>
            </form>

            {/* Google Map */}
            <div className="w-full lg:w-1/2 h-[400px] lg:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d99075.9823387323!2d7.070057589903625!3d8.926152380300532!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e6300331d0193%3A0x4eb436cfbf6334be!2sTriple%20R%20Recycling%20Limited%200!5e1!3m2!1sen!2sng!4v1746615756824!5m2!1sen!2sng"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
