'use client';
import React from "react";

const navItems = [
  { id: "home", label: "Home", href: "/" },
  { id: "scanners", label: "Scanners", href: "/scanners" },
  { id: "data", label: "Data", href: "/data" },
  { id: "videos", label: "Videos", href: "/videos" },
];

export default function TabsNav({
  darkMode,
  activeTab = "scanners"
}: { darkMode: boolean; activeTab?: string }) {
  return (
    <div className={`${darkMode ? "bg-gray-900" : "bg-gray-800"} px-6 py-4`}>
      <nav className="flex justify-center space-x-8">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === item.id
                ? "text-orange-400 border-b-2 border-orange-400"
                : "text-white hover:text-orange-300"
            }`}
          >
            {item.label.toUpperCase()}
          </a>
        ))}
      </nav>
    </div>
  );
}
