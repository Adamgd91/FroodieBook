import "../Recipes/CreateRecipe.scss";

import { Button, Form, Modal } from "react-bootstrap";
import React, { useContext, useEffect, useState } from "react";

import AuthContext from "../../context/AuthContext";
import AxiosPosts from "../../Routes/postRoutes";
import AxiosUsers from "../../Routes/userRoutes";

const CreateRecipe = ({ userId, handleClick, name }) => {
  const [value, setValue] = useState("");
  const [steps, setSteps] = useState("");
  const [styles, setStyles] = useState("American");
  const [timeofday, setTimeofday] = useState("Morning");
  const [difficulty, setDifficulty] = useState("Easy");
  const [season, setSeason] = useState("Winter");
  const [timetocook, setTimetocook] = useState("");
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [show, setShow] = useState(false);

  function restForm() {
    setValue("");
    setSteps("");
    setStyles("");
    setTimeofday("");
    setDifficulty("");
    setSeason("");
    setTimetocook("");
  }

  function handlePost(event) {
    event.preventDefault();

    let newRecipe = {
      body: value,
      userId: userId,
      name: name,
      steps: steps,
      styles: styles,
      timeofday: timeofday,
      difficulty: difficulty,
      season: season,
      timetocook: timetocook,
    };
    createNewRecipe(newRecipe);
    restForm();
    let click = () => {
      handleClick();
    };
    click();
  }
  async function createNewRecipe(obj) {
    console.log(obj);
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
        style={{ width: "50em", height: "25em" }}
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
                placeholder="Enter your Recipe Name!"
                type="textArea"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                onKeyUp={(event) => {
                  if (event.key === "Enter") {
                    handlePost(event);
                  }
                }}
              />
              <Form.Control
                className="recipetextArea"
                placeholder="steps!"
                type="textArea"
                value={steps}
                onChange={(event) => setSteps(event.target.value)}
                onKeyUp={(event) => {
                  if (event.key === "Enter") {
                    handlePost(event);
                  }
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "1em",
                }}
              >
                <div>
                  <label>Style of Cooking</label>
                  <select
                    name="styles"
                    id="styles"
                    value={styles}
                    onChange={(event) => setStyles(event.target.value)}
                    onKeyUp={(event) => {
                      if (event.key === "Enter") {
                        handlePost(event);
                      }
                    }}
                  >
                    <option value="American">American</option>
                    <option value="Mexican">Mexican</option>
                    <option value="Asian">Asian</option>
                    <option value="Italian">Italian</option>
                    <option value="European">European</option>
                    <option value="Thai">Thai</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="timeofday">Time Of Day</label>
                  <select
                    name="timeofday"
                    id="timeofday"
                    value={timeofday}
                    onChange={(event) => setTimeofday(event.target.value)}
                    onKeyUp={(event) => {
                      if (event.key === "Enter") {
                        handlePost(event);
                      }
                    }}
                  >
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="difficulty">Difficulty</label>
                  <select
                    name="difficulty"
                    id="difficulty"
                    value={difficulty}
                    onChange={(event) => setDifficulty(event.target.value)}
                    onKeyUp={(event) => {
                      if (event.key === "Enter") {
                        handlePost(event);
                      }
                    }}
                  >
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                    <option value="Super Hard">Super Hard</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="season">Season</label>
                  <select
                    name="season"
                    id="season"
                    value={season}
                    onChange={(event) => setSeason(event.target.value)}
                    onKeyUp={(event) => {
                      if (event.key === "Enter") {
                        handlePost(event);
                      }
                    }}
                  >
                    <option value="Winter">Winter</option>
                    <option value="Spring">Spring</option>
                    <option value="Summer">Summer</option>
                    <option value="Fall">Fall</option>
                  </select>
                </div>
                <div>
                  <Form.Control
                    className="timetocooktextArea"
                    placeholder="Estimate Time"
                    type="text"
                    value={timetocook}
                    onChange={(event) => setTimetocook(event.target.value)}
                    onKeyUp={(event) => {
                      if (event.key === "Enter") {
                        handlePost(event);
                      }
                    }}
                  />
                </div>
              </div>
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
