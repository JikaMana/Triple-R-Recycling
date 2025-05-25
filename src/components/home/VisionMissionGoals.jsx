import { ShieldCheck, Target, Globe, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import GreenTruck from "../../assets/images/home/tripleR-green-truck.webp";

const points = [
  {
    icon: <Globe className="text-gray-100 w-8 h-8" />,
    title: "Our Vision",
    description:
      "To build a cleaner, healthier, and more sustainable environment in Nigeria by revolutionizing waste management through innovative recycling solutions and active community engagement.",
  },
  {
    icon: <Target className="text-gray-100 w-8 h-8" />,
    title: "Our Mission",
    description:
      "To reduce plastic pollution by providing convenient, rewarding, and eco-friendly recycling services, while empowering communities and creating green jobs through circular economy practices.",
  },
  {
    icon: <ShieldCheck className="text-gray-100 w-8 h-8" />,
    title: "Our Goals",
    description:
      "• Reduce plastic waste in Abuja and beyond.\n• Expand across Nigeria within 5 years.\n• Create jobs for youth and women.\n• Raise public awareness and promote sustainability.\n• Collaborate with key stakeholders for impact.",
  },
];

export default function VisionMissionGoals() {
  return (
    <section className="flex bg-white py-12 px-4 md:px-10 lg:px-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        {" "}
        <div className="space-y-6 max-w-full bg-gray-50 rounded-2xl p-8 shadow-md sm:mr-48">
          <div className="">
            {points.map((point, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-green-700 rounded-full p-2 z-10">
                  {point.icon}
                </div>
                <div className="mt-2 border-l-4 border-green-700 pl-8 relative right-6">
                  <h3 className="text-xl md:text-2xl mb-2 font-semibold text-gray-800">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 whitespace-pre-line">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Link
            to="/about"
            className="flex mt-4 bg-green-700 hover:bg-green-600 text-white px-6 py-3 w-max rounded-full transition"
          >
            <p className="text-sm sm:text-base font-medium">Learn More</p>
            <ArrowUpRight className="w-4 h-4 sm:w-6 sm:h-6" />
          </Link>
        </div>
        {/* Right Column - Image */}
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            bounce: 0.7, // strong but not excessive
            duration: 1, // enough time for a single bounce
          }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="hidden sm:flex justify-center absolute right-0 bottom-1/2 -translate-x-1/4 lg:-translate-x-1/2 translate-y-1/2 z-10">
            <img
              src={GreenTruck}
              alt="Triple R Truck"
              className="max-w-full min-w-[225px] h-auto object-contain"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
