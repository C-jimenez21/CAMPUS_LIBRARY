import React from 'react'
import { useAuth } from '../context/authContext'
import { Navigate, Outlet } from 'react-router-dom'
import LoadingCircle from '../components/LoadingCircle';
export default function ProtectedRoutes() {
    
    const { loading, isAuthenticated } = useAuth()
    console.log(loading, isAuthenticated);
    if(loading) return <LoadingCircle/>
    if(!loading && !isAuthenticated) return <Navigate to='/login' replace/>; 
    
    return (
        <Outlet /> 

  )
}
