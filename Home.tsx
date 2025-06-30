import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Shield, Users, TrendingUp, Globe, Clock, Award, Target } from 'lucide-react';
import DonationModal from '../components/DonationModal';

const Home: React.FC = () => {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  const stats = [
    { label: 'Total Donations', value: '$2.4M', icon: Heart },
    { label: 'Active Campaigns', value: '127', icon: Target },
    { label: 'Lives Impacted', value: '45K+', icon: Users },
    { label: 'Success Rate', value: '98%', icon: TrendingUp },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Blockchain Security',
      description: 'Every donation is secured and tracked on the blockchain for complete transparency and accountability.'
    },
    {
      icon: Clock,
      title: 'Real-time Tracking',
      description: 'Monitor your donations in real-time and see exactly how your contribution is making a difference.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Support disaster relief efforts worldwide with intelligent fund distribution to areas of greatest need.'
    },
    {
      icon: Award,
      title: 'Verified Recipients',
      description: 'All recipients are verified through our rigorous authentication process to ensure aid reaches legitimate victims.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero dark:bg-gradient-hero-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Connecting{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Hearts
                </span>{' '}
                to Heal Communities
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                When disasters strike, every second counts. Relieflink uses cutting-edge blockchain technology 
                to ensure your donations reach those who need help most, quickly and transparently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsDonationModalOpen(true)}
                  className="px-8 py-4 bg-gradient-primary text-white font-semibold rounded-xl hover:opacity-90 transition-opacity duration-200 text-center flex items-center justify-center space-x-2"
                >
                  <Heart className="w-5 h-5" />
                  <span>Start Helping Today</span>
                </button>
                <Link
                  to="/campaigns"
                  className="px-8 py-4 border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 font-semibold rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-200 text-center"
                >
                  View Campaigns
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white dark:bg-secondary-800 rounded-2xl shadow-2xl p-8 animate-float">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Grant Tank Status</h3>
                  <div className="flex items-center space-x-2 px-3 py-1 bg-gradient-primary rounded-full text-white text-xs font-medium">
                    <Shield className="w-3 h-3" />
                    <span>Secured</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Total Raised</span>
                    <span className="text-2xl font-bold text-primary-600">$2,431,250</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-secondary-700 rounded-full h-3">
                    <div className="bg-gradient-primary h-3 rounded-full w-3/4 animate-pulse-slow"></div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>Active Donors: 12,847</span>
                    <span>Goal: $3M</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-xl mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-secondary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Why Choose Relieflink?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Our platform combines cutting-edge technology with humanitarian values to create 
              the most transparent and efficient disaster relief system available.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-secondary-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of donors worldwide who are using Relieflink to bring hope and healing to disaster-affected communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsDonationModalOpen(true)}
                className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Heart className="w-5 h-5" />
                <span>Get Started Now</span>
              </button>
              <Link
                to="/impact"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors duration-200"
              >
                See Our Impact
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Donation Modal */}
      <DonationModal 
        isOpen={isDonationModalOpen} 
        onClose={() => setIsDonationModalOpen(false)} 
      />
    </div>
  );
};

export default Home;