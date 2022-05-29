import "./NavBar.scss";

import { Link, useNavigate } from "react-router-dom";

import AuthContext from "../../context/AuthContext";
import ImageUpload from "../ImageUpload/ImageUpload.";
import React from "react";
import { useContext } from "react";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navs">
      <div className="navBar">
        <div className="header-container test">
          <ul className="logo-navbar">
            <li>
              <Link to="/" className="nav-links">
                Froodie Book
              </Link>
            </li>
          </ul>
          <section>
            <ImageUpload />
          </section>
          <section>{user.name}</section>
        </div>
        <div className="user-container test">
          <ul className="navbar-nav-links">
            <li>
              <Link to="/" className="nav-links">
                <p>Home / Feed</p>
              </Link>
            </li>
            <li>
              <Link to="/myrecipespage" className="nav-links">
                <p>My Recipes</p>
              </Link>
            </li>
            <li>
              <Link to="/favoritespage" className="nav-links">
                <p>Favorites</p>
              </Link>
            </li>
            <li>
              <Link to="/profilepage" className="nav-links">
                <p>Profile</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="friends-container test">
          {" "}
          <ul className="navbar-nav-links">
            <li>
              <Link to="/friendspage" className="nav-links">
                <p>Friends</p>
              </Link>
            </li>
            <li>
              <Link to="/friendspage" className="nav-links">
                <p>Pending Friends</p>
              </Link>
            </li>
            <li>
              <Link to="/friendspage" className="nav-links">
                <p>Friends Request</p>
              </Link>
            </li>
            <li>
              <Link to="/foodgeneratorpage" className="nav-links">
                <p>Food Generator</p>
              </Link>
            </li>
          </ul>
        </div>

        <div className="logout-container test">
          {" "}
          {user ? (
            <button className="logoutbuttons" onClick={logoutUser}>
              Logout
            </button>
          ) : (
            <button className="logoutbutton" onClick={() => navigate("/login")}>
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
