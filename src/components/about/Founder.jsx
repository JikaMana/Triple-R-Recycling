import React from "react";
import FounderPicture from "../../assets/images/about/triple-r-founder-ceo.webp";
import {
  Brain,
  Heart,
  Lightbulb,
  Linkedin,
  Mail,
  ShieldCheck,
  Twitter,
} from "lucide-react";

const Founder = () => {
  return (
    <div className=" bg-green-50 py-12 mt-8">
      <h2 className="text-3xl px-6 text-center md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
        Our Founder
      </h2>
      <div className="mt-8 px-6 grid md:grid-cols-2 items-center gap-6 max-w-[1440px]">
        <div className="bg-green-900 rounded-2xl overflow-hidden max-w-96 mx-auto ">
          <img
            src={FounderPicture}
            className="w-full"
            alt="Triple R Recycling CEO"
          />

          <div className="py-6 px-4">
            <h3 className="font-bold text-gray-200">
              Abdullahi Suleiman Ezhin
            </h3>
            <p className="text-lg text-gray-200">Chief Executive Officer</p>
            <div className="flex">
              <a
                href="https://www.linkedin.com/in/abdullahi-suleiman-60851a203"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition text-gray-200 p-2 rounded-full"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="mailto:abdulsuleiman133@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter (X)"
                className="transition text-gray-200 p-2 rounded-full"
              >
                <Mail size={28} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex gap-4 w-full h-max">
          <p className="text-xl lg:text-2xl text-gray-900 leading-7 lg:leading-9">
            As a young Nigerian passionate about environmental sustainability, I
            started Triple R Recycling after seeing the enormous plastic waste
            polluting our streets and waterways—especially in communities with
            little or no access to proper waste management. I realized that many
            people wanted to do the right thing but lacked the means or
            motivation. So, I created Triple R to change that
            narrative—Rewarding people for doing the right thing. We’re not just
            cleaning up the environment; we’re creating jobs, educating the
            public, and building a circular economy that works for everyone.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 sm:px-12 lg:px-24 py-12 rounded-3xl">
        <div className="flex lg:flex-col items-center gap-4 p-6 bg-white rounded-2xl shadow-sm">
          <Lightbulb className="w-12 h-12 text-green-800" />
          <div>
            <h3 className="text-lg font-bold text-gray-800 whitespace-nowrap lg:text-center">
              Visionary
            </h3>
            <p className="mt-2 text-gray-600 lg:text-center ">
              Sees beyond today to shape a brighter future for the company.
            </p>
          </div>
        </div>

        <div className="flex lg:flex-col lg:items-center gap-4 p-6 bg-white rounded-2xl shadow-sm">
          <ShieldCheck className="w-12 h-12 text-green-800 " />
          <div>
            <h3 className="text-lg font-bold text-gray-800 whitespace-nowrap lg:text-center">
              Resilient
            </h3>
            <p className="mt-2 text-gray-600 lg:text-center ">
              Turns challenges into opportunities for growth.
            </p>
          </div>
        </div>

        <div className="flex lg:flex-col lg:items-center gap-4 p-6 bg-white rounded-2xl shadow-sm">
          <Heart className="w-12 h-12 text-green-800" />
          <div>
            <h3 className="text-lg font-bold text-gray-800 whitespace-nowrap lg:text-center">
              Empathetic Leader
            </h3>
            <p className="mt-2 text-gray-600 lg:text-center ">
              Listens actively and leads with compassion and understanding.
            </p>
          </div>
        </div>

        <div className="flex lg:flex-col lg:items-center gap-4 p-6 bg-white rounded-2xl shadow-sm">
          <Brain className="w-12 h-12 text-green-800" />
          <div>
            <h3 className="text-lg font-bold text-gray-800 whitespace-nowrap lg:text-center">
              Strategic Thinker
            </h3>
            <p className="mt-2 text-gray-600 lg:text-center ">
              Plans and executes with precision for sustainable success.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-green-800 text-2xl font-medium text-center my-4">
          Wealth from Waste: Unlocking Opportunities in Recycling and the
          Circular Economy
        </h2>
        <div className="aspect-video rounded-xl overflow-hidden shadow-lg ">
          <iframe
            src="https://www.youtube.com/embed/_Rry9RWGE0c?si=LkeRq2sBhRB-sctE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Founder;
