export default function ComparisonTable() {
  const comparisonData = [
    {
      type: "6 Seater Tempo",
      capacity: "6 Persons",
      pricePerKm: "₹15",
      features: "AC, Music System, Power Steering"
    },
    {
      type: "9 Seater Tempo",
      capacity: "9 Persons",
      pricePerKm: "₹18",
      features: "AC, Music System, Power Steering, Wide Space"
    },
    {
      type: "12 Seater Tempo",
      capacity: "12 Persons",
      pricePerKm: "₹22",
      features: "AC, Music System, Power Steering, Extra Luggage"
    },
    {
      type: "17 Seater Tempo",
      capacity: "17 Persons",
      pricePerKm: "₹28",
      features: "Premium Features, Refrigerator, Extra Luggage"
    },
    {
      type: "20 Seater Tempo",
      capacity: "20 Persons",
      pricePerKm: "₹32",
      features: "All Premium Features, Refrigerator"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Vehicle Comparison
          </h2>
          <p className="text-xl text-gray-600">
            Compare our Tempo Traveller options to find the perfect fit
          </p>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Vehicle Type</th>
                  <th className="px-6 py-4 text-left font-semibold">Seating Capacity</th>
                  <th className="px-6 py-4 text-left font-semibold">Price Per KM</th>
                  <th className="px-6 py-4 text-left font-semibold">Features</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`border-t ${
                      idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    } hover:bg-blue-50 transition-colors`}
                  >
                    <td className="px-6 py-4 text-gray-900 font-semibold">
                      {row.type}
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      {row.capacity}
                    </td>
                    <td className="px-6 py-4 text-gray-700 font-semibold text-blue-600">
                      {row.pricePerKm}
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      {row.features}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
