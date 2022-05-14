import "./NavBar.scss";

import { Link, useNavigate } from "react-router-dom";

import AuthContext from "../../context/AuthContext";
import HomePage from "../../pages/HomePage/HomePage";
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
      <h2 style={{ border: "1px solid black", flexGrow: "2" }}>aedfew</h2>
      <ul
        style={{
          border: "1px solid black",
          flexGrow: "2",
          marginBottom: "1em",
        }}
      >
        <li style={{ border: "1px solid black" }}>
          <Link to="/homepage">
            <p>asd</p>
          </Link>
        </li>
      </ul>
      <div className="logout-container">
        {" "}
        {user ? (
          <button className="logoutbuttons" onClick={logoutUser}>
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
