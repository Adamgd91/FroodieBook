import "../Recipes/MyRecipes.css";

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
        <Button className="aboutme-button" type="button" onClick={handleShow}>
          Add Recipe
        </Button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        className="modal"
        backdrop="static"
      >
        <Modal.Header>
          <Modal.Title>ADD A RECIPE</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handlePost}>
          <Form.Group>
            <br />
            <div className="form-container">
              <Form.Control
                className="textArea"
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
