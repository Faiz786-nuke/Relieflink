import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, UserCheck, FileText } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
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
              <Shield className="w-12 h-12 text-primary-600" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Privacy Policy
              </h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Your privacy is our priority. Learn how we collect, use, and protect your personal information.
            </p>
            <div className="flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-primary rounded-full text-white font-medium w-fit mx-auto">
              <Lock className="w-5 h-5" />
              <span>Last Updated: January 2025</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-secondary-800 rounded-2xl shadow-xl p-8 space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
                <Eye className="w-6 h-6 text-primary-600" />
                <span>Information We Collect</span>
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  We collect information you provide directly to us, such as when you create an account, make a donation, 
                  or contact us for support. This includes:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                  <li>Personal identification information (name, email address, phone number)</li>
                  <li>Payment information (processed securely through our payment partners)</li>
                  <li>Donation history and preferences</li>
                  <li>Communication preferences and support interactions</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
                <Database className="w-6 h-6 text-primary-600" />
                <span>How We Use Your Information</span>
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                  <li>Process donations and provide tax receipts</li>
                  <li>Send updates about campaigns and impact reports</li>
                  <li>Provide customer support and respond to inquiries</li>
                  <li>Improve our services and user experience</li>
                  <li>Comply with legal obligations and prevent fraud</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
                <UserCheck className="w-6 h-6 text-primary-600" />
                <span>Information Sharing</span>
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third parties except:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                  <li>With your explicit consent</li>
                  <li>To trusted service providers who assist in operating our platform</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transfer or merger</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
                <Shield className="w-6 h-6 text-primary-600" />
                <span>Data Security</span>
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  We implement robust security measures to protect your personal information:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                  <li>Blockchain technology for transparent and secure transactions</li>
                  <li>End-to-end encryption for sensitive data</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Secure data centers with 24/7 monitoring</li>
                  <li>Employee training on data protection best practices</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
                <FileText className="w-6 h-6 text-primary-600" />
                <span>Your Rights</span>
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                  <li>Access and review your personal information</li>
                  <li>Correct inaccurate or incomplete data</li>
                  <li>Delete your account and associated data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request data portability</li>
                  <li>File a complaint with regulatory authorities</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-xl p-6 border-l-4 border-primary-500">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Contact Us
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                If you have any questions about this Privacy Policy or our data practices, 
                please contact us at privacy@relieflink.org or +91 9876543210.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;