import "../Recipes/MyRecipes.css";

import CustomButton from "./LikeButton";
import React from "react";
import { useState } from "react";

const DisplayRecipes = ({ recipeList, setHidden, setSingleRecipe }) => {
  function handleClick() {
    setHidden(true);
  }

  return (
    <div className="postlist">
      {recipeList
        .map((post, index) => {
          return (
            <div key={index} className="postbody">
              <button
                className="my-post-button"
                onClick={() => {
                  handleClick(post);
                  setSingleRecipe(post);
                }}
              >
                {" "}
                <div className="name-container">{post.name}</div>
                <br />
                <p className="post">Name:</p>
                <div className="body-container">{post.body}</div>
                <p className="post">Description:</p>
                <div className="body-container">{post.step}</div>
                <p className="post">step:</p>
              </button>

              <CustomButton post={post} />
            </div>
          );
        })
        .reverse()}
    </div>
  );
};

export default DisplayRecipes;
