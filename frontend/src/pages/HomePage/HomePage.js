import AuthContext from "../../context/AuthContext";
import Navbar from "../../components/NavBar/NavBar";
import React from "react";
import { useContext } from "react";

const HomePage = () => {
  const { user } = useContext(AuthContext);
  return (
    <div
      className="homepage-container"
      style={{
        display: "flex",
        justifyContent: "center",
        border: "1px solid black",
        marginLeft: "20em",
        position: "relative",
      }}
    >
      <div>
        <h1>
          A PLACE WHERE YOU <br />
          AND YOUR FRIENDS CAN SHARE <br /> AND COLLABORATE FOOD RECIPES &
          IDEAS!
        </h1>
      </div>
    </div>
  );
};

export default HomePage;
