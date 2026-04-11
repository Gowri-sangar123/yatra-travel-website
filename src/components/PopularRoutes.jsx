import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { popularRoutes } from '../data/routes';

export default function PopularRoutes() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Popular Routes
          </h2>
          <p className="text-xl text-gray-600">
            Explore our most requested travel destinations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularRoutes.map((route) => (
            <div
              key={route.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden bg-gray-200">
                <img
                  src={route.image}
                  alt={`${route.from} to ${route.to}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin size={20} className="text-blue-600" />
                    <span className="font-bold text-gray-900">{route.from}</span>
                  </div>
                  <ArrowRight size={20} className="text-blue-600" />
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-900">{route.to}</span>
                    <MapPin size={20} className="text-blue-600" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-200">
                  <div>
                    <div className="text-sm text-gray-600">Distance</div>
                    <div className="font-bold text-gray-900">{route.distance}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={18} className="text-blue-600" />
                    <div>
                      <div className="text-sm text-gray-600">Duration</div>
                      <div className="font-bold text-gray-900">{route.duration}</div>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors">
                  Book This Route
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
