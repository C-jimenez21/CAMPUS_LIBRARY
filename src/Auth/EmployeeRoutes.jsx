import React from 'react'
import { useAuth } from '../context/authContext'
import { Navigate, Outlet } from 'react-router-dom'
import LoadingCircle from '../components/LoadingCircle';
import NavBarUser from './NavBarUser';
import HomePage from '../pages/HomePage';
import NavBarEmployee from './NavBarEmployee';
export default function EmployeeRoutes() {
  const pages = [{ 'name': "Añadir Libros", 'link': "/addBooks" }, { 'name': "Solicitudes", 'link': "/requests" }, { 'name': "Libros", 'link': "/books" }];
    
    const { loading, isAuthenticated } = useAuth()
    console.log(loading, isAuthenticated);
    if(loading) return <LoadingCircle/>
    if(!loading && !isAuthenticated) return <Navigate to='/login' replace/>; 
  //if (user.rol !== "Usuario") return <Navigate to='/Notfound' replace />;
    return (
      <>
        <NavBarEmployee rutas={pages}/>
        <Outlet />
      </>
  )
}
 
