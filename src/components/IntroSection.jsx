export default function IntroSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Welcome to Yatra Travel
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            At Yatra Travel, we believe in making travel accessible, comfortable, and memorable. 
            With over 500 satisfied customers and years of experience in the travel industry, 
            we've built a reputation for reliability and excellence.
          </p>
        </div>

        <div className="prose prose-lg max-w-4xl mx-auto text-gray-700">
          <p>
            Our fleet of Tempo Travellers is meticulously maintained and equipped with modern 
            amenities to ensure your journey is comfortable and worry-free. Whether you're planning 
            a family vacation, a corporate outing, or a wedding celebration, we have the perfect 
            vehicle for your needs.
          </p>
          <p>
            We pride ourselves on transparent pricing, professional drivers, and exceptional 
            customer service. Every booking with us is backed by comprehensive insurance and 
            24/7 customer support.
          </p>
        </div>
      </div>
    </section>
  );
}
