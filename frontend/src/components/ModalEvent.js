import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
function ModalEvent() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const arrDay = ["ALL", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add new event
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Summary</Form.Label>
              <Form.Control type="text" placeholder="Enter summary" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <div className="d-flex justify-content-between">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Group</Form.Label>
                <DropdownButton
                  variant="outline-secondary"
                  title="Dropdown"
                  id="input-group-dropdown-1"
                >
                  <Dropdown.Item href="#">Action</Dropdown.Item>
                  <Dropdown.Item href="#">Another action</Dropdown.Item>
                  <Dropdown.Item href="#">Something else here</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </DropdownButton>
              </Form.Group>
              <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Label>Room</Form.Label>
                <DropdownButton
                  variant="outline-secondary"
                  title="Dropdown"
                  id="input-group-dropdown-1"
                >
                  <Dropdown.Item href="#">Action</Dropdown.Item>
                  <Dropdown.Item href="#">Another action</Dropdown.Item>
                  <Dropdown.Item href="#">Something else here</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </DropdownButton>
              </Form.Group>
            </div>
            <div className="d-flex justify-content-between">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Start</Form.Label>
                <Form.Control type="time" placeholder="Enter summary" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>End</Form.Label>
                <Form.Control type="time" placeholder="Enter summary" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Day</Form.Label>
                <Form.Control type="date" placeholder="Enter summary" />
              </Form.Group>
            </div>

            <Form.Group className="mb-3 d-flex" controlId="formBasicCheckbox">
              <Form.Label className="ml-3">Repeat</Form.Label>
              <Form.Check type="checkbox" className="ml-3" />
            </Form.Group>
            <Form.Group className="mb-3 d-flex" controlId="formBasicCheckbox">
              {arrDay?.map((item, index) => {
                return <Form.Check type="checkbox" label={item} key={index} />;
              })}
            </Form.Group>
            <div className="d-flex justify-content-between">
              <Form.Group className="mb-3">
                <Form.Label>From Date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>End Date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Add
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalEvent;
