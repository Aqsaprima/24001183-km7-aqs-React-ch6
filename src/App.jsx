import { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import "./App.css";
import HomeView from "./pages/HomeView";
import Login from "./pages/Login";
import NavbarTailwind from "./components/navbar/NavbarTailwind";
import NotFoundView from "./pages/NotFound";
import isTokenExpired from "../utils/Auth";

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
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // check user logged in or not
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token || isTokenExpired(token)) {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      navigate("/login");
    }
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setIsAuthenticated(false);
  };

  return (
    <>
      {isAuthenticated && <NavbarTailwind onLogout={handleLogout} />}
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
