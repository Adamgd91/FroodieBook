// General Imports

import "./App.css";

import { Route, Routes } from "react-router-dom";

import AddRecipePage from "./pages/AddRecipePage/AddRecipePage";
import FoodGeneratorPage from "./pages/FoodGeneratorPage/FoodGeneratorPage";
import Footer from "./components/Footer/Footer";
import FriendsPage from "./pages/FriendsPage/FriendsPage";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MyRecipePage from "./pages/MyRecipesPage/MyRecipesPage";
import Navbar from "./components/NavBar/NavBar";
import PrivateRoute from "./utils/PrivateRoute";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Pages Imports

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
