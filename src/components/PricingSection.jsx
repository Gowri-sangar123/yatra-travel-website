import { Check } from 'lucide-react';
import { pricingOptions, discounts } from '../data/pricing';

export default function PricingSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Choose the perfect vehicle for your budget
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {pricingOptions.map((option, idx) => (
            <div
              key={idx}
              className={`rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 ${
                option.popular
                  ? 'ring-2 ring-blue-600 lg:scale-105 bg-blue-50'
                  : 'bg-white'
              }`}
            >
              {option.popular && (
                <div className="bg-blue-600 text-white py-2 text-center font-bold text-sm">
                  MOST POPULAR
                </div>
              )}
              <div className="p-8">
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  {option.vehicleType}
                </div>
                <div className="text-gray-600 mb-4 text-sm">
                  Up to {option.capacity} Passengers
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-blue-600">
                    {option.pricePerKm}
                  </span>
                  <span className="text-gray-600 ml-2">per km</span>
                </div>
                <div className="border-t border-b border-gray-200 py-6 mb-6">
                  <div className="text-sm font-semibold text-gray-700 mb-3">
                    Includes:
                  </div>
                  {option.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3 mb-2">
                      <Check size={20} className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <button
                  className={`w-full py-3 rounded-lg font-bold transition-colors ${
                    option.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Discounts Section */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Distance-Based Discounts
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {discounts.map((discount, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 text-center">
                <div className="text-gray-700 font-semibold mb-2">
                  {discount.distance}
                </div>
                <div className="text-3xl font-bold text-blue-600">
                  {discount.discount}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
