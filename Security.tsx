import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Key, Eye, Server, CheckCircle } from 'lucide-react';

const Security: React.FC = () => {
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
                Security & Trust
              </h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Your security is our top priority. Learn about the comprehensive measures we take to protect your data and donations.
            </p>
            <div className="flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-primary rounded-full text-white font-medium w-fit mx-auto">
              <Lock className="w-5 h-5" />
              <span>Bank-Level Security</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Blockchain Security',
                description: 'All transactions are secured and verified on the blockchain, providing immutable records and complete transparency.',
                color: 'bg-blue-500'
              },
              {
                icon: Lock,
                title: 'End-to-End Encryption',
                description: 'Your personal data is encrypted using AES-256 encryption, the same standard used by banks and government agencies.',
                color: 'bg-green-500'
              },
              {
                icon: Key,
                title: 'Multi-Factor Authentication',
                description: 'Optional 2FA adds an extra layer of security to your account, protecting against unauthorized access.',
                color: 'bg-purple-500'
              },
              {
                icon: Eye,
                title: 'Continuous Monitoring',
                description: '24/7 security monitoring and threat detection systems protect against cyber attacks and fraud.',
                color: 'bg-orange-500'
              },
              {
                icon: Server,
                title: 'Secure Infrastructure',
                description: 'Our servers are hosted in SOC 2 compliant data centers with physical security and redundant systems.',
                color: 'bg-red-500'
              },
              {
                icon: CheckCircle,
                title: 'Regular Audits',
                description: 'Independent security audits and penetration testing ensure our systems meet the highest security standards.',
                color: 'bg-indigo-500'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-secondary-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Security Information */}
      <section className="py-16 bg-white dark:bg-secondary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Comprehensive Security Framework
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Our multi-layered security approach ensures your data and donations are always protected.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Data Protection
                  </h3>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>All sensitive data encrypted at rest and in transit</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>PCI DSS compliant payment processing</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>GDPR and CCPA compliant data handling</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>Regular data backups and disaster recovery</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Access Controls
                  </h3>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>Role-based access control (RBAC)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>Principle of least privilege</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>Regular access reviews and audits</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>Automated account lockout policies</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Blockchain Security
                  </h3>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>Immutable transaction records</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>Cryptographic hash verification</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>Distributed ledger technology</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>Smart contract security audits</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Monitoring & Response
                  </h3>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>Real-time threat detection</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>24/7 security operations center</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>Incident response procedures</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>Automated security alerts</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-xl p-8 border-l-4 border-primary-500">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Security Certifications & Compliance
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Industry Standards</h4>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• SOC 2 Type II Certified</li>
                    <li>• ISO 27001 Compliant</li>
                    <li>• PCI DSS Level 1</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Privacy Regulations</h4>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• GDPR Compliant</li>
                    <li>• CCPA Compliant</li>
                    <li>• PIPEDA Compliant</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Questions About Security?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our security team is available to address any concerns you may have.
              </p>
              <button className="px-8 py-3 bg-gradient-primary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200">
                Contact Security Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Security;