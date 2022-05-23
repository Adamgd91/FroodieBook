import "./Recipes.scss";

import React, { useContext, useEffect, useState } from "react";

import AuthContext from "../../context/AuthContext";
import AxiosPosts from "../../Routes/postRoutes";
import CreatePost from "../../components/Recipes/CreateRecipe";
import DisplayPosts from "../../components/Recipes/DisplayRecipes";
import DisplaySinglePost from "../../components/Recipes/DisplaySingleRecipe";
import ErrorBoundary from "../../components/ErrorBoundary";

const MyRecipesPage = () => {
  const [postList, setPostList] = useState([]);
  const { user } = useContext(AuthContext);
  const userId = user._id || null;
  const [update, setUpdate] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [singlePost, setSinglePost] = useState();
  const name = user.name || null;

  useEffect(() => {
    getPosts(userId);
  }, [update]);

  function handleClick() {
    setUpdate(!update);
  }

  async function getPosts(userId) {
    let posts = await AxiosPosts.getPosts(userId);
    if (posts) {
      setPostList(posts);
    } else setPostList({ Object: "No Posts" });
  }

  return (
    <div className="recipe-container">
      {hidden === false && (
        <div>
          <CreatePost userId={userId} handleClick={handleClick} name={name} />
          <ErrorBoundary>
            <DisplayPosts
              postList={postList}
              setHidden={setHidden}
              setSinglePost={setSinglePost}
            />
          </ErrorBoundary>
        </div>
      )}
      {hidden && (
        <DisplaySinglePost
          singlePost={singlePost}
          setHidden={setHidden}
          handleClick={handleClick}
          userId={userId}
        />
      )}
    </div>
  );
};

export default MyRecipesPage;
