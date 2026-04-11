import {
  Zap,
  Users,
  DollarSign,
  Phone,
  Shield,
  Clock,
  MapPin,
  Smile
} from 'lucide-react';

export default function FeaturesGrid() {
  const features = [
    {
      icon: Zap,
      title: "Sanitized Vehicles",
      description: "All vehicles are thoroughly sanitized and cleaned after each trip"
    },
    {
      icon: Users,
      title: "Professional Drivers",
      description: "Experienced, courteous drivers trained in road safety"
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description: "Competitive rates with transparent billing and no hidden charges"
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your queries"
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Comprehensive insurance coverage and safety equipment"
    },
    {
      icon: Clock,
      title: "On-Time Service",
      description: "Punctual pickup and drop-off with real-time tracking"
    },
    {
      icon: MapPin,
      title: "Flexible Routes",
      description: "Customizable itineraries for your perfect journey"
    },
    {
      icon: Smile,
      title: "Customer Satisfaction",
      description: "Trusted by 500+ happy customers with 4.5+ ratings"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-600">
            Experience excellence with our premium Tempo Traveller rental service
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={28} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
