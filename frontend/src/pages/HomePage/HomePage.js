import AuthContext from "../../context/AuthContext";
import React from "react";
import { useContext } from "react";

const HomePage = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1 className="container">Home Page for {user.name}!</h1>;
    </div>
  );
};

export default HomePage;
