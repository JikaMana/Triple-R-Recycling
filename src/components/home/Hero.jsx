import React from "react";
import { ArrowUpRight, Video } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import heroImage from "../../assets/images/home/heroTest.jpeg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
      className="h-[85vh] sm:h-screen bg-cover bg-no-repeat bg-center grid items-center "
    >
      <div className="max-w-[1280px]">
        <div className="text-white px-4 max-w-[49rem] xl:mx-auto">
          <h3 className="uppercase text-sm tracking-widest mb-2 text-green-300 font-semibold">
            Reducing, Reusing, Recycling
          </h3>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-4 md:mb-6">
            Efficient Plastic Recycling. <br />
            Free Disposal. A Cleaner,{" "}
            <span className="text-green-400">
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
            Tomorrow.
          </h2>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <Link
              to="https://youtu.be/Q9V7mSXIy20?si=az5-5urgdcISfxKv"
              target="_blank"
              className="inline-flex items-center gap-2 px-4 md:px-6 py-3  w-max hover:cursor-pointer md:text-lg text-white bg-green-800 hover:bg-green-600 font-medium rounded-full shadow-lg transition-all duration-300"
            >
              <Video size={24} /> Take a tour
            </Link>
            <button className="inline-flex items-center gap-2 px-4 md:px-6 py-3  w-max hover:cursor-pointer md:text-lg bg-green-800 hover:bg-green-700 text-white font-medium rounded-full shadow-lg transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
