import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const SourceDataForm = () => {
  return (
    <div>
      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          Field 1
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="Enter value" />
        </Col>
      </Form.Group>
    </div>
  );
};

export default SourceDataForm;
