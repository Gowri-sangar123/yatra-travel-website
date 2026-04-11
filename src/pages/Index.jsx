import Header from '../components/Header';
import Hero from '../components/Hero';
import IntroSection from '../components/IntroSection';
import PerfectForSection from '../components/PerfectForSection';
import VehicleCard from '../components/VehicleCard';
import ComparisonTable from '../components/ComparisonTable';
import PricingSection from '../components/PricingSection';
import FeaturesGrid from '../components/FeaturesGrid';
import ContentCardsSections from '../components/ContentCardsSections';
import PopularRoutes from '../components/PopularRoutes';
import FAQSection from '../components/FAQSection';
import CTABanner from '../components/CTABanner';
import Footer from '../components/Footer';
import { vehicles } from '../data/vehicles';

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Header/Navigation */}
      <Header />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Intro Content Section */}
      <IntroSection />

      {/* 4. Vehicle Cards Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Vehicle Fleet
            </h2>
            <p className="text-xl text-gray-600">
              Choose from our wide range of well-maintained Tempo Travellers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Perfect For Section */}
      <PerfectForSection />

      {/* 6. Comparison Table */}
      <ComparisonTable />

      {/* 7. Pricing Section */}
      <PricingSection />

      {/* 8. Feature Highlights */}
      <FeaturesGrid />

      {/* 9. Content Sections (Luxury, Benefits, Wedding, Why Choose Us) */}
      <ContentCardsSections />

      {/* 10. Popular Routes */}
      <PopularRoutes />

      {/* 11. FAQ Section */}
      <FAQSection />

      {/* 12. CTA Banner */}
      <CTABanner />

      {/* 13. Footer */}
      <Footer />
    </div>
  );
}
