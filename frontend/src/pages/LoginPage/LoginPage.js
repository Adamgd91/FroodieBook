import "./LoginPage.scss";

import React, { useContext, useEffect } from "react";

import AuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";
import foodimg from "../../imgs/food.jpg";
import useCustomForm from "../../hooks/useCustomForm";

const LoginPage = () => {
  const { loginUser, isServerError } = useContext(AuthContext);
  const defaultValues = { email: "", password: "" };
  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    defaultValues,
    loginUser
  );

  useEffect(() => {
    if (isServerError) {
      reset();
    }
  }, [isServerError]);

  return (
    <div>
      <img src={foodimg} alt="food-background" className="food-image" />
      <header className="logo">
        <h1>Froodie Book</h1>
      </header>
      <div className="login-container">
        <form className="form" onSubmit={handleSubmit}>
          <label style={{ fontWeight: "bold" }}>
            Email:{" "}
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>
          <label style={{ fontWeight: "bold" }}>
            Password:{" "}
            <input
              type="text"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </label>
          {isServerError ? (
            <p className="error">Login failed, incorrect credentials!</p>
          ) : null}
          <Link to="/register">Click to register!</Link>
          <button className="login-button">Login!</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
