import "../Recipes/DisplayRecipes.scss";

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
          console.log(post);
          return (
            <div key={index} className="postbody">
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
                  <div className="styles-container">{post.styles}</div>
                  <div className="timeofday-container">{post.timeofday}</div>
                  <div className="difficulty-container">{post.difficulty}</div>
                  <div className="season-container">{post.season}</div>
                  <div className="timetocook-container">{post.timetocook}</div>
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
