'use client';
import React from 'react';
import MainLayout from '../../components/MainLayout';
import TabsNav from '../../components/TabsNav';
import BrahmastraScannerPage from '../../tabs/BrahmastraScannerPage';
import { useRouter } from 'next/navigation';

export default function BrahmastraScannerRoute() {
  // State for dark mode.
  const [darkMode, setDarkMode] = React.useState(false);
  const toggleTheme = () => setDarkMode((prev) => !prev);

  // Router for back button
  const router = useRouter();

  return (
    <MainLayout darkMode={darkMode} toggleTheme={toggleTheme}>
      {/* Tabs navigation always visible under header */}
      <TabsNav darkMode={darkMode} activeTab="scanners" />

      {/* Back button always goes to /scanners */}
      <div className="mb-4">
        <button
          type="button"
          onClick={() => router.push('/tabs?tab=scanners')}
          className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium shadow transition-colors ${
            darkMode
              ? 'bg-gray-700 text-orange-300 hover:bg-gray-600'
              : 'bg-orange-100 text-orange-700 hover:bg-orange-200'
          }`}
        >
          <span style={{ fontSize: '1.2em' }}>←</span>
          Back to Scanners
        </button>
      </div>

      {/* The Brahmastra Scanner form itself */}
      <BrahmastraScannerPage darkMode={darkMode} />
    </MainLayout>
  );
}
