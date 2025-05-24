import React, { useState } from "react";
import {
  CalendarPlus,
  HandCoins,
  CheckSquare,
  Recycle,
  Factory,
  Users,
  ArrowRight,
} from "lucide-react";
import Modal from "../../components/Modal";
import PickupForm from "../PickupForm";

const steps = [
  {
    icon: CalendarPlus,
    title: "Schedule & Collect",
    description:
      "Use our simple App or Website to schedule a convenient pickup time. Our team collects your plastic waste (PET bottles, sachets) right from your doorstep!",
  },
  {
    icon: HandCoins,
    title: "Get Rewarded",
    description:
      "Earn instant rewards (cash or points) for every kilogram of plastic you recycle with us. Track your earnings easily through your account.",
  },
  {
    icon: CheckSquare,
    title: "Sort & Aggregate",
    description:
      "Collected plastics arrive at our local hub where they are meticulously weighed and sorted by type (PET, sachets, etc.) to ensure quality.",
  },
  {
    icon: Recycle,
    title: "Process for Reuse",
    description:
      "Sorted plastics are thoroughly cleaned, shredded, and processed into high-quality flakes or pellets – ready for their next life.",
  },
  {
    icon: Factory,
    title: "Supply to Manufacturers",
    description:
      "We supply these valuable recycled materials to Nigerian industries, reducing waste and boosting the local circular economy.",
  },
  {
    icon: Users,
    title: "Empower Communities",
    description:
      "Beyond recycling, we create green jobs (especially for youth & women) and educate communities on sustainable practices. Your recycling makes a difference!",
  },
];

const HowItWorks = () => {
  const iconColor = "text-green-700";
  const bgColor = "bg-slate-50";
  const buttonBgColor = "bg-green-700";
  const buttonHoverBgColor = "hover:bg-green-800";
  const [open, setOpen] = useState(false);

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      {" "}
      {/* Section background */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 md:mb-16">
          How It Works
        </h2>
        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`${bgColor} p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center`}
            >
              <div className={`mb-4 p-3 rounded-full bg-green-100`}>
                {" "}
                {/* Optional: contrasting bg circle for icon */}
                <step.icon
                  className={`${iconColor} h-10 w-10`}
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Optional Call to Action Button */}
        <div className="text-center mt-12 md:mt-16">
          <button
            onClick={() => setOpen(true)}
            className={`${buttonBgColor} ${buttonHoverBgColor} cursor-pointer text-white font-medium py-3 px-8 rounded-full transition-colors duration-300 inline-flex items-center shadow-lg hover:shadow-none`}
          >
            Schedule Your First Pickup
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <Modal isOpen={open} onClose={() => setOpen(false)}>
            <PickupForm />
          </Modal>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
