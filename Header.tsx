import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Heart, Menu, X, Sun, Moon, Shield, User, Settings, LogOut, Bell, MessageCircle } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useAuth } from '../../contexts/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import LiveChatModal from '../LiveChatModal';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isLiveChatOpen, setIsLiveChatOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Campaigns', href: '/campaigns' },
    { name: 'Leaderboard', href: '/leaderboard' },
    { name: 'Impact', href: '/impact' },
    { name: 'Badges', href: '/badges' },
    { name: 'Request Help', href: '/request-humanity' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleProfileClick = () => {
    setIsProfileMenuOpen(false);
    navigate('/profile');
  };

  const handleLogout = () => {
    logout();
    setIsProfileMenuOpen(false);
    navigate('/');
  };

  const handleLiveChatClick = () => {
    setIsLiveChatOpen(true);
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-white/95 dark:bg-secondary-900/95 backdrop-blur-md border-b border-gray-200/50 dark:border-secondary-700/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <Shield className="w-4 h-4 text-primary-500 absolute -top-1 -right-1 bg-white dark:bg-secondary-900 rounded-full" />
              </div>
              <div className="hidden sm:block">
                <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Relieflink
                </span>
                <div className="text-xs text-gray-500 dark:text-gray-400 -mt-1">
                  Blockchain Secured
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive(item.href)
                      ? 'text-white bg-gradient-primary shadow-lg'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-secondary-800'
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-3">
              {/* Live Chat Button */}
              <button
                onClick={handleLiveChatClick}
                className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-gradient-primary text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Live Chat</span>
              </button>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-secondary-800 hover:bg-gray-200 dark:hover:bg-secondary-700 transition-all duration-200 hover:scale-105"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600" />
                )}
              </button>

              {/* User Menu */}
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                    className="flex items-center space-x-3 p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-secondary-800 transition-colors duration-200"
                  >
                    <div className="relative">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-8 h-8 rounded-full ring-2 ring-primary-500 hover:ring-primary-400 transition-all duration-200"
                      />
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-secondary-900"></div>
                    </div>
                    <div className="hidden md:block text-left">
                      <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {user.name}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                        {user.role}
                      </div>
                    </div>
                  </button>

                  {/* Profile Dropdown */}
                  <AnimatePresence>
                    {isProfileMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        className="absolute right-0 mt-2 w-64 bg-white dark:bg-secondary-800 rounded-xl shadow-xl border border-gray-200 dark:border-secondary-700 py-2"
                      >
                        <div className="px-4 py-3 border-b border-gray-200 dark:border-secondary-700">
                          <div className="flex items-center space-x-3">
                            <img
                              src={user.avatar}
                              alt={user.name}
                              className="w-10 h-10 rounded-full"
                            />
                            <div>
                              <div className="font-medium text-gray-900 dark:text-white">
                                {user.name}
                              </div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                {user.email}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="py-2">
                          <button
                            onClick={handleProfileClick}
                            className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-secondary-700 transition-colors duration-200"
                          >
                            <User className="w-4 h-4" />
                            <span>View Profile</span>
                          </button>
                          <Link
                            to="/dashboard"
                            onClick={() => setIsProfileMenuOpen(false)}
                            className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-secondary-700 transition-colors duration-200"
                          >
                            <Settings className="w-4 h-4" />
                            <span>Dashboard</span>
                          </Link>
                          <div className="border-t border-gray-200 dark:border-secondary-700 my-2"></div>
                          <button
                            onClick={handleLogout}
                            className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200"
                          >
                            <LogOut className="w-4 h-4" />
                            <span>Sign Out</span>
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <Link
                    to="/login"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    className="px-4 py-2 bg-gradient-primary text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity duration-200 shadow-lg hover:shadow-xl"
                  >
                    Get Started
                  </Link>
                </div>
              )}

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-secondary-800 hover:bg-gray-200 dark:hover:bg-secondary-700 transition-colors duration-200"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                ) : (
                  <Menu className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-200 dark:border-secondary-700 bg-white dark:bg-secondary-900"
            >
              <div className="px-4 py-4 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                      isActive(item.href)
                        ? 'text-white bg-gradient-primary'
                        : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-secondary-800'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Live Chat Button */}
                <button
                  onClick={() => {
                    handleLiveChatClick();
                    setIsMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-primary text-white font-medium rounded-lg hover:opacity-90 transition-opacity duration-200 mt-4"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Live Chat Support</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Click outside to close profile menu */}
        {isProfileMenuOpen && (
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsProfileMenuOpen(false)}
          />
        )}
      </header>

      {/* Live Chat Modal */}
      <LiveChatModal 
        isOpen={isLiveChatOpen} 
        onClose={() => setIsLiveChatOpen(false)} 
      />
    </>
  );
};

export default Header;