import React from "react";
import { motion } from "framer-motion";
import whoWeAre from "../../assets/images/home/tripleR-whoWeAre.webp";
import TripleRSection from "../../components/home/TripleRSection";

const OurProcess = () => {
  return (
    <section className="bg-gray-50">
      <div
        style={{
          backgroundImage: `url(${whoWeAre})`,
        }}
        className=" w-full py-12 md:py-16 bg-cover bg-no-repeat bg-center grid items-center "
      >
        {/* h-[30vh] md:h-[40vh] lg:h-[50vh] xl:h-[60vh] */}
        <div className="max-w-[1280px] mx-auto px-8 sm:px-12 md:px-20 lg:px-28 xl:px-36">
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              bounce: 0.7, // strong but not excessive
              duration: 1, // enough time for a single bounce
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="text-white px-4">
              <h3 className="uppercase text-sm tracking-widest mb-2 text-green-600 font-semibold">
                \ our process
              </h3>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold leading-tight">
                Efficient Plastic Recycling. Free Disposal.
              </h2>
            </div>
            <TripleRSection />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
