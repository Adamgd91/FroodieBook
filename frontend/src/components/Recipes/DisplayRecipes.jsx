import "../Recipes/DisplayRecipes.scss";

import { useContext, useEffect, useState } from "react";

import AuthContext from "../../context/AuthContext";
import CustomButton from "./LikeButton";
import Favorites from "../../components/Favorites/Favorites";
import FavoritesPage from "../../components/Favorites/Favorites";
import HomePage from "../../pages/HomePage/HomePage";
import ImageUpload from "../ImageUpload/ImageUpload.";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";

const DisplayRecipes = ({
  recipeList,
  setHidden,
  setSingleRecipe,
  //   MyFavoritesComponent,
  handleFavoritesClick,
}) => {
  const { user } = useContext(AuthContext);
  const [photo, setPhoto] = useState();
  const [photAlt, setPhotoAlt] = useState();
  //   const [favorites, setFavorites] = useState([]);
  function handleClick() {
    setHidden(true);
  }

  //   useEffect(() => {
  //     if (user.image !== "") {
  //       setPhoto(`http://localhost:3007/uploads/images/${user.image}`);
  //       setPhotoAlt(user.name);
  //     } else {
  //       setPhoto(
  //         "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png"
  //       );
  //       setPhotoAlt("Default Image Placeholder");
  //     }
  //   }, [user]);
  return (
    <div className="postlist">
      {recipeList
        .map((post, index) => {
          console.log(post);
          console.log(recipeList);
          return (
            <div key={index} className="postbody">
              <div className="sidebar">
                <section>
                  {!user || !user.image ? (
                    <ImageUpload />
                  ) : (
                    <div className="big-profile-img">
                      <img
                        onClick={<ProfilePage />}
                        src={photo}
                        alt={photAlt}
                        style={{
                          marginLeft: "auto",
                          marginRight: "1em",
                          width: "100px",
                          height: "100px",
                          borderRadius: "50%",
                          position: "absolute",
                          cursor: "pointer",
                          // top: "0",
                        }}
                      />
                    </div>
                  )}
                </section>
                {/* <button onClick={() => handleFavoritesClick(post)}>
                <Favorites />
              </button> */}
                <span onClick={() => handleFavoritesClick(post)}>
                  {/* <DisplayRecipes /> */}
                  <Favorites />
                </span>
              </div>
              <button
                className="my-post-button"
                onClick={() => {
                  handleClick(post);
                  setSingleRecipe(post);
                }}
              >
                <div className="name-container">{post.name}</div>
                <div className="body-container">{post.body}</div>
                <p className="post"></p>
                <div className="steps-container">
                  Steps:
                  <br /> {post.steps}
                </div>
                {/* <p className="post">step:</p> */}
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <div className="styles-container">{post.genre}</div>
                  <div className="timeofday-container">{post.timeofday}</div>
                  <div className="difficulty-container">{post.difficulty}</div>
                  <div className="season-container">{post.season}</div>
                  <div className="timetocook-container">
                    {post.timetocook} mins
                  </div>
                </div>
              </button>

              {/* <CustomButton post={post} /> */}
            </div>
          );
        })
        .reverse()}
    </div>
  );
};

export default DisplayRecipes;
