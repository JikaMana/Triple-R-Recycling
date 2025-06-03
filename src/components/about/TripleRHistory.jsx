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
          Triple R Recycling Limited is a for-profit social enterprise based in
          Kuje, Abuja, Nigeria, established in 2024. The company focuses on
          collecting recyclables especially PET Bottles from households, public
          spaces, and the environment, aiming to drive positive social and
          environmental impact. Our operations are strategically located in
          low-income communities, helping to reduce diseases like malaria and
          typhoid, which are prevalent in these areas. Through initiatives like
          "trash for cash," we have been pivotal in creating jobs for vulnerable
          groups, especially women and youth, while also reducing pollution and
          erosion. In addition to our environmental efforts, Triple R Recycling
          Limited has achieved significant milestones in recycling operations.
          For instance, on March 24, 2025, they recorded their highest
          single-day collection of PET plastic bottles since starting their
          baling operations. This achievement underscores the growing efficiency
          of our collection, sorting, and baling processes, reflecting increased
          awareness and participation in recycling initiatives. Triple R
          Recycling Limited is open to partnerships and collaborations to
          further our mission of creating a cleaner and safer environment. We
          continue to provide effective waste management solutions and promote a
          circular economy in Nigeria.
        </h3>
      </div>
    </div>
  );
};

export default TripleRHistory;
