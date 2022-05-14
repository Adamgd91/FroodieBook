// General Imports

import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AddRecipePage from "./pages/AddRecipePage/AddRecipePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import FoodGeneratorPage from "./pages/FoodGeneratorPage/FoodGeneratorPage";
import FriendsPage from "./pages/FriendsPage/FriendsPage";
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./Layout";
import LoginPage from "./pages/LoginPage/LoginPage";
import MyRecipePage from "./pages/MyRecipesPage/MyRecipesPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// import Footer from "./components/Footer/Footer";

// import Navbar from "./components/NavBar/NavBar";

// import PrivateRoute from "./utils/PrivateRoute";

// Pages Imports

// Pages Imports

// Component Imports

// Util Imports

function App() {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/profilepage" element={<ProfilePage />} />
          <Route path="/myrecipepage" element={<MyRecipePage />} />
          <Route path="/foodgeneratorpage" element={<FoodGeneratorPage />} />
          <Route path="/friendspage" element={<FriendsPage />} />
          <Route path="/addrecipepage" element={<AddRecipePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
