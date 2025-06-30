import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, Shield, Calendar, DollarSign } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface TaxReceiptModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TaxReceiptModal: React.FC<TaxReceiptModalProps> = ({ isOpen, onClose }) => {
  const { user } = useAuth();

  const donations = [
    { date: '2024-01-15', campaign: 'Hurricane Relief Fund', amount: 250, receiptId: 'TR-2024-001' },
    { date: '2024-02-20', campaign: 'Earthquake Response', amount: 100, receiptId: 'TR-2024-002' },
    { date: '2024-03-10', campaign: 'Wildfire Recovery', amount: 75, receiptId: 'TR-2024-003' },
    { date: '2024-04-05', campaign: 'Flood Relief', amount: 150, receiptId: 'TR-2024-004' },
  ];

  const totalDonations = donations.reduce((sum, donation) => sum + donation.amount, 0);

  const handleDownloadReceipt = (receiptId: string) => {
    // Simulate PDF download
    const element = document.createElement('a');
    element.href = '#';
    element.download = `tax-receipt-${receiptId}.pdf`;
    element.click();
    alert(`Tax receipt ${receiptId} downloaded successfully!`);
  };

  const handleDownloadYearlyReport = () => {
    // Simulate yearly report download
    const element = document.createElement('a');
    element.href = '#';
    element.download = 'yearly-tax-report-2024.pdf';
    element.click();
    alert('Yearly tax report downloaded successfully!');
  };

  if (!isOpen) return null;

  return (
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
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Tax Receipts
                </h2>
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                  <Shield className="w-4 h-4" />
                  <span>Blockchain Verified</span>
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
            {/* Summary */}
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-xl p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600 mb-1">
                    ${totalDonations}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Total Donations 2024
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600 mb-1">
                    {donations.length}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Tax Receipts Available
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600 mb-1">
                    ${Math.round(totalDonations * 0.3)}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Estimated Tax Deduction
                  </div>
                </div>
              </div>
            </div>

            {/* Yearly Report */}
            <div className="mb-6">
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-secondary-700 rounded-xl">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-6 h-6 text-primary-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      2024 Yearly Tax Report
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Complete summary of all donations for tax filing
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleDownloadYearlyReport}
                  className="px-4 py-2 bg-gradient-primary text-white rounded-lg hover:opacity-90 transition-opacity duration-200 flex items-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </button>
              </div>
            </div>

            {/* Individual Receipts */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Individual Tax Receipts
              </h3>
              <div className="space-y-3">
                {donations.map((donation, index) => (
                  <motion.div
                    key={donation.receiptId}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 border border-gray-200 dark:border-secondary-600 rounded-xl hover:bg-gray-50 dark:hover:bg-secondary-700 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {donation.campaign}
                        </h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                          <span>{new Date(donation.date).toLocaleDateString()}</span>
                          <span>Receipt ID: {donation.receiptId}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-lg font-bold text-primary-600">
                          ${donation.amount}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Tax Deductible
                        </div>
                      </div>
                      <button
                        onClick={() => handleDownloadReceipt(donation.receiptId)}
                        className="p-2 bg-gray-100 dark:bg-secondary-600 rounded-lg hover:bg-gray-200 dark:hover:bg-secondary-500 transition-colors duration-200"
                      >
                        <Download className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tax Information */}
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                Tax Deduction Information
              </h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Relieflink is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible 
                to the full extent allowed by law. Please consult with your tax advisor for specific guidance 
                on claiming these deductions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default TaxReceiptModal;