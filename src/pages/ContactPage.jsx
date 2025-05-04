import { MapPin } from "lucide-react";
import React from "react";
import { Helmet } from "react-helmet-async";

const ContactPage = () => {
  const labelClasses = "block font-medium text-green-900 mb-1";
  const inputClasses =
    "w-full rounded-md border border-gray-300 shadow-sm p-3 focus:ring-green-600 focus:border-green-600";

  return (
    <>
      <Helmet>
        <title>Contact Us - TripleR</title>
      </Helmet>
      <div className="max-w-[1280px] mx-auto p-6 sm:p-10">
        <div className="mt-24">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center text-green-900">
            Get in Touch
          </h2>

          <div className="flex flex-col lg:flex-row border-2 border-green-800 rounded-xl overflow-hidden shadow-md">
            {/* Contact Form */}
            <form
              action="#"
              className="w-full lg:w-1/2 p-6 sm:p-10 space-y-6 border-b-2 lg:border-b-0 lg:border-r-2"
            >
              <div>
                <label htmlFor="name" className={labelClasses}>
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className={inputClasses}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className={labelClasses}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="example@email.com"
                  className={inputClasses}
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className={labelClasses}>
                  Your Question
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Type your question here..."
                  className={inputClasses}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-900 text-white font-medium py-3 rounded-md hover:bg-green-800 transition-all"
              >
                Send Message
              </button>
            </form>

            {/* Google Map */}
            <div className="w-full lg:w-1/2 h-[400px] lg:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31576.467017728195!2d7.211187438284705!3d8.886503833240898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e65c07945befd%3A0x46a4ce0766a5f8a9!2sKuje%20900105%2C%20Federal%20Capital%20Territory!5e1!3m2!1sen!2sng!4v1745568882729!5m2!1sen!2sng"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
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
