import "../Recipes/MyRecipes.css";

import AxiosPosts from "../../Routes/postRoutes";
import React from "react";
import { useEffect } from "react";

const DisplaySingleRecipe = ({
  singleRecipe,
  setHidden,
  handleClick,
  userId,
}) => {
  async function deleteARecipe(postId) {
    await AxiosPosts.deletePost(postId);
    setHidden(false);
    let click = () => {
      handleClick();
    };
    click();
    return postId;
  }

  return (
    <div className="delete-post">
      {singleRecipe && singleRecipe.name} <br />
      {singleRecipe.body}
      {console.log(singleRecipe.name)}
      <button
        className="my-post-button"
        onClick={() => {
          if (singleRecipe.userId === userId) {
            deleteARecipe(singleRecipe._id);
          } else alert("Not authorized to delete post");
        }}
      >
        Delete Post
      </button>
    </div>
  );
};
export default DisplaySingleRecipe;
