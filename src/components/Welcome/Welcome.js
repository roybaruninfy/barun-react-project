import { useState, useEffect } from "react";
import "./Welcome.css";
import Badge from "react-bootstrap/Badge";
import Alert from "react-bootstrap/Alert";
//import { BrowserRouter as Router, Link } from "react-router-dom";
const Welcome = () => {
  //const [users, setusers] = useState([]);
  const [count, setCount] = useState(0);
  const [pageVisit, setPageVisit] = useState(0);

  // page visit counter
  useEffect(() => {
    const storedCount = localStorage.getItem("pageVisits");
    const initialCount = Number(storedCount) || 0;
    setPageVisit(initialCount + 1);
    localStorage.setItem("pageVisits", initialCount + 1);
  }, []);
  // page visit counter

  // useEffect(() => {
  //   // https://jsonplaceholder.typicode.com/albums
  //   // https://jsonplaceholder.typicode.com/photos
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setusers(data);
  //     });
  // }, []);

  return (
    <>
      <div class="ppp">
        <Alert key="success" variant="success">
          Welcome to the course goal app
        </Alert>
        <p>Increase by : {count}</p>
        <button className="btn btn-success" onClick={() => setCount(count + 1)}>
          Click here to test the counter{" "}
        </button>
        <br /> <br />
        <Alert key="warning" variant="warning">
          Here in this application you can add your course goals and register
          your employees.
        </Alert>
        <h3>
          User page visit count <Badge bg="secondary">{pageVisit}</Badge>
        </h3>
      </div>
      {/* <i>React API call with useEffect</i>
      {users.map((user) => (
        <div class="card">
          <h1>{user.name}</h1>
          <p class="title">{user.email}</p>
          <p>{user.company.name}</p>
          <p>{user.phone}</p>
        </div>
      ))} */}
      ;
    </>
  );
};
export default Welcome;
