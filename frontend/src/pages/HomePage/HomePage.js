import React, { useContext, useEffect, useState } from "react";

import AuthContext from "../../context/AuthContext";
import AxiosPosts from "../../Routes/postRoutes";
import CreateRecipe from "../../components/Recipes/CreateRecipe";
import DisplayRecipes from "../../components/Recipes/DisplayRecipes";
import DisplaySingleRecipe from "../../components/Recipes/DisplaySingleRecipe";
import ErrorBoundary from "../../components/ErrorBoundary";
import Favorites from "../../components/Favorites/Favorites";

const HomePage = () => {
  const [recipeList, setRecipeList] = useState([]);
  const { user } = useContext(AuthContext);
  const userId = user._id || null;
  const [update, setUpdate] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [singleRecipe, setSingleRecipe] = useState();
  const name = user.name || null;
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    getAllPosts();
  }, [update]);

  function handleClick() {
    setUpdate(!update);
  }

  async function getAllPosts() {
    let post = await AxiosPosts.getAllPosts();
    if (post) {
      setRecipeList(post);
    } else setRecipeList({ Object: "No Posts" });
  }
  const addFavoriteRecipe = (post) => {
    const newFavoriteList = [...favorites, post];
    setFavorites(newFavoriteList);
  };
  return (
    <div
      className="homepage-container"
      style={{
        display: "grid",
        marginLeft: "20em",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h1>
          {" "}
          A PLACE WHERE YOU <br />
          AND YOUR FRIENDS CAN SHARE <br /> AND COLLABORATE FOOD RECIPES &
          IDEAS!
        </h1>
      </div>
      {hidden === false && (
        <div>
          <CreateRecipe userId={userId} handleClick={handleClick} name={name} />
          <ErrorBoundary>
            <DisplayRecipes
              recipeList={recipeList}
              setHidden={setHidden}
              setSingleRecipe={setSingleRecipe}
              handleFavoritesClick={addFavoriteRecipe}
              // avoritesComponent={Favorites}
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

export default HomePage;
