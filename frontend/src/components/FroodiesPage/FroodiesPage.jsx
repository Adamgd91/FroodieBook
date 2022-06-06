import "../FroodiesPage/FroodiesPage.scss";

import { useState } from "react";


import AxiosUsers from "../../Routes/userRoutes";
import React from "react";


const FroodiesPage = () => {
  const userId = window.location.href.split("/")[4];
  const [aboutMe, setAboutMe] = useState();
  const [name, setName] = useState();


  async function getUser(userId) {
    const user = await AxiosUsers.getUser(userId);
    return user;
  }
  getUser(userId).then((user) => {
  
    setAboutMe(user.aboutMe);
    setName(user.name);
  });



  return (
    <div className="froodielist">
      <div><h1>{name}</h1></div>
      <h3 className="aboutme">About Me:</h3>
      <div className="froodie-aboutme">{aboutMe}</div>
    </div>
  );
};

export default FroodiesPage;
