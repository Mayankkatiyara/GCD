'use client';
import React from 'react';

const dataTools = [
  {
    id: 'cycle-data',
    title: 'CYCLE DATA',
    description: 'Analyze market cycles and seasonal patterns for better timing decisions.',
    image: '🔄',
    color: 'bg-gradient-to-br from-purple-500 to-blue-500'
  },
  {
    id: 'anniversary-data',
    title: 'ANNIVERSARY DATA',
    description: 'Historical anniversary date analysis for identifying recurring patterns.',
    image: '📅',
    color: 'bg-gradient-to-br from-red-500 to-pink-500'
  },
  {
    id: 'pts-1',
    title: 'PTS 1',
    description: 'Price Time Square analysis for identifying key support and resistance levels.',
    image: '⏰',
    color: 'bg-gradient-to-br from-gray-500 to-slate-500'
  },
  {
    id: 'pts-2',
    title: 'PTS 2',
    description: 'Advanced Price Time Square calculations for precise entry and exit points.',
    image: '⏱️',
    color: 'bg-gradient-to-br from-indigo-500 to-purple-500'
  },
  {
    id: 'hexo-pt1',
    title: 'HEXO PT 1',
    description: 'Hexagonal price analysis for identifying geometric patterns in market data.',
    image: '⬡',
    color: 'bg-gradient-to-br from-teal-500 to-cyan-500'
  },
  {
    id: 'hexo-pt2',
    title: 'HEXO PT 2',
    description: 'Advanced hexagonal analysis with multi-dimensional price projections.',
    image: '⬢',
    color: 'bg-gradient-to-br from-amber-500 to-orange-500'
  },
  {
    id: 'input-analysis',
    title: 'INPUT ANALYSIS',
    description: 'Comprehensive data input analysis for market research and backtesting.',
    image: '📊',
    color: 'bg-gradient-to-br from-blue-500 to-indigo-500'
  },
  {
    id: 'price-time-square',
    title: 'PRICE TIME SQUARE',
    description: 'Master Price Time Square calculations for advanced market timing.',
    image: '⏰',
    color: 'bg-gradient-to-br from-green-500 to-teal-500'
  }
];

const Data = ({ darkMode }: { darkMode: boolean }) => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {dataTools.map((tool) => (
        <div
          key={tool.id}
          className={`${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} rounded-xl p-6 shadow-lg transition-all duration-300 cursor-pointer border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
        >
          <div className={`${tool.color} rounded-lg p-4 mb-4 flex items-center justify-center`}>
            <div className="text-2xl text-white">{tool.image}</div>
          </div>
          <h3 className={`text-lg font-bold text-center mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {tool.title}
          </h3>
          <p className={`text-center text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {tool.description}
          </p>
          <div className="mt-4 text-center">
            <button className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${darkMode ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-green-500 hover:bg-green-600 text-white'}`}>
              Access Data
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Data;
