import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, Users, Shield, AlertTriangle, CheckCircle } from 'lucide-react';

const TermsOfService: React.FC = () => {
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
              <Scale className="w-12 h-12 text-primary-600" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Terms of Service
              </h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Please read these terms carefully before using our platform. By using Relieflink, you agree to these terms.
            </p>
            <div className="flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-primary rounded-full text-white font-medium w-fit mx-auto">
              <FileText className="w-5 h-5" />
              <span>Effective Date: January 1, 2025</span>
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
                <CheckCircle className="w-6 h-6 text-primary-600" />
                <span>Acceptance of Terms</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                By accessing and using the Relieflink platform, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
                <Users className="w-6 h-6 text-primary-600" />
                <span>User Accounts</span>
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  When creating an account, you agree to:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain the security of your password and account</li>
                  <li>Accept responsibility for all activities under your account</li>
                  <li>Notify us immediately of any unauthorized use</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
                <Shield className="w-6 h-6 text-primary-600" />
                <span>Donation Terms</span>
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  All donations made through our platform are:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                  <li>Final and non-refundable unless required by law</li>
                  <li>Processed securely through blockchain technology</li>
                  <li>Tax-deductible to the extent allowed by law</li>
                  <li>Distributed according to our allocation policies</li>
                  <li>Tracked transparently on the blockchain</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
                <AlertTriangle className="w-6 h-6 text-primary-600" />
                <span>Prohibited Uses</span>
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  You may not use our platform to:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Transmit harmful or malicious code</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with the proper functioning of the platform</li>
                  <li>Impersonate another person or entity</li>
                  <li>Submit false or misleading information</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
                <Scale className="w-6 h-6 text-primary-600" />
                <span>Limitation of Liability</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Relieflink shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
                including without limitation, loss of profits, data, use, goodwill, or other intangible losses, 
                resulting from your use of the platform.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
                <FileText className="w-6 h-6 text-primary-600" />
                <span>Modifications</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify users of any material changes 
                via email or through the platform. Your continued use of the service after such modifications 
                constitutes acceptance of the updated terms.
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-xl p-6 border-l-4 border-primary-500">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Questions About Terms
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                If you have any questions about these Terms of Service, please contact us at 
                legal@relieflink.org or call +91 9876543210.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;