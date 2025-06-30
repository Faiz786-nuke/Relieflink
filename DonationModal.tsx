import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Shield, CreditCard, Wallet, Plus, Minus, Check } from 'lucide-react';
import { useDonation } from '../contexts/DonationContext';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  campaign?: {
    id: string;
    title: string;
    image: string;
    target: number;
    raised: number;
  };
}

const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose, campaign }) => {
  const { addToCart, cart, getTotalAmount, processDonation, isProcessing } = useDonation();
  const [donationAmount, setDonationAmount] = useState(50);
  const [frequency, setFrequency] = useState<'one-time' | 'monthly' | 'quarterly' | 'yearly'>('one-time');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'crypto'>('card');
  const [step, setStep] = useState<'amount' | 'cart' | 'payment' | 'success'>('amount');
  const [finalDonationAmount, setFinalDonationAmount] = useState(0);

  const predefinedAmounts = [25, 50, 100, 250, 500, 1000];

  const handleAddToCart = () => {
    if (campaign) {
      addToCart({
        campaignId: campaign.id,
        campaignTitle: campaign.title,
        amount: donationAmount,
        frequency,
        anonymous: isAnonymous
      });
      setStep('cart');
    } else {
      // For general donations without specific campaign
      addToCart({
        campaignId: 'general',
        campaignTitle: 'General Relief Fund',
        amount: donationAmount,
        frequency,
        anonymous: isAnonymous
      });
      setStep('cart');
    }
  };

  const handleProceedToPayment = () => {
    setStep('payment');
  };

  const handleProcessPayment = async () => {
    const totalAmount = getTotalAmount();
    setFinalDonationAmount(totalAmount);
    await processDonation();
    setStep('success');
    setTimeout(() => {
      onClose();
      setStep('amount');
      setFinalDonationAmount(0);
    }, 4000);
  };

  const handleCloseModal = () => {
    onClose();
    setStep('amount');
    setFinalDonationAmount(0);
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
          onClick={handleCloseModal}
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-white dark:bg-secondary-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-secondary-700">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Make a Donation
                </h2>
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                  <Shield className="w-4 h-4" />
                  <span>Blockchain Secured</span>
                </div>
              </div>
            </div>
            <button
              onClick={handleCloseModal}
              className="p-2 hover:bg-gray-100 dark:hover:bg-secondary-700 rounded-lg transition-colors duration-200"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {step === 'amount' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                {campaign && (
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-secondary-700 rounded-xl">
                    <img
                      src={campaign.image}
                      alt={campaign.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {campaign.title}
                      </h3>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        ${campaign.raised.toLocaleString()} raised of ${campaign.target.toLocaleString()}
                      </div>
                    </div>
                  </div>
                )}

                {!campaign && (
                  <div className="p-4 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-xl">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      General Relief Fund
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Your donation will be allocated to the most urgent disaster relief needs worldwide.
                    </p>
                  </div>
                )}

                {/* Amount Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Donation Amount
                  </label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {predefinedAmounts.map(amount => (
                      <button
                        key={amount}
                        onClick={() => setDonationAmount(amount)}
                        className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                          donationAmount === amount
                            ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-600'
                            : 'border-gray-300 dark:border-secondary-600 hover:border-primary-300'
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setDonationAmount(Math.max(1, donationAmount - 10))}
                      className="p-2 bg-gray-100 dark:bg-secondary-700 rounded-lg hover:bg-gray-200 dark:hover:bg-secondary-600"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <input
                      type="number"
                      value={donationAmount}
                      onChange={(e) => setDonationAmount(Math.max(1, parseInt(e.target.value) || 1))}
                      className="flex-1 px-4 py-3 border border-gray-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-secondary-700 dark:text-white text-center text-lg font-semibold"
                    />
                    <button
                      onClick={() => setDonationAmount(donationAmount + 10)}
                      className="p-2 bg-gray-100 dark:bg-secondary-700 rounded-lg hover:bg-gray-200 dark:hover:bg-secondary-600"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Frequency */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Donation Frequency
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: 'one-time', label: 'One-time' },
                      { value: 'monthly', label: 'Monthly' },
                      { value: 'quarterly', label: 'Quarterly' },
                      { value: 'yearly', label: 'Yearly' }
                    ].map(option => (
                      <button
                        key={option.value}
                        onClick={() => setFrequency(option.value as any)}
                        className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                          frequency === option.value
                            ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-600'
                            : 'border-gray-300 dark:border-secondary-600 hover:border-primary-300'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Anonymous Option */}
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="anonymous"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                    className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <label htmlFor="anonymous" className="text-sm text-gray-700 dark:text-gray-300">
                    Make this donation anonymous
                  </label>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="w-full px-6 py-3 bg-gradient-primary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200 flex items-center justify-center space-x-2"
                >
                  <Heart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
              </motion.div>
            )}

            {step === 'cart' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Donation Cart ({cart.length} items)
                </h3>
                
                <div className="space-y-3">
                  {cart.map(item => (
                    <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-secondary-700 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">
                          {item.campaignTitle}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {item.frequency} • {item.anonymous ? 'Anonymous' : 'Public'}
                        </div>
                      </div>
                      <div className="text-lg font-bold text-primary-600">
                        ${item.amount}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 dark:border-secondary-700 pt-4">
                  <div className="flex items-center justify-between text-xl font-bold text-gray-900 dark:text-white">
                    <span>Total Amount:</span>
                    <span className="text-primary-600">${getTotalAmount()}</span>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={() => setStep('amount')}
                    className="flex-1 px-6 py-3 border border-gray-300 dark:border-secondary-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-secondary-700 transition-colors duration-200"
                  >
                    Add More
                  </button>
                  <button
                    onClick={handleProceedToPayment}
                    className="flex-1 px-6 py-3 bg-gradient-primary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200"
                  >
                    Proceed to Payment
                  </button>
                </div>
              </motion.div>
            )}

            {step === 'payment' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Payment Method
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setPaymentMethod('card')}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 flex items-center space-x-3 ${
                      paymentMethod === 'card'
                        ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                        : 'border-gray-300 dark:border-secondary-600 hover:border-primary-300'
                    }`}
                  >
                    <CreditCard className="w-6 h-6" />
                    <span>Credit Card</span>
                  </button>
                  <button
                    onClick={() => setPaymentMethod('crypto')}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 flex items-center space-x-3 ${
                      paymentMethod === 'crypto'
                        ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                        : 'border-gray-300 dark:border-secondary-600 hover:border-primary-300'
                    }`}
                  >
                    <Wallet className="w-6 h-6" />
                    <span>Crypto Wallet</span>
                  </button>
                </div>

                {paymentMethod === 'card' && (
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Card Number"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-secondary-700 dark:text-white"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="px-4 py-3 border border-gray-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-secondary-700 dark:text-white"
                      />
                      <input
                        type="text"
                        placeholder="CVV"
                        className="px-4 py-3 border border-gray-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-secondary-700 dark:text-white"
                      />
                    </div>
                  </div>
                )}

                {paymentMethod === 'crypto' && (
                  <div className="p-4 bg-gray-50 dark:bg-secondary-700 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Connect your crypto wallet to proceed with blockchain payment
                    </p>
                    <button className="w-full px-4 py-2 bg-gradient-blue text-white rounded-lg hover:opacity-90 transition-opacity duration-200">
                      Connect Wallet
                    </button>
                  </div>
                )}

                <div className="border-t border-gray-200 dark:border-secondary-700 pt-4">
                  <div className="flex items-center justify-between text-xl font-bold text-gray-900 dark:text-white mb-4">
                    <span>Total Amount:</span>
                    <span className="text-primary-600">${getTotalAmount()}</span>
                  </div>
                  
                  <button
                    onClick={handleProcessPayment}
                    disabled={isProcessing}
                    className="w-full px-6 py-3 bg-gradient-primary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isProcessing ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <Shield className="w-5 h-5" />
                        <span>Complete Donation</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            )}

            {step === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-6 py-8"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-10 h-10 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Donation Successful!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Thank you for your generous contribution of ${finalDonationAmount}
                  </p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Your donation has been processed securely via blockchain technology. 
                    You will receive a confirmation email shortly.
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default DonationModal;