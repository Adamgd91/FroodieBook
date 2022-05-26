import "./Recipes.scss";

import React, { useContext, useEffect, useState } from "react";

import AuthContext from "../../context/AuthContext";
import AxiosPosts from "../../Routes/postRoutes";
import CreatePost from "../../components/Recipes/CreateRecipe";
import DisplayPosts from "../../components/Recipes/DisplayRecipes";
import DisplaySinglePost from "../../components/Recipes/DisplaySingleRecipe";
import ErrorBoundary from "../../components/ErrorBoundary";

const MyRecipesPage = () => {
  const [recipeList, setRecipeList] = useState([]);
  const [stepsList, setStepsList] = useState([]);
  const { user } = useContext(AuthContext);
  const userId = user._id || null;
  const [update, setUpdate] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [singleRecipe, setSingleRecipe] = useState();
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
      setRecipeList(posts);
    } else setRecipeList({ Object: "No Posts" });
  }

  return (
    <div className="recipe-container">
      {hidden === false && (
        <div>
          <CreatePost
            userId={userId}
            handleClick={handleClick}
            name={name}
            // steps={steps}
          />
          <ErrorBoundary>
            <DisplayPosts
              recipeList={recipeList}
              stepsList={stepsList}
              setHidden={setHidden}
              setSingleRecipe={setSingleRecipe}
            />
          </ErrorBoundary>
        </div>
      )}
      {hidden && (
        <DisplaySinglePost
          singleRecipe={singleRecipe}
          setHidden={setHidden}
          handleClick={handleClick}
          userId={userId}
        />
      )}
    </div>
  );
};

export default MyRecipesPage;
