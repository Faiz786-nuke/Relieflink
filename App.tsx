import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { DonationProvider } from './contexts/DonationContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Campaigns from './pages/Campaigns';
import Leaderboard from './pages/Leaderboard';
import Impact from './pages/Impact';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Badges from './pages/Badges';
import RequestHumanity from './pages/RequestHumanity';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Security from './pages/Security';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <DonationProvider>
          <Router>
            <div className="min-h-screen bg-white dark:bg-secondary-900 transition-colors duration-300">
              <Header />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/campaigns" element={<Campaigns />} />
                  <Route path="/leaderboard" element={<Leaderboard />} />
                  <Route path="/impact" element={<Impact />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/badges" element={<Badges />} />
                  <Route path="/request-humanity" element={<RequestHumanity />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms-of-service" element={<TermsOfService />} />
                  <Route path="/security" element={<Security />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </DonationProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;