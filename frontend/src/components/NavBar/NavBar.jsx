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
      <ul style={{ border: "1px solid black", flexGrow: "1" }}>
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
      </div>
      {/* <h2 style={{ border: "1px solid black", flexGrow: "2" }}>aedfew</h2> */}
      <div className="logout-container">
        {" "}
        {user ? (
          <button className="logoutbuttons" onClick={() => navigate("/login")}>
            Logout
          </button>
        ) : (
          <button className="logoutbuttons" onClick={() => navigate("/login")}>
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
