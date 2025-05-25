import React from "react";
import Workers1 from "../../assets/images/about/tripleR-workers1.jpeg";

import Workers2 from "../../assets/images/about/tripleR-workers2.jpeg";
import Workers3 from "../../assets/images/about/tripleR-workers3.jpeg";
import Workers4 from "../../assets/images/about/tripleR-workers4.jpeg";
import Workers5 from "../../assets/images/about/tripleR-workers5.jpeg";
import WorkersInAction from "../../assets/images/about/WorkersInAction.jpeg";

const OurGallery = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      <h2 className="text-3xl lg:text-4xl font-bold text-center text-green-800">
        Meet TripleR Team
      </h2>
      <ul>
        <li>
          <p className="text-center text-xl text-gray-600">
            70% of our workforce is proudly made up of women.
          </p>
        </li>
        <li>
          <p className="text-center text-xl text-gray-600 mb-8 mt-2">
            Each of our tightly packed bales weighs over{" "}
            <span className="font-semibold text-gray-700">300kg</span> — a true
            testament to the volume of impact we're making in recycling.
          </p>
        </li>
      </ul>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
        {/* Highlighted Landscape Image */}
        <div className="md:col-span-3 md:aspect-[20/6]">
          <img
            src={Workers5}
            alt="TripleR Workers"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        {/* Portrait Images */}
        <div className="aspect-[4/4]">
          <img
            src={Workers3}
            alt="TripleR Workers"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="md:col-span-2 aspect-[4/4] md:aspect-[10/5]">
          <img
            src={Workers2}
            alt="TripleR Workers"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="aspect-[4/4]">
          <img
            src={Workers4}
            alt="TripleR Workers"
            className="w-full h-full object-cover rounded-xl "
          />
        </div>{" "}
        <div className="aspect-[4/4]">
          <img
            src={Workers1}
            alt="TripleR Workers"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>{" "}
        <div className="aspect-[4/4]">
          <img
            src={WorkersInAction}
            alt="TripleR Workers"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>{" "}
      </div>
    </div>
  );
};

export default OurGallery;
