import React from "react";
import standOut from "../../assets/images/home/tripleR-stand-out-background.jpg";
import { Gift, Users, Cpu, Sparkles, BookOpenCheck } from "lucide-react";

const StandOut = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${standOut})` }}
    >
      <div className=" py-16 px-6 md:px-20">
        <h3 className="uppercase text-sm tracking-widest mb-2 text-green-600 font-semibold">
          \ Our Services
        </h3>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-12">
          What Makes Triple R Stand Out from the Rest
        </h2>
        {/* <div className="grid md:grid-cols-3 gap-8"> */}
        <div className="flex gap-8 overflow-scroll">
          {/* Incentive-Based Model */}
          <div className="bg-white min-w-72 sm:min-w-80 shadow-md rounded-xl p-6 border-t-4 border-green-600 relative">
            <div className="text-5xl text-green-600 font-bold opacity-30 absolute top-0 right-3 mt-2 ml-2">
              01
            </div>
            <div className="p-2 mb-4 bg-gray-100 w-max rounded-lg">
              <Gift size={48} color=" oklch(62.7% 0.194 149.214) " />
            </div>
            <h4 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-2 relative z-10">
              Incentive-Based Recycling
            </h4>
            <p className="text-gray-600 text-base leading-7 relative z-10">
              We reward individuals with cash or value in exchange for their
              plastic waste—motivating a recycling culture.
            </p>
          </div>

          {/* Community-Focused */}
          <div className="bg-white min-w-72 sm:min-w-80 shadow-md rounded-xl p-6 border-t-4 border-green-600 relative">
            <div className="text-5xl text-green-600 font-bold opacity-30 absolute top-0 right-3 mt-2 ml-2">
              02
            </div>
            <div className="p-2 mb-4 bg-gray-100 w-max rounded-lg">
              <Users size={48} color=" oklch(62.7% 0.194 149.214) " />
            </div>
            <h4 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-2 relative z-10">
              Community Focus
            </h4>
            <p className="text-gray-600 text-base leading-7 relative z-10">
              Triple R works within local communities—especially underserved
              areas—to make recycling inclusive and accessible.
            </p>
          </div>

          {/* Technology Integration */}
          <div className="bg-white min-w-72 sm:min-w-80 shadow-md rounded-xl p-6 border-t-4 border-green-600 relative">
            <div className="text-5xl text-green-600 font-bold opacity-30 absolute top-0 right-3 mt-2 ml-2">
              03
            </div>
            <div className="p-2 mb-4 bg-gray-100 w-max rounded-lg">
              <Cpu size={48} color=" oklch(62.7% 0.194 149.214) " />
            </div>
            <h4 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-2 relative z-10">
              Smart Tech Tracking
            </h4>
            <p className="text-gray-600 text-base leading-7 relative z-10">
              We use digital tools to track waste collection and distribute
              rewards—ensuring transparency and efficiency.
            </p>
          </div>

          {/* Youth-led Innovation */}
          <div className="bg-white min-w-72 sm:min-w-80 shadow-md rounded-xl p-6 border-t-4 border-green-600 relative">
            <div className="text-5xl text-green-600 font-bold opacity-30 absolute top-0 right-3 mt-2 ml-2">
              04
            </div>
            <div className="p-2 mb-4 bg-gray-100 w-max rounded-lg">
              <Sparkles size={48} color=" oklch(62.7% 0.194 149.214) " />
            </div>
            <h4 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-2 relative z-10">
              Youth-Led Innovation
            </h4>
            <p className="text-gray-600 text-base leading-7 relative z-10">
              As a youth-led initiative, we bring energy, relatability, and
              creativity to the recycling movement in Nigeria.
            </p>
          </div>

          {/* Environmental Education */}
          <div className="bg-white min-w-72 sm:min-w-80 shadow-md rounded-xl p-6 border-t-4 border-green-600 relative">
            <div className="text-5xl text-green-600 font-bold opacity-30 absolute top-0 right-3 mt-2 ml-2">
              05
            </div>
            <div className="p-2 mb-4 bg-gray-100 w-max rounded-lg">
              <BookOpenCheck size={48} color=" oklch(62.7% 0.194 149.214) " />
            </div>
            <h4 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-2 relative z-10">
              Environmental Education
            </h4>
            <p className="text-gray-600 text-base leading-7 relative z-10">
              Through school programs, media, and community events, we raise
              awareness on climate action and waste management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StandOut;
