import React from "react";
import Form from "react-bootstrap/Form";

function Input({ data, setData, label, type }) {
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder="Enter name"
        onChange={(e) => setData(e.target.value)}
        value={data}
      />
    </Form.Group>
  );
}

export default Input;
