import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function Filter() {
  return (
    <Form className="d-flex justify-content-between pt-3 pb-3">
      <Form.Control
        type="datetime-locaL"
        placeholder="Enter email"
        className="h-50"
        style={{ width: "13rem" }}
      />
      <Form.Control
        type="datetime-locaL"
        placeholder="Password"
        className="h-50"
        style={{ width: "13rem" }}
      />
      <Button
        variant="primary"
        type="submit"
        className="h-50"
        style={{ paddingLeft: "5rem", paddingRight: "5rem" }}
      >
        Search Empty Rooms
      </Button>
      <Form.Control
        type="text"
        placeholder="Search event"
        className="h-50"
        style={{ width: "13rem" }}
      />
      <Button
        variant="primary"
        type="submit"
        className="h-50"
        style={{ paddingLeft: "3.5rem", paddingRight: "3.5rem" }}
      >
        Search event
      </Button>
    </Form>
  );
}

export default Filter;
