import React from "react";
import Button from "react-bootstrap/Button";

function ListRoom() {
  return (
    <div className="list_room">
      <Button variant="light">👉 ALL</Button>
      <Button variant="primary">Meeting room 1</Button>
      <Button variant="secondary">Meeting room 2</Button>
      <Button variant="success">Meeting room 3</Button>
      <Button variant="warning">Meeting room 4</Button>
      <Button variant="danger">Meeting room 5</Button>
      <Button variant="info">Meeting room 6</Button>
    </div>
  );
}

export default ListRoom;
