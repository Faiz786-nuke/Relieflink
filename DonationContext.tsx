import React, { createContext, useContext, useState, useEffect } from 'react';

interface DonationItem {
  id: string;
  campaignId: string;
  campaignTitle: string;
  amount: number;
  frequency: 'one-time' | 'monthly' | 'quarterly' | 'yearly';
  anonymous: boolean;
}

interface DonationContextType {
  cart: DonationItem[];
  addToCart: (item: Omit<DonationItem, 'id'>) => void;
  removeFromCart: (id: string) => void;
  updateCartItem: (id: string, updates: Partial<DonationItem>) => void;
  clearCart: () => void;
  getTotalAmount: () => number;
  processDonation: () => Promise<void>;
  isProcessing: boolean;
}

const DonationContext = createContext<DonationContextType | undefined>(undefined);

export const useDonation = () => {
  const context = useContext(DonationContext);
  if (context === undefined) {
    throw new Error('useDonation must be used within a DonationProvider');
  }
  return context;
};

export const DonationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<DonationItem[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem('donationCart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('donationCart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: Omit<DonationItem, 'id'>) => {
    const newItem: DonationItem = {
      ...item,
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9)
    };
    setCart(prev => [...prev, newItem]);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateCartItem = (id: string, updates: Partial<DonationItem>) => {
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, ...updates } : item
    ));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + item.amount, 0);
  };

  const processDonation = async () => {
    setIsProcessing(true);
    // Simulate blockchain transaction processing
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Clear cart after successful donation
    clearCart();
    setIsProcessing(false);
    
    // Show success message
    alert('Donation processed successfully! Thank you for your contribution.');
  };

  return (
    <DonationContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateCartItem,
      clearCart,
      getTotalAmount,
      processDonation,
      isProcessing
    }}>
      {children}
    </DonationContext.Provider>
  );
};