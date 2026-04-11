import { Star, Users, Wind, Music } from 'lucide-react';

export default function VehicleCard({ vehicle }) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105 group">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gray-200">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          ₹{vehicle.pricePerKm}/KM
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {vehicle.name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4">
          {vehicle.description}
        </p>

        {/* Capacity and Rating */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Users size={18} className="text-blue-600" />
            <span className="text-gray-700 font-medium">{vehicle.capacity} Seater</span>
          </div>
          <div className="flex items-center gap-1">
            <Star size={18} className="text-yellow-400 fill-yellow-400" />
            <span className="text-gray-700 font-medium">{vehicle.rating}</span>
            <span className="text-gray-500 text-sm">({vehicle.reviews})</span>
          </div>
        </div>

        {/* Features */}
        <div className="mb-6">
          <div className="text-sm font-semibold text-gray-700 mb-2">Features:</div>
          <div className="flex flex-wrap gap-2">
            {vehicle.features.map((feature, idx) => (
              <span
                key={idx}
                className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-lg transition-colors">
            View Details
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
