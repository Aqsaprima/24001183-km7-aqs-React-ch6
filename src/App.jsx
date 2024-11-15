import { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import "./App.css";
import HomeView from "./pages/HomeView";
import Login from "./pages/Login";
import NavbarTailwind from "./components/navbar/NavbarTailwind";
import NotFoundView from "./pages/NotFound";
import isTokenExpired from "../utils/Auth";
import { useAuth } from "./context/AuthContext";

// email login
// Elenora65@yahoo.com

// const router = createBrowserRouter([
//   { path: "/", element: <HomeView /> },
//   { path: "/about", element: <AboutView /> },
//   { path: "/not-found", element: <NotFoundView /> },
//   { path: "/login", element: <Login /> },
//   { path: "/register", element: <RegisterPage /> },
// ]);

function App() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <>
      {isAuthenticated && <NavbarTailwind onLogout={logout} />}
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <HomeView /> : <Navigate to="/login" />}
        ></Route>
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/" /> : <Login />}
        ></Route>
        <Route path="*" element={<NotFoundView />}></Route>
      </Routes>
      {/* <RouterProvider router={router} /> */}
    </>
  );
}

export default App;
