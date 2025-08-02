'use client';
import React from 'react';
import { Sun, Moon, RefreshCw, Bell, User, Globe } from 'lucide-react';

const MainLayout = ({
  children,
  darkMode,
  toggleTheme,
}: {
  children: React.ReactNode;
  darkMode: boolean;
  toggleTheme: () => void;
}) => (
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
      <h1 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>GCD Study Hub</h1>
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
      {children}
    </div>
  </div>
);
export default MainLayout;
