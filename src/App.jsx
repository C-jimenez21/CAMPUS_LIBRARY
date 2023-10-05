import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AuthProvider } from "./context/authContext";
import { UserProvider } from "./context/userContext";
import AddBook from "./pages/AddBook";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";
import UserRoutes from "./Auth/UserRoutes";
import Notfound from "./pages/Notfound";
import DynamicBooks from "./components/DynamicBooks";
import PruebaLista from "./components/pruebaLista";
import ProductPage from "./pages/ProductPage";
import NavBarUser from "./Auth/NavBarUser";
import BasicTable from "./components/TableReserves";
import LoansByUser from "./pages/LoansByUser";
import ReservesByUser from "./pages/ReservesByUser";
import DynamicTable from "./components/BookList";
import BookList from "./components/BookList";
import Album from "./components/MUIcards";
import EmployeeRoutes from "./Auth/EmployeeRoutes";
import RequestsUsers from "./pages/RequestsUsers";
import RegisterEmployee from "./pages/RegisterEmployee";
import AdminRoutes from "./Auth/AdminRoutes";
import ListarUsuarios from "./pages/ListarUsuarios";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <UserProvider>
          <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/Notfound" element={<Notfound />}></Route>

            <Route element={<EmployeeRoutes />}>
              <Route path="/addBooks" element={<AddBook />}></Route>
              <Route path="/requests" element={<RequestsUsers />}></Route>
            </Route>

            <Route element={<UserRoutes />}>
              <Route path="/products" element={<BookList />}></Route>
              <Route path="/bokId/:id" element={<ProductPage />}></Route>
              <Route path="/loans" element={<LoansByUser />}></Route>
              <Route path="/reserves" element={<ReservesByUser />}></Route>
            </Route>

            <Route element={<AdminRoutes />}>
              <Route path="/addEmployee" element={<RegisterEmployee />}></Route>
              <Route path="/listUsers" element={<ListarUsuarios />}></Route>
            </Route>

            <Route path="/boks" element={<DynamicBooks />}></Route>
            <Route path="/boks2" element={<DynamicTable />}></Route>
            <Route path="/products2" element={<Album />}></Route>
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </AuthProvider >
  );
}
