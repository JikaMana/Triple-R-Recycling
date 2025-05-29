import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Video } from "lucide-react";
import heroImage from "../../assets/images/home/hero.webp";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
      className="h-[85vh] sm:h-screen bg-cover bg-no-repeat bg-center grid items-center"
      loading="lazy"
    >
      <div className="max-w-[1280px]">
        <div className="text-white px-4 max-w-[49rem] xl:mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="uppercase text-sm tracking-widest mb-2 text-green-300 font-semibold">
              Reducing, Reusing, Recycling
            </h3>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-4 md:mb-6">
              <motion.div
                initial={{ opacity: 0, x: 500 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Efficient Plastic Recycling. <br />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -180 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <span>Free Disposal. A Cleaner, </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 500 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <span className="text-green-500">
                  <Typewriter
                    words={[
                      "Greener",
                      "Smarter",
                      "Sustainable",
                      "Brighter",
                      "Plastic-Free",
                      "Eco-Friendly",
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={120}
                    deleteSpeed={80}
                    delaySpeed={2000}
                  />
                </span>{" "}
                Tomorrow.{" "}
              </motion.div>
            </h2>

            <div className="flex flex-col min-[360px]:flex-row sm:items-center gap-4">
              <Link
                to="https://youtu.be/Q9V7mSXIy20?si=az5-5urgdcISfxKv"
                target="_blank"
                rel="noopener noreferrer"
                className="w-max inline-flex items-center gap-2 px-5 md:px-7 py-3 text-white bg-green-800 hover:bg-green-600 font-semibold rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <Video size={20} className="shrink-0" />
                <span className="whitespace-nowrap">Take a Tour</span>
              </Link>

              <Link
                to="/service"
                className="w-max inline-flex items-center gap-2 px-5 md:px-7 py-3 text-white bg-transparent hover:bg-green-800 font-semibold rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <span className="whitespace-nowrap">Learn More</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
