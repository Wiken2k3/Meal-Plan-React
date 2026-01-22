import { useState, useEffect, useRef } from 'react'
import './AppBar.css'
import {
  Download,
  MoreHorizontal,
  ShoppingCart,
  Trash2,
  CloudSun,
  Sparkles
} from "lucide-react"

export default function AppBar({ isDarkMode, onToggleDark }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  return (
    <header className="app-bar">
      <div className="app-bar-container">
        <h1 className="app-bar-title">Meal Plan</h1>

        <div className="app-bar-actions">
          <IconButton icon={<Download />} />

          {/* MORE */}
          <div className="more-wrapper" ref={menuRef}>
            <IconButton
              icon={<MoreHorizontal />}
              onClick={() => setIsMenuOpen(v => !v)}
            />

            {isMenuOpen && (
              <div className="more-menu">
                <MenuItem
                  label="Add to Groceries"
                  icon={<ShoppingCart />}
                  onClick={() => setIsMenuOpen(false)}
                />

                <MenuItem
                  label="Generate Plan for Week"
                  icon={<Sparkles />}
                  onClick={() => setIsMenuOpen(false)}
                />

                <MenuItem
                  label="Clear Current Week"
                  icon={<Trash2 />}
                  destructive
                  onClick={() => setIsMenuOpen(false)}
                />

                <div className="menu-divider" />

                <MenuItem
                  label="Show Weather"
                  icon={<CloudSun />}
                  onClick={() => setIsMenuOpen(false)}
                />
              </div>
            )}
          </div>

          {/* DARK MODE */}
          <div
            className={`toggle-switch ${isDarkMode ? 'on' : 'off'}`}
            onClick={onToggleDark}
          >
            <div className="toggle-slider" />
          </div>
        </div>
      </div>
    </header>
  )
}

function IconButton({ icon, onClick }) {
  return (
    <button onClick={onClick} className="app-bar-icon-button">
      {icon}
    </button>
  )
}

function MenuItem({ label, icon, onClick, destructive }) {
  return (
    <button
      onClick={onClick}
      className={`menu-item ${destructive ? 'destructive' : ''}`}
    >
      <span className="menu-label">{label}</span>
      <span className="menu-icon">{icon}</span>
    </button>
  )
}
