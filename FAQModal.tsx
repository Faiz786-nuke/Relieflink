import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, ChevronUp, HelpCircle, Shield, MessageCircle } from 'lucide-react';
import LiveChatModal from './LiveChatModal';

interface FAQModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FAQModal: React.FC<FAQModalProps> = ({ isOpen, onClose }) => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [isLiveChatOpen, setIsLiveChatOpen] = useState(false);

  const faqs = [
    {
      question: "How does blockchain technology secure my donations?",
      answer: "Every donation is recorded on the blockchain, creating an immutable and transparent record. This ensures that your funds are tracked from donation to distribution, providing complete transparency and preventing fraud."
    },
    {
      question: "Are my donations tax-deductible?",
      answer: "Yes! Relieflink is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the full extent allowed by law. You can download your tax receipts directly from your dashboard."
    },
    {
      question: "How quickly do donations reach disaster victims?",
      answer: "Thanks to our blockchain infrastructure and automated distribution system, donations typically reach verified victims within 24-48 hours of being made. Emergency cases are prioritized and can receive funds within hours."
    },
    {
      question: "How do you verify disaster victims?",
      answer: "We use a multi-step verification process including government ID verification, location confirmation, damage assessment photos, and cross-referencing with official disaster databases and local authorities."
    },
    {
      question: "Can I track where my specific donation goes?",
      answer: "Absolutely! Each donation receives a unique blockchain transaction ID that allows you to track its journey from your wallet to the final recipient. You can view this information in your donor dashboard."
    },
    {
      question: "What percentage of my donation goes to administrative costs?",
      answer: "We maintain one of the lowest overhead rates in the industry at just 3%. This means 97% of your donation goes directly to disaster relief efforts. Our blockchain technology helps minimize administrative costs."
    },
    {
      question: "Can I set up recurring donations?",
      answer: "Yes! You can set up monthly, quarterly, or yearly recurring donations. You can modify or cancel these at any time through your dashboard."
    },
    {
      question: "Is my personal and financial information secure?",
      answer: "We use bank-level encryption and blockchain security protocols to protect all personal and financial information. We never store credit card information on our servers and comply with all data protection regulations."
    },
    {
      question: "How do you prioritize which disasters to support?",
      answer: "We use an AI-powered system that analyzes disaster severity, number of affected people, existing aid coverage, and urgency of need. This ensures resources are allocated where they can have the greatest impact."
    },
    {
      question: "Can I donate cryptocurrency?",
      answer: "Yes! We accept major cryptocurrencies including Bitcoin, Ethereum, and others. Crypto donations are processed through secure blockchain transactions and provide the same transparency as traditional donations."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  if (!isOpen) return null;

  return (
    <>
      <AnimatePresence>
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white dark:bg-secondary-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-secondary-700">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    Frequently Asked Questions
                  </h2>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                    <Shield className="w-4 h-4" />
                    <span>Get answers to common questions</span>
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 dark:hover:bg-secondary-700 rounded-lg transition-colors duration-200"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="border border-gray-200 dark:border-secondary-600 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-secondary-700 transition-colors duration-200"
                    >
                      <span className="font-semibold text-gray-900 dark:text-white pr-4">
                        {faq.question}
                      </span>
                      {openItems.includes(index) ? (
                        <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      )}
                    </button>
                    
                    <AnimatePresence>
                      {openItems.includes(index) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>

              {/* Contact Support */}
              <div className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Still have questions?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Our support team is available 24/7 to help you with any questions or concerns.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="px-6 py-2 bg-gradient-primary text-white rounded-lg hover:opacity-90 transition-opacity duration-200">
                    Contact Support
                  </button>
                  <button 
                    onClick={() => setIsLiveChatOpen(true)}
                    className="px-6 py-2 border border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Live Chat</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>

      {/* Live Chat Modal */}
      <LiveChatModal 
        isOpen={isLiveChatOpen} 
        onClose={() => setIsLiveChatOpen(false)} 
      />
    </>
  );
};

export default FAQModal;