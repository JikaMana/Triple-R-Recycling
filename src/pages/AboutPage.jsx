import React, { useEffect } from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import aboutBannerImage from "../assets/images/about/aboutBanner.webp";
import Founder from "../components/about/Founder";
import Partners from "../components/about/Partners";
import TripleRHistory from "../components/about/TripleRHistory";
import Mission from "../components/about/Mission";
import OurGallery from "../components/about/OurGallery";
import { Helmet } from "react-helmet-async";

const AboutPage = () => {
  const contactIconsClasses =
    "transition bg-green-800 text-gray-200 p-2 rounded-full";
  return (
    <>
      <Helmet>
        <title>About Us - TripleR</title>
      </Helmet>
      <div className="px-6 py-8 max-w-7xl mx-auto ">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mt-24">
          <div className="md:max-w-sm lg:max-w-2xl">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Transforming Plastics into Resources
            </h2>
          </div>

          <div className="bg-gray-100 rounded-xl p-6 max-w-sm text-gray-600">
            <p className="mb-8 text-base text-gray-600">
              At the heart of our mission lies the Triple R philosophy:Reduce,
              Reuse, and Recycle — a vision where every step we take today
              builds a brighter, cleaner tomorrow. Through innovation and care,
              we give new purpose to resources, shaping a world where nothing is
              wasted and everything has value.
            </p>

            <div className="flex space-x-4 text-gray-500">
              <a
                href="https://www.facebook.com/profile.php?id=61571117470897&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={contactIconsClasses}
              >
                <Facebook size={28} />
              </a>
              <a
                href="https://www.instagram.com/triplerrecyclinglimited?igsh=eHE0aDRpeXI3YTJ2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={contactIconsClasses}
              >
                <Instagram size={28} />
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter (X)"
                className={contactIconsClasses}
              >
                <Twitter size={28} />
              </a>
              <a
                href="https://www.linkedin.com/company/triple-r-recycling-limited/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={contactIconsClasses}
              >
                <Linkedin size={28} />
              </a>

              <a
                href="https://www.tiktok.com/@triple.r.recyling?_t=ZM-8tQ8GUFLsuL&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className={contactIconsClasses}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-7 h-7"
                >
                  <path d="M16.5 1.5h-3v13.25a2.75 2.75 0 1 1-2.75-2.75V8.5a6.5 6.5 0 1 0 6.5 6.5V8.129a7.285 7.285 0 0 0 3.75 1.121V6.25a4.75 4.75 0 0 1-4.75-4.75Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <img
            src={aboutBannerImage}
            alt="Plastic collection Sample"
            className="rounded-2xl w-full object-cover h-72 md:h-96"
          />
        </div>
        <TripleRHistory />
        <Mission />
      </div>
      <Founder />
      <Partners />
      <OurGallery />
    </>
  );
};

export default AboutPage;
