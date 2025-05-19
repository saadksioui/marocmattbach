import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Information */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-6 text-orange-500">
              MarocMattbach
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Elevating events with exceptional culinary experiences since 2008. From intimate gatherings to grand celebrations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Services', 'Menu', 'Testimonials', 'FAQ', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-medium mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={20} className="text-orange-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="text-orange-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">info@gourmetelite.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="text-orange-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Culinary Avenue<br />Gourmet City, GC 90210</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-medium mb-6 text-white">Stay Updated</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for special offers and updates.
            </p>
            <form className="space-y-3">
              <div>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-orange-500 transition-colors duration-300"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-opacity-90 text-white px-4 py-2 rounded transition duration-300 font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="border-gray-800 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            © 2025 MarocMattbach. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors duration-300">
              Terms
            </a>
            <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors duration-300">
              Privacy
            </a>
            <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors duration-300">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;