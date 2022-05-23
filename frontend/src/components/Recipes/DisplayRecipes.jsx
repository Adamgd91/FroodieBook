import "../Recipes/MyRecipes.css";

import CustomButton from "./LikeButton";
import React from "react";
import { useState } from "react";

const DisplayRecipes = ({ postList, setHidden, setSinglePost }) => {
  function handleClick() {
    setHidden(true);
  }

  return (
    <div className="postlist">
      {postList
        .map((post, index) => {
          return (
            <div key={index} className="postbody">
              <button
                className="my-post-button"
                onClick={() => {
                  handleClick(post);
                  setSinglePost(post);
                }}
              >
                {" "}
                <div className="name-container">{post.name}</div>
                <br />
                <p className="post">Post:</p>
                <div className="body-container">{post.body}</div>
                <p className="post">Recipe:</p>
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
