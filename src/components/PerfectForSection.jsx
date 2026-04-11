import { Users, Heart, Building2, MapPin } from 'lucide-react';

export default function PerfectForSection() {
  const perfectFor = [
    {
      icon: Users,
      title: "Family Trips",
      description: "Perfect for creating lasting memories with family"
    },
    {
      icon: Heart,
      title: "Weddings",
      description: "Luxury travel for special occasions"
    },
    {
      icon: Building2,
      title: "Corporate Travel",
      description: "Professional transport for business events"
    },
    {
      icon: MapPin,
      title: "Outstation Trips",
      description: "Comfortable long-distance journey"
    }
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Perfect For
          </h2>
          <p className="text-xl text-gray-600">
            Whatever your travel need, we have the right solution
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perfectFor.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-shadow border-2 border-blue-100"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon size={32} className="text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
