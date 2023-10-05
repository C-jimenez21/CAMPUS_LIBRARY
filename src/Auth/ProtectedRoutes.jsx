import React from 'react'
import { useAuth } from '../context/authContext'
import { Navigate, Outlet } from 'react-router-dom'
import LoadingCircle from '../components/LoadingCircle';
import NavBarUser from '../components/NavBarUser';
import HomePage from '../pages/HomePage';
export default function
  ProtectedRoutes() {

  const { loading, isAuthenticated, user } = useAuth()
  console.log(loading, isAuthenticated, user.rol);
  if (loading) return <LoadingCircle />
  if (!loading && !isAuthenticated) return <Navigate to='/login' replace />;
  //if (user.rol !== "Admin") return <Navigate to='/Notfound' replace />;

  return (
    <>
      <HomePage />
      <Outlet />
    </>
  )
}
