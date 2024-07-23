import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// form input variable in usestate

const UserData = () => {
  //usestate variables////////////////////////////////////////////
  const [msg, setMsg] = useState("");
  const [userState, setUserState] = useState({
    username: "",
    email: "",
    phonenumber: "",
  });
  const [users, setusers] = useState([]);
  //usestate variables///////////////////////////////////////////

  // onchange form input value fetch
  const handleChange = (event) => {
    setUserState({ ...userState, [event.target.name]: event.target.value });
  };
  // onchange form input value fetch
  // form submit function call
  ////////////////////////////////////////////////////////////////////////////////////////////
  //GET METHOD all the employeed from database with get request
  const getEmployees = () => {
    axios
      .get("http://localhost:4000/userDetails")
      .then((response) => {
        console.log(response.data);
        setusers(response.data);
      })
      .catch((err) => {
        console.log("Cant get details");
      });
  };
  //GET METHOD fetch all the employeed from database with get request
  ////////////////////////////////////////////////////////////////////////////////////////////

  const handleSubmit = (event) => {
    // prevent default behaviour of form
    event.preventDefault();
    ////////////////////////////////////////////////////////////////////////////////////////////
    // POST METHOD axios post api calling
    axios
      .post("http://localhost:4000/userDetails", userState)
      .then((response) => {
        // empty form input value after form submit
        setUserState({
          username: "",
          email: "",
          phonenumber: "",
        });
        // empty form input value after form submit
        //alert("User added successfully!");
        setMsg(
          <p
            style={{
              color: "lightgreen",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            User added successfully to database!
          </p>
        );
        console.log(response.data);
      })
      .catch((err) => {
        setMsg(
          <p style={{ color: "red", fontWeight: "bold", textAlign: "center" }}>
            Error adding user to database!!
          </p>
        );
      });
    // POST METHOD
    ////////////////////////////////////////////////////////////////////////////////////////////
    getEmployees();
  };
  // POST METHOD
  // fetch employee details with api and show it in bootstap table
  useEffect(() => {
    getEmployees();
  });
  ////////////////////////////////////////////////////////////////////////////////////////////
  // DELETE METHOD delete axios
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:4000/userDetails/" + id)
      .then((res) => {
        alert("The ID :" + id + " is deleted");
      })
      .catch((err) => {
        alert("Data not deleted" + err);
      });
  };
  // DELETE METHOD
  ////////////////////////////////////////////////////////////////////////////////////////////
  // fetch employee details with api and show it in bootstap table
  // form submit function call
  return (
    <>
      <Container>
        <Row>
          <Col sm={5}>
            {" "}
            <h1
              style={{
                backgroundColor: "brown",
                color: "White",
                padding: "15px",
                textAlign: "center",
              }}
            >
              Employee Form Data
            </h1>
            <div
              className="container"
              style={{
                padding: "20px",
                borderRadius: "5px",
                backgroundColor: "#9ca79c",
              }}
            >
              {/* bootstarp form layout start */}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="username"
                    value={userState.username}
                    onChange={handleChange}
                    placeholder="Enter your Name"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>User Email</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="email"
                    value={userState.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                  <Form.Label>User Phone</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    name="phonenumber"
                    value={userState.phonenumber}
                    onChange={handleChange}
                    placeholder="Enter your phone"
                  />
                </Form.Group>
                <Button variant="success" type="submit">
                  Add Users
                </Button>{" "}
                {/* success or error message after form submit  */}
                {msg}
                {/* success or error message after form submit  */}
              </Form>
              {/* bootstarp form layout end */}
            </div>{" "}
            <br />
          </Col>
          <Col sm={7}>
            {" "}
            <h1
              style={{
                backgroundColor: "cyan",
                color: "#000",
                padding: "15px",
                textAlign: "center",
              }}
            >
              Employee List
            </h1>
            <div
              className="container"
              style={{
                padding: "20px",
                borderRadius: "5px",
                backgroundColor: "orange",
              }}
            >
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phonenumber</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.phonenumber}</td>
                      <td>
                        <Button
                          variant="danger"
                          onClick={() => {
                            handleDelete(user.id);
                          }}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              {/* bootstarp table layout end for employee */}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default UserData;
