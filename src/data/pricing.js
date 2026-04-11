export const pricingOptions = [
  {
    vehicleType: "6 Seater",
    capacity: 6,
    pricePerKm: "₹15",
    features: ["AC", "Pushback Seats", "Music System", "Power Steering"],
    minDays: 1
  },
  {
    vehicleType: "9 Seater",
    capacity: 9,
    pricePerKm: "₹18",
    features: ["AC", "Pushback Seats", "Music System", "Power Steering", "Wide Space"],
    minDays: 1,
    popular: true
  },
  {
    vehicleType: "12 Seater",
    capacity: 12,
    pricePerKm: "₹22",
    features: ["AC", "Pushback Seats", "Music System", "Power Steering", "Extra Luggage Space"],
    minDays: 1
  },
  {
    vehicleType: "17 Seater",
    capacity: 17,
    pricePerKm: "₹28",
    features: ["AC", "Pushback Seats", "Music System", "Power Steering", "Extra Luggage Space", "Water"],
    minDays: 2
  },
  {
    vehicleType: "20 Seater",
    capacity: 20,
    pricePerKm: "₹32",
    features: ["All Premium Features", "Refrigerator", "Premium Interiors"],
    minDays: 2
  }
];

export const discounts = [
  { distance: "1-100 KM", discount: "5%" },
  { distance: "100-250 KM", discount: "10%" },
  { distance: "250-500 KM", discount: "15%" },
  { distance: "500+ KM", discount: "20%" }
];
