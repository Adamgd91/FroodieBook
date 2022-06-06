import "../Friends/friends.css";

import AxiosUsers from "../../Routes/userRoutes";
import React from "react";
import { useEffect } from "react";

const DisplaySingleUser = ({ singleUser, setHidden }) => {
  function setHiddenFalse() {
    setHidden(false);
  }
  function sendFriendRequest() {}

  return (
    <div className="delete-pos">
      Name: {singleUser.name} <br />
      Stance: {singleUser.stance} <br />
      <button
        onClick={() => {
          setHiddenFalse();
        }}
      >
        X
      </button>
    </div>
  );
};

export default DisplaySingleUser;
