import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Login from './pages/auth/Login'
import Registration from './pages/auth/Registration'
import Main from './components/Main'
import Favorites from './pages/favorites'
import NotFound from './pages/not-found'
import Playlist from './pages/selections'
import ProtectedRoute from './components/protected-route/ProtectedRoute'
import * as Styled from './styles'

function AppRoutes({ auth, setToken }) {
  return (
    <div>
      <Routes>
        <Route
          path="/login"
          element={auth ? <Navigate to="/" /> : <Login setToken={setToken} />}
        />
        <Route
          path="/registration"
          element={
            auth ? <Navigate to="/" /> : <Registration setToken={setToken} />
          }
        />

        <Route element={<ProtectedRoute isAllowed={auth} />}>
          <Route
            path="/"
            element={
              <Styled.Wrapper>
                <Main />
              </Styled.Wrapper>
            }
          />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/playlist/:id" element={<Playlist />} />
        </Route>
      </Routes>

      {/* <Route path="*" element={<NotFound />} /> */}
    </div>
  )
}

export default AppRoutes
