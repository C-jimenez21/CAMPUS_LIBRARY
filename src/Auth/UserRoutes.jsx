import React from 'react'
import { useAuth } from '../context/authContext'
import { Navigate, Outlet } from 'react-router-dom'
import LoadingCircle from '../components/LoadingCircle';
import NavBarUser from './NavBarUser';
import HomePage from '../pages/HomePage';
export default function UserRoutes() {

  const { loading, isAuthenticated, user } = useAuth()
  console.log(loading, isAuthenticated);
  if (loading) return <LoadingCircle />
  if (!loading && !isAuthenticated) return <Navigate to='/login' replace />;
  console.log(user);
  //if (user.rol !== "Admin") return <Navigate to='/Notfound' replace />;
  //const pages = [{ 'name': "Products", 'link': "/products" }, { 'name': "Loans", 'link': "/loans" }, { 'name': "Reserves", 'link': "/reserves" }];

  return (
    <>
      <NavBarUser  />
      <Outlet />
    </>
  )
}
