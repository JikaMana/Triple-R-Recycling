import React from "react";

const TripleRHistory = () => {
  return (
    <div>
      <div className="my-8 grid md:grid-cols-2 gap-6">
        <div className="bg-green-50 rounded-2xl p-6">
          <h3 className="text-2xl font-bold mb-2">Our history</h3>
          <p className="text-lg text-gray-600">
            Since our founding, we have been pioneers in embracing the
            principles of Reduce, Reuse, and Recycle. What began as a small
            initiative has grown into a movement, transforming waste into
            valuable resources and inspiring communities to build a more
            sustainable future.
          </p>
        </div>

        <div className="flex gap-4 w-full h-max">
          <div className="bg-green-700 text-gray-200 rounded-2xl p-6 text-center w-full">
            <h4 className="text-3xl font-bold">2024</h4>
            <p className="text-xl mt-1 font-medium">Founding year</p>
          </div>

          <div className="bg-green-800 text-gray-200 rounded-2xl p-6 text-center w-full">
            <h4 className="text-3xl font-bold">Abuja</h4>
            <p className="text-xl mt-1 font-medium">Location</p>
          </div>
        </div>
      </div>
      <div className="md:px-12">
        <h2 className="text-3xl md:text-3xl mb-4 font-bold text-gray-900 leading-tight">
          Our Story
        </h2>
        <h3 className="text-lg md:text-xl lg:text-2xl">
          Triple R Recycling Limited has achieved significant milestones in its
          recycling operations. On March 24, 2025, the company recorded its
          highest single-day collection of PET plastic bottles since commencing
          operations. This achievement reflects the increasing efficiency of our
          collection network, the growing participation of communities, and the
          rising demand for responsible waste management solutions. It also
          demonstrates our capacity to scale operations while advancing our
          mission of reducing plastic pollution and promoting a circular
          economy.
        </h3>
      </div>
    </div>
  );
};

export default TripleRHistory;
