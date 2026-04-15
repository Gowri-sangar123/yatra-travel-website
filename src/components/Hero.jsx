import { useState } from "react";
import { MapPin, Calendar, Users, Search } from "lucide-react";

export default function Hero() {
  const [formData, setFormData] = useState({
    pickup: "",
    dropoff: "",
    date: "",
    travelers: "4",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search initiated:", formData);
  };

  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1200&h=600&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Tempo Travellers in Chennai
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100">
            Best Deals on Tempo Traveller Rentals | Travel with Comfort & Trust
          </p>
          <p className="text-lg text-blue-100 mt-4 max-w-3xl mx-auto">
            Explore Chennai or go outstation with our premier Tempo Traveller
            rental services. Professional drivers, comfortable rides, and
            affordable pricing for your perfect trip.
          </p>
        </div>

        {/* Booking Search Box */}
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 sm:p-10 max-w-4xl mx-auto shadow-2xl">
          <form onSubmit={handleSearch}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {/* Pickup Location */}
              <div>
                <label className="block text-sm font-medium text-blue-100 mb-2">
                  Pickup Location
                </label>
                <div className="relative">
                  <MapPin
                    className="absolute left-3 top-3 text-white/60"
                    size={20}
                  />
                  <input
                    type="text"
                    name="pickup"
                    value={formData.pickup}
                    onChange={handleChange}
                    placeholder="Enter city"
                    className="w-full pl-10 pr-4 py-3 bg-white/90 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-500"
                  />
                </div>
              </div>

              {/* Dropoff Location */}
              <div>
                <label className="block text-sm font-medium text-blue-100 mb-2">
                  Drop Location
                </label>
                <div className="relative">
                  <MapPin
                    className="absolute left-3 top-3 text-white/60"
                    size={20}
                  />
                  <input
                    type="text"
                    name="dropoff"
                    value={formData.dropoff}
                    onChange={handleChange}
                    placeholder="Enter city"
                    className="w-full pl-10 pr-4 py-3 bg-white/90 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-500"
                  />
                </div>
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-medium text-blue-100 mb-2">
                  Travel Date
                </label>
                <div className="relative">
                  <Calendar
                    className="absolute left-3 top-3 text-white/60"
                    size={20}
                  />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/90 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>
              </div>

              {/* Traveler Count */}
              <div>
                <label className="block text-sm font-medium text-blue-100 mb-2">
                  Travelers
                </label>
                <div className="relative">
                  <Users
                    className="absolute left-3 top-3 text-white/60"
                    size={20}
                  />
                  <select
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/90 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    {[1, 2, 3, 4, 5, 6, 9, 12, 17, 20].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "Person" : "People"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Search Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-colors"
            >
              <Search size={22} />
              Search Vehicles
            </button>
          </form>
        </div>

        {/* Quick Info */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 text-center">
          <div>
            <div className="text-3xl font-bold">500+</div>
            <div className="text-blue-100">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold">6+</div>
            <div className="text-blue-100">Vehicle Types</div>
          </div>
          <div>
            <div className="text-3xl font-bold">24/7</div>
            <div className="text-blue-100">Customer Support</div>
          </div>
          <div>
            <div className="text-3xl font-bold">₹15</div>
            <div className="text-blue-100">Starting Price/KM</div>
          </div>
        </div>
      </div>
    </div>
  );
}
