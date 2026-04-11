import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./global.css";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Vehicles from "./pages/Vehicles";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<Services />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
