'use client';
import React from 'react';
import { TrendingUp, DollarSign, Activity, Target, LineChart } from 'lucide-react';

const marketStats = [
  { label: 'Active Positions', value: '12', change: '+2.5%', icon: DollarSign, color: 'text-green-600' },
  { label: 'Portfolio Value', value: '₹2,45,680', change: '+5.2%', icon: TrendingUp, color: 'text-blue-600' },
  { label: 'Daily P&L', value: '₹12,450', change: '+8.3%', icon: Activity, color: 'text-green-600' },
  { label: 'Win Rate', value: '68%', change: '+2.1%', icon: Target, color: 'text-purple-600' }
];

const topStocks = [
  { symbol: 'RELIANCE', price: '2,450.50', change: '+2.3%', volume: '15.2M' },
  { symbol: 'TCS', price: '3,680.75', change: '+1.8%', volume: '8.5M' },
  { symbol: 'INFY', price: '1,520.25', change: '+3.2%', volume: '12.8M' },
  { symbol: 'HDFCBANK', price: '1,680.90', change: '-0.8%', volume: '18.2M' },
  { symbol: 'ICICIBANK', price: '920.45', change: '+1.5%', volume: '22.1M' }
];

const HomeTab = ({ darkMode }: { darkMode: boolean }) => (
  <div className="space-y-6">
    {/* Market Overview Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {marketStats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div key={stat.label} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</p>
                <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{stat.value}</p>
                <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>{stat.change}</p>
              </div>
              <div className={`p-3 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <Icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          </div>
        );
      })}
    </div>

    {/* Chart and Top Stocks */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Market Chart */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Market Performance</h3>
          <div className="flex space-x-2">
            <button className={`px-3 py-1 rounded-lg text-sm ${darkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white'}`}>1D</button>
            <button className={`px-3 py-1 rounded-lg text-sm ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>1W</button>
            <button className={`px-3 py-1 rounded-lg text-sm ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>1M</button>
          </div>
        </div>
        <div className="h-48 flex items-center justify-center">
          <LineChart className={`w-16 h-16 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`} />
          <div className="ml-4">
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Interactive Chart</p>
            <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>Real-time market data visualization</p>
          </div>
        </div>
      </div>

      {/* Top Stocks */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Top Stocks</h3>
        <div className="space-y-3">
          {topStocks.map((stock) => (
            <div key={stock.symbol} className={`flex items-center justify-between p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <div>
                <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{stock.symbol}</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Vol: {stock.volume}</p>
              </div>
              <div className="text-right">
                <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>₹{stock.price}</p>
                <p className={`text-sm ${stock.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>{stock.change}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Analysis Tools Overview */}
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Analysis Tools Status</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} text-center`}>
          <div className="text-2xl mb-2">🔍</div>
          <div className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>2</div>
          <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Active Scanners</div>
        </div>
        <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} text-center`}>
          <div className="text-2xl mb-2">📊</div>
          <div className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>8</div>
          <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Data Analysis Tools</div>
        </div>
        <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} text-center`}>
          <div className="text-2xl mb-2">🎥</div>
          <div className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>15</div>
          <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Tutorial Videos</div>
        </div>
      </div>
    </div>
  </div>
);

export default HomeTab;
