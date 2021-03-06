import "./App.css";

import { Route, Routes } from "react-router-dom";

import AboutMe from "./components/AboutMe/AboutMe";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import FoodGeneratorPage from "./pages/FoodGeneratorPage/FoodGeneratorPage";
import FriendsPage from "./pages/FriendsPage/FriendsPage";
import FroodieUserPage from "./pages/FroodieUserPage/FroodieUserPage";
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./Layout";
import LoginPage from "./pages/LoginPage/LoginPage";
import MyRecipePage from "./pages/MyRecipesPage/MyRecipesPage";
import PrivateRoute from "./utils/PrivateRoute";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route path="/" element={<HomePage />} />
          <Route path="/profilepage" element={<ProfilePage />} />
          <Route path="/myrecipespage" element={<MyRecipePage />} />
          <Route path="/favoritespage" element={<FavoritesPage />} />
          <Route path="/foodgeneratorpage" element={<FoodGeneratorPage />} />
          <Route path="/friendspage" element={<FriendsPage />} />
          <Route
            path="/froodieuserpage/:userId"
            element={<FroodieUserPage />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
