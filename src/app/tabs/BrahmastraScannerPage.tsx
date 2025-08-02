'use client';
import React, { useState } from 'react';

const stockTypes = [
  { value: 'FNO', label: 'FNO' },
  { value: 'PENNY', label: 'PENNY' },
  { value: 'CASH', label: 'CASH' },
  { value: 'MYLIST', label: 'MY LIST' },
];

const BrahmastraScannerPage = ({ darkMode }: { darkMode: boolean }) => {
  const today = new Date().toISOString().split('T')[0];
  const [stockType, setStockType] = useState('FNO');
  const [firstDate, setFirstDate] = useState(today);
  const [secondDate, setSecondDate] = useState(today);
  const [percentLess, setPercentLess] = useState('3');
  const [percentMore, setPercentMore] = useState('3');
  const [withValue, setWithValue] = useState(false);

  const handleShow = (e: React.FormEvent) => {
    e.preventDefault();
    // You can add logic here or dispatch a request.
    alert('Show logic not implemented');
  };

  return (
    <div className={`max-w-3xl mx-auto mt-10 p-8 ${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-2xl shadow-lg border ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
      <h2 className={`text-2xl font-bold mb-6 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
        BRAHMASTRA SCANNER
      </h2>
      <form onSubmit={handleShow} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Stock Type */}
        <div>
          <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-100' : 'text-gray-700'}`}>Stock Type</label>
          <select
            className={`w-full rounded-lg border px-4 py-2 ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
            value={stockType}
            onChange={e => setStockType(e.target.value)}
          >
            {stockTypes.map((type) => (
              <option key={type.value} value={type.value}>{type.label}</option>
            ))}
          </select>
        </div>
        {/* First Date Field */}
        <div>
          <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-100' : 'text-gray-700'}`}>First Date</label>
          <input
            type="date"
            value={firstDate}
            onChange={e => setFirstDate(e.target.value)}
            className={`w-full rounded-lg border px-4 py-2 ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
          />
        </div>
        {/* Second Date Field */}
        <div>
          <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-100' : 'text-gray-700'}`}>Second Date</label>
          <input
            type="date"
            value={secondDate}
            onChange={e => setSecondDate(e.target.value)}
            className={`w-full rounded-lg border px-4 py-2 ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
          />
        </div>
        {/* Percent Less */}
        <div>
          <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-100' : 'text-gray-700'}`}>Percentage ( &lt; )</label>
          <input
            type="number"
            min={0}
            value={percentLess}
            onChange={e => setPercentLess(e.target.value)}
            placeholder="3"
            className={`w-full rounded-lg border px-4 py-2 ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
          />
        </div>
        {/* Percent More */}
        <div>
          <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-100' : 'text-gray-700'}`}>Percentage ( &gt; )</label>
          <input
            type="number"
            min={0}
            value={percentMore}
            onChange={e => setPercentMore(e.target.value)}
            placeholder="3"
            className={`w-full rounded-lg border px-4 py-2 ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
          />
        </div>
        {/* With Value Checkbox */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="withValue"
            checked={withValue}
            onChange={e => setWithValue(e.target.checked)}
            className="w-5 h-5 accent-blue-600"
          />
          <label htmlFor="withValue" className={`ml-2 text-base ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>With Value</label>
        </div>
        {/* Operators Info */}
        <div className="md:col-span-2">
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Use Operators for Filter: <span className="font-mono">&lt; &lt;= &gt; &gt;= = ~ ^ ! ( ) | || &amp;&amp;</span>
          </p>
        </div>
        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-center mt-4">
          <button
            type="submit"
            className={`px-8 py-3 rounded-lg font-semibold text-lg shadow-md transition-colors ${
              darkMode
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-orange-500 hover:bg-orange-600 text-white'
            }`}
          >
            SHOW
          </button>
        </div>
      </form>
    </div>
  );
};

export default BrahmastraScannerPage;
