import React from "react";
import ecoFriendlyCity from "../../assets/images/home/tripleR-eco-friendly-city.webp";
import { motion } from "framer-motion";
import VisionMissionGoals from "./VisionMissionGoals";

const EcoFriendly = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <section className="max-w-7xl mx-auto px-6 py-8 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: 280 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-green-800 mb-4">
              Building a Cleaner Future with Triple R
            </h1>
            <p className="text-lg text-gray-600">
              At Triple R Recycling, we’re committed to sustainable practices
              that transform waste into value. With innovative processes and a
              passionate team, we’re redefining recycling in Africa.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -280 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.0 }}
          className="hidden sm:block"
        >
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img
              src={ecoFriendlyCity}
              alt="Sustainable city concept"
              className="w-full h-full object-cover filter brightness-50"
            />
          </div>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto sm:pt-12 pb-6 flex flex-col lg:flex-row justify-center">
        <motion.div
          initial={{ opacity: 0, y: -400 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="max-w-5xl min-w-72 mx-auto px-6 flex flex-col sm:flex-row lg:flex-col justify-between h-full py-12 gap-6 text-center">
            <div className="bg-gray-100 p-6 rounded-lg shadow max-w-full sm:max-w-64">
              <h3 className="text-3xl font-bold text-green-700">1000+</h3>
              <p className="text-gray-600 mt-2">
                Bales processed for eco-conscious partners
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow max-w-full sm:max-w-64">
              <h3 className="text-3xl font-bold text-green-700">80%</h3>
              <p className="text-gray-600 mt-2">
                Energy-efficient machinery usage
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow max-w-full sm:max-w-64">
              <h3 className="text-3xl font-bold text-green-700">300kg+</h3>
              <p className="text-gray-600 mt-2">
                Each bale weighs over 300kg — no compromise on capacity
              </p>
            </div>
          </div>
        </motion.div>
        <VisionMissionGoals />
      </section>
    </div>
  );
};

export default EcoFriendly;
