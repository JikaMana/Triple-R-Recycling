import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
  Video,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-green-950 pt-8 lg:pt-12 pb-4">
      <div className="max-w-[90%] mx-auto">
        <div className="text-gray-200">
          <div className="flex flex-col md:flex-row gap-x-4 gap-y-8 justify-between">
            <div className="max-w-[400px]">
              <h3 className="text-xl font-semibold mb-4">About Us</h3>
              <p className="leading-relaxed">
                Triple R Recycling is a social enterprise committed to reducing
                plastic waste by rewarding individuals for recycling. Our
                mission is to create a cleaner, greener future.
              </p>
              <div className="rounded-2xl max-w-24 cursor-pointer">
                <img
                  src="/tripleR.svg"
                  alt="Wecyclers Logo"
                  className="w-full h-full rounded-2xl p-2"
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:text-green-800 transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-green-800 transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/service"
                    className="hover:text-green-800 transition"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-green-800 transition"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:text-green-800 transition">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Our Socials</h3>
                <div className="flex space-x-4 mb-8">
                  <Link
                    to="https://www.facebook.com/profile.php?id=61571117470897&mibextid=ZbWKwL"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="hover:text-green-800 transition"
                  >
                    <Facebook size={28} />
                  </Link>
                  <Link
                    to="https://www.instagram.com/triplerrecyclinglimited?igsh=eHE0aDRpeXI3YTJ2"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="hover:text-green-800 transition"
                  >
                    <Instagram size={28} />
                  </Link>
                  <Link
                    to="https://x.com/@TripleRRLtd"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter (X)"
                    className="hover:text-green-800 transition"
                  >
                    <Twitter size={28} />
                  </Link>
                  <Link
                    to="https://www.linkedin.com/company/triple-r-recycling-limited/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="hover:text-green-800 transition"
                  >
                    <Linkedin size={28} />
                  </Link>

                  <Link
                    to="https://www.tiktok.com/@triple.r.recyling?_t=ZM-8tQ8GUFLsuL&_r=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="hover:text-green-800 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-7 h-7"
                    >
                      <path d="M16.5 1.5h-3v13.25a2.75 2.75 0 1 1-2.75-2.75V8.5a6.5 6.5 0 1 0 6.5 6.5V8.129a7.285 7.285 0 0 0 3.75 1.121V6.25a4.75 4.75 0 0 1-4.75-4.75Z" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="flex gap-x-2 cursor-pointer">
                <h3 className="text-xl font-semibold mb-1">Mail Directly</h3>
                <Link to="mailto:triplerrecycling7@gmail.com">
                  <Mail />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <div className="text-gray-200 text-sm text-center">
          © {new Date().getFullYear()} TRIPLE R LIMITED. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
