// General Imports

import "./App.css";

import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Navbar from "./components/NavBar/NavBar";
import PrivateRoute from "./utils/PrivateRoute";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Pages Imports

// Component Imports

// Util Imports

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
