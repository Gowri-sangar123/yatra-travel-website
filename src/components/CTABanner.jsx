import { Phone, MessageCircle } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 bg-white rounded-full -top-48 -right-48"></div>
        <div className="absolute w-96 h-96 bg-white rounded-full -bottom-48 -left-48"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          Book with Yatra Travel India
        </h2>

        <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
          If you are looking for a reliable travel partner, book your 12-seater
          luxury tempo traveller in Chennai with Yatra Travel India and enjoy:
          <br />
          <br />
          ● Clean and well-maintained vehicles <br />
          ● Experienced drivers with excellent route knowledge <br />
          ● Transparent pricing with no hidden charges <br />● Quick and
          hassle-free booking process
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="https://www.yatratravelindia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
          >
            Book Now
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
          >
            <MessageCircle size={24} />
            WhatsApp
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-12 border-t border-blue-400 flex flex-wrap justify-center gap-8 text-sm">
          <div>
            <div className="font-bold text-lg">100%</div>
            <div className="text-blue-100">Genuine Vehicles</div>
          </div>
          <div>
            <div className="font-bold text-lg">500+</div>
            <div className="text-blue-100">Happy Customers</div>
          </div>
          <div>
            <div className="font-bold text-lg">4.5+</div>
            <div className="text-blue-100">Star Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}
