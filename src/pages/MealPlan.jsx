import React from 'react';
import AppBar from '../components/AppBar';
import DaySection from '../components/DaySection';
import TabBar from '../components/TabBar';
import mealData from '../data/meal';
import './MealPlan.css';

export default function MealPlan({ isDarkMode, onToggleDark }) {
  return (
    <div className="meal-plan-container">
      {/* App Bar */}
      <AppBar isDarkMode={isDarkMode} onToggleDark={onToggleDark} />

      {/* Main Content */}
      <div className="meal-plan-content">
        <div className="meal-plan-list">
          {mealData.map((day) => (
            <DaySection 
              key={day.date}
              day={day.label.split(' · ')[0]}
              date={day.label.split(' · ')[1]}
              meals={day.meals}
            />
          ))}
        </div>
      </div>

      {/* Tab Bar - Fixed Footer */}
      <TabBar activeTab="meal-plan" />
    </div>
  );
}
