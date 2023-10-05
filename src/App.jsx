import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AuthProvider } from "./context/authContext";
import { UserProvider } from "./context/userContext";
import AddBook from "./pages/AddBook";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";
import ProtectedRoutes from "./Auth/ProtectedRoutes";
import Notfound from "./pages/Notfound";
import DynamicBooks from "./components/DynamicBooks";
import PruebaLista from "./components/pruebaLista";
import ProductPage from "./pages/ProductPage";
import NavBarUser from "./components/NavBarUser";
import BasicTable from "./components/TableReserves";
import LoansByUser from "./pages/LoansByUser";
import ReservesByUser from "./pages/ReservesByUser";
import DynamicTable from "./components/BookList";
import BookList from "./components/BookList";
import Album from "./components/MUIcards";
import OtherProtectedRoutes from "./Auth/OtherProtectehd";
import RequestsUsers from "./pages/RequestsUsers";
import RegisterEmployee from "./pages/RegisterEmployee";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <UserProvider>

          <Routes>

            <Route path="/" element={<Album />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/login" element={<SignIn />} />

            <Route element={<OtherProtectedRoutes />}>
              <Route path="/products" element={<BookList />}></Route>
              <Route path="/bokId/:id" element={<ProductPage />}></Route>
              <Route path="/loans" element={<LoansByUser />}></Route>
            </Route>

            <Route element={<ProtectedRoutes />}>
              <Route path="/boks" element={<DynamicBooks />}></Route>
              <Route path="/boks2" element={<DynamicTable />}></Route>
              <Route path="/reserves" element={<ReservesByUser />}></Route>
              <Route path="/products2" element={<Album />}></Route>
            </Route>
            <Route path="/Notfound" element={<Notfound />}></Route>
            <Route path="/addBooks" element={<AddBook />}></Route>
            <Route path="/request" element={<RequestsUsers />}></Route>
            <Route path="/addEmployee" element={<RegisterEmployee />}></Route>
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </AuthProvider >
  );
}
