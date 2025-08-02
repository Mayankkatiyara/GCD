'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const scannerTools = [
  {
    id: 'intraday-scanner',
    title: 'INTRADAY SCANNER',
    description: 'Real-time scanning for intraday trading opportunities. Identify momentum stocks, breakouts, and volume spikes for short-term trading strategies.',
    image: '📊',
    color: 'bg-gradient-to-br from-orange-500 to-yellow-500'
  },
  {
    id: 'brahmastra-scanner',
    title: 'BRAHMASTRA SCANNER',
    description: 'Advanced multi-timeframe scanner for comprehensive market analysis. Combines technical indicators with price action for powerful trading signals.',
    image: '🎯',
    color: 'bg-gradient-to-br from-green-500 to-emerald-500'
  }
];

const Scanners = ({ darkMode }: { darkMode: boolean }) => {
  const router = useRouter();

  const handleLaunchClick = (toolId: string) => {
    if (toolId === 'brahmastra-scanner') {
      router.push('/scanners/brahmastra');
    }
    // You can add navigation or actions for other scanners here
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {scannerTools.map((tool) => (
          <div
            key={tool.id}
            className={`${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} rounded-xl p-6 shadow-lg transition-all duration-300 cursor-pointer border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
          >
            <div className={`${tool.color} rounded-lg p-4 mb-4 flex items-center justify-center`}>
              <div className="text-4xl text-white">{tool.image}</div>
            </div>
            <h3 className={`text-xl font-bold text-center mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {tool.title}
            </h3>
            <p className={`text-center text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {tool.description}
            </p>
            <div className="mt-4 text-center">
              <button
                onClick={() => handleLaunchClick(tool.id)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${darkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
              >
                Launch Scanner
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scanners;
