import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Camera, 
  Edit3, 
  Save, 
  X, 
  Shield, 
  Heart,
  Award,
  Settings,
  Bell,
  Lock,
  CreditCard,
  Download,
  Eye,
  EyeOff
} from 'lucide-react';

const Profile: React.FC = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('personal');
  const [showPassword, setShowPassword] = useState(false);
  
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '+91 7983686600',
    address: '23 main street, zakir nagar ,okhla new delhi ,110025',
    dateOfBirth: '2006-05-15',
    bio: 'Passionate about helping disaster victims and making a positive impact in the world.',
    occupation: 'Software Engineer',
    organization: 'Tech for Good Inc.',
    emergencyContact: 'faisal - 7239378279',
    preferredLanguage: 'English',
    timezone: 'Pacific Standard Time (PST)'
  });

  const [notifications, setNotifications] = useState({
    emailUpdates: true,
    smsAlerts: false,
    campaignUpdates: true,
    donationReceipts: true,
    emergencyAlerts: true,
    weeklyReports: false
  });

  const [privacy, setPrivacy] = useState({
    profileVisibility: 'public',
    donationHistory: 'private',
    contactInfo: 'friends',
    activityStatus: true
  });

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNotificationChange = (setting: string) => {
    setNotifications(prev => ({
      ...prev,
      [setting]: !prev[setting as keyof typeof prev]
    }));
  };

  const handlePrivacyChange = (setting: string, value: string | boolean) => {
    setPrivacy(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Save profile data logic here
    alert('Profile updated successfully!');
  };

  const handlePhotoUpload = () => {
    // Photo upload logic here
    alert('Photo upload functionality would be implemented here');
  };

  const stats = [
    { label: 'Total Donated', value: '$1,250', icon: Heart, color: 'text-green-600' },
    { label: 'Campaigns Supported', value: '8', icon: Award, color: 'text-blue-600' },
    { label: 'Lives Impacted', value: '127', icon: User, color: 'text-purple-600' },
    { label: 'Member Since', value: '2025', icon: Calendar, color: 'text-orange-600' },
  ];

  const tabs = [
    { id: 'personal', label: 'Personal Info', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy', icon: Lock },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'billing', label: 'Billing', icon: CreditCard },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'personal':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={profileData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-secondary-700 dark:text-white disabled:bg-gray-50 dark:disabled:bg-secondary-800"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={profileData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-secondary-700 dark:text-white disabled:bg-gray-50 dark:disabled:bg-secondary-800"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={profileData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-secondary-700 dark:text-white disabled:bg-gray-50 dark:disabled:bg-secondary-800"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Date of Birth
                </label>
                <input
                  type="date"
                  value={profileData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-secondary-700 dark:text-white disabled:bg-gray-50 dark:disabled:bg-secondary-800"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Occupation
                </label>
                <input
                  type="text"
                  value={profileData.occupation}
                  onChange={(e) => handleInputChange('occupation', e.target.value)}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-secondary-700 dark:text-white disabled:bg-gray-50 dark:disabled:bg-secondary-800"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  value={profileData.organization}
                  onChange={(e) => handleInputChange('organization', e.target.value)}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-secondary-700 dark:text-white disabled:bg-gray-50 dark:disabled:bg-secondary-800"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Address
              </label>
              <input
                type="text"
                value={profileData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                disabled={!isEditing}
                className="w-full px-4 py-3 border border-gray-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-secondary-700 dark:text-white disabled:bg-gray-50 dark:disabled:bg-secondary-800"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Bio
              </label>
              <textarea
                rows={4}
                value={profileData.bio}
                onChange={(e) => handleInputChange('bio', e.target.value)}
                disabled={!isEditing}
                className="w-full px-4 py-3 border border-gray-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-secondary-700 dark:text-white disabled:bg-gray-50 dark:disabled:bg-secondary-800"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Emergency Contact
              </label>
              <input
                type="text"
                value={profileData.emergencyContact}
                onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                disabled={!isEditing}
                className="w-full px-4 py-3 border border-gray-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-secondary-700 dark:text-white disabled:bg-gray-50 dark:disabled:bg-secondary-800"
              />
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Notification Preferences
            </h3>
            <div className="space-y-4">
              {Object.entries(notifications).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-secondary-700 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {key === 'emailUpdates' && 'Receive updates via email'}
                      {key === 'smsAlerts' && 'Get SMS notifications for urgent matters'}
                      {key === 'campaignUpdates' && 'Updates about campaigns you support'}
                      {key === 'donationReceipts' && 'Automatic donation receipts'}
                      {key === 'emergencyAlerts' && 'Critical emergency notifications'}
                      {key === 'weeklyReports' && 'Weekly impact reports'}
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={value}
                      onChange={() => handleNotificationChange(key)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        );

      case 'privacy':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Privacy Settings
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 dark:bg-secondary-700 rounded-lg">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                  Profile Visibility
                </h4>
                <select
                  value={privacy.profileVisibility}
                  onChange={(e) => handlePrivacyChange('profileVisibility', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-secondary-600 rounded-lg dark:bg-secondary-800 dark:text-white"
                >
                  <option value="public">Public</option>
                  <option value="friends">Friends Only</option>
                  <option value="private">Private</option>
                </select>
              </div>
              
              <div className="p-4 bg-gray-50 dark:bg-secondary-700 rounded-lg">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                  Donation History
                </h4>
                <select
                  value={privacy.donationHistory}
                  onChange={(e) => handlePrivacyChange('donationHistory', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-secondary-600 rounded-lg dark:bg-secondary-800 dark:text-white"
                >
                  <option value="public">Public</option>
                  <option value="friends">Friends Only</option>
                  <option value="private">Private</option>
                </select>
              </div>
              
              <div className="p-4 bg-gray-50 dark:bg-secondary-700 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Show Activity Status
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Let others see when you're online
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={privacy.activityStatus}
                      onChange={(e) => handlePrivacyChange('activityStatus', e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Security Settings
            </h3>
            
            <div className="p-4 bg-gray-50 dark:bg-secondary-700 rounded-lg">
              <h4 className="font-medium text-gray-900 dark:text-white mb-4">
                Change Password
              </h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Current Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className="w-full px-4 py-3 pr-12 border border-gray-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-secondary-800 dark:text-white"
                      placeholder="Enter current password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-secondary-800 dark:text-white"
                    placeholder="Enter new password"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-secondary-800 dark:text-white"
                    placeholder="Confirm new password"
                  />
                </div>
                <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200">
                  Update Password
                </button>
              </div>
            </div>
            
            <div className="p-4 bg-gray-50 dark:bg-secondary-700 rounded-lg">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                Two-Factor Authentication
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Add an extra layer of security to your account
              </p>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200">
                Enable 2FA
              </button>
            </div>
          </div>
        );

      case 'billing':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Billing & Payment Methods
            </h3>
            
            <div className="p-4 bg-gray-50 dark:bg-secondary-700 rounded-lg">
              <h4 className="font-medium text-gray-900 dark:text-white mb-4">
                Payment Methods
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white dark:bg-secondary-800 rounded-lg border">
                  <div className="flex items-center space-x-3">
                    <CreditCard className="w-6 h-6 text-gray-400" />
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">
                        •••• •••• •••• 4242
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Expires 12/25
                      </div>
                    </div>
                  </div>
                  <button className="text-red-600 hover:text-red-700 text-sm">
                    Remove
                  </button>
                </div>
              </div>
              <button className="mt-4 px-4 py-2 border border-gray-300 dark:border-secondary-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-secondary-600 transition-colors duration-200">
                Add Payment Method
              </button>
            </div>
            
            <div className="p-4 bg-gray-50 dark:bg-secondary-700 rounded-lg">
              <h4 className="font-medium text-gray-900 dark:text-white mb-4">
                Donation History
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white dark:bg-secondary-800 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      Hurricane Relief Fund
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      March 15, 2024
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-gray-900 dark:text-white">
                      $100.00
                    </div>
                    <button className="text-primary-600 hover:text-primary-700 text-sm flex items-center space-x-1">
                      <Download className="w-4 h-4" />
                      <span>Receipt</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (!user) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Please log in to access your profile
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-secondary-900 dark:to-secondary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-secondary-800 rounded-2xl shadow-xl p-8 mb-8"
        >
          <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
            {/* Profile Photo */}
            <div className="relative">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-32 h-32 rounded-full ring-4 ring-primary-500 shadow-lg"
              />
              <button
                onClick={handlePhotoUpload}
                className="absolute bottom-2 right-2 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors duration-200 shadow-lg"
              >
                <Camera className="w-5 h-5" />
              </button>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {user.name}
                  </h1>
                  <div className="flex items-center justify-center lg:justify-start space-x-2 mb-2">
                    <span className="px-3 py-1 bg-gradient-primary text-white text-sm font-medium rounded-full capitalize">
                      {user.role}
                    </span>
                    <div className="flex items-center space-x-1 px-2 py-1 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 text-sm rounded-full">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Online</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 max-w-md">
                    {profileData.bio}
                  </p>
                </div>
                
                <div className="mt-4 lg:mt-0">
                  {isEditing ? (
                    <div className="flex space-x-2">
                      <button
                        onClick={handleSave}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center space-x-2"
                      >
                        <Save className="w-4 h-4" />
                        <span>Save</span>
                      </button>
                      <button
                        onClick={() => setIsEditing(false)}
                        className="px-4 py-2 border border-gray-300 dark:border-secondary-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-secondary-700 transition-colors duration-200 flex items-center space-x-2"
                      >
                        <X className="w-4 h-4" />
                        <span>Cancel</span>
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 flex items-center space-x-2"
                    >
                      <Edit3 className="w-4 h-4" />
                      <span>Edit Profile</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center p-4 bg-gray-50 dark:bg-secondary-700 rounded-lg"
                  >
                    <div className={`flex items-center justify-center w-10 h-10 mx-auto mb-2 bg-white dark:bg-secondary-800 rounded-full ${stat.color}`}>
                      <stat.icon className="w-5 h-5" />
                    </div>
                    <div className="text-lg font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Profile Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white dark:bg-secondary-800 rounded-2xl shadow-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Settings
              </h3>
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors duration-200 ${
                      activeTab === tab.id
                        ? 'bg-gradient-primary text-white'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-secondary-700'
                    }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="bg-white dark:bg-secondary-800 rounded-2xl shadow-xl p-8">
              {renderTabContent()}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Profile;