import {
  Phone,
  Mail,
  MapPin,
  // Facebook,
  // Twitter,
  // Instagram,
  // Linkedin,
  Globe,
  Share2,
  MessageCircle,
  AtSign,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">YT</span>
              </div>
              <div>
                <div className="text-white font-bold">Yatra Travel</div>
                <div className="text-xs text-gray-400">Tempo Rentals</div>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner for comfortable and affordable Tempo
              Traveller rentals across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-blue-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/vehicles"
                  className="hover:text-blue-400 transition-colors"
                >
                  Vehicles
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-gray-400 text-sm">Phone</div>
                  <a
                    href="tel:+919876543210"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-gray-400 text-sm">Email</div>
                  <a
                    href="mailto:info@yatratravel.com"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    info@yatratravel.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="text-blue-400 flex-shrink-0 mt-1"
                />
                <div>
                  <div className="text-gray-400 text-sm">Address</div>
                  <p className="text-white">123 Travel Street, Delhi 110001</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-400 text-sm">
            &copy; {currentYear} Yatra Travel. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
            >
              <Globe size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
            >
              <Share2 size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
            >
              <MessageCircle size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
            >
              <AtSign size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
