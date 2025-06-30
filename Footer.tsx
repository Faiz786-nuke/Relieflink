import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-900 dark:bg-secondary-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Heart className="w-8 h-8 text-primary-500" />
                <Shield className="w-4 h-4 text-primary-400 absolute -top-1 -right-1" />
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Relieflink
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Connecting hearts to heal communities. Our blockchain-secured platform ensures transparent, 
              efficient disaster relief donations reach those who need help most.
            </p>
            <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-primary rounded-full text-white text-sm font-medium w-fit">
              <Shield className="w-4 h-4" />
              <span>Blockchain Secured Platform</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/campaigns" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Active Campaigns
                </Link>
              </li>
              <li>
                <Link to="/leaderboard" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Donor Leaderboard
                </Link>
              </li>
              <li>
                <Link to="/impact" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Impact Dashboard
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary-400" />
                <span className="text-gray-300">support@relieflink.org</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary-400" />
                <span className="text-gray-300">+91 9876543210</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary-400 mt-1" />
                <span className="text-gray-300">
                  Street no 12, connaught place<br />
                  New Delhi, Delhi 110001, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Relieflink. All rights reserved.Built with love, scaled with technology, focused on relief.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200">
              Terms of Service
            </Link>
            <Link to="/security" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;