'use client';
import React, { useState } from 'react';
import { 
  TrendingUp, 
  BarChart3, 
  Search, 
  Database, 
  Play, 
  Settings, 
  HelpCircle, 
  LogOut,
  Sun,
  Moon,
  Bell,
  RefreshCw,
  User,
  Home,
  FolderOpen,
  Video,
  Calendar,
  DollarSign,
  Activity,
  PieChart,
  Target,
  Clock,
  LineChart,
  Zap,
  Globe
} from 'lucide-react';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'scanners', label: 'Scanners', icon: Search },
    { id: 'data', label: 'Data', icon: Database },
    { id: 'videos', label: 'Videos', icon: Play },
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'help', label: 'Help', icon: HelpCircle },
    { id: 'logout', label: 'Logout', icon: LogOut }
  ];

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

  const renderContent = () => {
    switch(activeTab) {
      case 'home':
        return (
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
      
      case 'scanners':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {scannerTools.map((tool) => (
                <div key={tool.id} className={`${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} rounded-xl p-6 shadow-lg transition-all duration-300 cursor-pointer border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
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
                    <button className={`px-6 py-2 rounded-lg font-medium transition-colors ${darkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}>
                      Launch Scanner
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'data':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dataTools.map((tool) => (
                <div key={tool.id} className={`${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} rounded-xl p-6 shadow-lg transition-all duration-300 cursor-pointer border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
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
      
      case 'videos':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }, (_, i) => (
                <div key={i} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-lg h-32 flex items-center justify-center mb-4`}>
                    <Play className={`w-12 h-12 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  </div>
                  <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Tutorial Video {i + 1}
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                    Learn advanced trading strategies and analysis techniques.
                  </p>
                  <button className={`w-full px-4 py-2 rounded-lg font-medium transition-colors ${darkMode ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-red-500 hover:bg-red-600 text-white'}`}>
                    Watch Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      
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
        {(activeTab === 'scanners' || activeTab === 'data') && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3">
              {renderContent()}
            </div>
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
        )}

        {/* Full width content for other pages */}
        {activeTab !== 'scanners' && activeTab !== 'data' && renderContent()}
      </div>
    </div>
  );
};

export default App;

