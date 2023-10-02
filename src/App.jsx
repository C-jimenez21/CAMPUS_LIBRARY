import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { AuthProvider } from './context/authContext';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import HomePage from './pages/HomePage';
import Profile from './pages/Profile';
import ProtectedRoutes from './Auth/ProtectedRoutes';
import Notfound from './pages/Notfound';
import ListaLibros from './components/ListaLibros';
import DynamicBooks from './components/DynamicBooks';
import PruebaLista from './components/pruebaLista';
export default function App() {
  return (
    <AuthProvider >
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage/>}  />
            <Route path='/login' element={<SignIn/>}  />
            <Route path='/register' element={<SignUp/>}  />

        <Route element={<ProtectedRoutes/>}>
            <Route path='/profile' element={<Profile/>}  />
            <Route path='/task' element={<Profile/>}  />
        </Route>
        
        <Route path='/Notfound' element={<Notfound/>}></Route>
        <Route path='/list' element={<ListaLibros/>}></Route>
        <Route path='/boks' element={<DynamicBooks/>}></Route>
        <Route path='/pruebaBooks' element={<PruebaLista/>}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
