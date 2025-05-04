import React from "react";
import RecycleImage from "../../assets/images/about/recycleImage.avif";

const Mission = () => {
  return (
    <div>
      <button className="mt-24 inline-flex items-center gap-2 px-6 py-3 bg-green-800 text-white font-medium rounded-full shadow-lg transition-all duration-300">
        Our Mission
      </button>
      <h2 className="text-3xl md:text-5xl my-4 lg:text-6xl font-bold text-gray-900 leading-tight">
        Better Recycling, Better Future
      </h2>
      <div className="flex flex-col md:flex-row gap-4 items-stretch">
        <div className="flex-1">
          <div className="h-full">
            <img
              src={RecycleImage}
              alt="Recycle image"
              className="rounded-3xl w-full h-full object-cover"
            />
          </div>
        </div>
        <p className="text-base text-gray-600 bg-green-50 rounded-3xl p-6 flex-1 h-fit my-auto flex items-center">
          At Triple R Limited, our mission is rooted in the belief that
          sustainability is not just a choice—it is a responsibility. Since our
          inception, we have been dedicated to advancing the principles of
          Reduce, Reuse, and Recycle, transforming waste into valuable resources
          and driving positive change across industries and communities. We
          believe that every material has a second life and that innovation can
          unlock new opportunities for a cleaner, greener world. Through
          cutting-edge technologies, strong partnerships, and a relentless
          passion for environmental stewardship, we continue to inspire action,
          reduce our collective footprint, and build a future where waste is no
          longer a problem but a powerful resource. At Triple R Limited,
          sustainability isn't a trend—it's our commitment to generations to
          come.
        </p>
      </div>
    </div>
  );
};

export default Mission;
