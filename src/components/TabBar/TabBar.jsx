import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  CalendarDays,
  FileText,
  ShoppingBasket,
  WandSparkles,
  MoreHorizontal
} from 'lucide-react'

import './TabBar.css'

const tabs = [
  { id: 'meal-plan', name: 'Meal Plan', icon: CalendarDays },
  { id: 'recipes', name: 'Recipes', icon: FileText },
  { id: 'groceries', name: 'Groceries', icon: ShoppingBasket },
  { id: 'discover', name: 'Discover', icon: WandSparkles },
  { id: 'settings', name: 'Settings', icon: MoreHorizontal },
]

export default function TabBar() {
  const navigate = useNavigate()
  const location = useLocation()

  const activeTab =
    location.pathname === '/'
      ? 'meal-plan'
      : location.pathname.replace('/', '')

  return (
    <div className="tab-bar">
      {tabs.map((tab) => {
        const Icon = tab.icon
        const isActive = tab.id === activeTab

        return (
          <button
            key={tab.id}
            className={`tab-bar-btn ${isActive ? 'active' : ''}`}
            onClick={() =>
              navigate(tab.id === 'meal-plan' ? '/' : `/${tab.id}`)
            }
          >
            <Icon className="tab-bar-icon" />
            <span className="tab-bar-label">{tab.name}</span>
          </button>
        )
      })}
    </div>
  )
}
