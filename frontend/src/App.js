import "./App.css";

import { Route, Routes } from "react-router-dom";

import AddRecipePage from "./pages/AddRecipePage/AddRecipePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import FoodGeneratorPage from "./pages/FoodGeneratorPage/FoodGeneratorPage";
import FriendsPage from "./pages/FriendsPage/FriendsPage";
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./Layout";
import LoginPage from "./pages/LoginPage/LoginPage";
import MyRecipePage from "./pages/MyRecipesPage/MyRecipesPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/profilepage" element={<ProfilePage />} />
          <Route path="/myrecipespage" element={<MyRecipePage />} />
          <Route path="/favoritespage" element={<FavoritesPage />} />
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
