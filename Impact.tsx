import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { Globe, Users, Heart, TrendingUp, MapPin, Calendar, Shield, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import DonationModal from '../components/DonationModal';

const Impact: React.FC = () => {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  const impactStats = [
    { label: 'Lives Impacted', value: '45,237', icon: Users, color: 'text-blue-600' },
    { label: 'Countries Reached', value: '32', icon: Globe, color: 'text-green-600' },
    { label: 'Active Campaigns', value: '127', icon: Target, color: 'text-purple-600' },
    { label: 'Success Rate', value: '98%', icon: TrendingUp, color: 'text-orange-600' },
  ];

  const monthlyData = [
    { month: 'Jan', donations: 125000, lives: 3200 },
    { month: 'Feb', donations: 180000, lives: 4100 },
    { month: 'Mar', donations: 220000, lives: 5300 },
    { month: 'Apr', donations: 195000, lives: 4800 },
    { month: 'May', donations: 265000, lives: 6200 },
    { month: 'Jun', donations: 310000, lives: 7100 },
  ];

  const disasterTypes = [
    { name: 'Hurricanes', value: 35, color: '#ef4444' },
    { name: 'Earthquakes', value: 28, color: '#f97316' },
    { name: 'Floods', value: 20, color: '#3b82f6' },
    { name: 'Wildfires', value: 12, color: '#eab308' },
    { name: 'Droughts', value: 5, color: '#8b5cf6' },
  ];

  const regionData = [
    { region: 'North America', campaigns: 45, funding: 850000 },
    { region: 'Asia Pacific', campaigns: 38, funding: 720000 },
    { region: 'Europe', campaigns: 22, funding: 480000 },
    { region: 'South America', campaigns: 15, funding: 320000 },
    { region: 'Africa', campaigns: 12, funding: 280000 },
    { region: 'Middle East', campaigns: 8, funding: 150000 },
  ];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Global Impact Dashboard
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              See the real-world impact of your donations through comprehensive data visualization 
              and transparent reporting across all our relief efforts.
            </p>
            <div className="flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-primary rounded-full text-white font-medium w-fit mx-auto">
              <Shield className="w-5 h-5" />
              <span>Real-time Blockchain Data</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 bg-white dark:bg-secondary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 dark:bg-secondary-700 rounded-xl"
              >
                <div className={`flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-white dark:bg-secondary-800 rounded-full ${stat.color}`}>
                  <stat.icon className="w-8 h-8" />
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

      {/* Charts Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Monthly Donations Trend */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-secondary-800 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Monthly Donations & Lives Impacted
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#6b7280" />
                  <YAxis yAxisId="left" stroke="#6b7280" />
                  <YAxis yAxisId="right" orientation="right" stroke="#6b7280" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1f2937', 
                      border: 'none', 
                      borderRadius: '8px',
                      color: '#fff'
                    }}
                    formatter={(value, name) => [
                      name === 'donations' ? formatCurrency(Number(value)) : value,
                      name === 'donations' ? 'Donations' : 'Lives Impacted'
                    ]}
                  />
                  <Bar yAxisId="left" dataKey="donations" fill="#ef4444" />
                  <Line yAxisId="right" type="monotone" dataKey="lives" stroke="#3b82f6" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Disaster Types Distribution */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white dark:bg-secondary-800 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Disaster Types Supported
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={disasterTypes}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {disasterTypes.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </motion.div>
          </div>

          {/* Regional Impact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-secondary-800 rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Regional Impact Overview
            </h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={regionData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="region" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1f2937', 
                    border: 'none', 
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                  formatter={(value, name) => [
                    name === 'funding' ? formatCurrency(Number(value)) : value,
                    name === 'funding' ? 'Total Funding' : 'Active Campaigns'
                  ]}
                />
                <Bar dataKey="campaigns" fill="#3b82f6" />
                <Bar dataKey="funding" fill="#ef4444" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-12 bg-white dark:bg-secondary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Recent Success Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Real stories from communities we've helped rebuild and recover
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Hurricane Maria Recovery',
                location: 'Puerto Rico',
                impact: '2,500 families housed',
                image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400',
                description: 'Complete infrastructure rebuilding including schools, hospitals, and community centers.'
              },
              {
      id: '4',
      title: 'Flood Relief - Bangladesh',
      description: 'Monsoon flood relief operations. Distribution of food packages, clean water, and medical supplies to affected rural communities.',
      location: 'Sylhet, Bangladesh',
      target: 120000,
      raised: 45600,
      donors: 156,
      daysLeft: 22,
      image: 'https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'flood',
      verified: true
    },
              {
                title: 'Wildfire Recovery',
                location: 'California',
                impact: '800 homes rebuilt',
                image: 'https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&w=400',
                description: 'Community-wide rebuilding effort with sustainable and fire-resistant construction.'
              }
            ].map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-secondary-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="w-4 h-4 text-primary-600" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{story.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {story.title}
                  </h3>
                  <div className="text-lg font-semibold text-primary-600 mb-3">
                    {story.impact}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {story.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
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
              Be Part of the Next Relief Effort
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Your contribution, no matter the size, creates ripple effects of hope and healing 
              in communities around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setIsDonationModalOpen(true)}
                className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Heart className="w-5 h-5" />
                <span>Donate Now</span>
              </button>
              <Link 
                to="/campaigns"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors duration-200 flex items-center justify-center"
              >
                View Active Campaigns
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

export default Impact;