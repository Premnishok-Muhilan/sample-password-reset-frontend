// src/HomePage.js
import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleForgotPasswordClick = () => {
    navigate("/forgot-password");
  };
  return (
    <Container fluid>
      <Row className="text-center my-4">
        <Col>
          <h1>Welcome to My Website</h1>
          <p>
            Your journey starts here. Explore our amazing content and features.
          </p>
        </Col>
      </Row>
      <Row className="my-4">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Forgot Password</Card.Title>
              <Card.Text>
                Click the below button to navigate to the forgot password link!
              </Card.Text>
              <Button variant="primary" onClick={handleForgotPasswordClick}>
                Forgot Password
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
