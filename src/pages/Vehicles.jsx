import Header from '../components/Header';
import Footer from '../components/Footer';
import VehicleCard from '../components/VehicleCard';
import { vehicles } from '../data/vehicles';

export default function Vehicles() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold">Our Vehicle Fleet</h1>
            <p className="text-xl text-blue-100 mt-2">
              Choose from our premium selection of Tempo Travellers
            </p>
          </div>
        </div>

        {/* Vehicles Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
