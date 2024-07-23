// to start a backend json server use json-server --watch db.json --port 4000
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Welcome from "./components/Welcome/Welcome";
import AppLayout from "./components/AppLayout/AppLayout";
import UserData from "./components/Forms/Form";
import NotFound from "./components/NotFound";
import "./App.css";

const App = () => {
  return (
    <>
      {/* navigation */}
      <Router>
        {/* <Navbar expand="lg" className="bg-body-tertiary" variant="dark"> */}
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">
              React-Coursegoal-app
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/add-goal">
                  Add Goals
                </Nav.Link>
                <Nav.Link as={Link} to="/add-user">
                  Add Employees
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/add-goal" element={<AppLayout />} />
          <Route path="/add-user" element={<UserData />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </Router>
      {/* navigation */}
    </>
  );
};

export default App;
