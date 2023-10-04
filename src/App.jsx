import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AuthProvider } from "./context/authContext";
import { UserProvider } from "./context/userContext";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";
import ProtectedRoutes from "./Auth/ProtectedRoutes";
import Notfound from "./pages/Notfound";
import ListaLibros from "./components/ListaLibros";
import DynamicBooks from "./components/DynamicBooks";
import PruebaLista from "./components/pruebaLista";
import ProductPage from "./pages/ProductPage";
import NavBarUser from "./components/NavBarUser";
import Tildwind from "./components/Tildwind";
import BasicTable from "./components/TableReserves";
import LoansByUser from "./pages/LoansByUser";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <UserProvider>
          <NavBarUser/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />

            
            <Route element={<ProtectedRoutes />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/task" element={<Profile />} />
              <Route path="/bokId/:id" element={<ProductPage />}></Route>
            </Route>

            <Route path="/boks" element={<DynamicBooks />}></Route>
            <Route path="/products" element={<PruebaLista />}></Route>
            <Route path="/list" element={<ListaLibros />}></Route>
            <Route path="/Notfound" element={<Notfound />}></Route>
            <Route path="/tailwind" element={<Tildwind />}></Route>
            <Route path="/reserves" element={<LoansByUser />}></Route>
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}
