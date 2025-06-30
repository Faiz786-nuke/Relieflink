import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Shield, Send, Building, Users, Award, MessageCircle, HelpCircle } from 'lucide-react';
import FAQModal from '../components/FAQModal';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isFAQModalOpen, setIsFAQModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      info: 'support@relieflink.org',
      description: 'Get support or ask questions',
      color: 'bg-blue-500'
    },
    {
      icon: Phone,
      title: 'Call Us',
      info: '+91 9876543210',
      description: '24/7 emergency response line',
      color: 'bg-green-500'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: 'Street no 12, Connaught Place, New Delhi, Delhi 110001, India',
      description: 'Our headquarters office',
      color: 'bg-purple-500'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      info: 'Mon-Fri: 9AM-6PM IST',
      description: 'Emergency support: 24/7',
      color: 'bg-orange-500'
    }
  ];

  const orgStats = [
    { icon: Users, value: '150+', label: 'Team Members', color: 'text-blue-600' },
    { icon: Building, value: '25+', label: 'Partner Organizations', color: 'text-green-600' },
    { icon: Award, value: '98%', label: 'Transparency Rating', color: 'text-purple-600' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-hero dark:bg-gradient-hero-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
              Get in Touch
            </h1>
            <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Have questions about our platform? Need support? Want to partner with us? 
              We're here to help build a better world together.
            </p>
            <div className="flex items-center justify-center space-x-3 px-6 py-3 bg-gradient-primary rounded-full text-white text-lg font-medium w-fit mx-auto shadow-lg">
              <Shield className="w-6 h-6" />
              <span>Blockchain Secured Communications</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Organization Info */}
      <section className="py-20 bg-white dark:bg-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-8">
                About Relieflink Organization
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Founded in 2025, Relieflink is a pioneering nonprofit organization dedicated to revolutionizing 
                disaster relief through blockchain technology. Our mission is to create the most transparent, 
                efficient, and accountable platform for connecting donors with disaster victims worldwide.
              </p>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
                We believe that in times of crisis, technology should serve humanity's greatest needs. 
                Our platform has facilitated over $2.4 million in disaster relief donations, 
                helping 45,000+ individuals across 30+ countries rebuild their lives.
              </p>
              
              <div className="grid grid-cols-3 gap-8">
                {orgStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-xl mx-auto mb-4 shadow-lg">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-secondary-800 dark:to-secondary-700 rounded-3xl p-10 shadow-2xl"
            >
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Our Core Values
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Transparency</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Every donation is tracked on the blockchain for complete visibility.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Efficiency</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Automated systems ensure rapid response and fund distribution.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Accountability</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Regular audits and impact reports ensure responsible stewardship.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-secondary-800 dark:to-secondary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-10">
                Contact Information
              </h2>
              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-6 p-8 bg-white dark:bg-secondary-900 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
                  >
                    <div className={`flex items-center justify-center w-16 h-16 ${item.color} rounded-xl flex-shrink-0 shadow-lg`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xl text-primary-600 dark:text-primary-400 font-medium mb-2">
                        {item.info}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-lg">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* FAQ Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-8"
              >
                <button
                  onClick={() => setIsFAQModalOpen(true)}
                  className="w-full p-6 bg-gradient-primary text-white rounded-2xl hover:opacity-90 transition-opacity duration-200 flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl"
                >
                  <HelpCircle className="w-6 h-6" />
                  <span className="text-xl font-semibold">View FAQ</span>
                </button>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white dark:bg-secondary-900 rounded-3xl shadow-2xl p-10">
                <h2 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-8">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label htmlFor="name" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 text-lg border border-gray-300 dark:border-secondary-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-secondary-800 dark:text-white transition-colors duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 text-lg border border-gray-300 dark:border-secondary-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-secondary-800 dark:text-white transition-colors duration-200"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-6 py-4 text-lg border border-gray-300 dark:border-secondary-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-secondary-800 dark:text-white transition-colors duration-200 resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-5 bg-gradient-primary text-white text-xl font-semibold rounded-xl hover:opacity-90 transition-opacity duration-200 flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl"
                  >
                    <Send className="w-6 h-6" />
                    <span>Send Message</span>
                  </button>
                </form>

                <div className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-xl border-l-4 border-primary-500">
                  <div className="flex items-center space-x-3 mb-3">
                    <Shield className="w-6 h-6 text-primary-600" />
                    <span className="text-xl font-medium text-primary-800 dark:text-primary-200">Secure Communication</span>
                  </div>
                  <p className="text-primary-700 dark:text-primary-300 leading-relaxed">
                    All communications are encrypted and secured using blockchain technology for your privacy and security.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Modal */}
      <FAQModal 
        isOpen={isFAQModalOpen} 
        onClose={() => setIsFAQModalOpen(false)} 
      />
    </div>
  );
};

export default Contact;