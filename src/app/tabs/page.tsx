'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import MainLayout from '../components/MainLayout';
import TabsNav from '../components/TabsNav';
import Scanners from './Scanners';
import HomeTab from './HomeTab';
import Data from './Data';
import Videos from './Videos';
// Add other tab imports as needed

export default function TabsPage() {
  const searchParams = useSearchParams();
  // set your dark mode logic as appropriate for your app
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode((prev) => !prev);

  // activeTab logic based on query param (default to 'home')
  const tabParam = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState(tabParam || 'home');

  useEffect(() => {
    if (tabParam && tabParam !== activeTab) {
      setActiveTab(tabParam);
    }
    // eslint-disable-next-line
  }, [tabParam]);

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
        return <HomeTab darkMode={darkMode} />;
    }
  };

  return (
    <MainLayout darkMode={darkMode} toggleTheme={toggleTheme}>
      <TabsNav darkMode={darkMode} activeTab={activeTab} />
      {renderContent()}
    </MainLayout>
  );
}
