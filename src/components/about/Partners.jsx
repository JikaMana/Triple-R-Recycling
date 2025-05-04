import React from "react";
import greenCommunityImage from "../../assets/images/about/greenCommunity.webp";
import { Link } from "react-router-dom";
import weCyclers from "../../assets/images/about/tripleR-wecyclers.png";
import sajumahTableWater from "../../assets/images/about/tripleR-sajumahTW.webp";

const Partners = () => {
  return (
    <div className=" max-w-7xl mx-auto px-6 py-12 my-8">
      <div className="flex flex-col md:flex-row gap-8 items-stretch">
        <div className="flex-[0.5]">
          <div className="h-full">
            <img
              src={greenCommunityImage}
              alt="Recycle image"
              className="rounded-3xl w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex-[0.5]">
          <div>
            <h2 className="text-2xl lg:text-4xl font-bold leading-tight mb-2">
              Making a Difference Together
            </h2>
            <h3 className="text-lg mb-2">
              Through our community partnerships and educational initiatives,
              we're creating lasting change in Nigeria. Join us in our mission
              to build a sustainable future.
            </h3>
          </div>
          <div className="flex flex-wrap gap-4 justify-evenly mt-8">
            <div className=" bg-gray-100 rounded-2xl max-w-24 cursor-pointer">
              <img
                src="/tripleRLogo.jpeg"
                alt="Wecyclers Logo"
                className="w-full h-full rounded-2xl border border-green-800 p-2 hover:scale-125 transition-all duration-300"
              />
            </div>
            <div className=" bg-gray-100 rounded-2xl max-w-24 cursor-pointer">
              <img
                src={weCyclers}
                alt="Wecyclers Logo"
                className="w-full h-full rounded-2xl border border-green-800 p-2 hover:scale-125 transition-all duration-300"
              />
            </div>
            <div className=" bg-gray-100 rounded-2xl max-w-24 cursor-pointer">
              <img
                src={sajumahTableWater}
                alt="Sajumah Table Water Logo"
                className="w-full h-full rounded-2xl border border-green-800 p-2 hover:scale-125 transition-all duration-300"
              />
            </div>

            {/* <div className=" bg-gray-100 rounded-2xl max-w-24 cursor-pointer">
              <img
                src="/tripleRLogo.jpeg"
                alt="Wecyclers Logo"
                className="w-full h-full rounded-2xl border border-green-800 p-2 hover:scale-125 transition-all duration-300"
              />
            </div> */}
          </div>
          <div className="bg-green-800 sm:px-4 p-2 rounded-full w-max mt-8 mx-auto hover:scale-105 transition-all duration-300">
            <Link to="/contact" className="flex text-white">
              <p className="text-sm sm:text-lg font-medium ">Partner with Us</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
