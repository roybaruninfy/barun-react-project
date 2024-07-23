import { useState } from "react";
import "./NewGoal.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const NewGoal = (props) => {
  const [enteredText, setEnteredText] = useState("");

  const addGoalHandler = (event) => {
    event.preventDefault();

    const newGoal = {
      id: Math.random().toString(),
      text: enteredText,
    };

    setEnteredText("");

    props.onAddGoal(newGoal);
  };

  // const textChangeHandler = (event) => {
  //   setEnteredText(event.target.value);
  // };

  return (
    <div
      className="container"
      style={{
        width: "600px",
        padding: "20px",
        borderRadius: "5px",
        backgroundColor: "#9ca79c",
      }}
    >
      <Form onSubmit={addGoalHandler}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Add Goal</Form.Label>
          <Form.Control
            type="text"
            value={enteredText}
            onChange={(event) => {
              setEnteredText(event.target.value);
            }}
            placeholder="Enter your Goal"
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Submit Goal
        </Button>
      </Form>
    </div>
  );
};

export default NewGoal;
