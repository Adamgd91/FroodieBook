import "../Recipes/CreateRecipe.scss";

import { Button, Form, Modal } from "react-bootstrap";
import React, { useContext, useEffect, useState } from "react";

import AuthContext from "../../context/AuthContext";
import AxiosPosts from "../../Routes/postRoutes";
import AxiosUsers from "../../Routes/userRoutes";

const CreateRecipe = ({ userId, handleClick, name, steps }) => {
  const [value, setValue] = useState("");
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [show, setShow] = useState(false);

  function handlePost(event) {
    event.preventDefault();

    let newRecipe = {
      body: value,
      userId: userId,
      name: name,
      steps: steps,
    };
    createNewRecipe(newRecipe);
    setValue("");
    let click = () => {
      handleClick();
    };
    click();
  }
  async function createNewRecipe(obj) {
    await AxiosPosts.updatePosts(obj);
    return obj;
  }

  return (
    <div>
      <div>
        <Button className="recipe-button" type="button" onClick={handleShow}>
          <span>+</span>
          <p>Add Recipe</p>
        </Button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        className="recipemodal"
        backdrop="static"
      >
        <Modal.Header>
          <Modal.Title>ADD A RECIPE</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handlePost}>
          <Form.Group>
            <br />
            <div className="recipeform-container">
              <Form.Control
                className="recipetextArea"
                placeholder="Enter your Description!"
                type="textArea"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                onKeyUp={(event) => {
                  if (event.key === "Enter") {
                    handlePost(event);
                  }
                }}
              />

              {/* <label for="lang">Language</label>
              <select name="languages" id="lang">
                <option value="javascript">JavaScript</option>
                <option value="php">PHP</option>
                <option value="java">Java</option>
                <option value="golang">Golang</option>
                <option value="python">Python</option>
                <option value="c#">C#</option>
                <option value="C++">C++</option>
                <option value="erlang">Erlang</option>
              </select> */}

              <br />
              <div className="aboutme-form-buttons">
                <Button
                  type="btn"
                  style={{ margin: "0px 1em 1em 0px" }}
                  className="form-buttons"
                  onClick={(event) => {
                    handlePost(event);
                  }}
                >
                  Submit
                </Button>
                <Button
                  type="button"
                  style={{ marginBottom: "1em" }}
                  variant="secondary"
                  className="form-buttons"
                  onClick={handleClose}
                >
                  Close
                </Button>
              </div>
            </div>
          </Form.Group>
        </Form>
      </Modal>
    </div>
  );
};
export default CreateRecipe;
