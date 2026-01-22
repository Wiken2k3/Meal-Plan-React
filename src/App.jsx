import React, { useState } from 'react';
import MealPlan from './pages/MealPlan';
import './styles/variables.css';
import './styles/App.css';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return document.documentElement.classList.contains('dark');
  });

  const toggleDark = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="app-root">
      <MealPlan isDarkMode={isDarkMode} onToggleDark={toggleDark} />
    </div>
  );
}

