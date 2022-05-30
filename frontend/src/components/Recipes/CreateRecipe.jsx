import "../Recipes/CreateRecipe.scss";

import { Button, Form, Modal } from "react-bootstrap";
import React, { useContext, useEffect, useState } from "react";

import AuthContext from "../../context/AuthContext";
import AxiosPosts from "../../Routes/postRoutes";
import AxiosUsers from "../../Routes/userRoutes";

const CreateRecipe = ({ userId, handleClick, name }) => {
  const [value, setValue] = useState("");
  const [steps, setSteps] = useState("");
  const [genre, setGenre] = useState("American");
  const [timeofday, setTimeofday] = useState("Morning");
  const [difficulty, setDifficulty] = useState("Easy");
  const [season, setSeason] = useState("Winter");
  const [timetocook, setTimetocook] = useState("0-10");
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [show, setShow] = useState(false);

  function restForm() {
    setValue("");
    setSteps("");
    setGenre("");
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
      genre: genre,
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
    await AxiosPosts.updatePosts(obj);
    return obj;
  }

  const ele = document.getElementById("message");

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
          <Modal.Title style={{ display: "flex", justifyContent: "center" }}>
            ADD A RECIPE
          </Modal.Title>
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
                  if (event.key == 13 && event.shiftKey) {
                    event.preventDefault();
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
                  if (event.key == 13 && event.shiftKey) {
                    event.preventDefault();
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
                  <label htmlFor="genre">Genre of Food</label>
                  <select
                    name="genre"
                    id="genre"
                    value={genre}
                    onChange={(event) => setGenre(event.target.value)}
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
                  >
                    <option value="Morning">Breakfast</option>
                    <option value="Afternoon">Lunch</option>
                    <option value="Evening">Dinner</option>
                    <option value="Snack">Snack</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="difficulty">Difficulty</label>
                  <select
                    name="difficulty"
                    id="difficulty"
                    value={difficulty}
                    onChange={(event) => setDifficulty(event.target.value)}
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
                  >
                    <option value="Winter">Winter</option>
                    <option value="Spring">Spring</option>
                    <option value="Summer">Summer</option>
                    <option value="Fall">Fall</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="timetocook">Time To Cook(mins)</label>
                  <select
                    name="timetocook"
                    id="timetocook"
                    value={timetocook}
                    onChange={(event) => setTimetocook(event.target.value)}
                  >
                    <option value="0-10">0-10</option>
                    <option value="10-20">10-20</option>
                    <option value="20-30">20-30</option>
                    <option value="30-40">30-40</option>
                    <option value="40-50">40-50</option>
                    <option value="50-60">50-60</option>
                    <option value="60+">60+</option>
                  </select>
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
