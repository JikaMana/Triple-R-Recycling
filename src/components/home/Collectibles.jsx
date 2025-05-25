import { motion } from "framer-motion";

import {
  Wine,
  Beer,
  FileStack,
  Box,
  MonitorSmartphone,
  Shirt,
  Droplets,
  Sofa,
  Book,
} from "lucide-react";
import PetBottle from "../../assets/images/home/tripleR_pet_containers.webp";
import Nylon from "../../assets/images/home/tripleR-nylon.webp";
import AluminiumCan from "../../assets/images/home/tripleR-aluminium-can.webp";
import PlasticFurniture from "../../assets/images/home/tripleR-plastic-furniture.webp";
import SachetWater from "../../assets/images/home/tripleR-sachet-water.webp";
import PlasticContainer from "../../assets/images/home/tripleR-plastic-container.webp";
import PlasticBucket from "../../assets/images/home/tripleR_plastic_bucket.webp";
import PlasticBowl from "../../assets/images/home/tripleR_plastic_bowl.webp";

export default function Collectibles() {
  const items = [
    {
      icon: PetBottle,
      title: "PET Plastic Bottles",
    },
    {
      icon: PlasticContainer,
      title: "Plastic Containers",
    },

    {
      icon: SachetWater,
      title: "Pure Water Sachets",
    },
    {
      icon: PlasticBucket,
      title: "Plastic Buckets",
    },
    {
      icon: PlasticBowl,
      title: "Plastic Bowls",
    },
    {
      icon: PlasticFurniture,
      title: "Plastic Furniture",
    },
    {
      icon: Nylon,
      title: "Nylon Bags",
    },
    {
      icon: AluminiumCan,
      title: "Aluminum Cans",
    },
  ];

  return (
    <section className="py-8 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 md:mb-12 text-gray-800">
          ♻️ Collectibles for a Sustainable Future
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded-3xl cursor-pointer shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className="p-4 rounded-full mb-4 max-h-52 h-full grid place-items-center">
                <img src={item.icon} alt={item.title} />
              </div>
              <h3 className="text-center text-lg font-semibold text-gray-700 sm:whitespace-nowrap">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
