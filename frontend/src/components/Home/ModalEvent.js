import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import InputGroup from "react-bootstrap/InputGroup";

import Input from "../Input";
import { DepartmentContext } from "../../context/departmentContext";
import { RoomContext } from "../../context/roomContext";
import { EventContext } from "../../context/eventContext";
import { AuthContext } from "../../context/authContext";
import { axiosToken } from "../../apis/createInstance";

function ModalEvent({ show, setShow, event }) {
  const { listDepartment } = useContext(DepartmentContext);
  const { listRoom } = useContext(RoomContext);
  const { addEvent, updateEvent, deleteEvent } = useContext(EventContext);
  const { auth, refreshUser } = useContext(AuthContext);
  const axiosCustom = axiosToken(auth, refreshUser);

  const handleClose = () => setShow(false);
  const arrDay = ["All", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [room, setRoom] = useState("");
  const [day, setDay] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      _id: event?._id,
      title,
      email,
      department: department?._id,
      room: room?._id,
      colorEvento: room?.color,
      day,
      start: new Date(day + "T" + start),
      end: new Date(day + "T" + end),
    };
    if (event) {
      updateEvent(axiosCustom, data);
    } else {
      addEvent(axiosCustom, data);
    }
    console.log(data.start, data.end);
    // setShow(false);
  };

  const handeDelete = (item) => {
    deleteEvent(item);
    setShow(false);
  };

  useEffect(() => {
    if (event) {
      setTitle(event?.title);
      setEmail(event?.email);
      setDepartment(event?.department);
      setRoom(event?.room);
      setDay(event?.day);
      setStart(new Date(event?.start).toLocaleString().slice(0, 8));
      setEnd(new Date(event?.end).toLocaleString().slice(0, 8));
    }
  }, [event]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{event ? "Update " : "Add "} Event</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Input data={title} setData={setTitle} label="Summary" type="text" />
          <Input data={email} setData={setEmail} label="Email" type="email" />

          <InputGroup className="mb-3" controlId="formBasicEmail">
            <DropdownButton
              variant="outline-secondary"
              title="Department"
              id="input-group-dropdown-1"
            >
              {listDepartment?.map((item) => {
                return (
                  <Dropdown.Item
                    key={item?._id}
                    onClick={(e) => setDepartment(item)}
                  >
                    {item?.name}
                  </Dropdown.Item>
                );
              })}
            </DropdownButton>
            <Form.Control
              aria-label="Text input with dropdown button"
              value={department?.name}
            />
          </InputGroup>
          <InputGroup className="mb-3" controlId="formBasicEmail">
            <DropdownButton
              variant="outline-secondary"
              title="Room"
              id="input-group-dropdown-1"
            >
              {listRoom?.map((item) => {
                return (
                  <Dropdown.Item key={item?._id} onClick={(e) => setRoom(item)}>
                    {item?.name}
                  </Dropdown.Item>
                );
              })}
            </DropdownButton>
            <Form.Control
              aria-label="Text input with dropdown button"
              value={room?.name}
            />
          </InputGroup>

          {/* <div className="d-flex justify-content-between">
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
          </div> */}
          <div className="d-flex justify-content-between">
            <Input
              data={start}
              setData={setStart}
              label="Time start"
              type="time"
            />
            <Input data={end} setData={setEnd} label="Time start" type="time" />
            <Input data={day} setData={setDay} label="Day" type="date" />
          </div>

          {/* <Form.Group className="mb-3 d-flex" controlId="formBasicCheckbox">
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
          </div> */}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSubmit}>
          {event ? "Update" : "Add"}
        </Button>
        <Button variant="danger" onClick={() => handeDelete(event)}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalEvent;
