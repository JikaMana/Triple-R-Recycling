import React from "react";
import Hero from "../components/home/Hero";
import Collectibles from "../components/home/Collectibles";
import whoWeAre from "../assets/images/home/whoWeAre.jpeg";
import ecoFriendlyCity from "../assets/images/home/tripleR-eco-friendly-city.webp";
import StandOut from "../components/home/StandOut";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Triple R Recycling Limited</title>
      </Helmet>
      <Hero />
      <div className="bg-white text-gray-800 font-sans">
        <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-green-800 mb-4">
              Building a Cleaner Future with Triple R
            </h1>
            <p className="text-lg text-gray-600">
              At Triple R Recycling, we’re committed to sustainable practices
              that transform waste into value. With innovative processes and a
              passionate team, we’re redefining recycling in Africa.
            </p>
            <button className="mt-6 bg-green-700 text-white py-3 px-6 rounded-lg shadow hover:bg-green-800 transition">
              Learn More
            </button>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img
              src={ecoFriendlyCity}
              alt="Sustainable city concept"
              className="w-full h-full object-cover filter brightness-50"
            />
          </div>
        </section>

        <section className=" py-12">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-gray-100 p-6 rounded-lg shadow max-w-64">
              <h3 className="text-3xl font-bold text-green-700">500+</h3>
              <p className="text-gray-600 mt-2">
                Bales processed for eco-conscious partners
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow max-w-64">
              <h3 className="text-3xl font-bold text-green-700">80%</h3>
              <p className="text-gray-600 mt-2">
                Energy-efficient machinery usage
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow max-w-64">
              <h3 className="text-3xl font-bold text-green-700">300kg+</h3>
              <p className="text-gray-600 mt-2">
                Each bale weighs over 300kg — no compromise on capacity
              </p>
            </div>
          </div>
        </section>
      </div>
      <StandOut />
      <Collectibles />
      <section className="bg-gray-50">
        <div
          style={{
            backgroundImage: `url(${whoWeAre})`,
          }}
          className="h-[30vh] md:h-[40vh] lg:h-[50vh] xl:h-[60vh] w-full bg-cover bg-no-repeat bg-center grid items-center "
        >
          <div className="max-w-[1280px] ml-8 sm:ml-12 md:ml-20 lg:ml-28 xl:ml-36">
            <div className="text-white px-4 max-w-[30rem] lg:max-w-[40rem]">
              <h3 className="uppercase text-sm tracking-widest mb-2 text-green-600 font-semibold">
                \ our process
              </h3>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-6">
                Efficient Plastic Recycling. Free Disposal. A Cleaner{" "}
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
{
  /* === Our Team in Action === */
}
{
  /* <section className="py-16 px-6 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-green-800 mb-4">
            Our Team in Action
          </h2>
          <p className="text-center text-xl text-gray-600 mb-8">
            70% of our workforce is proudly made up of women.
          </p>

          <div className="aspect-[4/4] w-full max-w-4xl mx-auto rounded-xl overflow-hidden">
            <img
              src="/images/workers-in-action.jpg"
              alt="Triple R Operation Video"
              className="w-full h-full object-cover"
            />
          </div>
        </section> */
}
