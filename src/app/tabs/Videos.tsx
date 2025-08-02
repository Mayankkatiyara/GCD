'use client';
import React from 'react';
import { Play } from 'lucide-react';

const Videos = ({ darkMode }: { darkMode: boolean }) => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }, (_, i) => (
        <div
          key={i}
          className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
        >
          <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-lg h-32 flex items-center justify-center mb-4`}>
            <Play className={`w-12 h-12 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
          </div>
          <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Tutorial Video {i + 1}
          </h3>
          <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
            Learn advanced trading strategies and analysis techniques.
          </p>
          <button
            className={`w-full px-4 py-2 rounded-lg font-medium transition-colors ${darkMode ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-red-500 hover:bg-red-600 text-white'}`}
          >
            Watch Now
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default Videos;
