import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Crown, Heart, Shield, Star, Trophy, Zap, Target, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import DonationModal from '../components/DonationModal';

const Badges: React.FC = () => {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  const badgeCategories = [
    {
      title: 'Donation Milestones',
      badges: [
        { name: 'First Steps', icon: Heart, description: 'Made your first donation', earned: true, rarity: 'common', color: 'bg-green-500' },
        { name: 'Generous Heart', icon: Star, description: 'Donated over $100', earned: true, rarity: 'common', color: 'bg-blue-500' },
        { name: 'Major Contributor', icon: Award, description: 'Donated over $500', earned: true, rarity: 'rare', color: 'bg-purple-500' },
        { name: 'Philanthropist', icon: Crown, description: 'Donated over $1,000', earned: false, rarity: 'epic', color: 'bg-yellow-500' },
        { name: 'Guardian Angel', icon: Shield, description: 'Donated over $5,000', earned: false, rarity: 'legendary', color: 'bg-red-500' },
      ]
    },
    {
      title: 'Campaign Support',
      badges: [
        { name: 'Campaign Supporter', icon: Target, description: 'Supported 5 different campaigns', earned: true, rarity: 'common', color: 'bg-indigo-500' },
        { name: 'Multi-Cause Champion', icon: Globe, description: 'Supported 10 different campaigns', earned: true, rarity: 'rare', color: 'bg-teal-500' },
        { name: 'Disaster Response Hero', icon: Zap, description: 'First to donate to 3 emergency campaigns', earned: false, rarity: 'epic', color: 'bg-orange-500' },
        { name: 'Global Impact Leader', icon: Trophy, description: 'Supported campaigns in 5+ countries', earned: false, rarity: 'legendary', color: 'bg-pink-500' },
      ]
    },
    {
      title: 'Community Engagement',
      badges: [
        { name: 'Team Player', icon: Users, description: 'Joined a fundraising team', earned: true, rarity: 'common', color: 'bg-cyan-500' },
        { name: 'Social Advocate', icon: Star, description: 'Shared 10 campaigns on social media', earned: false, rarity: 'rare', color: 'bg-violet-500' },
        { name: 'Community Builder', icon: Crown, description: 'Recruited 5 new donors', earned: false, rarity: 'epic', color: 'bg-emerald-500' },
        { name: 'Influence Master', icon: Trophy, description: 'Your referrals donated over $1,000', earned: false, rarity: 'legendary', color: 'bg-rose-500' },
      ]
    }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'text-gray-600 bg-gray-100 dark:bg-gray-800 dark:text-gray-400';
      case 'rare': return 'text-blue-600 bg-blue-100 dark:bg-blue-900/20 dark:text-blue-400';
      case 'epic': return 'text-purple-600 bg-purple-100 dark:bg-purple-900/20 dark:text-purple-400';
      case 'legendary': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20 dark:text-yellow-400';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-800 dark:text-gray-400';
    }
  };

  const totalBadges = badgeCategories.reduce((total, category) => total + category.badges.length, 0);
  const earnedBadges = badgeCategories.reduce((total, category) => 
    total + category.badges.filter(badge => badge.earned).length, 0
  );

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-secondary-900 dark:to-secondary-800">
      {/* Header */}
      <section className="bg-gradient-hero dark:bg-gradient-hero-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Trophy className="w-12 h-12 text-primary-600" />
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Achievement Badges
              </h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Earn badges by making donations, supporting campaigns, and engaging with our community. 
              Show off your impact and unlock special rewards!
            </p>
            <div className="flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-primary rounded-full text-white font-medium w-fit mx-auto">
              <Shield className="w-5 h-5" />
              <span>Blockchain Verified Achievements</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Progress Overview */}
      <section className="py-12 bg-white dark:bg-secondary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-2xl p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  {earnedBadges}
                </div>
                <div className="text-gray-600 dark:text-gray-400">Badges Earned</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  {totalBadges}
                </div>
                <div className="text-gray-600 dark:text-gray-400">Total Badges</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  {Math.round((earnedBadges / totalBadges) * 100)}%
                </div>
                <div className="text-gray-600 dark:text-gray-400">Completion</div>
              </div>
            </div>
            <div className="mt-6">
              <div className="w-full bg-gray-200 dark:bg-secondary-700 rounded-full h-3">
                <div
                  className="bg-gradient-primary h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${(earnedBadges / totalBadges) * 100}%` }}
                ></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Badge Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {badgeCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.badges.map((badge, badgeIndex) => (
                  <motion.div
                    key={badge.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: badgeIndex * 0.1 }}
                    className={`relative bg-white dark:bg-secondary-800 rounded-xl p-6 shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                      badge.earned 
                        ? 'border-primary-200 dark:border-primary-800' 
                        : 'border-gray-200 dark:border-secondary-700 opacity-60'
                    }`}
                  >
                    {/* Earned Badge Glow Effect */}
                    {badge.earned && (
                      <div className="absolute inset-0 bg-gradient-primary opacity-5 rounded-xl"></div>
                    )}
                    
                    {/* Badge Icon */}
                    <div className={`w-16 h-16 ${badge.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg ${
                      badge.earned ? 'animate-pulse-slow' : 'grayscale'
                    }`}>
                      <badge.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Badge Info */}
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {badge.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        {badge.description}
                      </p>
                      
                      {/* Rarity Badge */}
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getRarityColor(badge.rarity)}`}>
                        {badge.rarity.charAt(0).toUpperCase() + badge.rarity.slice(1)}
                      </div>
                    </div>

                    {/* Earned Status */}
                    {badge.earned && (
                      <div className="absolute top-3 right-3">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <Star className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Earn More Badges?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Make a donation today and start unlocking achievements while making a real difference in the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setIsDonationModalOpen(true)}
                className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Heart className="w-5 h-5" />
                <span>Make a Donation</span>
              </button>
              <Link 
                to="/campaigns"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors duration-200 flex items-center justify-center"
              >
                View Campaigns
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

export default Badges;