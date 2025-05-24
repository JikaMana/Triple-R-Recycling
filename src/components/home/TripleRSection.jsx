import React from "react";
import { motion } from "framer-motion";
import { Recycle, Ban, Repeat } from "lucide-react";

const TripleRSection = () => {
  const data = [
    {
      title: "Recycle",
      icon: <Recycle className="w-8 sm:w-12 h-8 sm:h-12 text-green-500" />,
      description:
        "Collects, sorts, and processes waste into new products like furniture and fabrics.",
      bgColor: "bg-gray-200",
    },
    {
      title: "Reduce",
      icon: <Ban className="w-8 sm:w-12 h-8 sm:h-12 text-red-600" />,
      description:
        "Minimizes single-use plastics through reusable alternatives and awareness.",
      bgColor: "bg-gray-200",
    },
    {
      title: "Reuse",
      icon: <Repeat className="w-8 sm:w-12 h-8 sm:h-12 text-yellow-600" />,
      description:
        "Extends plastic life by repurposing items like containers and bottles.",
      bgColor: "bg-gray-200",
    },
  ];

  return (
    <div className="py-4 px-6 md:px-10">
      <div className="text-center mb-4 md:mb-12">
        <h1 className="text-4xl font-extrabold text-white mb-2">
          🔁 The 3 R's Explained
        </h1>
        <p className="text-gray-200 text-lg">
          Our approach to building a cleaner planet
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 max-w-6xl mx-auto">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`rounded-2xl shadow-xl p-8 ${item.bgColor}`}
          >
            <div className="flex items-center justify-center mb-4">
              {item.icon}
            </div>
            <h2 className="text-2xl font-bold text-center mb-2 text-gray-900">
              {item.title}
            </h2>
            <p className="text-gray-900 text-base text-center">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TripleRSection;
