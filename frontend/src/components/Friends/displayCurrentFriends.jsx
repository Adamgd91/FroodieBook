import "../Friends/friends.scss";

import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import AxiosUsers from "../../Routes/userRoutes";

const DisplayCurrentFriends = ({
  userFriendsList,
  setHidden,
  setSingleUser,
  userId,
  selectedUser,
}) => {
  const [friendObjList, setFriendObjList] = useState([]);
  const [checkedFriends, setCheckedFriends] = useState(false);
  const [arrow, setArrow] = useState(<AiOutlineArrowDown />);


  async function removeFriend(userId, obj) {
    await AxiosUsers.removeFriend(userId, obj);
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
        <div style={{marginRight: "1em"}}>Your Friends</div>
        <button
        className="friends-buttons"
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
                      <div className="name-container">
                        <Link
                      onClick={() => {
                        selectedUser = friend._id;
                      }}
                      to={{
                        pathname: `/froodieuserpage/${friend._id}`,
                      }}
                      className="user-links"
                    >{friend.name}
                    </Link></div>
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
