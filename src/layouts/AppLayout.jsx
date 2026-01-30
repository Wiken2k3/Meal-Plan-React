import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <div className="app-layout">
      {/* Nội dung từng page */}
      <main className="app-content">
        <Outlet />
      </main>

      {/* TabBar cố định đáy */}
      <TabBar />
    </div>
  )
}
