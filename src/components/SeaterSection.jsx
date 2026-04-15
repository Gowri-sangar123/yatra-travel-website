import { Users, AirVent, Music, Wifi } from "lucide-react";

export default function SeaterSection() {
  const options = [
    {
      title: "14 Seater Tempo Travellers in Chennai",
      description:
        "Chennai Travels offers 14-seater vans for rental purpose. Clients can take on our well-maintained vans for weekend tours, visit tourist attractions, religious trips, and more. Connect with us to book your services for your trip.",
      capacity: 14,
      icon: Users,
    },
    {
      title: "16 Seater Tempo Travellers in Chennai",
      description:
        "We at Chennai Travels offer 16-seater vans for hire in Chennai for neighbourhood and outstation trips. Our vans are highly maintained and driven by well-experienced drivers. Book your services now.",
      capacity: 16,
      icon: Users,
    },
    {
      title: "20 Seater Tempo Travellers in Chennai",
      description:
        "Chennai Travels provide vans for rental purpose with 20 seats at a reasonable value. Connect with us immediately. Hire this van for Chennai neighbouring trips and Chennai to outstation trips at a cheaper rate.",
      capacity: 20,
      icon: Users,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tempo Travellers Rental Services in Chennai
          </h2>
          <p className="text-xl text-gray-600">
            Choose from our wide range of seating options for all group sizes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {options.map((option, idx) => {
            const Icon = option.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={32} className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {option.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {option.description}
                </p>
                <div className="flex items-center gap-2 mb-6">
                  <Users size={20} className="text-blue-600" />
                  <span className="text-lg font-bold text-gray-900">
                    Up to {option.capacity} Passengers
                  </span>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                  Book Now
                </button>
              </div>
            );
          })}
        </div>

        {/* What We Offer */}
        <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Discover Everything We Offer
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Dirt Free, Comfy Cars
              </h4>
              <p className="text-gray-700">
                Every car is dirt free, having air conditioner and serviced
                regularly to offer a safe experience to patrons. All vehicles
                are regularly maintained to the highest standards.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Expert Drivers
              </h4>
              <p className="text-gray-700">
                Welcoming, on time, and dutiful, our drivers bring consistency,
                warmth, and expertise that make every trip feel easy, relaxing,
                and wholly timed for your convenience.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Flexible Rentals
              </h4>
              <p className="text-gray-700">
                Whether it's a city task or weekend escape, we accommodate your
                time, plans, and comfort needs, assuring total freedom all the
                way through your journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
