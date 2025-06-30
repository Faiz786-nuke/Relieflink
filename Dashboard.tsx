import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { Heart, TrendingUp, Users, Shield, Calendar, DollarSign, Target, Award, Download, Plus, AlertTriangle, FileText, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import DonationModal from '../components/DonationModal';
import TaxReceiptModal from '../components/TaxReceiptModal';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [isTaxReceiptModalOpen, setIsTaxReceiptModalOpen] = useState(false);

  if (!user) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Please log in to access your dashboard
          </h2>
        </div>
      </div>
    );
  }

  const donorStats = [
    { label: 'Total Donated', value: '$1,250', icon: DollarSign, color: 'bg-green-500', trend: '+12%' },
    { label: 'Campaigns Supported', value: '8', icon: Target, color: 'bg-blue-500', trend: '+2' },
    { label: 'Lives Impacted', value: '127', icon: Users, color: 'bg-purple-500', trend: '+15' },
    { label: 'Leaderboard Rank', value: '#42', icon: Award, color: 'bg-orange-500', trend: '↑3' },
  ];

  const victimStats = [
    { label: 'Aid Received', value: '$2,840', icon: Heart, color: 'bg-red-500', trend: '+$200' },
    { label: 'Support Requests', value: '3', icon: Calendar, color: 'bg-blue-500', trend: '1 pending' },
    { label: 'Verification Status', value: 'Verified', icon: Shield, color: 'bg-green-500', trend: 'Active' },
    { label: 'Recovery Progress', value: '78%', icon: TrendingUp, color: 'bg-purple-500', trend: '+5%' },
  ];

  const stats = user.role === 'donor' ? donorStats : victimStats;

  const recentActivity = user.role === 'donor' ? [
    { action: 'Donated to Hurricane Relief Fund', amount: '$100', date: '2 days ago', status: 'completed' },
    { action: 'Joined Earthquake Response Campaign', amount: '$250', date: '1 week ago', status: 'completed' },
    { action: 'Monthly recurring donation', amount: '$50', date: '2 weeks ago', status: 'completed' },
    { action: 'Emergency flood response', amount: '$75', date: '3 weeks ago', status: 'completed' },
  ] : [
    { action: 'Received emergency housing support', amount: '$500', date: '3 days ago', status: 'received' },
    { action: 'Medical assistance approved', amount: '$750', date: '1 week ago', status: 'received' },
    { action: 'Food vouchers distributed', amount: '$200', date: '2 weeks ago', status: 'received' },
    { action: 'Temporary shelter allocation', amount: '$390', date: '3 weeks ago', status: 'received' },
  ];

  const handleRequestEmergencyAid = () => {
    alert('Emergency aid request submitted! Our team will contact you within 2 hours.');
  };

  const handleUpdateProfile = () => {
    alert('Profile update functionality would redirect to profile settings.');
  };

  const handleViewSupportResources = () => {
    alert('Support resources page would open with helpful information and contacts.');
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-secondary-900 dark:to-secondary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-4 lg:mb-0">
              <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Welcome back, {user.name}!
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                {user.role === 'donor' ? 'Thank you for making a difference' : 'Your support network is here for you'}
              </p>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-primary rounded-full text-white font-medium shadow-lg">
              <Shield className="w-4 h-4" />
              <span className="capitalize">{user.role}</span>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-secondary-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-secondary-700"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center shadow-lg`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm text-green-600 dark:text-green-400 font-medium">
                  {stat.trend}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                  {stat.label}
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white dark:bg-secondary-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-secondary-700"
          >
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-primary-600" />
              Recent Activity
            </h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-secondary-700 dark:to-secondary-600 rounded-lg hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 dark:text-white">
                      {activity.action}
                    </p>
                    <div className="flex items-center space-x-2 mt-1">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {activity.date}
                      </p>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        activity.status === 'completed' || activity.status === 'received'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                      }`}>
                        {activity.status}
                      </span>
                    </div>
                  </div>
                  <span className={`font-bold text-lg ${
                    user.role === 'donor' ? 'text-red-600' : 'text-green-600'
                  }`}>
                    {user.role === 'donor' ? '-' : '+'}{activity.amount}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white dark:bg-secondary-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-secondary-700"
          >
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Plus className="w-5 h-5 mr-2 text-primary-600" />
              Quick Actions
            </h2>
            <div className="space-y-4">
              {user.role === 'donor' ? (
                <>
                  <button 
                    onClick={() => setIsDonationModalOpen(true)}
                    className="w-full px-4 py-3 bg-gradient-primary text-white font-medium rounded-lg hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  >
                    <Heart className="w-5 h-5" />
                    <span>Make a New Donation</span>
                  </button>
                  <Link 
                    to="/campaigns"
                    className="w-full px-4 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 font-medium rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-200 flex items-center justify-center"
                  >
                    View Active Campaigns
                  </Link>
                  <button 
                    onClick={() => setIsTaxReceiptModalOpen(true)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-secondary-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-secondary-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download Tax Receipt</span>
                  </button>
                </>
              ) : (
                <>
                  <button 
                    onClick={handleRequestEmergencyAid}
                    className="w-full px-4 py-3 bg-gradient-primary text-white font-medium rounded-lg hover:opacity-90 transition-opacity duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  >
                    <AlertTriangle className="w-5 h-5" />
                    <span>Request Emergency Aid</span>
                  </button>
                  <button 
                    onClick={handleUpdateProfile}
                    className="w-full px-4 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 font-medium rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <FileText className="w-5 h-5" />
                    <span>Update Profile</span>
                  </button>
                  <button 
                    onClick={handleViewSupportResources}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-secondary-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-secondary-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>View Support Resources</span>
                  </button>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modals */}
      <DonationModal 
        isOpen={isDonationModalOpen} 
        onClose={() => setIsDonationModalOpen(false)} 
      />
      <TaxReceiptModal 
        isOpen={isTaxReceiptModalOpen} 
        onClose={() => setIsTaxReceiptModalOpen(false)} 
      />
    </div>
  );
};

export default Dashboard;