import "../../components/Recipes/MyRecipes.scss";

import React, { useContext, useEffect, useState } from "react";

import AuthContext from "../../context/AuthContext";
import AxiosPosts from "../../Routes/postRoutes";
import DisplayRecipes from "../../components/Recipes/DisplayRecipes";
import DisplaySingleRecipe from "../../components/Recipes/DisplaySingleRecipe";
import ErrorBoundary from "../../components/ErrorBoundary";

// import CreatePost from "../../components/Recipes/CreateRecipe";

const MyRecipesPage = () => {
  const [recipeList, setRecipeList] = useState([]);
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
          <ErrorBoundary>
            <DisplayRecipes
              recipeList={recipeList}
              setHidden={setHidden}
              setSingleRecipe={setSingleRecipe}
            />
          </ErrorBoundary>
        </div>
      )}
      {hidden && (
        <DisplaySingleRecipe
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
