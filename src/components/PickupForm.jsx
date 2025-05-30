import { useState } from "react";

export default function PickupForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    // Log FormData contents
    for (let [key, value] of data.entries()) {
      console.log(`${key}: ${value}`);
    }

    try {
      const response = await fetch(
        "https://formsubmit.co/jikamana2000@gmail.com",
        {
          method: "POST",
          body: data,
        }
      );

      if (response.ok) {
        // Success
        setIsSubmitted(true);
        // window.location.href =
        //   "https://triplerrecyclingltd.netlify.app/success?type=pickup";
      } else {
        console.log("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.log("Error submitting form: " + error.message);
    }
  };
  return (
    <div>
      <h2 className="text-2xl lg:text-3xl font-bold text-green-700 my-4">
        Schedule a Pickup
      </h2>
      <p className="text-sm md:text-lg text-gray-500 mb-6">
        Kindly note that pickups are currently available{" "}
        <span className="font-medium text-green-700">
          within the FCT (Abuja)
        </span>{" "}
        only.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="hidden"
          name="_next"
          value="https://triplerrecyclingltd.netlify.app/success?type=pickup"
        />

        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input
          type="text"
          name="Name"
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
          name="Number"
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
          name="Notes"
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
}
