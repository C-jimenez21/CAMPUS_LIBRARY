import React from 'react'
import { useAuth } from '../context/authContext'
import { Navigate, Outlet } from 'react-router-dom'
import LoadingCircle from '../components/LoadingCircle';
import NavBarUser from './NavBarUser';
import HomePage from '../pages/HomePage';
import NavBarAdmin from './NavBarAdmin.jsx';

export default function
  AdminRoutes() {

  const { loading, isAuthenticated, user } = useAuth()
  console.log(loading, isAuthenticated);
  if (loading) return <LoadingCircle />
  if (!loading && !isAuthenticated) return <Navigate to='/login' replace />;
  //if (user.rol !== "Admin") return <Navigate to='/Notfound' replace />;
    const pages = [{ 'name': "Añadir Empleados", 'link': "/addEmployee" }, { 'name': "Listar Empleados", 'link': "/listEmployee" }, { 'name': "Listar Usuarios", 'link': "/listUsers" }, { 'name': "Estadisticas", 'link': "/stadistics" } ];

  return (
    <>
      <NavBarAdmin />
      <Outlet />
    </>
  )
}
