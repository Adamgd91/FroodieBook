import "../FroodiesPage/FroodiesPage.scss";

import { useContext, useEffect, useState } from "react";

import AuthContext from "../../context/AuthContext";
import AxiosUsers from "../../Routes/userRoutes";
import React from "react";
import { useLocation } from "react-router-dom";

const FroodiesPage = () => {
  const userId = window.location.href.split("/")[4];
  const [aboutMe, setAboutMe] = useState();
  const [name, setName] = useState();

  //   console.log(userId);
  async function getUser(userId) {
    const user = await AxiosUsers.getUser(userId);
    return user;
  }
  getUser(userId).then((user) => {
    // console.log(user);
    setAboutMe(user.aboutMe);
    setName(user.name);
  });

  //   const location = useLocation();
  //   const aboutme = location.state;

  return (
    <div className="froodielist">
      <div><h1>{name}</h1></div>
      <h3 className="aboutme">About Me:</h3>
      <div className="froodie-aboutme">{aboutMe}</div>
    </div>
  );
};

export default FroodiesPage;
