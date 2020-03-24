import React, { useState } from "react";
import { Button, Collapse, Container, Row, Col } from "shards-react";
import LoginForm from "../components/Forms/Login-Form";
import RegisterForm from "../components/Forms/Register-Form";

function App() {
  // State Variables
  const [display, setDisplay] = useState({
    login: false,
    register: false
  });

  // Page Functions
  function openArea(selected) {
    if (selected === "register") {
      setDisplay({
        register: !display.register,
        login: false
      });
    } else if (selected === "login") {
      setDisplay({
        register: false,
        login: !display.login
      });
    }
  }

  // Render Functions
  function displayDiv() {
    if (display.login) {
      return (
        <Row>
          <Col>
            <LoginForm></LoginForm>
          </Col>
        </Row>
      );
    }
    if (display.register) {
      return (
        <Row>
          <Col>
            <RegisterForm></RegisterForm>
          </Col>
        </Row>
      );
    }
  }

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>CompanyName</h1>
            <h3>
              Description description description description description
              description description description description description
              description description description
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button block onClick={() => openArea("register")}>
              Register
            </Button>
            <Button block onClick={() => openArea("login")}>
              Login
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="pad-top-form">
            <Collapse open={display.register || display.login}>
              <Container>{displayDiv()}</Container>
            </Collapse>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
