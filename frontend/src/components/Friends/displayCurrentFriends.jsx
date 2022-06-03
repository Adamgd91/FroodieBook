import "../Friends/friends.css";

import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import React, { useContext, useEffect, useState } from "react";

import AuthContext from "../../context/AuthContext";
import AxiosUsers from "../../Routes/userRoutes";

const DisplayCurrentFriends = ({
  userFriendsList,
  setHidden,
  setSingleUser,
  userId,
}) => {
  const [friendObjList, setFriendObjList] = useState([]);
  const [checkedFriends, setCheckedFriends] = useState(false);
  const [arrow, setArrow] = useState(<AiOutlineArrowDown />);
  const { user } = useContext(AuthContext);

  async function removeFriend(userId, obj) {
    await AxiosUsers.removeFriend(userId, obj);
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
  function handleCheckedFriends() {
    if (checkedFriends) {
      setCheckedFriends(false);
    } else if (!checkedFriends) {
      setCheckedFriends(true);
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
        <div>Your Friends</div>
        <button
          onClick={() => {
            convertFriendsListToObjects(userFriendsList);
            handleCheckedFriends();
            handleArrow();
          }}
        >
          <span className="material-symbols-outlined">{arrow}</span>
        </button>
      </div>
      {checkedFriends && (
        <div className="friendMapList">
          {friendObjList
            .map((friend, index) => {
              return (
                <div key={index} className="friendBody">
                  <div>
                    <div className="friendButtons">
                      <div className="name-container">{friend.name}</div>
                      <button
                        onClick={() => {
                          //logged in user "userId"
                          // logged out user "theUser"
                          removeFriend(userId, { friendsList: friend._id });
                          removeFriend(friend._id, { friendsList: userId });
                          refreshPage();
                          alert(`${friend.name} unfollowed`);
                          console.log(friend);
                        }}
                      >
                        Unfollow
                      </button>
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

export default DisplayCurrentFriends;
