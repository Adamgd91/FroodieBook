import "./ProfilePage.css";

import { Col, Row } from "react-bootstrap";
import React, { useContext, useEffect, useState } from "react";

import AboutMe from "../../components/AboutMe/AboutMe";
import AuthContext from "../../context/AuthContext";

const ProfilePage = (props) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="profile-container">
      <h1 className="profile-name">Profile for {user.name}</h1>

      <AboutMe />
    </div>
  );
};

export default ProfilePage;
