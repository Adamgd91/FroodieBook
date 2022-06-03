import "../Friends/friends.css";

import React, { useState } from "react";

import { AiOutlineArrowDown } from "react-icons/ai";
import AxiosUsers from "../../Routes/userRoutes";

const DisplaySentFriendRequests = ({
  userSentFriendRequestList,
  setHidden,
  setSingleUser,
}) => {
  const [friendObjList, setFriendObjList] = useState([]);
  const [usersFriend, setUsersFriend] = useState("");
  const [arrow, setArrow] = useState(<AiOutlineArrowDown />);
  const [checkedUsers, setCheckedUsers] = useState(false);
  function handleClick() {
    setHidden(true);
  }

  async function getFriendById(user) {
    let friend = await AxiosUsers.getUser(user);
    if (friend) {
      setUsersFriend(friend.name);
    }
  }
  async function getFriendById(user) {
    let friend = await AxiosUsers.getUser(user);
    if (friend) {
      return friend;
    }
  }
  async function convertFriendsListToObjects(users) {
    let newList = [];
    for (let i = 0; i < users.length; i++) {
      let newObj = await getFriendById(users[i]);
      newList.push(newObj);
    }
    setFriendObjList(newList);
  }
  function handleCheckedUsers() {
    if (checkedUsers) {
      setCheckedUsers(false);
    } else if (!checkedUsers) {
      setCheckedUsers(true);
    }
  }
  function handleArrow() {
    if (arrow === "arrow_upward") {
      setArrow("arrow_downward");
    } else if (arrow === "arrow_downward") {
      setArrow("arrow_upward");
    }
  }
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="friendList">
      <div className="friendListHead">
        <div>Pending Friends</div>
        <button
          onClick={() => {
            convertFriendsListToObjects(userSentFriendRequestList);
            handleCheckedUsers();
            handleArrow();
          }}
        >
          <span className="material-symbols-outlined">{arrow}</span>
        </button>
      </div>
      {checkedUsers && (
        <div className="friendMapList">
          {friendObjList
            .map((user, index) => {
              return (
                <div key={index} className="friendBody">
                  {/* <button
                className="my-friend-button"
                onClick={() => {
                  handleClick(user);
                  setSingleUser(user);
                }}
              > */}

                  <div className="friendBody">
                    {" "}
                    <div className="name-container">{user.name}</div>
                    <p className="titles">About:</p>
                    <div className="name-container">{user.aboutMe}</div>
                  </div>
                </div>
              );
            })
            .reverse()}
        </div>
      )}
    </div>
  );
};

export default DisplaySentFriendRequests;