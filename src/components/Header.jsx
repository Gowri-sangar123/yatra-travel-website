import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Vehicles', href: '/vehicles' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">YT</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-bold text-primary">Yatra Travel</div>
              <div className="text-xs text-gray-500">Tempo Rentals</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-700 hover:text-primary font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-primary transition-colors"
            >
              <Phone size={18} />
              <span className="font-medium">+91 98765 43210</span>
            </a>
            <button className="bg-primary hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-700 hover:text-primary"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 border-t">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-primary font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t mt-3 pt-3 px-4 space-y-2">
              <a
                href="tel:+919876543210"
                className="block text-primary font-medium hover:underline"
              >
                Call: +91 98765 43210
              </a>
              <button className="w-full bg-primary hover:bg-blue-700 text-white py-2 rounded-lg font-medium">
                Get Quote
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
