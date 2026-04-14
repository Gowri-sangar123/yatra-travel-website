import { Award, Heart, Sparkles, Users } from "lucide-react";

export default function ContentCardsSections() {
  const sections = [
    {
      title: "Why This Option Works So Well",
      description:
        "Luxury 12 seater tempo travellers are designed to make group travel more comfortable and stress-free. With spacious seating, smooth rides, and everyone traveling together in one vehicle, there’s no hassle of managing multiple cars. Enjoy premium interiors with soft pushback seats, air conditioning, charging points, music system, clean interiors, and a relaxing travel experience even on long journeys.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      icon: Sparkles,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Seating That Makes a Difference",
      description:
        "Our 12 seater luxury tempo traveller offers the perfect balance of comfort and group space, making it ideal for all kinds of travel. Available in spacious 1×1 and comfortable 2×1 seating layouts, it provides a relaxing journey for family vacations, temple visits, weekend getaways, corporate outings, wedding guest travel, and airport pickups. Travel together conveniently without the hassle of managing multiple vehicles.",
      image:
        "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=400&h=300&fit=crop",
      icon: Heart,
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Affordable Pricing & Better Comfort",
      description:
        "Our 12 seater luxury tempo traveller offers budget-friendly pricing based on trip distance, duration, and vehicle type, including per km charges for outstation trips, fixed rates for local packages, and driver allowance per day. Many travelers prefer the 12 seater over bigger vehicles because it provides less crowd, more personal space, better comfort on long journeys, and easier movement inside the vehicle—making it the perfect balance of cost and convenience.",
      image:
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=300&fit=crop",
      icon: Users,
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Why Choose Yatra Travel?",
      description:
        "Yatra Travel India provides reliable Tirupathi Darshan ticket booking and round-trip travel packages with a professional and customer-friendly approach. We offer affordable Chennai to Tirupathi Darshan packages, convenient pickup and drop services near your location, and complete travel assistance to ensure a smooth, comfortable, and hassle-free pilgrimage experience from start to finish.",
      image:
        "https://images.unsplash.com/photo-1552821206-67f3c1bb0fb2?w=400&h=300&fit=crop",
      icon: Award,
      color: "from-green-500 to-blue-500",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {sections.map((section, idx) => {
            const Icon = section.icon;
            const isReverse = idx % 2 !== 0;

            return (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 ${isReverse ? "md:auto-cols-reverse" : ""}`}
                >
                  {/* Image */}
                  <div
                    className={`h-72 md:h-auto ${isReverse ? "md:order-2" : ""}`}
                  >
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div
                    className={`p-8 md:p-12 flex flex-col justify-center ${isReverse ? "md:order-1" : ""}`}
                  >
                    <div
                      className={`w-14 h-14 bg-gradient-to-r ${section.color} rounded-lg flex items-center justify-center mb-4`}
                    >
                      <Icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {section.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {section.description}
                    </p>
                    <button className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-colors w-fit">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
