import { Award, Heart, Sparkles, Users } from 'lucide-react';

export default function ContentCardsSections() {
  const sections = [
    {
      title: "Luxury Tempo Traveller Experience",
      description: "Experience the finest in group travel with our premium Tempo Travellers. Equipped with pushback seats, air conditioning, and premium interiors, every journey becomes a luxurious escape.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      icon: Sparkles,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Wedding & Special Events",
      description: "Make your wedding day even more special with our dedicated wedding travel solutions. Our professional fleet ensures your guests travel in comfort and style.",
      image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=400&h=300&fit=crop",
      icon: Heart,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Corporate Travel Solutions",
      description: "Impress your clients and employees with our professional corporate travel services. Ideal for offsite meetings, conferences, and team building activities.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      icon: Users,
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Why Choose Yatra Travel?",
      description: "With certified drivers, regular vehicle maintenance, transparent pricing, and exceptional customer service, we're your trusted partner for all your travel needs.",
      image: "https://images.unsplash.com/photo-1552821206-67f3c1bb0fb2?w=400&h=300&fit=crop",
      icon: Award,
      color: "from-green-500 to-blue-500"
    }
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
                <div className={`grid grid-cols-1 md:grid-cols-2 ${isReverse ? 'md:auto-cols-reverse' : ''}`}>
                  {/* Image */}
                  <div className={`h-72 md:h-auto ${isReverse ? 'md:order-2' : ''}`}>
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className={`p-8 md:p-12 flex flex-col justify-center ${isReverse ? 'md:order-1' : ''}`}>
                    <div className={`w-14 h-14 bg-gradient-to-r ${section.color} rounded-lg flex items-center justify-center mb-4`}>
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
