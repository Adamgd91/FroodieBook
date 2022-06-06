import "../Friends/friends.scss";

import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import React, { useState } from "react";
import { useContext, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import AxiosUsers from "../../Routes/userRoutes";

const DisplayUsers = ({
  userList,
  setHidden,
  setSingleUser,
  userId,
  handleClick,
  userFriendRequestList,
  userSentFriendRequestList,
  userFriendsList,
  selectedUser
}) => {
  const { user } = useContext(AuthContext);
  const [updatedUsers, setUpdatedUsers] = useState([]);
  const [arrow, setArrow] = useState(<AiOutlineArrowDown />);
  const [checkedUsers, setCheckedUsers] = useState(false);

  let allLists = [userId];
  allLists.push.apply(allLists, userFriendsList);
  allLists.push.apply(allLists, userFriendRequestList);
  allLists.push.apply(allLists, userSentFriendRequestList);

  async function sendFriendRequest(userId, obj) {
    await AxiosUsers.updateUsersFriendRequests(userId, obj);
    // console.log(userId);
    // console.log(obj);
  }
  async function addToPendingFriends(userId, obj) {
    await AxiosUsers.addToPendingFriends(userId, obj);
    // console.log(userId);
    // console.log(obj);
  }

  async function filterUsers(users) {
    let newList = [];
    for (let i = 0; i < users.length; i++) {
      if (userId !== users[i]._id) {
        if (!allLists.includes(users[i]._id)) {
          newList.push(users[i]);
        }
      }
    }

    setUpdatedUsers(newList);
  }

  function handleClickHidden() {
    setHidden(true);
  }
  function handleCheckedUsers() {
    if (checkedUsers) {
      setCheckedUsers(false);
    } else if (!checkedUsers) {
      setCheckedUsers(true);
    }
  }
  function handleArrow() {
    if (arrow === <AiOutlineArrowUp />) {
      setArrow(<AiOutlineArrowDown />);
    } else if (arrow === <AiOutlineArrowDown />) {
      setArrow(<AiOutlineArrowUp />);
    }
  }
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="friendList">
      <div className="friendListHead">
        <div style={{marginRight: "1em"}}>Add Friends</div>
        <button
        className="friends-buttons"
          onClick={() => {
            filterUsers(userList);
            handleCheckedUsers();
            handleArrow();
          }}
        >
          <span className="material-symbols-outlined">{arrow}</span>
        </button>
      </div>
      {checkedUsers && (
        <div className="friendMapList">
   
          {updatedUsers
            .map((user, index) => {
              return (
                
                <div key={index} className="friendBody">
                  {/* <button
                    className="addFriendButtonLink"
                    onClick={() => {
                      handleClickHidden();
                      setSingleUser(user);
                    }}
                  > */}
                  <div className="friendBody">
                    {" "}
                    <div
                      className="name-container"
                      style={{ fontSize: ".75em" }}
                    >
                       <Link
                      onClick={() => {
                        selectedUser = user._id;
                      }}
                      to={{
                        pathname: `/froodieuserpage/${user._id}`,
                      }}
                      className="user-links"
                    >{user.name}</Link>
                      
                    </div>
                    <div className="nameAndButton">
                      <button
                        onClick={() => {
                          // The user logged in "userId"
                          // The user being sent a friend request "user._id"
                          sendFriendRequest(user._id, {
                            friendRequests: userId,
                          });
                          addToPendingFriends(userId, {
                            pendingFriends: user._id,
                          });
                          handleClick();
                          alert(`Friend request sent`);
                          refreshPage();
                        }}
                      >
                        Send Request
                      </button>{" "}
                    </div>
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

export default DisplayUsers;
