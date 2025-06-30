import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Heart, MapPin, Calendar, Users, Target, Shield } from 'lucide-react';
import DonationModal from '../components/DonationModal';

interface Campaign {
  id: string;
  title: string;
  description: string;
  location: string;
  target: number;
  raised: number;
  donors: number;
  daysLeft: number;
  image: string;
  category: string;
  verified: boolean;
}

const Campaigns: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);

  const campaigns: Campaign[] = [
    {
      id: '1',
      title: 'Hurricane Relief - Florida Coast',
      description: 'Emergency relief for families affected by Hurricane Maria. Providing shelter, food, and medical assistance to over 500 displaced families.',
      location: 'Florida, USA',
      target: 150000,
      raised: 98750,
      donors: 245,
      daysLeft: 12,
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'hurricane',
      verified: true
    },
   
    {
      id: '3',
      title: 'Wildfire Emergency Support',
      description: 'Immediate assistance for wildfire evacuees. Providing emergency supplies, temporary accommodation, and livestock care.',
      location: 'California, USA',
      target: 80000,
      raised: 67200,
      donors: 178,
      daysLeft: 15,
      image: 'https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'wildfire',
      verified: true
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
      id: '5',
      title: 'Tornado Recovery - Midwest',
      description: 'Community rebuilding after devastating tornado. Focus on rebuilding schools, homes, and local businesses.',
      location: 'Oklahoma, USA',
      target: 95000,
      raised: 78400,
      donors: 203,
      daysLeft: 18,
      image: 'https://images.pexels.com/photos/1446076/pexels-photo-1446076.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'tornado',
      verified: true
    },
    {
      id: '6',
      title: 'Drought Emergency Relief',
      description: 'Critical water and food aid for drought-affected farming communities. Supporting both families and livestock.',
      location: 'Kenya',
      target: 180000,
      raised: 112300,
      donors: 267,
      daysLeft: 25,
      image: 'https://images.pexels.com/photos/6168061/pexels-photo-6168061.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'drought',
      verified: true
    },
    {
      id: '7',
      title: 'Cyclone Aftermath - Philippines',
      description: 'Emergency response for Typhoon Mawar survivors. Providing medical aid, clean water, and temporary shelter for displaced families.',
      location: 'Luzon, Philippines',
      target: 140000,
      raised: 89200,
      donors: 312,
      daysLeft: 14,
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'cyclone',
      verified: true
    },
    {
      id: '8',
      title: 'Volcanic Eruption Relief - Indonesia',
      description: 'Supporting communities affected by Mount Merapi eruption. Emergency evacuation, medical care, and ash cleanup operations.',
      location: 'Central Java, Indonesia',
      target: 110000,
      raised: 73500,
      donors: 198,
      daysLeft: 20,
      image: 'https://images.pexels.com/photos/4666748/pexels-photo-4666748.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'volcano',
      verified: true
    },
    {
      id: '9',
      title: 'Landslide Recovery - Nepal',
      description: 'Rescue and relief operations for landslide victims. Providing emergency shelter, food supplies, and medical assistance.',
      location: 'Sindhupalchok, Nepal',
      target: 85000,
      raised: 52300,
      donors: 167,
      daysLeft: 28,
      image: 'https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'landslide',
      verified: true
    },
    {
      id: '10',
      title: 'Blizzard Emergency - Canada',
      description: 'Winter storm relief for isolated communities. Providing heating supplies, food, and emergency transportation.',
      location: 'Manitoba, Canada',
      target: 75000,
      raised: 41800,
      donors: 134,
      daysLeft: 16,
      image: 'https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'blizzard',
      verified: true
    },
    {
      id: '11',
      title: 'Tsunami Recovery - Japan',
      description: 'Long-term recovery support for tsunami-affected coastal communities. Infrastructure rebuilding and livelihood restoration.',
      location: 'Fukushima, Japan',
      target: 250000,
      raised: 187600,
      donors: 456,
      daysLeft: 35,
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'tsunami',
      verified: true
    },
    {
      id: '12',
      title: 'Hailstorm Damage Relief - Argentina',
      description: 'Agricultural recovery after severe hailstorm. Supporting farmers with crop replanting and equipment replacement.',
      location: 'Mendoza, Argentina',
      target: 65000,
      raised: 38900,
      donors: 89,
      daysLeft: 24,
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'hailstorm',
      verified: true
    },
    {
      id: '13',
      title: 'Ice Storm Emergency - Eastern Europe',
      description: 'Power restoration and emergency heating for ice storm victims. Critical infrastructure repair and community support.',
      location: 'Ukraine',
      target: 130000,
      raised: 95400,
      donors: 278,
      daysLeft: 11,
      image: 'https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'icestorm',
      verified: true
    },
    {
      id: '14',
      title: 'Mudslide Recovery - Colombia',
      description: 'Emergency response for mudslide disaster. Search and rescue operations, medical aid, and temporary housing.',
      location: 'Mocoa, Colombia',
      target: 105000,
      raised: 67800,
      donors: 201,
      daysLeft: 19,
      image: 'https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'mudslide',
      verified: true
    },
    {
      id: '15',
      title: 'Avalanche Relief - Switzerland',
      description: 'Mountain rescue and recovery operations. Supporting affected ski resort communities and emergency responders.',
      location: 'Valais, Switzerland',
      target: 90000,
      raised: 54200,
      donors: 145,
      daysLeft: 21,
      image: 'https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'avalanche',
      verified: true
    }
  ];

  const categories = [
    { id: 'all', label: 'All Disasters' },
    { id: 'hurricane', label: 'Hurricanes' },
    { id: 'earthquake', label: 'Earthquakes' },
    { id: 'wildfire', label: 'Wildfires' },
    { id: 'flood', label: 'Floods' },
    { id: 'tornado', label: 'Tornadoes' },
    { id: 'drought', label: 'Droughts' },
    { id: 'cyclone', label: 'Cyclones' },
    { id: 'volcano', label: 'Volcanic Eruptions' },
    { id: 'landslide', label: 'Landslides' },
    { id: 'blizzard', label: 'Blizzards' },
    { id: 'tsunami', label: 'Tsunamis' },
    { id: 'hailstorm', label: 'Hailstorms' },
    { id: 'icestorm', label: 'Ice Storms' },
    { id: 'mudslide', label: 'Mudslides' },
    { id: 'avalanche', label: 'Avalanches' }
  ];

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesSearch = campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         campaign.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || campaign.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getProgressPercentage = (raised: number, target: number) => {
    return Math.min((raised / target) * 100, 100);
  };

  const handleDonateClick = (campaign: Campaign) => {
    setSelectedCampaign(campaign);
    setIsDonationModalOpen(true);
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
              Active Relief Campaigns
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Support ongoing disaster relief efforts around the world. Every donation is secured by blockchain 
              technology and tracked in real-time to ensure transparency.
            </p>
            <div className="flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-primary rounded-full text-white font-medium w-fit mx-auto">
              <Shield className="w-5 h-5" />
              <span>All Campaigns Blockchain Verified</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white dark:bg-secondary-800 border-b border-gray-200 dark:border-secondary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search campaigns or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-secondary-700 dark:text-white"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-secondary-700 dark:text-white"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Campaigns Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCampaigns.map((campaign, index) => (
              <motion.div
                key={campaign.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-secondary-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Campaign Image */}
                <div className="relative h-48">
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    {campaign.verified && (
                      <div className="flex items-center space-x-1 px-2 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
                        <Shield className="w-3 h-3" />
                        <span>Verified</span>
                      </div>
                    )}
                  </div>
                  <div className="absolute top-4 right-4 px-2 py-1 bg-black/50 text-white text-sm font-medium rounded-full">
                    {campaign.daysLeft} days left
                  </div>
                </div>

                {/* Campaign Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {campaign.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {campaign.description}
                  </p>

                  {/* Location */}
                  <div className="flex items-center space-x-2 mb-4">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {campaign.location}
                    </span>
                  </div>

                  {/* Progress */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Progress</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {getProgressPercentage(campaign.raised, campaign.target).toFixed(0)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-secondary-700 rounded-full h-2">
                      <div
                        className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
                        style={{ width: `${getProgressPercentage(campaign.raised, campaign.target)}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <div className="text-lg font-bold text-primary-600">
                        {formatCurrency(campaign.raised)}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        of {formatCurrency(campaign.target)}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-900 dark:text-white">
                        {campaign.donors}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        donors
                      </div>
                    </div>
                  </div>

                  {/* Donate Button */}
                  <button 
                    onClick={() => handleDonateClick(campaign)}
                    className="w-full px-6 py-3 bg-gradient-primary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200 flex items-center justify-center space-x-2"
                  >
                    <Heart className="w-5 h-5" />
                    <span>Donate Now</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredCampaigns.length === 0 && (
            <div className="text-center py-12">
              <Target className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No campaigns found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search terms or filters to find more campaigns.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Donation Modal */}
      <DonationModal 
        isOpen={isDonationModalOpen} 
        onClose={() => setIsDonationModalOpen(false)}
        campaign={selectedCampaign}
      />
    </div>
  );
};

export default Campaigns;