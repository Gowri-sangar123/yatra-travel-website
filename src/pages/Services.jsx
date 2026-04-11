import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Services() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold">Our Services</h1>
            <p className="text-xl text-blue-100 mt-2">
              Comprehensive travel solutions tailored to your needs
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Services Coming Soon
            </h2>
            <p className="text-gray-700 mb-4">
              We're working on building out detailed service offerings. 
              For now, please explore our fleet and pricing options on the homepage.
            </p>
            <a
              href="/"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-colors"
            >
              Back to Home
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
