// General Imports

import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AddRecipePage from "./pages/AddRecipePage/AddRecipePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import FoodGeneratorPage from "./pages/FoodGeneratorPage/FoodGeneratorPage";
import Footer from "./components/Footer/Footer";
import FriendsPage from "./pages/FriendsPage/FriendsPage";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MyRecipePage from "./pages/MyRecipesPage/MyRecipesPage";
import Navbar from "./components/NavBar/NavBar";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// import PrivateRoute from "./utils/PrivateRoute";

// Pages Imports

// Pages Imports

// Component Imports

// Util Imports

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/homepage" element={<HomePage />} /> */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
