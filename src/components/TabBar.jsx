import React from 'react'
import {
  CalendarDays,
  FileText,
  ShoppingBasket,
  Sparkles,
  MoreHorizontal
} from 'lucide-react'
import './TabBar.css'

const tabs = [
  { id: 'meal-plan', name: 'Meal Plan', icon: CalendarDays },
  { id: 'recipes', name: 'Recipes', icon: FileText },
  { id: 'groceries', name: 'Groceries', icon: ShoppingBasket },
  { id: 'discover', name: 'Discover', icon: Sparkles },
  { id: 'settings', name: 'Settings', icon: MoreHorizontal },
]

export default function TabBar({ activeTab = 'meal-plan' }) {
  return (
    <div className="tab-bar">
      {tabs.map((tab) => {
        const Icon = tab.icon
        const isActive = activeTab === tab.id

        return (
          <button
            key={tab.id}
            className={`tab-bar-btn ${isActive ? 'active' : ''}`}
          >
            <Icon className="tab-bar-icon" />
            <span className="tab-bar-label">{tab.name}</span>
          </button>
        )
      })}
    </div>
  )
}
