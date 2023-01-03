import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function ProtectedRoute({ redirectPath = '/login' }) {
  const { userToken } = useSelector((state) => state.user)
  if (!userToken) {
    return <Navigate to={redirectPath} replace />
  }

  return <Outlet />
}
