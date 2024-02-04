import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Select from "react-select";

export default function StartForm({ handleNavigation }) {
  const [field1Options, setField1Options] = useState([]);
  const [field2Options, setField2Options] = useState([]);
  const [field3Options, setField3Options] = useState([]);
  const [field4Options, setField4Options] = useState([]);
  const [field5Options, setField5Options] = useState([]);
  const [field6Options, setField6Options] = useState([]);

  const [selectedField1, setSelectedField1] = useState(null);
  const [selectedField2, setSelectedField2] = useState(null);
  //dummy
  const data = {
    field1: ["Option 1", "Option 2", "Option 3"],
    field2: ["Option A", "Option B", "Option C"],
    field3: ["AA", "BB", "CC"],
    field4: "FF",
    field5: "GG",
    field6: [123, 234, 345, 456, 567, 678, 789],
  };

  useEffect(() => {
    if (data) {
      console.log(data);
    }

    //assuming data is API response, set each field as options list for display
    setField1Options(
      data.field1.map((option) => ({ value: option, label: option }))
    );
    setField2Options(
      data.field2.map((option) => ({ value: option, label: option }))
    );
  }, [data]);

  const handleField1Change = (selectedOption) => {
    setSelectedField1(selectedOption);
  };

  const handleField2Change = (selectedOption) => {
    setSelectedField2(selectedOption);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      field1: selectedField1 ? selectedField1.value : "",
      field2: selectedField2 ? selectedField2.value : "",
      // Handle other fields similarly
    };
    console.log(formData);
    // Handle the form submission
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} className="mt-4 form-content">
        {/* Field 1 */}
        <Row className="mb-3">
          <Form.Label column sm={2} className="required">
            Location
          </Form.Label>
          <Col sm={10}>
            <Select
              options={field1Options}
              value={selectedField1}
              onChange={handleField1Change}
              isMulti
              isClearable
            />
          </Col>
        </Row>

        {/* Field 2 */}
        <Row className="mb-3">
          <Form.Label column sm={2}>
            Field 2
          </Form.Label>
          <Col sm={10}>
            <Select
              options={field2Options}
              value={selectedField2}
              onChange={handleField2Change}
              isDisabled={!selectedField1}
              isMulti
              isClearable
            />
          </Col>
        </Row>

        {/* Field 3 */}
        <Row className="mb-3">
          <Form.Label column sm={2}>
            Field 3
          </Form.Label>
          <Col sm={10}>
            <Select
              options={field2Options}
              value={selectedField2}
              onChange={handleField2Change}
              isDisabled={!selectedField1}
              isMulti
              isClearable
            />
          </Col>
        </Row>

        {/* Field 4 */}
        <Row className="mb-3">
          <Form.Label column sm={2}>
            Field 4
          </Form.Label>
          <Col sm={10}>
            <Select
              options={field2Options}
              value={selectedField2}
              onChange={handleField2Change}
              isDisabled={!selectedField1}
              isMulti
              isClearable
            />
          </Col>
        </Row>

        {/* Field 5 */}
        <Row className="mb-3">
          <Form.Label column sm={2}>
            Field 5
          </Form.Label>
          <Col sm={10}>
            <Select
              options={field2Options}
              value={selectedField2}
              onChange={handleField2Change}
              isDisabled={!selectedField1}
              isMulti
              isClearable
            />
          </Col>
        </Row>

        {/* Field 6 */}
        <Row className="mb-3">
          <Form.Label column sm={2}>
            Field 6
          </Form.Label>
          <Col sm={10}>
            <Select
              options={field2Options}
              value={selectedField2}
              onChange={handleField2Change}
              isDisabled={!selectedField1}
              isMulti
              isClearable
            />
          </Col>
        </Row>

        <Row className="form-buttons-container mt-4">
          <Col sm={10} className="d-flex justify-content-end">
            <Button className="form-button me-2" variant="warning" type="reset">
              Reset
            </Button>
            <Button className="form-button" variant="primary" type="submit">
              Next
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
