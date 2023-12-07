import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function StartForm() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [plant, setPlant] = useState("");
  const [globalBrand, setGlobalBrand] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission
  };

  return (
    <div>
      {" "}
      <Form onSubmit={handleSubmit} className="mt-4 form-content">
        <Row className="mb-3">
          <Form.Label column sm={2} className="required">
            Review Period
          </Form.Label>
          <Col sm={5}>
            <Form.Control
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </Col>
          <Col sm={5}>
            <Form.Control
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Form.Label column sm={2} className="required">
            Location
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              as="select"
              value={plant}
              onChange={(e) => setPlant(e.target.value)}
              required
            ></Form.Control>
          </Col>
        </Row>

        <Row className="mb-3">
          <Form.Label column sm={2}>
            Field 2
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              as="select"
              value={globalBrand}
              onChange={(e) => setGlobalBrand(e.target.value)}
            ></Form.Control>
          </Col>
        </Row>

        <Row className="form-buttons-container">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button className="form-button" variant="secondary" type="button">
              Back
            </Button>
            <Button className="form-button" variant="primary" type="submit">
              Next
            </Button>
            <Button className="form-button" variant="warning" type="reset">
              Reset
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
