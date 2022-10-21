import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/auth/Login'
import Registration from './pages/auth/Registration'

import { Favorites } from './pages/favorites'
import { NotFound } from './pages/not-found'
import { Playlist } from './pages/selections'
import ProtectedRoute from './components/protected-route/ProtectedRoute'

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />

        <Route element={<ProtectedRoute />}>
          {/* <Route path="/" element={<Main />} /> */}
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/playlist/:id" element={<Playlist />} />
        </Route>
      </Routes>

      <Route path="*" element={<NotFound />} />
    </div>
  )
}

export default AppRoutes
