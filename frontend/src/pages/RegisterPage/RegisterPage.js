import React, { useContext } from "react";

import AuthContext from "../../context/AuthContext";
import LoginPage from "../LoginPage/LoginPage";
import useCustomForm from "../../hooks/useCustomForm";

const RegisterPage = () => {
  const { registerUser } = useContext(AuthContext);
  const defaultValues = { name: "", email: "", password: "", isAdmin: false };
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    defaultValues,
    registerUser
  );

  return (
    <div>
      <header className="logo">
        <h1>Froodie Book</h1>
      </header>
      <div className="login-container">
        <form className="form" onSubmit={handleSubmit}>
          <label style={{ fontWeight: "bold" }}>
            Name:{" "}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
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
          <label
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "20%",
              fontWeight: "bold",
            }}
          >
            Admin:{" "}
            <input
              type="checkbox"
              name="isAdmin"
              checked={formData.isAdmin}
              onChange={handleInputChange}
            />
          </label>
          <button>Register!</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
