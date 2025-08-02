'use client';
import React, { useState } from 'react';
import { Sun, Moon, RefreshCw, Bell, User, Home, Globe } from 'lucide-react';

import HomeTab from './tabs/HomeTab';
import Scanners from './tabs/Scanners';
import Data from './tabs/Data';
import Videos from './tabs/Videos';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'scanners', label: 'Scanners' },
  { id: 'data', label: 'Data' },
  { id: 'videos', label: 'Videos' },
  // add other nav items as needed
];

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const toggleTheme = () => setDarkMode(!darkMode);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeTab darkMode={darkMode} />;
      case 'scanners':
        return <Scanners darkMode={darkMode} />;
      case 'data':
        return <Data darkMode={darkMode} />;
      case 'videos':
        return <Videos darkMode={darkMode} />;
      default:
        return (
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-8 shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'} text-center`}>
            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {navItems.find(item => item.id === activeTab)?.label || 'Page'} - Coming Soon
            </h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              This section is under development. Please check back later.
            </p>
          </div>
        );
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      {/* Top Header */}
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b px-6 py-3 flex items-center justify-between`}>
        <div className="flex items-center space-x-2">
          <Globe className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
          <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Sindhi Colony Hanuman Nagar Bhusawal, Dist: Jalgaon (MS)
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            <div className="w-5 h-5 bg-blue-600 rounded"></div>
            <div className="w-5 h-5 bg-orange-500 rounded"></div>
            <div className="w-5 h-5 bg-pink-500 rounded"></div>
            <div className="w-5 h-5 bg-gray-600 rounded"></div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} px-6 py-8 text-center`}>
        <h1 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          GCD Study Hub
        </h1>
      </div>

      {/* Navigation */}
      <div className={`${darkMode ? 'bg-gray-900' : 'bg-gray-800'} px-6 py-4`}>
        <nav className="flex justify-center space-x-8">
          {navItems.slice(0, 4).map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-4 py-2 font-medium transition-colors ${
                activeTab === item.id
                  ? 'text-orange-400 border-b-2 border-orange-400'
                  : 'text-white hover:text-orange-300'
              }`}
            >
              {item.label.toUpperCase()}
            </button>
          ))}
        </nav>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed top-4 right-4 flex space-x-2 z-50">
        <button
          onClick={toggleTheme}
          className={`p-3 rounded-full shadow-lg transition-all duration-200 ${
            darkMode ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' : 'bg-white text-gray-600 hover:bg-gray-100'
          }`}
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <button className={`p-3 rounded-full shadow-lg transition-all duration-200 ${
          darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-white text-gray-600 hover:bg-gray-100'
        }`}>
          <RefreshCw className="w-5 h-5" />
        </button>
        <button className={`p-3 rounded-full shadow-lg transition-all duration-200 ${
          darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-white text-gray-600 hover:bg-gray-100'
        }`}>
          <Bell className="w-5 h-5" />
        </button>
        <button className={`p-3 rounded-full shadow-lg transition-all duration-200 ${
          darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-white text-gray-600 hover:bg-gray-100'
        }`}>
          <User className="w-5 h-5" />
        </button>
      </div>

      {/* Main Content */}
      <div className="px-6 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mb-6">
          <Home className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
          <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{'>'}</span>
          <span className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {navItems.find(item => item.id === activeTab)?.label || 'Home'}
          </span>
        </div>

        {/* Page Title */}
        <div className="mb-8">
          <h2 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {activeTab === 'home' && 'Market Dashboard'}
            {activeTab === 'scanners' && 'Stock Scanners'}
            {activeTab === 'data' && 'Analysis Tools'}
            {activeTab === 'videos' && 'Video Library'}
          </h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {activeTab === 'home' && 'Real-time market overview and portfolio performance'}
            {activeTab === 'scanners' && 'Advanced stock scanning tools for market analysis'}
            {activeTab === 'data' && 'Comprehensive data analysis and research tools'}
            {activeTab === 'videos' && 'Educational content and trading tutorials'}
          </p>
        </div>

        {/* Announcements sidebar for scanners and data pages */}
        {(activeTab === 'scanners' || activeTab === 'data') ? (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3">{renderContent()}</div>
            <div className="lg:col-span-1">
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  ANNOUNCEMENTS
                </h3>
                <div className="space-y-4">
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                    <h4 className={`font-semibold text-sm ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                      New Scanner Update
                    </h4>
                    <p className={`text-xs mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Enhanced algorithms for better accuracy
                    </p>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-green-50'}`}>
                    <h4 className={`font-semibold text-sm ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                      Market Analysis
                    </h4>
                    <p className={`text-xs mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Weekly market outlook available
                    </p>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-50'}`}>
                    <h4 className={`font-semibold text-sm ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                      Training Session
                    </h4>
                    <p className={`text-xs mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Live webinar this Friday
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          renderContent()
        )}
      </div>
    </div>
  );
};

export default App;
