import "./Favorites.scss";

import React, { useContext, useEffect, useState } from "react";

import DisplayRecipes from "../../components/Recipes/DisplayRecipes";
import ErrorBoundary from "../../components/ErrorBoundary";
import Favorites from "../../components/Favorites/Favorites";

const FavoritesPage = ({
  recipeList,
  setHidden,
  //   MyFavoritesComponent,
  handleFavoritesClick,
}) => {
  const [favorites, setFavorites] = useState([]);

  const addFavoriteRecipe = (recipeList) => {
    const newFavoriteList = [...favorites, recipeList];
    setFavorites(newFavoriteList);
  };
  //   const FavoritesComponent = { MyFavoritesComponent };
  return (
    <div className="favorites-container"> hi
      {" "}
      <ErrorBoundary>
        <DisplayRecipes
          recipeList={recipeList}
          handleFavoritesClick={addFavoriteRecipe}
          setHidden={setHidden}
          //   MyFavoritesComponent={Favorites}
        />
      </ErrorBoundary>
      {/* <DisplayRecipes /> */}
    </div>
  );
};

export default FavoritesPage;
