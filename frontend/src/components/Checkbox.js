import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Checkbox({ data, setData, label }) {
  return (
    <Form.Group
      className="mb-3 d-flex gap-3 align-items-center"
      controlId="formBasicEmail"
    >
      <Form.Label>{label} : </Form.Label>
      <InputGroup.Checkbox
        aria-label="Checkbox for following text input"
        onChange={(e) => setData(e.target.checked)}
        checked={data}
      />
    </Form.Group>
  );
}

export default Checkbox;
