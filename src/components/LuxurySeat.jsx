import { Check, Armchair, Zap, MapPin, Users } from "lucide-react";

export default function LuxurySeat() {
  const benefits = [
    "Enough space to sit comfortably",
    "A smooth ride even on long routes",
    "Everyone traveling together in one vehicle",
    "No confusion of managing multiple cars",
  ];

  const features = [
    "Soft pushback seats so you can relax",
    "Proper air conditioning for Chennai weather",
    "Clean and well-maintained interiors",
    "Charging points for phones",
    "Music system for entertainment",
    "Good lighting and overall premium feel",
  ];

  const tripTypes = [
    "Family trips and vacations",
    "Temple visits like Tirupati or Rameshwaram",
    "Weekend trips from Chennai",
    "Corporate outings",
    "Wedding guest travel",
    "Airport pickup and drop",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            12 Seater Luxury Tempo Traveller in Chennai
          </h2>
          <p className="text-lg text-gray-600">
            The Perfect Balance of Comfort, Space, and Affordability
          </p>
        </div>

        {/* Why It Works */}
        <div className="mb-12 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Why This Option Works So Well
          </h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            One of the biggest problems during group travel is comfort. Some
            people feel tired, some don't get enough space, and the journey
            becomes stressful. That's exactly where a luxury 12 seater tempo
            traveller makes a difference.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <Check
                  size={24}
                  className="text-green-500 flex-shrink-0 mt-1"
                />
                <span className="text-gray-700 font-semibold">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Comfort Features */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Comfort You Will Actually Feel
          </h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            This is not a basic tempo traveller. The luxury version is designed
            for better travel experience, especially for long journeys. Inside
            the vehicle, you usually get:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 rounded-xl p-8">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <Zap size={20} className="text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          <p className="text-gray-700 mt-6 leading-relaxed">
            You won't feel tired even after hours of travel, which is the main
            reason people prefer this option.
          </p>
        </div>

        {/* Seating Options */}
        <div className="mb-12 bg-blue-50 rounded-xl p-8 border border-blue-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Seating That Makes a Difference
          </h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The 12 seater is popular because it offers the right balance between
            space and group size. In many luxury models, you may get:
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Armchair
                size={24}
                className="text-blue-600 flex-shrink-0 mt-1"
              />
              <div>
                <h4 className="font-bold text-gray-900">1×1 Seating</h4>
                <p className="text-gray-700">More space, more comfort</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Armchair
                size={24}
                className="text-blue-600 flex-shrink-0 mt-1"
              />
              <div>
                <h4 className="font-bold text-gray-900">2×1 Seating</h4>
                <p className="text-gray-700">
                  Slightly compact but still comfortable
                </p>
              </div>
            </div>
          </div>

          <p className="text-gray-700 mt-6">
            If your group prefers extra comfort, the 1×1 layout is always a
            better experience.
          </p>
        </div>

        {/* Perfect For */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Perfect for Many Types of Trips
          </h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            A 12 seater luxury tempo traveller is not limited to one type of
            travel. It fits almost every situation. You can book it for:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tripTypes.map((trip, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
              >
                <MapPin size={20} className="text-blue-600 flex-shrink-0" />
                <span className="text-gray-700 font-semibold">{trip}</span>
              </div>
            ))}
          </div>

          <p className="text-gray-700 mt-6 font-semibold">
            Basically, anywhere you want to travel together without hassle.
          </p>
        </div>

        {/* Pricing */}
        <div className="mb-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 border border-green-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Pricing in Chennai
          </h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Prices can change depending on distance, time, and vehicle type, but
            here's a general idea:
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Users size={20} className="text-blue-600" />
              <span className="text-gray-700">
                <span className="font-bold">Per km cost</span> for outstation
                trips
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Users size={20} className="text-blue-600" />
              <span className="text-gray-700">
                <span className="font-bold">Fixed price</span> for local
                packages (8–10 hours)
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Users size={20} className="text-blue-600" />
              <span className="text-gray-700">
                <span className="font-bold">Driver allowance</span> charged per
                day
              </span>
            </div>
          </div>

          <p className="text-gray-700 mt-6 leading-relaxed">
            The total cost is usually reasonable when divided among 10–12
            people, which makes it budget-friendly too.
          </p>
        </div>

        {/* Why Better Than Bigger */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Why Many People Prefer This Over Bigger Vehicles
          </h3>
          <p className="text-gray-700 mb-6">
            You might think of booking a 14 or 17 seater, but a 12 seater often
            feels better because:
          </p>

          <div className="bg-white rounded-xl border-2 border-blue-200 p-8 space-y-3">
            <div className="flex items-center gap-3">
              <Check size={22} className="text-blue-600 flex-shrink-0" />
              <span className="text-gray-700 font-semibold">
                Less crowd inside
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Check size={22} className="text-blue-600 flex-shrink-0" />
              <span className="text-gray-700 font-semibold">
                More personal space
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Check size={22} className="text-blue-600 flex-shrink-0" />
              <span className="text-gray-700 font-semibold">
                Better comfort on long journeys
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Check size={22} className="text-blue-600 flex-shrink-0" />
              <span className="text-gray-700 font-semibold">
                Easier movement inside the vehicle
              </span>
            </div>
          </div>

          <p className="text-gray-700 mt-6 font-semibold">
            It's a good mix of comfort and cost.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Experience Luxury Comfort?
          </h3>
          <p className="text-gray-700 mb-6">
            Book your 12 seater luxury tempo traveller in Chennai through Yatra
            Travel India. You get clean and well-maintained vehicles,
            experienced drivers, clear pricing, and easy booking.
          </p>
          <a
            href="tel:+919876543210"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Call to Book Now
          </a>
        </div>
      </div>
    </section>
  );
}
