import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import MealPlan from './pages/MealPlan/MealPlan'
import Recipes from './pages/Recipes/Recipes'
import Groceries from './pages/Groceries/Groceries'
import Discover from './pages/Discover/Discover'
import Settings from './pages/Settings/Settings'

import './styles/variables.css'
import './styles/App.css'

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() =>
    document.documentElement.classList.contains('dark')
  )

  const toggleDark = () => {
    const next = !isDarkMode
    setIsDarkMode(next)
    document.documentElement.classList.toggle('dark', next)
  }

  return (
    <div className="app-root">
      <Routes>
        <Route
          path="/"
          element={
            <MealPlan
              isDarkMode={isDarkMode}
              onToggleDark={toggleDark}
            />
          }
        />

        <Route path="/recipes" element={<Recipes />} />
        <Route path="/groceries" element={<Groceries />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  )
}
