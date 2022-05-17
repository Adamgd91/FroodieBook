import "./NavBar.scss";

import { Link, useNavigate } from "react-router-dom";

import AuthContext from "../../context/AuthContext";
import HomePage from "../../pages/HomePage/HomePage";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";
import React from "react";
import { useContext } from "react";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <div className="header-container test">
        <ul className="logo-navbar">
          <li>
            <Link to="/" className="nav-links">
              Froodie Book
            </Link>
          </li>
        </ul>
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
          <button className="logoutbuttons" onClick={() => navigate("/login")}>
            Logout
          </button>
        ) : (
          <button className="logoutbutton" onClick={() => navigate("/login")}>
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;

{
  /* <ul style={{ border: "1px solid black", flexGrow: "1" }}>
        <li>
          <Link
            className="brand"
            to="/"
            style={{ textDecoration: "none", color: "black" }}
          >
            <b>Froodie Book</b>
          </Link>
        </li>
      </ul>
      <ul
        style={{
          border: "1px solid black",
          flexGrow: "2",
          //   marginBottom: "1em",
          flexDirection: "column",
        }}
      >
        <li style={{ border: "1px solid black" }}>
          <Link to="/">
            <p>Home / Feed</p>
          </Link>
        </li>
        <li style={{ border: "1px solid black" }}>
          <Link to="/myrecipepage">
            <p>My Recipes Page</p>
          </Link>
        </li>
        <li style={{ border: "1px solid black" }}>
          <Link to="/favoritespage">
            <p>Favorites Page</p>
          </Link>
        </li>
        <li style={{ border: "1px solid black" }}>
          <Link to="/profilepage">
            <p>Profile Page</p>
          </Link>
        </li>
      </ul>
      <div>
        <ul
          style={{
            border: "3px solid red",
            flexGrow: "2",
            flexDirection: "column",
          }}
        >
          <li style={{ border: "1px solid black" }}>
            <Link to="/">
              <p>Home / Feed</p>
            </Link>
          </li>
          <li style={{ border: "1px solid black" }}>
            <Link to="/myrecipepage">
              <p>My Recipes Page</p>
            </Link>
          </li>
          <li style={{ border: "1px solid black" }}>
            <Link to="/favoritespage">
              <p>Favorites Page</p>
            </Link>
          </li>
          <li style={{ border: "1px solid black" }}>
            <Link to="/profilepage">
              <p>Profile Page</p>
            </Link>
          </li>
        </ul>
        </div>*/
}
