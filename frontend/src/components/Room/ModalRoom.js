import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { RoomContext } from "../../context/roomContext";
import Input from "../Input";
import { AuthContext } from "../../context/authContext";
import { axiosToken } from "../../apis/createInstance";
function ModalRoom({ show, setShow, room }) {
  const { addRoom, updateRoom, handeChangeReFresh } = useContext(RoomContext);
  const handleClose = () => setShow(false);
  const { auth, refreshUser } = useContext(AuthContext);
  const axiosCustom = axiosToken(auth, refreshUser);

  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [hasDevice, setHasDevice] = useState(false);
  const [isVip, setIsVip] = useState(false);

  useEffect(() => {
    if (room) {
      setName(room?.name);
      setSize(room?.size);
      setColor(room?.color);
      setHasDevice(room?.hasDevice);
      setIsVip(room?.isVip);
    }
  }, [room]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      _id: room?._id,
      name,
      size,
      color,
      hasDevice,
      isVip,
    };
    if (room) {
      updateRoom(axiosCustom, data);
      handeChangeReFresh();
    } else {
      addRoom(axiosCustom, data);
    }
    setShow(false);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{room ? "Update" : "Add"} Room</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Input data={name} setData={setName} label="Name" type="text" />
          <Input data={size} setData={setSize} label="Size" type="number" />
          <Input data={color} setData={setColor} label="Color" type="color" />
          <Form.Group
            className="mb-3 d-flex gap-3 align-items-center"
            controlId="formBasicEmail"
          >
            <Form.Label>Peripheral device:</Form.Label>
            <InputGroup.Checkbox
              aria-label="Checkbox for following text input"
              onChange={(e) => setHasDevice(e.target.checked)}
              checked={hasDevice}
            />
          </Form.Group>
          <Form.Group
            className="mb-3 d-flex gap-3 align-items-center"
            controlId="formBasicEmail"
          >
            <Form.Label>Vip:</Form.Label>
            <InputGroup.Checkbox
              aria-label="Checkbox for following text input"
              onClick={(e) => setIsVip(e.target.checked)}
              checked={isVip}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSubmit}>
          {room ? "Update" : "Add"}
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalRoom;
