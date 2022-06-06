import "../Friends/friends.scss";

import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { Link } from "react-router-dom";
import AxiosUsers from "../../Routes/userRoutes";
import React from "react";
import { useState } from "react";

const DisplayFriendRequests = ({
  userFriendRequestList,
  setHidden,
  setSingleUser,
  usersFriendRequest,
  setUsersFriendRequest,
  userId,
  selectedUser,
}) => {
  const [arrow, setArrow] = useState(<AiOutlineArrowDown />);
  const [checkedUsers, setCheckedUsers] = useState(false);
  const [friendObjList, setFriendObjList] = useState([]);
  async function acceptFriendRequest(userId, obj) {
    await AxiosUsers.acceptFriendRequests(userId, obj);
  }
  async function removeFromFriendRequests(userId, obj) {
    await AxiosUsers.removeFromFriendRequests(userId, obj);
  }
  async function removeFromPendingFriends(userId, obj) {
    await AxiosUsers.removeFromPendingFriends(userId, obj);
  }

  function handleClick() {
    setHidden(true);
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
        <div style={{marginRight: "1em"}}>Friend Requests</div>
        <button
        className="friends-buttons"
          onClick={() => {
            convertFriendsListToObjects(userFriendRequestList);
            handleCheckedUsers();
            handleArrow();
          }}
        >
          {arrow}
        </button>
      </div>
      {checkedUsers && (
        <div className="friendMapList">
          {friendObjList
            .map((theUser, index) => {
              return (
                <div key={index} className="friendBody">
                   <div className="name-container">
                      <Link
                      onClick={() => {
                        selectedUser = theUser._id;
                      }}
                      to={{
                        pathname: `/froodieuserpage/${theUser._id}`,
                      }}
                      className="user-links"
                    >{theUser.name}
                    </Link></div>
                  <button
                    className="my-friend-button"
                    onClick={() => {
                      handleClick(theUser);
                      setSingleUser(theUser);
                    }}
                  >
                    {" "}
                    <div className="nameAndButton">
                   
                      <button
                        onClick={() => {
                          // the user logged in "userId"
                          // the user that originally sent the friend request "theUser"
                          acceptFriendRequest(userId, {
                            friendsList: theUser._id,
                          });
                          acceptFriendRequest(theUser._id, {
                            friendsList: userId,
                          });
                          removeFromFriendRequests(userId, {
                            friendRequests: theUser._id,
                          });
                          removeFromPendingFriends(theUser._id, {
                            pendingFriends: userId,
                          });
                          refreshPage();
                        }}
                      >
                        Accept Friend Request
                      </button>

           
                    </div>
  
                  </button>
                </div>
              );
            })
            .reverse()}
        </div>
      )}
    </div>
  );
};

export default DisplayFriendRequests;
