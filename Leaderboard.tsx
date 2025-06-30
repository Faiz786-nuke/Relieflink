import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Crown, Heart, Shield, TrendingUp, Calendar } from 'lucide-react';

interface Donor {
  id: string;
  name: string;
  totalDonated: number;
  campaignsSupported: number;
  avatar: string;
  joinDate: string;
  rank: number;
  badge: string;
  isAnonymous?: boolean;
}

const Leaderboard: React.FC = () => {
  const [timeFilter, setTimeFilter] = useState('all-time');

  const donors: Donor[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      totalDonated: 15750,
      campaignsSupported: 45,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      joinDate: '2023-01-15',
      rank: 1,
      badge: 'Platinum Angel'
    },
    {
      id: '2',
      name: 'Michael Chen',
      totalDonated: 12400,
      campaignsSupported: 40,
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      joinDate: '2023-02-08',
      rank: 2,
      badge: 'Gold Guardian'
    },
    {
      id: '3',
      name: 'Emily ',
      totalDonated: 11200,
      campaignsSupported: 31,
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      joinDate: '2022-11-22',
      rank: 3,
      badge: 'Silver Savior'
    },
    {
      id: '4',
      name: 'Anonymous Donor',
      totalDonated: 9800,
      campaignsSupported: 15,
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      joinDate: '2023-03-10',
      rank: 4,
      badge: 'Hope Bringer',
      isAnonymous: true
    },
    {
      id: '5',
      name: 'David Thompson',
      totalDonated: 8900,
      campaignsSupported: 22,
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      joinDate: '2023-01-30',
      rank: 5,
      badge: 'Compassion Hero'
    },
    {
      id: '6',
      name: 'Lisa Wang',
      totalDonated: 7650,
      campaignsSupported: 19,
      avatar: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      joinDate: '2022-12-05',
      rank: 6,
      badge: 'Relief Champion'
    },
    {
      id: '7',
      name: 'James Miller',
      totalDonated: 6890,
      campaignsSupported: 16,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      joinDate: '2023-04-12',
      rank: 7,
      badge: 'Community Builder'
    },
    {
      id: '8',
      name: 'Maria Garcia',
      totalDonated: 6200,
      campaignsSupported: 25,
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      joinDate: '2022-10-18',
      rank: 8,
      badge: 'Kindness Advocate'
    },
    {
      id: '9',
      name: 'Robert Lee',
      totalDonated: 5500,
      campaignsSupported: 12,
      avatar: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      joinDate: '2023-05-22',
      rank: 9,
      badge: 'Hope Supporter'
    },
    {
      id: '10',
      name: 'Anna Wilson',
      totalDonated: 4950,
      campaignsSupported: 14,
      avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      joinDate: '2023-02-28',
      rank: 10,
      badge: 'Caring Heart'
    }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Award className="w-6 h-6 text-amber-600" />;
      default:
        return <Trophy className="w-6 h-6 text-gray-500" />;
    }
  };

  const getBadgeColor = (rank: number) => {
    switch (rank) {
      case 1:
        return 'bg-gradient-to-r from-purple-500 to-pink-500';
      case 2:
        return 'bg-gradient-to-r from-yellow-400 to-orange-500';
      case 3:
        return 'bg-gradient-to-r from-gray-400 to-gray-600';
      default:
        return 'bg-gradient-primary';
    }
  };

  const timeFilters = [
    { id: 'all-time', label: 'All Time' },
    { id: 'this-year', label: 'This Year' },
    { id: 'this-month', label: 'This Month' },
    { id: 'this-week', label: 'This Week' }
  ];

  const totalStats = {
    totalDonations: donors.reduce((sum, donor) => sum + donor.totalDonated, 0),
    totalDonors: donors.length,
    avgDonation: donors.reduce((sum, donor) => sum + donor.totalDonated, 0) / donors.length,
    totalCampaigns: donors.reduce((sum, donor) => sum + donor.campaignsSupported, 0)
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-secondary-900">
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
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Donor Leaderboard
              </h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Celebrating our amazing community of donors who are making a real difference in disaster relief efforts worldwide.
            </p>
            <div className="flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-primary rounded-full text-white font-medium w-fit mx-auto">
              <Shield className="w-5 h-5" />
              <span>Blockchain Verified Rankings</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-12 bg-white dark:bg-secondary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {formatCurrency(totalStats.totalDonations)}
              </div>
              <div className="text-gray-600 dark:text-gray-400">Total Donated</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {totalStats.totalDonors}
              </div>
              <div className="text-gray-600 dark:text-gray-400">Active Donors</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {formatCurrency(totalStats.avgDonation)}
              </div>
              <div className="text-gray-600 dark:text-gray-400">Average Donation</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {totalStats.totalCampaigns}
              </div>
              <div className="text-gray-600 dark:text-gray-400">Campaigns Supported</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-6 bg-gray-50 dark:bg-secondary-900 border-b border-gray-200 dark:border-secondary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Top Donors
            </h2>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <select
                value={timeFilter}
                onChange={(e) => setTimeFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-secondary-700 dark:text-white"
              >
                {timeFilters.map(filter => (
                  <option key={filter.id} value={filter.id}>
                    {filter.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Top 3 Podium */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-center space-y-4 md:space-y-0 md:space-x-8 mb-12">
            {/* Second Place */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative bg-white dark:bg-secondary-800 rounded-2xl p-6 shadow-xl text-center w-full md:w-80"
              style={{ height: '290px' }}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
              </div>
              <img
                src={donors[1].avatar}
                alt={donors[1].name}
                className="w-20 h-20 rounded-full mx-auto mb-4 mt-4"
              />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {donors[1].name}
              </h3>
              <div className="text-2xl font-bold text-primary-600 mb-2">
                {formatCurrency(donors[1].totalDonated)}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {donors[1].campaignsSupported} campaigns
              </div>
              <div className={`px-3 py-1 ${getBadgeColor(2)} text-white text-xs font-medium rounded-full`}>
                {donors[1].badge}
              </div>
            </motion.div>

            {/* First Place */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative bg-white dark:bg-secondary-800 rounded-2xl p-6 shadow-2xl text-center w-full md:w-80"
              style={{ height: '330px' }}
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Crown className="w-8 h-8 text-white" />
                </div>
              </div>
              <img
                src={donors[0].avatar}
                alt={donors[0].name}
                className="w-24 h-24 rounded-full mx-auto mb-4 mt-6"
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {donors[0].name}
              </h3>
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {formatCurrency(donors[0].totalDonated)}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {donors[0].campaignsSupported} campaigns
              </div>
              <div className={`px-3 py-1 ${getBadgeColor(1)} text-white text-xs font-medium rounded-full`}>
                {donors[0].badge}
              </div>
            </motion.div>

            {/* Third Place */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative bg-white dark:bg-secondary-800 rounded-2xl p-6 shadow-xl text-center w-full md:w-80"
              style={{ height: '280px' }}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-amber-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
              </div>
              <img
                src={donors[2].avatar}
                alt={donors[2].name}
                className="w-20 h-20 rounded-full mx-auto mb-4 mt-4"
              />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {donors[2].name}
              </h3>
              <div className="text-2xl font-bold text-primary-600 mb-2">
                {formatCurrency(donors[2].totalDonated)}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {donors[2].campaignsSupported} campaigns
              </div>
              <div className={`px-3 py-1 ${getBadgeColor(3)} text-white text-xs font-medium rounded-full`}>
                {donors[2].badge}
              </div>
            </motion.div>
          </div>

          {/* Remaining Rankings */}
          <div className="space-y-4">
            {donors.slice(3).map((donor, index) => (
              <motion.div
                key={donor.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
                className="bg-white dark:bg-secondary-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-secondary-700 rounded-full">
                      <span className="text-lg font-bold text-gray-600 dark:text-gray-400">
                        {donor.rank}
                      </span>
                    </div>
                    <img
                      src={donor.avatar}
                      alt={donor.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {donor.isAnonymous ? '🔒 Anonymous Donor' : donor.name}
                      </h3>
                      <div className={`px-2 py-1 ${getBadgeColor(donor.rank)} text-white text-xs font-medium rounded-full w-fit`}>
                        {donor.badge}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-primary-600">
                      {formatCurrency(donor.totalDonated)}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {donor.campaignsSupported} campaigns
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leaderboard;