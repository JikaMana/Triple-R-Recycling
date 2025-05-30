import React from "react";

const PickupForm = () => {
  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl lg:text-3xl font-bold text-green-700 mb-4">
        Schedule a Pickup
      </h2>
      <p className="text-sm md:text-lg text-gray-500 mb-6">
        Kindly note that pickups are currently available{" "}
        <span className="font-medium triplerrecyclingltdtext-green-700">
          within the FCT (Abuja)
        </span>{" "}
        only.
      </p>

      <form
        // action="https://formsubmit.co/el/xuvime" //triple own
        action="https://formsubmit.co/el/mutabi"
        method="POST"
        className="space-y-4"
      >
        <input
          type="hidden"
          name="_next"
          value="https://triplerrecyclingltd.netlify.app/success?type=pickup"
        />
        <input type="hidden" name="_subject" value="New Pickup Request" />
        <input type="hidden" name="_captcha" value="false" />

        <input
          type="text"
          name="Full Name"
          placeholder="Full Name"
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <input
          type="email"
          name="Email"
          placeholder="Email Address"
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <input
          type="tel"
          name="Phone Number"
          placeholder="Phone Number"
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <textarea
          name="Address"
          placeholder="Pickup Address (FCT only)"
          rows={3}
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <div className="flex space-x-4">
          <input
            type="date"
            name="Date"
            className="w-1/2 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            type="time"
            name="Time"
            className="w-1/2 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        <textarea
          name="Extra Notes"
          placeholder="Additional Notes (e.g Explain Address better or anything)"
          rows={2}
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md font-semibold transition"
        >
          Schedule Pickup
        </button>
      </form>
    </div>
  );
};

export default PickupForm;
