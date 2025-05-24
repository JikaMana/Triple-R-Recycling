import { useState } from "react";

export default function PickupForm() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    address: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pickup scheduled successfully (FCT only)!");
    // Here you would typically send `form` to your backend
  };

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl lg:text-3xl font-bold text-green-700 mb-4">
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
          type="text"
          name="fullName"
          placeholder="Full Name"
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          value={form.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <textarea
          name="address"
          placeholder="Pickup Address (FCT only)"
          rows={3}
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          value={form.address}
          onChange={handleChange}
          required
        />
        <div className="flex space-x-4">
          <input
            type="date"
            name="date"
            className="w-1/2 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={form.date}
            onChange={handleChange}
            required
          />
          <input
            type="time"
            name="time"
            className="w-1/2 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={form.time}
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          name="notes"
          placeholder="Additional Notes (Optional)"
          rows={2}
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          value={form.notes}
          onChange={handleChange}
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
